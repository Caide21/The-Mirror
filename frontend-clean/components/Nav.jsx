import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/home" className="text-2xl font-bold flex items-center space-x-2 hover:opacity-90 transition">
          <span>🜔</span>
          <span>The Mirror</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link href="/mirror/scroll" className="hover:text-purple-400 transition">Scroll</Link>
          <Link href="/caide" className="hover:text-purple-400 transition">About</Link>
          <Link href="/join/work" className="hover:text-purple-400 transition">Work</Link>
          <Link href="/join/contact" className="hover:text-purple-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}