export default function Hero({ title, subtitle, ctas }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">{subtitle}</p>

          <div className="mt-6 flex gap-3">
            {ctas?.map((c, i) => (
              <a key={i} href={c.href} className={c.primary ? "px-5 py-3 bg-vdsred text-white rounded" : "px-5 py-3 border rounded"}>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-4 bg-gradient-to-br from-gray-100 to-white animate-float h-64 flex items-center justify-center">
          <div className="text-gray-400">Hero image / showreel placeholder</div>
        </div>
      </div>
    </section>
  );
}
