import Head from "next/head";
import Layout from "../components/Layout";

export default function Book() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/";

  return (
    <Layout>
      <Head><title>Book a Consultation — Visual Dynamic Studio</title></Head>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold">Book a Free Consultation</h1>
        <p className="text-gray-600 mt-2">Choose a slot and we'll prepare a short plan.</p>

        <div className="mt-6 border rounded overflow-hidden">
          <iframe src={`${calLink}?embed=true`} style={{ width: "100%", height: 700 }} frameBorder="0" />
        </div>
      </div>
    </Layout>
  );
}
