import nodemailer from 'nodemailer';

const requiredEnv = ['LEAD_SMTP_USER', 'LEAD_SMTP_PASS'];
const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length) {
  console.warn('[contact-api] Missing env vars:', missing.join(', '));
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.LEAD_SMTP_USER,
    pass: process.env.LEAD_SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  let payload = req.body;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload || '{}');
    } catch (err) {
      res.status(400).json({ error: 'Invalid JSON' });
      return;
    }
  }

  const { name = '', email = '', phone = '', budget = '', message = '' } = payload ?? {};
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const text = `New enquiry from ${name}\nEmail: ${email}\nPhone: ${phone}\nBudget: ${budget}\n---\n${message}`;

  try {
    await transporter.sendMail({
      from: `Harbour & Co <${process.env.LEAD_SMTP_USER}>`,
      to: 'hello@harbourandco.nz',
      subject: `New Tauranga enquiry: ${name}`,
      replyTo: email,
      text,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact-api] Failed to send email', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
