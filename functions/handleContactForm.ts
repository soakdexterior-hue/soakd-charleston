import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { name, phone, email, service, address, message } = await req.json();

        await base44.integrations.Core.SendEmail({
            to: "soakdexterior@gmail.com",
            subject: "New Soakd Lead - " + name,
            body: `New Contact Form Submission!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nAddress: ${address || 'N/A'}\nMessage: ${message || 'N/A'}`,
            from_name: "Soakd Website"
        });

        await base44.integrations.Core.SendEmail({
            to: email,
            subject: "We Received Your Request — Soakd Window Cleaning",
            body: `Hi ${name}!\n\nThanks for reaching out to Soakd Window Cleaning! We received your request and will be calling or texting you within 10 minutes.\n\nWe look forward to serving you!\n\nCall or text us anytime at 843-826-6708\n\n- The Soakd Team\nsoakdcharleston.com`,
            from_name: "Soakd Window Cleaning"
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ success: false, message: error.message }, { status: 500 });
    }
});