const nodemailer = require('nodemailer');
export function POST(mailObject) {
    // load email credentials
    const senderAddress = process.env.EMAIL_ADDRESS;
    const senderPassword = process.env.EMAIL_PASSWORD;
    const recipientKailsEmail = process.env.EMAIL_KAIL;
    
    const contactData = mailObject.json();
    console.log(contactData);
    const sendEmail = async (to, subject, text) => {

        // objekt = { firstName: "LIJ", lastName: "IJ", email: "IKJ", phone: "FR", message: "SF", contactPreferences: {
        //     email: false,
        //     phone: true
        // } }

        // Create a Nodemailer transporter with your email service provider settings
        const transporter = nodemailer.createTransport({

            service: 'gmail',
            auth: {
                user: senderAddress, // Replace with your Gmail address
                pass: senderPassword, // Replace with your Gmail password or app-specific password
            },
        });

        // Setup email data
        const mailOptions = {
            from: senderAddress, // Replace with your Gmail address
            to,
            subject,
            text,
        };

        // Send the email
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    // Example usage
    sendEmail(recipientKailsEmail, `Quote Request ${mailObject.firstName + mailObject.lastName}`, contactData);


    return new Response("We'll reach out to you soon");
}