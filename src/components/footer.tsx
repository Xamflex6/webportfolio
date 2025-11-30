import Link from 'next/link';

export function Footer() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="flex flex-col gap-6 px-5 py-10 pt-16 text-center border-t border-white/10 mt-20 md:mt-32">
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-400 text-sm font-normal leading-normal min-w-24 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="text-gray-500 text-sm font-normal leading-normal">
        © {new Date().getFullYear()} Decamps Max. All rights reserved.
      </p>
    </footer>
  );
}
