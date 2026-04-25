'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  const navLinkStyle = {
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    fontFamily: 'var(--font-cormorant)',
    fontWeight: '700',
  }

  const dropdownLinkStyle = {
    fontSize: '0.85rem',
    fontFamily: 'var(--font-cormorant)',
    fontWeight: '700',
  }

  const mobileLinkStyle = {
    fontFamily: 'var(--font-cormorant)',
    fontWeight: '700',
    fontSize: '1.3rem',
    letterSpacing: '0.08em',
  }

  return (
    <>
      <nav style={{ backgroundColor: '#FAF7F4', borderBottom: '1px solid #F2A0B4' }} className="w-full px-8 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_tp.png" alt="Picnic Lover Logo" width={140} height={62} loading="eager" style={{ objectFit: 'contain', height: 'auto' }} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" style={navLinkStyle} className={`hover:text-primary transition-colors pb-0.5 ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-text-dark'}`}>
              HOME
            </Link>

            <Link href="/about" style={navLinkStyle} className={`hover:text-primary transition-colors pb-0.5 ${isActive('/about') ? 'text-primary border-b-2 border-primary' : 'text-text-dark'}`}>
              ABOUT
            </Link>

            <Link href="/gallery" style={navLinkStyle} className={`hover:text-primary transition-colors pb-0.5 ${isActive('/gallery') ? 'text-primary border-b-2 border-primary' : 'text-text-dark'}`}>
              GALLERY
            </Link>

            {/* Pricing Dropdown */}
            <div className="relative"
              onMouseEnter={() => setPricingOpen(true)}
              onMouseLeave={() => setPricingOpen(false)}>
              <button style={{ ...navLinkStyle, cursor: 'pointer' }}
                className={`flex items-center gap-1 hover:text-primary transition-colors pb-0.5 ${isActive('/pricing') ? 'text-primary border-b-2 border-primary' : 'text-text-dark'}`}>
                PRICING
                <span style={{ fontSize: '0.6rem' }}>▼</span>
              </button>

              {pricingOpen && (
                <div className="absolute top-full left-0 z-50 pt-4">
                  <div style={{ backgroundColor: '#FAF7F4', border: '1px solid #F2A0B4', minWidth: '220px' }}
                    className="rounded-lg shadow-sm">
                    <Link href="/pricing" style={dropdownLinkStyle}
                      className="block px-4 py-3 text-text-dark hover:text-primary transition-colors">
                      PACKAGES & PRICING
                    </Link>
                    <Link href="/pricing#addons" style={dropdownLinkStyle}
                      className="block px-4 py-3 text-text-dark hover:text-primary transition-colors border-t border-primary-soft">
                      ADD-ONS
                    </Link>
                    <Link href="/pricing#deposit" style={dropdownLinkStyle}
                      className="block px-4 py-3 text-text-dark hover:text-primary transition-colors border-t border-primary-soft">
                      DEPOSIT POLICY
                    </Link>
                    <Link href="/pricing#locations" style={dropdownLinkStyle}
                      className="block px-4 py-3 text-text-dark hover:text-primary transition-colors border-t border-primary-soft">
                      PREFERRED LOCATIONS
                    </Link>
                    <Link href="/pricing#themes" style={dropdownLinkStyle}
                      className="block px-4 py-3 text-text-dark hover:text-primary transition-colors border-t border-primary-soft">
                      THEMES
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/faq" style={navLinkStyle} className={`hover:text-primary transition-colors pb-0.5 ${isActive('/faq') ? 'text-primary border-b-2 border-primary' : 'text-text-dark'}`}>
              FAQ
            </Link>

            {/* Book Now Button */}
            <Link href="/book"
              style={{ backgroundColor: '#E8547A', color: 'white', fontSize: '0.9rem', letterSpacing: '0.05em', fontFamily: 'var(--font-cormorant)', fontWeight: '700' }}
              className="px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-3 -mr-3"
            onClick={() => setIsOpen(true)}>
            <span style={{ backgroundColor: '#E8547A' }} className="w-6 h-0.5 block"></span>
            <span style={{ backgroundColor: '#E8547A' }} className="w-6 h-0.5 block"></span>
            <span style={{ backgroundColor: '#E8547A' }} className="w-6 h-0.5 block"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      {isOpen && (
        <div
          style={{ backgroundColor: '#FAF7F4' }}
          className="fixed inset-0 z-[100] flex flex-col px-8 py-6 lg:hidden">

          {/* Header row */}
          <div className="flex items-center justify-between mb-10">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image src="/logo_tp.png" alt="Picnic Lover Logo" width={120} height={54} style={{ objectFit: 'contain', height: 'auto' }} />
            </Link>
            <button type="button" onClick={() => setIsOpen(false)} style={{ color: '#E8547A', fontSize: '1.8rem', lineHeight: 1, padding: '0.5rem' }}>
              ✕
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <Link href="/" style={mobileLinkStyle} className={`transition-colors ${isActive('/') ? 'text-primary' : 'text-text-dark hover:text-primary'}`} onClick={() => setIsOpen(false)}>
              HOME
            </Link>

            <Link href="/about" style={mobileLinkStyle} className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-text-dark hover:text-primary'}`} onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>

            <Link href="/gallery" style={mobileLinkStyle} className={`transition-colors ${isActive('/gallery') ? 'text-primary' : 'text-text-dark hover:text-primary'}`} onClick={() => setIsOpen(false)}>
              GALLERY
            </Link>

            {/* Mobile Pricing Accordion */}
            <div>
              <button
                style={mobileLinkStyle}
                className={`flex items-center gap-2 transition-colors w-full ${isActive('/pricing') ? 'text-primary' : 'text-text-dark hover:text-primary'}`}
                onClick={() => setMobilePricingOpen(!mobilePricingOpen)}>
                PRICING
                <span style={{ fontSize: '0.65rem' }}>{mobilePricingOpen ? '▲' : '▼'}</span>
              </button>

              {mobilePricingOpen && (
                <div style={{ borderLeft: '2px solid #F2A0B4' }} className="mt-3 ml-2 pl-4 flex flex-col gap-3">
                  <Link href="/pricing" style={dropdownLinkStyle} className="text-text-dark hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    PACKAGES & PRICING
                  </Link>
                  <Link href="/pricing#addons" style={dropdownLinkStyle} className="text-text-dark hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    ADD-ONS
                  </Link>
                  <Link href="/pricing#deposit" style={dropdownLinkStyle} className="text-text-dark hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    DEPOSIT POLICY
                  </Link>
                  <Link href="/pricing#locations" style={dropdownLinkStyle} className="text-text-dark hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    PREFERRED LOCATIONS
                  </Link>
                  <Link href="/pricing#themes" style={dropdownLinkStyle} className="text-text-dark hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    THEMES
                  </Link>
                </div>
              )}
            </div>

            <Link href="/faq" style={mobileLinkStyle} className={`transition-colors ${isActive('/faq') ? 'text-primary' : 'text-text-dark hover:text-primary'}`} onClick={() => setIsOpen(false)}>
              FAQ
            </Link>

            <Link href="/book"
              style={{ backgroundColor: '#E8547A', color: 'white', fontFamily: 'var(--font-cormorant)', fontWeight: '700', fontSize: '1rem' }}
              className="px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity mt-2"
              onClick={() => setIsOpen(false)}>
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
