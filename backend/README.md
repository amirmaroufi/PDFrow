# PDFrow Backend Server - PDF Protection API

## Prerequisites

1. **Node.js** (version 16 or higher)
2. **QPDF** - Required for PDF encryption

### Installing QPDF on Windows:

Download and install QPDF from: https://github.com/qpdf/qpdf/releases

Or use Chocolatey:
```bash
choco install qpdf
```

Or use Scoop:
```bash
scoop install qpdf
```

## Setup Instructions

1. **Install Dependencies**:
```bash
cd backend
npm install
```

2. **Configure Environment** (Optional):
Create a `.env` file in the backend directory:
```
PORT=3000
FRONTEND_URL=http://localhost
```

3. **Start the Server**:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Testing the PDF Tools

### Testing PDF Protection:
1. Make sure the backend server is running
2. Open `protect-pdf.html` in your browser
3. Upload a PDF file
4. Enter a strong password
5. Click "Protect PDF"
6. Download the protected PDF
7. Try opening it - it should require the password you set!

### Testing PDF Unlock:
1. Make sure the backend server is running
2. Open `PDF-Unlocker.html` in your browser
3. Upload a password-protected PDF file
4. Enter the password
5. Click "Unlock PDF"
6. Download the unlocked PDF
7. Try opening it - it should open without asking for a password!

## API Endpoints

### POST `/api/protect-pdf`
Encrypts a PDF file with a password.

**Request**:
- `pdf` (file): PDF file to protect
- `password` (string): Password for encryption (min 6 characters)

**Response**:
- Returns the encrypted PDF file

### POST `/api/unlock-pdf`
Removes password protection from a PDF file.

**Request**:
- `pdf` (file): Password-protected PDF file to unlock
- `password` (string): The password used to protect the PDF

**Response**:
- Returns the unlocked PDF file (without password protection)

### POST `/api/contact`
Contact form submission endpoint.

### GET `/health`
Health check endpoint.

## Troubleshooting

### "QPDF not found" error:
- Make sure QPDF is installed on your system
- Add QPDF to your system PATH
- Restart your terminal/command prompt after installation

### Port 3000 already in use:
- Change the PORT in `.env` file
- Or stop the process using port 3000

### CORS errors:
- Make sure FRONTEND_URL in `.env` matches your frontend URL
- For local development, `http://localhost` should work
