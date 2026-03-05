export function StampSeal({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-double border-gold text-gold font-stamp text-xs uppercase tracking-widest text-center leading-tight rotate-[-15deg] ${className}`}
    >
      {label}
    </div>
  )
}
