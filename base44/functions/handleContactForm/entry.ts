Deno.serve(async (req) => {
    try {
        const { name, phone, email, service, address, message } = await req.json();
        const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

        // 1. Notify Soakd admin
        const adminRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Soakd Website <onboarding@resend.dev>",
                to: ["soakdexterior@gmail.com"],
                subject: `New Lead: ${name}`,
                text: `New Contact Form Submission!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nService: ${service}\nAddress: ${address || 'N/A'}\nMessage: ${message || 'N/A'}`
            })
        });

        const adminData = await adminRes.json();
        console.log("Admin email response:", JSON.stringify(adminData));

        if (!adminRes.ok) {
            console.error("Admin email failed:", JSON.stringify(adminData));
            return Response.json({ success: false, error: adminData }, { status: 500 });
        }

        // 2. Auto-reply to customer (only if email provided)
        if (email && email.trim() !== '') {
            const customerRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${RESEND_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    from: "Soakd Window Cleaning <onboarding@resend.dev>",
                    to: [email],
                    subject: "We Received Your Request — Soakd Window Cleaning",
                    text: `Hi ${name}!\n\nThanks for reaching out to Soakd Window Cleaning! We received your request and will be calling or texting you within 10 minutes.\n\nWe look forward to serving you!\n\nCall or text us anytime at 843-826-6708\n\n- The Soakd Team\nsoakdcharleston.com`
                })
            });

            const customerData = await customerRes.json();
            console.log("Customer email response:", JSON.stringify(customerData));
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Function error:", error.message);
        return Response.json({ success: false, message: error.message }, { status: 500 });
    }
});