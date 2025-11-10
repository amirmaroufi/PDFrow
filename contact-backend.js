// Alternative contact form handler for Node.js backend
// Replace the existing handleContactFormSubmission function in script.js with this version

async function handleContactFormSubmissionBackend(e) {
    const form = document.getElementById('contact-form');
    const submitBtn = document.querySelector('.contact-submit-btn');
    
    // Get form values
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const contactType = document.getElementById('contactType').value;
    const message = document.getElementById('contactMessage').value;
    const file = document.getElementById('contactFile').files[0];
    const termsAccepted = document.getElementById('contactTerms').checked;
    const honeypot = document.querySelector('input[name="_honey"]').value;
    
    // Honeypot spam protection
    if (honeypot) {
        this.showContactMessage('Spam detected. Please try again.', 'error');
        return;
    }
    
    // Basic validation
    if (!name.trim() || !email.trim() || !contactType || !message.trim() || !termsAccepted) {
        this.showContactMessage('Please fill in all required fields and accept the terms.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        this.showContactMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Disable submit button
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    
    try {
        // Prepare form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', contactType);
        formData.append('message', message);
        formData.append('_honey', ''); // Honeypot field
        
        // Add file if present
        if (file) {
            formData.append('attachment', file);
        }
        
        // Submit to your backend API
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            this.showContactMessage(result.message || 'Thank you for your message! We\'ll get back to you soon.', 'success');
            form.reset();
            const fileName = document.getElementById('fileName');
            if (fileName) {
                fileName.textContent = '';
                fileName.classList.remove('active');
            }
            
            // Close form after success
            setTimeout(() => {
                this.closeContactForm();
            }, 2000);
        } else {
            throw new Error(result.message || 'Failed to send message');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        let errorMessage = 'Sorry, there was an error sending your message. Please try again later.';
        
        // Handle specific error types
        if (error.message.includes('rate limit')) {
            errorMessage = 'Too many requests. Please wait a few minutes before trying again.';
        } else if (error.message.includes('file')) {
            errorMessage = 'There was an issue with your file attachment. Please try a different file.';
        } else if (error.message.includes('validation')) {
            errorMessage = 'Please check your form inputs and try again.';
        }
        
        this.showContactMessage(errorMessage, 'error');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        const translations = this.getTranslations(localStorage.getItem('selectedLanguage') || 'en');
        submitBtn.textContent = translations.contact_submit_btn || originalText;
    }
}