"use server";

import nodemailer from 'nodemailer';

export async function sendContactEmail(prevState, formData) {
  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!firstName || !email || !message) {
      return { success: false, error: 'Please fill in all required fields.' };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact from ${firstName} ${lastName} | Formatyk`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9fb; margin: 0; padding: 40px 0; color: #1a1c1d; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.04); border: 1px solid #eeeef0; }
            .header { background-color: #0a0a0a; padding: 40px 30px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.5px; }
            .content { padding: 40px 30px; }
            .field { margin-bottom: 24px; }
            .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #717785; font-weight: 600; margin-bottom: 8px; }
            .value { font-size: 16px; color: #1a1c1d; background-color: #f3f3f5; padding: 16px; border-radius: 12px; line-height: 1.6; }
            .footer { padding: 30px; text-align: center; background-color: #f9f9fb; border-top: 1px solid #eeeef0; }
            .footer p { margin: 0; font-size: 12px; color: #717785; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #0a0a0a; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from your Formatyk Contact Form</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}

export async function subscribeNewsletter(prevState, formData) {
  try {
    const email = formData.get('email');

    if (!email) {
      return { success: false, error: 'Please provide an email address.' };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Newsletter Subscriber | Formatyk`,
      text: `New subscriber email: ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', sans-serif; background-color: #f9f9fb; margin: 0; padding: 40px 0; }
            .container { max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; text-align: center; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.04); border: 1px solid #eeeef0; }
            .header { background-color: #0a0a0a; padding: 30px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 18px; font-weight: 600; }
            .content { padding: 40px 30px; }
            .email-badge { display: inline-block; background-color: #f3f3f5; color: #0a0a0a; font-weight: 600; padding: 12px 24px; border-radius: 100px; font-size: 16px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Subscriber</h1>
            </div>
            <div class="content">
              <p style="color: #717785; font-size: 14px; margin-bottom: 20px;">A new user has requested to stay updated!</p>
              <div class="email-badge">${email}</div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Subscribed successfully!' };
  } catch (error) {
    console.error('Error sending subscription email:', error);
    return { success: false, error: 'Subscription failed.' };
  }
}
