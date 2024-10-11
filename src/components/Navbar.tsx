'use client'
import Link from 'next/link';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children }: NavLinkProps) => (
    <Link href={href} className="px-3 py-2 rounded-md transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md hover:bg-[#2a3baa]">
      {children}
    </Link>
  );

  return (
    <nav className="bg-[#142288] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Homeniser
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 text-xl">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
