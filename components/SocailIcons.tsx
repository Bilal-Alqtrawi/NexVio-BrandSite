import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35c-.26-.04-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77V10.5H8.1v3h2.53V21h2.87Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4 4h4.2l4 5.6L16.6 4H20l-6.2 7.9L20.4 20H16.2l-4.4-6.1L6.8 20H3.4l6.6-8.4L4 4Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 8.5H4.1V20h2.84V8.5ZM5.52 3.6a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20 20h-2.83v-5.9c0-1.4-.5-2.36-1.76-2.36-.96 0-1.53.65-1.78 1.27-.09.22-.11.53-.11.84V20H10.7s.04-10.35 0-11.5h2.82v1.63c.38-.58 1.04-1.4 2.55-1.4 1.86 0 3.93 1.32 3.93 4.16V20Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.6 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4ZM10.1 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.5A9.5 9.5 0 0 0 3.6 17L2.5 21.5 7.2 20.4A9.5 9.5 0 1 0 12 2.5Zm0 1.7a7.8 7.8 0 0 1 6.5 12.1l-.2.3.3 1.9-1.9-.5-.3.2a7.8 7.8 0 0 1-4.4 1.3 7.8 7.8 0 0 1 0-15.3Zm-3.2 3.9c-.2 0-.4.1-.6.4-.2.3-.7.7-.7 1.7s.7 2 .8 2.1c.1.2 1.4 2.2 3.5 3 2.1.9 2.1.6 2.5.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.5-.3l-1.5-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.1-.2.2-.4.1a5 5 0 0 1-1.6-1 6 6 0 0 1-1-1.3c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.1-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4Z" />
    </svg>
  );
}
