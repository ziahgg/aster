import { Icon } from './Icon'

/** Header lock-up: leaf mark in a wine tile, wordmark, on a stone pill. */
export function Logo() {
  return (
    <span className="flex items-center gap-2.5 rounded-md bg-stone p-1.5">
      <span className="flex size-8 items-center justify-center rounded bg-wine">
        <Icon name="leaf" size={20} color="#e8e3da" />
      </span>
      <span className="text-lg leading-6 font-medium tracking-[-0.02em] text-ink">aster.</span>
    </span>
  )
}

/** Footer lock-up: inverted colours, no pill. */
export function LogoInverse() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex size-8 items-center justify-center rounded bg-sand">
        <Icon name="leaf" size={20} color="#7a3036" />
      </span>
      <span className="text-lg leading-6 font-medium tracking-[-0.02em] text-sand">aster.</span>
    </span>
  )
}
