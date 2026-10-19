import type { ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type ButtonVariant = 'primary' | 'light' | 'ghost'

const buttonStyles: Record<ButtonVariant, string> = {
  // Primary: 44px tall. Light / ghost: 46px (same padding plus a 1px border).
  primary: 'bg-wine text-cream hover:bg-[#692a2f]',
  light: 'border border-line bg-cream text-ink hover:border-muted hover:bg-white',
  ghost: 'border border-cream bg-cream text-graphite hover:bg-white',
}

type ButtonProps = {
  href: string
  variant?: ButtonVariant
  children: ReactNode
  icon?: IconName
  className?: string
}

export function Button({ href, variant = 'primary', children, icon, className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`t-label inline-flex items-center justify-center gap-2.5 rounded px-[22px] py-[13px] tracking-[-0.003em] whitespace-nowrap transition-colors duration-200 ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {icon && <Icon name={icon} size={16} />}
    </a>
  )
}

/** Small uppercase pill that introduces each section. */
export function Eyebrow({
  children,
  onDark = false,
  className = 'self-start',
}: {
  children: ReactNode
  onDark?: boolean
  className?: string
}) {
  return (
    <span
      className={`t-eyebrow inline-flex items-center gap-2 ${className} rounded-[3px] border bg-cream py-[5px] pr-2.5 pl-2 ${
        onDark ? 'border-cream text-graphite' : 'border-line text-ink'
      }`}
    >
      <Icon name="sparkleTag" size={12} />
      {children}
    </span>
  )
}

type IconBadgeProps = {
  icon: IconName
  /** Badge edge length in px. */
  size: number
  iconSize: number
  className: string
  color: string
  accent?: string
  radius?: number
}

export function IconBadge({ icon, size, iconSize, className, color, accent, radius = 8 }: IconBadgeProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <Icon name={icon} size={iconSize} color={color} accent={accent} />
    </span>
  )
}

/**
 * Dashed outline with a fixed dash pattern. CSS `border-style: dashed` can't match
 * the Figma dash/gap lengths, so the stroke is drawn with an SVG overlay.
 */
export function DashedOutline({ radius, dash, color = '#a3958c' }: { radius: number; dash: string; color?: string }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
      <rect
        x="0.5"
        y="0.5"
        rx={radius}
        style={{ width: 'calc(100% - 1px)', height: 'calc(100% - 1px)' }}
        fill="none"
        stroke={color}
        strokeDasharray={dash}
      />
    </svg>
  )
}

/** Two-tone headline: the second part is set in the muted accent colour. */
export function SplitTitle({
  lead,
  accent,
  tail,
  className,
  accentClassName = 'text-muted',
  as: Tag = 'h2',
}: {
  lead: string
  accent: string
  tail?: string
  className: string
  accentClassName?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <Tag className={`font-normal ${className}`}>
      {lead}
      <span className={accentClassName}>{accent}</span>
      {tail}
    </Tag>
  )
}

/** Title block on the left, intro copy (and optional action) on the right. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
  align = 'end',
}: {
  eyebrow: string
  title: ReactNode
  intro: string
  action?: ReactNode
  align?: 'end' | 'start'
}) {
  return (
    <div
      className={`flex flex-col gap-[18px] lg:flex-row lg:justify-between lg:gap-10 ${
        align === 'end' ? 'lg:items-end' : 'lg:items-start'
      }`}
    >
      <div className="flex max-w-[780px] flex-col gap-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        {title}
      </div>
      <div className="flex flex-col gap-[22px] lg:w-[380px] lg:shrink-0">
        <p className="t-body text-body">{intro}</p>
        {action}
      </div>
    </div>
  )
}
