// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/api/send_email', (req, res) => {
    const { name, phone, service, email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'divyaneela75@gmail.com', // Replace with your email
        subject: 'New Service Quote Request',
        text: `You have received a new service quote request:
               Name: ${name}
               Phone: ${phone}
               Service Needed: ${service}
               Email: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Failed to send email' });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
