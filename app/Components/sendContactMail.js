function sendEmail(data) {

    // Get email properties from data object
    const to = data.to;
    const from = data.from; 
    const subject = data.subject;
    const body = data.body;
  
    // Construct email body
    let emailBody = `
      To: ${to}
      From: ${from} 
      Subject: ${subject}
  
      ${body}
    `;
  
    // Send email
    Email.send({
      Host : "smtp.yourhost.com",
      Username : "yourusername", 
      Password : "yourpassword",
      To : to,
      From : from, 
      Subject : subject,
      Body : emailBody
    }).then(
      message => alert("mail sent successfully")
    );
  
  }
  
  // Usage
  sendEmail({
    to: 'recipient@email.com',
    from: 'sender@email.com', 
    subject: 'Email subject',
    body: 'Email body text'
  });
  