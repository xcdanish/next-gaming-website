"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailResponse {
  success?: boolean;
  error?: string;
  data?: unknown;
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<SendEmailResponse> {
  const { name, email, subject, message } = formData;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from:
        process.env.CONTACT_EMAIL_FROM ||
        "Gaming Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL_TO || "delivered@resend.dev"],
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Message — Next Gaming</title>
        </head>
        <body style="margin:0;padding:0;background-color:#010101;font-family:'Courier New',Courier,monospace;">

          <!-- Wrapper -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#010101;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;">

                  <!-- HEADER -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#1a0000 0%,#0d0d0d 60%,#1a0000 100%);border:1px solid #d51f26;border-bottom:none;padding:36px 40px 28px;">
                      <!-- Top accent bar -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
                        <tr>
                          <td style="height:3px;background:linear-gradient(90deg,transparent,#d51f26,#ea1c2d,#d51f26,transparent);"></td>
                        </tr>
                      </table>

                      <!-- Brand -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <span style="font-size:11px;font-weight:700;letter-spacing:0.28em;color:#d51f26;text-transform:uppercase;display:block;margin-bottom:8px;">▶ NEXT GAMING</span>
                            <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.06em;text-transform:uppercase;">
                              INCOMING TRANSMISSION
                            </h1>
                            <p style="margin:6px 0 0;font-size:11px;color:#666;letter-spacing:0.12em;text-transform:uppercase;">Contact Form — New Message Received</p>
                          </td>
                          <td align="right" style="vertical-align:top;">
                            <div style="width:48px;height:48px;border:1px solid #d51f26;display:inline-flex;align-items:center;justify-content:center;background:rgba(213,31,38,0.08);">
                              <span style="font-size:22px;line-height:1;">🎮</span>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- BODY -->
                  <tr>
                    <td style="background:#0d0d0d;border-left:1px solid #d51f26;border-right:1px solid #d51f26;padding:32px 40px;">

                      <!-- Sender Name Banner -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="background:rgba(213,31,38,0.08);border-left:3px solid #d51f26;padding:14px 20px;">
                            <span style="font-size:10px;color:#d51f26;letter-spacing:0.22em;text-transform:uppercase;display:block;margin-bottom:4px;">// SENDER</span>
                            <span style="font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.04em;">${name}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- Info Grid -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;border-collapse:collapse;">
                        <!-- Email Row -->
                        <tr>
                          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);width:100px;">
                            <span style="font-size:10px;color:#d51f26;letter-spacing:0.2em;text-transform:uppercase;font-weight:700;">EMAIL</span>
                          </td>
                          <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                            <a href="mailto:${email}" style="color:#d0d1d2;font-size:14px;text-decoration:none;letter-spacing:0.04em;">${email}</a>
                          </td>
                        </tr>
                        <!-- Subject Row -->
                        <tr>
                          <td style="padding:12px 0;">
                            <span style="font-size:10px;color:#d51f26;letter-spacing:0.2em;text-transform:uppercase;font-weight:700;">SUBJECT</span>
                          </td>
                          <td style="padding:12px 0;">
                            <span style="color:#ffffff;font-size:14px;letter-spacing:0.04em;">${subject}</span>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Box -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <span style="font-size:10px;color:#d51f26;letter-spacing:0.22em;text-transform:uppercase;font-weight:700;display:block;margin-bottom:12px;">// MESSAGE</span>
                            <div style="background:#141414;border:1px solid rgba(213,31,38,0.25);padding:20px 24px;box-shadow:inset 0 0 20px rgba(213,31,38,0.04);">
                              <p style="margin:0;color:#d0d1d2;font-size:14px;line-height:1.75;white-space:pre-wrap;letter-spacing:0.02em;">${message}</p>
                            </div>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="background:#0a0a0a;border:1px solid #d51f26;border-top:none;padding:20px 40px;">
                      <!-- Bottom accent bar -->
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                        <tr>
                          <td style="height:1px;background:linear-gradient(90deg,transparent,rgba(213,31,38,0.5),transparent);"></td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <span style="font-size:10px;color:#444;letter-spacing:0.14em;text-transform:uppercase;">SYSTEM • NEXT GAMING WEBSITE</span>
                          </td>
                          <td align="right">
                            <span style="font-size:10px;color:#d51f26;letter-spacing:0.14em;text-transform:uppercase;">■ TRANSMISSION END</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>

        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Email sending failed:", err);
    return { error: "Failed to send email" };
  }
}
