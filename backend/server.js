const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');
const { encrypt } = require('node-qpdf2');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost',
    optionsSuccessStatus: 200
}));

// Rate limiting
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: {
        error: 'Too many contact form submissions, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// File upload configuration
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB limit
        files: 1
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'application/pdf',
            'image/jpeg',
            'image/png',
            'text/plain',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF, JPG, PNG, TXT, DOC, and DOCX files are allowed.'));
        }
    }
});

// Email transporter configuration
const createTransporter = () => {
    return nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });
};

// Validation middleware
const contactValidation = [
    body('name')
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Name must contain only letters and spaces'),
    
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email address'),
    
    body('subject')
        .trim()
        .isIn(['question', 'bug', 'feature', 'feedback', 'business'])
        .withMessage('Please select a valid subject'),
    
    body('message')
        .trim()
        .isLength({ min: 10, max: 2000 })
        .withMessage('Message must be between 10 and 2000 characters'),
    
    // Honeypot field should be empty
    body('_honey')
        .isEmpty()
        .withMessage('Spam detected')
];

// Helper function to generate email template
const generateEmailTemplate = (formData) => {
    const subjectMap = {
        'question': 'General Question',
        'bug': 'Bug Report',
        'feature': 'Feature Request',
        'feedback': 'General Feedback',
        'business': 'Business Inquiry'
    };

    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #0066ff; margin: 0;">PDFrow Contact Form</h1>
                <p style="color: #666; margin: 5px 0 0 0;">New message received</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${formData.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${formData.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Subject:</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${subjectMap[formData.subject]}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #555;">Date:</td>
                        <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString()}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Message</h2>
                <p style="color: #555; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <p style="color: #888; font-size: 14px; margin: 0;">
                    This message was sent from the PDFrow contact form.<br>
                    Please reply directly to the sender's email address: ${formData.email}
                </p>
            </div>
        </div>
    </div>
    `;
};

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'PDFrow Contact API'
    });
});

// PDF Unlock endpoint
app.post('/api/unlock-pdf', contactLimiter, upload.single('pdf'), async (req, res) => {
    let tempInputPath = null;
    let tempOutputPath = null;

    try {
        const { password } = req.body;
        const pdfFile = req.file;

        // Validate inputs
        if (!password) {
            return res.status(400).json({
                success: false,
                message: 'Password is required to unlock the PDF'
            });
        }

        if (!pdfFile || pdfFile.mimetype !== 'application/pdf') {
            return res.status(400).json({
                success: false,
                message: 'Please upload a valid PDF file'
            });
        }

        // Create temporary file paths
        const tempDir = os.tmpdir();
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(7);
        tempInputPath = path.join(tempDir, `locked_${timestamp}_${randomId}.pdf`);
        tempOutputPath = path.join(tempDir, `unlocked_${timestamp}_${randomId}.pdf`);

        // Write uploaded PDF to temporary file
        await fs.writeFile(tempInputPath, pdfFile.buffer);

        // Decrypt PDF using node-qpdf2
        const { decrypt } = require('node-qpdf2');

        const options = {
            password: password
        };

        await decrypt(tempInputPath, options, tempOutputPath);

        // Read the decrypted PDF
        const decryptedPdf = await fs.readFile(tempOutputPath);

        // Clean up temporary files
        await fs.unlink(tempInputPath);
        await fs.unlink(tempOutputPath);

        // Send decrypted PDF back
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${pdfFile.originalname.replace('.pdf', '')}_unlocked.pdf"`,
            'Content-Length': decryptedPdf.length
        });

        res.send(decryptedPdf);

    } catch (error) {
        console.error('PDF unlock error:', error);

        // Clean up temporary files if they exist
        try {
            if (tempInputPath) await fs.unlink(tempInputPath).catch(() => {});
            if (tempOutputPath) await fs.unlink(tempOutputPath).catch(() => {});
        } catch (cleanupError) {
            console.error('Cleanup error:', cleanupError);
        }

        // Check if it's a password error
        let errorMessage = 'Failed to unlock PDF. ';
        if (error.message && error.message.includes('password')) {
            errorMessage = 'Incorrect password or the PDF is not password-protected.';
        } else {
            errorMessage += 'Please make sure the password is correct.';
        }

        res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
});

// PDF Protection endpoint
app.post('/api/protect-pdf', contactLimiter, upload.single('pdf'), async (req, res) => {
    let tempInputPath = null;
    let tempOutputPath = null;

    try {
        const { password } = req.body;
        const pdfFile = req.file;

        // Validate inputs
        if (!password || password.length < 6) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters long'
            });
        }

        if (!pdfFile || pdfFile.mimetype !== 'application/pdf') {
            return res.status(400).json({
                success: false,
                message: 'Please upload a valid PDF file'
            });
        }

        // Create temporary file paths
        const tempDir = os.tmpdir();
        const timestamp = Date.now();
        const randomId = Math.random().toString(36).substring(7);
        tempInputPath = path.join(tempDir, `input_${timestamp}_${randomId}.pdf`);
        tempOutputPath = path.join(tempDir, `output_${timestamp}_${randomId}.pdf`);

        // Write uploaded PDF to temporary file
        await fs.writeFile(tempInputPath, pdfFile.buffer);

        // Encrypt PDF using node-qpdf2
        const options = {
            keyLength: 128,
            password: password,
            restrictions: {
                print: 'full',
                modify: 'none',
                extract: 'n',
                annotate: 'n',
                fillForms: 'n',
                accessibility: 'y',
                assembly: 'n'
            }
        };

        await encrypt(tempInputPath, options, tempOutputPath);

        // Read the encrypted PDF
        const encryptedPdf = await fs.readFile(tempOutputPath);

        // Clean up temporary files
        await fs.unlink(tempInputPath);
        await fs.unlink(tempOutputPath);

        // Send encrypted PDF back
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${pdfFile.originalname.replace('.pdf', '')}_protected.pdf"`,
            'Content-Length': encryptedPdf.length
        });

        res.send(encryptedPdf);

    } catch (error) {
        console.error('PDF protection error:', error);

        // Clean up temporary files if they exist
        try {
            if (tempInputPath) await fs.unlink(tempInputPath).catch(() => {});
            if (tempOutputPath) await fs.unlink(tempOutputPath).catch(() => {});
        } catch (cleanupError) {
            console.error('Cleanup error:', cleanupError);
        }

        res.status(500).json({
            success: false,
            message: 'Failed to protect PDF. Please try again.'
        });
    }
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, upload.single('attachment'), contactValidation, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, subject, message } = req.body;
        const attachment = req.file;

        // Create transporter
        const transporter = createTransporter();

        // Verify transporter configuration
        await transporter.verify();

        // Email options
        const mailOptions = {
            from: `"PDFrow Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || 'contact@pdfrow.com',
            replyTo: email,
            subject: `New Contact Form Submission - ${subject.charAt(0).toUpperCase() + subject.slice(1)}`,
            html: generateEmailTemplate({ name, email, subject, message }),
            attachments: attachment ? [{
                filename: attachment.originalname,
                content: attachment.buffer,
                contentType: attachment.mimetype
            }] : []
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Send auto-reply to user
        const autoReplyOptions = {
            from: `"PDFrow Support" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Thank you for contacting PDFrow',
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #0066ff;">Thank you for contacting PDFrow!</h1>
                </div>
                <p>Hi ${name},</p>
                <p>We've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
                <p>Your message summary:</p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <strong>Subject:</strong> ${subject}<br>
                    <strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}
                </div>
                <p>Best regards,<br>The PDFrow Team</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                <p style="font-size: 12px; color: #888;">
                    This is an automated response. Please do not reply to this email.
                </p>
            </div>
            `
        };

        await transporter.sendMail(autoReplyOptions);

        res.json({
            success: true,
            message: 'Message sent successfully! We\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        
        res.status(500).json({
            success: false,
            message: 'Sorry, there was an error sending your message. Please try again later.'
        });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File too large. Maximum size is 50MB.'
            });
        }
        if (error.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
                success: false,
                message: 'Too many files. Only one file allowed.'
            });
        }
    }
    
    if (error.message === 'Invalid file type. Only PDF, JPG, PNG, TXT, DOC, and DOCX files are allowed.') {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

    console.error('Unhandled error:', error);
    res.status(500).json({
        success: false,
        message: 'An unexpected error occurred.'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API endpoint not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`PDFrow Contact API server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;