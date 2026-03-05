import { OrnamentalDivider } from './OrnamentalDivider'

export function SectionHeading({
  title,
  subtitle,
  className = '',
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={`text-center space-y-3 ${className}`}>
      {subtitle && (
        <p className="font-stamp text-gold text-sm uppercase tracking-[0.3em]">{subtitle}</p>
      )}
      <h2 className="font-display text-5xl font-light text-navy">{title}</h2>
      <OrnamentalDivider className="mt-4" />
    </div>
  )
}
