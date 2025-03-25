import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export default async function handler(
    request: NextApiRequest,
    respond: NextApiResponse<{ message: string } | { error: string }>
) {
    if (request.method === "POST") {
        try {
            const to = process.env.SMTP_USER;
            const {
                name,
                phone,
                email,
                address,
                projectDetails,
                customerType,
                facilityType,
                urgency,
                projectSize
            } = request.body;

            if (!name || !email || !phone || !address) {
                return respond.status(400).json({ error: "Missing required fields" });
            }

            const mailOptions = {
                from: process.env.SMTP_FROM,
                to,
                subject: "Bathroom Renovation Request",
                html: generateEmail({
                    name,
                    email,
                    phone,
                    address,
                    projectDetails,
                    customerType,
                    facilityType,
                    urgency,
                    projectSize
                }),
            };

            await transporter.sendMail(mailOptions);
            return respond.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            return respond.status(500).json({ error: "Failed to send email" });
        }
    }
}

function generateEmail({
    name,
    email,
    phone,
    address,
    projectDetails,
    customerType,
    facilityType,
    urgency,
    projectSize
}: {
    name: string,
    email: string,
    phone: string,
    address: string,
    projectDetails?: string,
    customerType?: string,
    facilityType?: string,
    urgency?: string,
    projectSize?: string
}) {
    return `
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cloud Bathrooms and Kitchens Vancouver</title>
        <style>
          body, table, td, div, p, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
            line-height: 1.47059;
            letter-spacing: -0.022em;
            text-align: center;
          }

          .email-wrapper {
            width: 100%;
            max-width: 680px;
            margin: 0 auto;
            background-color: #ffffff;
          }

          .header {
            background-color: #ffffff;
            padding: 48px 0;
            text-align: center;
            position: relative;
            border-bottom: 2px solid #fafafa;
          }

          .content {
            padding: 48px 32px;
            background-color: #ffffff;
          }

          .section {
            margin-bottom: 48px;
            padding: 40px;
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 2px 40px rgba(0, 0, 0, 0.04);
          }

          .footer {
            text-align: center;
            padding: 32px;
            background: #ffffff;
            color: #000000;
          }

          h2 {
            color: #000000;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.003em;
            margin-bottom: 32px;
            display: inline-block;
            position: relative;
          }

          .info-label {
            color: #000000;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            margin-bottom: 8px;
            opacity: 0.5;
          }

          .info-value {
            color: #000000;
            font-size: 17px;
            margin-bottom: 32px;
            word-break: break-word;
            font-weight: 400;
            padding: 20px;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.03);
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            border: 1px solid rgba(0, 0, 0, 0.03);
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <h1>Bathroom Renovation Request</h1>
          </div>
          <div class="content">
            <div class="section">
              <h2>Customer Information</h2>
              
              <div class="info-label">Name</div>
              <div class="info-value">${name}</div>
              
              <div class="info-label">Email</div>
              <div class="info-value">${email}</div>
              
              <div class="info-label">Phone</div>
              <div class="info-value">${phone}</div>
              
              <div class="info-label">Address</div>
              <div class="info-value">${address}</div>
              
              ${customerType ? `
              <div class="info-label">Customer Type</div>
              <div class="info-value">${customerType}</div>
              ` : ''}
              
              ${facilityType ? `
              <div class="info-label">Facility Type</div>
              <div class="info-value">${facilityType}</div>
              ` : ''}
            </div>
            
            <div class="section">
              <h2>Project Details</h2>
              
              ${urgency ? `
              <div class="info-label">Project Urgency</div>
              <div class="info-value">${urgency}</div>
              ` : ''}
              
              ${projectSize ? `
              <div class="info-label">Project Size</div>
              <div class="info-value">${projectSize}</div>
              ` : ''}
              
              ${projectDetails ? `
              <div class="info-label">Additional Information</div>
              <div class="info-value">${projectDetails}</div>
              ` : ''}
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from the Cloud Bathrooms and Kitchens Vancouver website.</p>
          </div>
        </div>
      </body>
    </html>
  `;
} 