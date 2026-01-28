require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const Lead = require('./models/Lead');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Email Transporter (Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post('/api/leads', async (req, res) => {
    try {
        const { fullName, email, whatsappNumber, industry, message } = req.body;

        // 1. Save to Database
        const newLead = new Lead({
            fullName,
            email,
            whatsappNumber,
            industry,
            message
        });
        await newLead.save();

        // 2. Send Email Alert
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `🚀 New Lead: ${fullName} (${industry})`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #3b82f6;">New Strategy Session Request</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>WhatsApp:</strong> ${whatsappNumber}</p>
                    <p><strong>Industry:</strong> ${industry}</p>
                    <p><strong>Message:</strong> ${message || 'No message provided'}</p>
                    <hr />
                    <p style="font-size: 12px; color: #666;">This lead was submitted from the Discret AI Landing Page.</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, message: 'Lead saved and email sent' });
    } catch (error) {
        console.error('Error processing lead:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
