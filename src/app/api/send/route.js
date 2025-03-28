import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    const body = await req.json();
    const { email, subject, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: "pedrosadultos@hotmail.com",
      subject: `Message from Portfolio! Email: ${email}`,
      react: (
        <>
            <h1>
                {subject}
            </h1>
            <p>
                Thank you for contacting me! I will get back to you as soon as possible.
            </p>
            <p>
                {message}
            </p>
        </>
      ),
    });

     if (error) {
      console.error("Resend API Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}