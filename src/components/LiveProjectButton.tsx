import { Link } from 'react-router-dom';

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  to?: string;
  label?: string;
  onClick?: () => void;
}

const pillClass = `rounded-full font-medium uppercase tracking-widest cursor-pointer
  border-2 border-[#D7E2EA] text-[#D7E2EA]
  px-8 py-3 sm:px-10 sm:py-3.5
  text-sm sm:text-base
  transition-all duration-300 hover:bg-[#D7E2EA]/10 inline-block text-center no-underline`;

export default function LiveProjectButton({
  className = '',
  href,
  to,
  label = 'Live Project',
  onClick,
}: LiveProjectButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${pillClass} ${className}`}
      >
        {label}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={`${pillClass} ${className}`}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${pillClass} ${className}`}>
      {label}
    </button>
  );
}
