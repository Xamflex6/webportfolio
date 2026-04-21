import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#techstack', label: 'Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="flex flex-col gap-5 px-5 pt-10 pb-8 text-center border-t border-white/10 mt-4">
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-400 text-sm font-normal leading-normal hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://github.com/Xamflex6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-300 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/maxdecamps/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-300 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Link>
      </div>

      <p className="text-gray-600 text-sm font-normal leading-normal">
        © {new Date().getFullYear()} Decamps Max. All rights reserved.
      </p>
    </footer>
  );
}
