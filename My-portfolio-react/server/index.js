const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'vamshiamudala126@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">Thank you for reaching out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. In the meantime, feel free to check out my projects on GitHub or connect with me on LinkedIn.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://github.com/Vamshi-amudala" style="display: inline-block; background-color: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px;">GitHub</a>
            <a href="https://www.linkedin.com/in/vamshi-amudala-b9296a229" style="display: inline-block; background-color: #0077b5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px;">LinkedIn</a>
          </div>
          
          <p>Best regards,<br>Vamshi Amudala</p>
        </div>
      `
    }

    await transporter.sendMail(autoReplyOptions)

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})