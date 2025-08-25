import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || '', // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD || '' // Gmail App Password (not regular password)
  }
})

// Log environment variables for debugging (remove in production)
console.log('Gmail setup:', {
  user: process.env.GMAIL_USER ? 'Set' : 'Not set',
  pass: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set'
})

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html, text } = await request.json()

    if (!to || !subject || (!html && !text)) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, and either html or text' },
        { status: 400 }
      )
    }

    // Send email
    const mailOptions = {
      from: `"AI Wear" <${process.env.GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
      text: text
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
