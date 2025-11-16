import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Link from "next/link";

export default function Home() {
  const services = [
    { title: "Event Management", desc: "Full planning & onsite execution", href: "/services" },
    { title: "Merch Printing", desc: "Custom T-shirts & merch, low MOQ", href: "/services" },
    { title: "Video Editing", desc: "Showreels, promos, social edits", href: "/services" },
    { title: "Automation & AI", desc: "Workflows, ticketing & reporting", href: "/services" },
  ];

  return (
    <Layout>
      <Head>
        <title>Visual Dynamic Studio — Events, Merch, Video & Automation</title>
        <meta name="description" content="One-stop studio for events, merchandise, video editing and automation." />
      </Head>

      <Hero
        title="Empowering your events & business with creative solutions and smart automation"
        subtitle="From concept to delivery — events, merch, cinematic video edits and automation that saves time."
        ctas={[
          { label: "Book a Free Call", href: "/book", primary: true },
          { label: "WhatsApp Us", href: `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+911234567890").replace(/\D/g,"")}` }
        ]}
      />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <p className="mt-2 text-gray-600">Click any service to learn more.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="block border rounded-lg p-5 hover:shadow-lg transition">
                <div className="font-semibold">{s.title}</div>
                <div className="mt-2 text-gray-600 text-sm">{s.desc}</div>
                <div className="mt-4 text-vdsred">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
