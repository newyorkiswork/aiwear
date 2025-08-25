# Email Service Setup Guide

## Resend Email Service Configuration

The AI Wear checkout system now includes real email notifications using Resend. Here's how to set it up:

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual Resend API key:

```env
RESEND_API_KEY=re_1234567890abcdef...
```

### 3. Verify Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., `aiwear.com`)
3. Follow the DNS verification steps
4. Update the `from` email in `/app/api/send-email/route.ts` to use your verified domain

### 4. Test the Email Service

1. Start your development server: `pnpm dev`
2. Go to a product page
3. Complete the checkout process
4. Check your email for the order confirmation
5. Check the admin email (`myny@mynewyorkishome.com`) for the order notification

### 5. Email Templates

The system sends two types of emails:

#### Admin Notification Email
- **To:** `myny@mynewyorkishome.com`
- **Subject:** `New Order #AIW241215-1001 - AI Wear`
- **Content:** Complete order details, customer info, payment instructions

#### Customer Confirmation Email
- **To:** Customer's email address
- **Subject:** `Order Confirmation #AIW241215-1001 - AI Wear`
- **Content:** Order summary, payment instructions, thank you message

### 6. Fallback System

If the email service fails, the system will:
1. Log the error to the console
2. Continue processing the order
3. Display a fallback message

### 7. Production Considerations

- **Rate Limits:** Resend has rate limits (free tier: 100 emails/day)
- **Monitoring:** Set up email delivery monitoring in Resend dashboard
- **Bounce Handling:** Configure bounce handling for invalid email addresses
- **Spam Prevention:** Follow email best practices to avoid spam filters

### 8. Troubleshooting

If emails aren't sending:

1. Check the browser console for errors
2. Verify your API key is correct
3. Check Resend dashboard for delivery status
4. Ensure your domain is verified (if using custom domain)
5. Check spam/junk folders

### 9. Alternative Email Services

If you prefer a different email service, you can replace Resend with:
- SendGrid
- AWS SES
- Mailgun
- Postmark

Just update the `/app/api/send-email/route.ts` file with the appropriate service integration.
