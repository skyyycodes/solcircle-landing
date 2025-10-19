import Link from 'next/link';

export default function GlassHeader() {
  return (
    <div className="pointer-events-auto fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-6 py-3 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-white/5">
        <Link href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
          Documents
        </Link>
        <span className="h-4 w-px bg-white/20" />
        <Link href="#features" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
          Feature
        </Link>
      </nav>
    </div>
  );
}
