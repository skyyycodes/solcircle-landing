'use client';

import { useEffect, useState } from 'react';

export default function GlassWaitlistButton() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setCount(typeof data.count === 'number' ? data.count : 0);
      })
      .catch(() => {
        if (!cancelled) setCount(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

  const data = await response.json();

      if (response.ok) {
  setMessage('✓ Successfully added to waitlist!');
  setCount((c) => (typeof c === 'number' ? c + 1 : c));
        setEmail('');
        setTimeout(() => {
          setShowInput(false);
          setMessage('');
        }, 3000);
      } else {
        setMessage(data.error || 'Failed to join waitlist');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pointer-events-auto fixed left-1/2 bottom-8 z-50 -translate-x-1/2">
      {!showInput ? (
        <button
          onClick={() => setShowInput(true)}
          className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-base font-semibold text-white/90 shadow-md backdrop-blur-sm supports-[backdrop-filter]:bg-white/5 hover:bg-white/10 transition-colors"
        >
          {count === null ? 'Join Waitlist' : `Join Waitlist (${count})`}
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white placeholder-white/50 shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 min-w-[250px]"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 shadow-md backdrop-blur-sm hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Joining...' : 'Submit'}
            </button>
          </div>
          {message && (
            <p className={`text-sm ${message.startsWith('✓') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
