import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="VDS logo" className="w-10 h-10 object-contain" />
          <div>
            <h1 className="text-lg font-semibold">Visual Dynamic Studio</h1>
            <p className="text-xs text-gray-500">Events · Merch · Video · Automation</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Link href="/" className="text-sm hover:text-vdsred">Home</Link>
          <Link href="/services" className="text-sm hover:text-vdsred">Services</Link>
          <Link href="/about" className="text-sm hover:text-vdsred">About</Link>
          <Link href="/book" className="text-sm px-3 py-2 rounded border hover:bg-gray-50">Book</Link>
          <Link href="/contact" className="text-sm px-3 py-2 rounded bg-vdsred text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
