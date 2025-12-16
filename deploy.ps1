# PDFrow Deployment Script
# This script helps deploy your site to Vercel with proper configuration

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PDFrow Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "❌ Git repository not found!" -ForegroundColor Red
    Write-Host "Please initialize git first:" -ForegroundColor Yellow
    Write-Host "  git init" -ForegroundColor Yellow
    Write-Host "  git add ." -ForegroundColor Yellow
    Write-Host "  git commit -m 'Initial commit'" -ForegroundColor Yellow
    exit 1
}

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
    Write-Host ""
}

# Check for uncommitted changes
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "📝 Uncommitted changes detected:" -ForegroundColor Yellow
    Write-Host $gitStatus
    Write-Host ""

    $commit = Read-Host "Do you want to commit these changes? (y/n)"
    if ($commit -eq "y") {
        Write-Host ""
        $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Fix CORS issues with Vercel proxy for Word to PDF"
        }

        git add .
        git commit -m $commitMessage

        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Changes committed!" -ForegroundColor Green
            Write-Host ""
        } else {
            Write-Host "❌ Commit failed!" -ForegroundColor Red
            exit 1
        }
    }
}

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found!" -ForegroundColor Red
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install Vercel CLI!" -ForegroundColor Red
        Write-Host "Please install manually: npm install -g vercel" -ForegroundColor Yellow
        exit 1
    }
    Write-Host "✅ Vercel CLI installed!" -ForegroundColor Green
    Write-Host ""
}

# Environment Variables Check
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Environment Variables Check" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Make sure you've set these in Vercel Dashboard:" -ForegroundColor Yellow
Write-Host "  1. VPS_API_ENDPOINT = http://79.137.72.251/convert/word-to-pdf" -ForegroundColor White
Write-Host "  2. VPS_API_KEY = pdfrowsecretapi41" -ForegroundColor White
Write-Host ""
Write-Host "Go to: https://vercel.com/dashboard → Your Project → Settings → Environment Variables" -ForegroundColor Cyan
Write-Host ""

$envConfirm = Read-Host "Have you set the environment variables in Vercel? (y/n)"
if ($envConfirm -ne "y") {
    Write-Host ""
    Write-Host "⚠️  Please set the environment variables first, then run this script again." -ForegroundColor Yellow
    Write-Host ""
    Start-Process "https://vercel.com/dashboard"
    exit 0
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deploying to Vercel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Deploy to Vercel
Write-Host "🚀 Deploying to production..." -ForegroundColor Yellow
vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ Deployment Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Your site is now live!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Visit https://www.pdfrow.com/word-to-pdf.html" -ForegroundColor White
    Write-Host "  2. Test the Word to PDF conversion" -ForegroundColor White
    Write-Host "  3. Check browser console (F12) for any errors" -ForegroundColor White
    Write-Host ""
    Write-Host "View logs: npx vercel logs" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Check the error messages above." -ForegroundColor Yellow
    Write-Host "You can also check Vercel logs: npx vercel logs" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}
