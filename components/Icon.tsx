type IconName =
  | 'sparkles'
  | 'briefcase'
  | 'layers'
  | 'graduation'
  | 'chat'
  | 'pin'
  | 'mail'
  | 'phone'
  | 'globe';

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'sparkles':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 3l1.6 3.6L17 8l-3.4 1.4L12 13l-1.6-3.6L7 8l3.4-1.4L12 3z" />
          <path d="M6 15l1 2.2L9.5 18 7 18.8 6 21l-1-2.2L2.5 18 5 17.2 6 15z" />
          <path d="M18 14l0.9 1.8L21 17l-2.1 0.9L18 20l-0.9-2.1L15 17l2.1-1.2L18 14z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M9 6.5V5a2 2 0 012-2h2a2 2 0 012 2v1.5" />
          <rect x="3" y="6.5" width="18" height="13" rx="2" />
          <path d="M3 12h18" />
        </svg>
      );
    case 'layers':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 4l8 4-8 4-8-4 8-4z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </svg>
      );
    case 'graduation':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M6 10v5a6 3 0 0012 0v-5" />
          <path d="M21 9v6" />
        </svg>
      );
    case 'chat':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M20 14a6 6 0 01-6 6H7l-4 3v-9a6 6 0 016-6h5a6 6 0 016 6z" />
        </svg>
      );
    case 'pin':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'mail':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M5 4h3l2 5-2 1a14 14 0 006 6l1-2 5 2v3a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z" />
        </svg>
      );
    case 'globe':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 010 18" />
          <path d="M12 3a15 15 0 000 18" />
        </svg>
      );
    default:
      return null;
  }
}
