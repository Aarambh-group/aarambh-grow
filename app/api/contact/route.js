import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const { fullName, email, phone, subject, message } = body;

    if (!fullName || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Aarambh Grow Group of Companies" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Contact Form: ${subject || "General Inquiry"}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 20px;">
          
          <h2 style="color: #03254C;">
            New Contact Form Submission
          </h2>

          <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
            
            <p>
              <strong>Full Name:</strong><br/>
              ${fullName}
            </p>

            <p>
              <strong>Email:</strong><br/>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong><br/>
              ${phone || "Not provided"}
            </p>

            <p>
              <strong>Subject:</strong><br/>
              ${subject || "Not selected"}
            </p>

            <p>
              <strong>Message:</strong><br/>
              ${message}
            </p>

          </div>

          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            This message was submitted through the Aarambh Grow website contact form.
          </p>

        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("MAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      { status: 500 }
    );
  }
}