'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About Me' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-3">
      <div className="flex items-center gap-4">
        <div className="text-white size-6">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0L48 24L24 48L0 24L24 0Z"></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Jane Doe
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 text-sm font-medium leading-normal hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRQj-X56eY7TM-bDH1g3wfnc1_1P_YfoYqIoIiT9FMMt7-ul5O5REALuZKsl2PfN48aFDTYbAtCJ_UdmDU4ad-Vq20KyPn0h4t2gZxPNg9vl4mWlNJAlbbvCSVeTjc4fiV0eaobhxBVTPRxPc7oCuEBUDad4YMjPSto9UoVuih3mACOL44dRT9-yx-mRfs_hD5BDQMzI6K565AUtC02FyaYD55q7B4IPApnulvbQjmX2GQVtEd54ctw7BvytUzJun-9OnwTzyymH4L")'
          }}
          aria-label="Profile picture of Jane Doe"
        />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background-dark/95 backdrop-blur-lg border-t border-white/10 md:hidden z-50">
          <nav className="flex flex-col gap-4 p-6">
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
