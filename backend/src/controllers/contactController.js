const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.submitContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Validate required fields
    if (!name || !phone || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, phone, and message are required' 
      });
    }

    // Email to company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Enquiry from ${name} - UTKARSH INFRATECH Website`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Thank you! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
};