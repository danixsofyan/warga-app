

interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

function Icon({
  size = 22,
  className,
  style,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {children}
    </svg>
  )
}

export function HomeIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
    </Icon>
  )
}

export function MegaphoneIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M3 11v2a1 1 0 0 0 1 1h3l8 5V5L7 10H4a1 1 0 0 0-1 1Z" />
      <path d="M18 8a5 5 0 0 1 0 8" />
    </Icon>
  )
}

export function DocumentIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </Icon>
  )
}

export function WalletIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
      <path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-3" />
      <path d="M21 10h-4a2.5 2.5 0 0 0 0 5h4z" />
    </Icon>
  )
}

export function AlertIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M10.3 3.9 2.4 17a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v5M12 17.5h.01" />
    </Icon>
  )
}

export function CalendarIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </Icon>
  )
}

export function UserIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </Icon>
  )
}

export function BellIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M6 8a6 6 0 1 1 12 0c0 4.5 1.5 6 2.5 7H3.5C4.5 14 6 12.5 6 8Z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </Icon>
  )
}

export function ChevronRightIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="m9 6 6 6-6 6" />
    </Icon>
  )
}

export function ChevronLeftIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="m15 6-6 6 6 6" />
    </Icon>
  )
}

export function SearchIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Icon>
  )
}

export function CheckCircleIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-5" />
    </Icon>
  )
}

export function ClockIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Icon>
  )
}

export function MapPinIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </Icon>
  )
}

export function LogOutIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </Icon>
  )
}

export function SettingsIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9H20a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </Icon>
  )
}

export function PlusIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  )
}

export function ArrowUpRightIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <path d="M7 17 17 7M7 7h10v10" />
    </Icon>
  )
}

export function TrendingUpIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </Icon>
  )
}

export function TrendingDownIcon({ size, className, style }: IconProps) {
  return (
    <Icon size={size} className={className} style={style}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </Icon>
  )
}

export function GoogleIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917Z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917Z"
      />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91a9.84 9.84 0 0 0-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z"
        fill="currentColor"
      />
      <path
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45 0 1.44 1.05 2.84 1.2 3.04.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.13-.27-.2-.57-.35Z"
        fill="white"
      />
    </svg>
  )
}
