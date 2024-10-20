import { EmailTemplate } from "@/components/emailTemplates/text-review-submitted";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { type, email } = await req.json()
    console.log({ type, email })

    const { data, error } = await resend.emails.send({
      from: 'ViewUs <team@viewus.in>',
      to: [email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'view-us' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
