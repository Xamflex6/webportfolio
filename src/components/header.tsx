'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#techstack', label: 'Stack' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/10' : ''
      }`}
    >
      {/* Inner row — matches the page's horizontal padding exactly */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex justify-center">
        <div className="w-full max-w-6xl flex items-center justify-between py-4">
          {/* Brand */}
          <Link
            href="#"
            className="text-white font-black tracking-tighter text-xl hover:opacity-70 transition-opacity select-none"
          >
            MD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 text-sm font-medium leading-normal hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`menu-icon ${mobileMenuOpen ? 'menu-icon-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu — full-width dropdown */}
      {mobileMenuOpen && (
        <div className="bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10 md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 text-base font-medium hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
