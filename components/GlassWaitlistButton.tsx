export default function GlassWaitlistButton() {
  return (
    <div className="pointer-events-auto fixed left-1/2 bottom-8 z-50 -translate-x-1/2">
      <button className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white/90 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-white/5 hover:bg-white/10 transition-colors">
        Join Waitlist
      </button>
    </div>
  );
}
