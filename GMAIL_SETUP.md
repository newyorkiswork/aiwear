# Gmail Email Setup Guide

## 📧 **Simple Gmail Email System**

This guide will help you set up Gmail to send order confirmation emails.

### **Step 1: Enable 2-Factor Authentication**
1. Go to your Google Account settings
2. Enable 2-Factor Authentication (required for App Passwords)

### **Step 2: Generate App Password**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "App passwords" (under 2-Step Verification)
3. Select "Mail" and "Other (Custom name)"
4. Name it "AI Wear Email System"
5. Copy the generated 16-character password

### **Step 3: Update Environment Variables**
Add these to your `.env.local` file:

```env
# Gmail Configuration for email notifications
GMAIL_USER=your_gmail_address@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

### **Step 4: Test the System**
1. Create a test order
2. Check your email for confirmation
3. Check the admin email (myny@mynewyorkishome.com)

### **Benefits of Gmail System:**
- ✅ **Simple Setup:** No domain verification needed
- ✅ **Reliable:** Gmail is very stable
- ✅ **Free:** No additional costs
- ✅ **Familiar:** Uses your existing Gmail account

### **Security Notes:**
- Use App Password, not your regular Gmail password
- App Password is 16 characters, no spaces
- Keep your `.env.local` file secure and never commit it to git

### **Troubleshooting:**
- If emails don't send, check the browser console for errors
- Verify your Gmail credentials are correct
- Make sure 2-Factor Authentication is enabled
