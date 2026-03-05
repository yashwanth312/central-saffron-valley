export function OrnamentalDivider({ className = '' }: { className?: string }) {
  return (
    <div role="separator" className={`text-gold text-center font-stamp tracking-widest select-none ${className}`}>
      ◈ ─────────────────── ◈
    </div>
  )
}
