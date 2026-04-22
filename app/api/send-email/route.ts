import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { email, productName } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: `"${process.env.SMTP_FROM_NAME || "PowerNet Solutions"}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
            to: email, // Dynamic email from user input
            subject: `Welcome to PowerNet: ${productName || "Product Update"}`,
            text: `Hi! Thank you for your interest in ${productName || "our solutions"}. We will contact you soon.`,
            html: `
                <div style="font-family: sans-serif; padding: 30px; color: #333; max-width: 600px; margin: auto; border: 1px solid #f0f0f0; border-radius: 12px;">
                    <h1 style="color: #A62F54; font-size: 24px;">Thank you for your interest!</h1>
                    <p>Hi,</p>
                    <p>Terima kasih telah mendaftarkan email Anda untuk <strong>${productName || "solusi kami"}</strong>. Tim kami akan segera menghubungi Anda dengan informasi lebih lanjut mengenai deployment dan teknis.</p>
                    <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 0;"><strong>Product:</strong> ${productName || "Advanced Solutions"}</p>
                    </div>
                    <p>Salam hangat,<br/><strong>Team PowerNet</strong></p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 11px; color: #999; text-align: center;">© 2026 PowerNet Solutions. All rights reserved.</p>
                </div>
            `,
        });

        console.log("Email sent to user: %s", info.messageId);
        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error: any) {
        console.error("Email error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
