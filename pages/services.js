import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Services() {
  const items = [
    { title: "Event Management", body: "End-to-end event planning, vendor coordination, venue management." },
    { title: "T-Shirt & Merch", body: "DTG, screen-printing, DTF — small and large orders." },
    { title: "Video Editing", body: "Creative edits, color grading, shorts and reels." },
    { title: "Automation & AI", body: "Automated ticketing, reporting, and AI-based optimisations." }
  ];

  return (
    <Layout>
      <Head><title>Services — Visual Dynamic Studio</title></Head>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Services</h1>
        <p className="text-gray-600 mt-2">Solutions shaped for events and small businesses.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {items.map(i => (
            <div key={i.title} className="border rounded p-6">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="mt-2 text-gray-600">{i.body}</p>
              <Link href="/contact" className="text-vdsred mt-4 inline-block">Get in touch →</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
