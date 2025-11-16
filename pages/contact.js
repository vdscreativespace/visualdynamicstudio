import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
  const zoho = process.env.NEXT_PUBLIC_ZOHO_FORM_URL || "#";
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || "+91 1234567890";
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "hello@example.com";

  return (
    <Layout>
      <Head><title>Contact — Visual Dynamic Studio</title></Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <p className="text-gray-600 mt-2">Fill out the form or message us on WhatsApp.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="border rounded p-6">
            <form action={zoho} method={zoho === "#" ? "GET" : "POST"} target={zoho === "#" ? "_self" : "_blank"}>
              <label className="block text-sm">Name</label>
              <input name="Name" className="w-full border rounded px-3 py-2 mt-1" />

              <label className="block text-sm mt-4">Email</label>
              <input name="Email" type="email" className="w-full border rounded px-3 py-2 mt-1" />

              <label className="block text-sm mt-4">Message</label>
              <textarea name="Message" className="w-full border rounded px-3 py-2 mt-1" rows="5" />

              <button type="submit" className="mt-4 px-5 py-2 bg-vdsred text-white rounded">Send Message</button>
            </form>
          </div>

          <div className="border rounded p-6">
            <h3 className="font-semibold">Contact details</h3>
            <p className="mt-2 text-gray-700">Phone: {phone}</p>
            <p className="mt-1 text-gray-700">Email: {email}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
