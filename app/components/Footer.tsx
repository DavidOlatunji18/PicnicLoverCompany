import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTiktok, FaFacebookF, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#FAF7F4', borderTop: '1px solid #F2A0B4' }} className="w-full px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image
            src="/logo_tp.png"
            alt="Picnic Lover Logo"
            width={140}
            height={54}
            style={{ objectFit: 'contain', height: 'auto' }}
          />
          <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '1rem' }}>
            Luxury picnic experiences in the DMV area.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center gap-3">
          <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: '700', color: '#E8547A', fontSize: '1.1rem', letterSpacing: '0.08em' }}>
            QUICK LINKS
          </h3>
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Book Now', href: '/book' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem' }}
              className="text-text-dark hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h3 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: '700', color: '#E8547A', fontSize: '1.1rem', letterSpacing: '0.08em' }}>
            GET IN TOUCH
          </h3>

          <a href="tel:4433648272"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '0.95rem' }}
            className="flex items-center gap-2 hover:text-primary transition-colors">
            <FaPhone size={14} />
            443-364-8272
          </a>

          <a href="mailto:hello@picnicloverco.com"
            style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '0.95rem' }}
            className="flex items-center gap-2 hover:text-primary transition-colors">
            <MdEmail size={16} />
            hello@picnicloverco.com
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://instagram.com/picnicloverco" target="_blank" rel="noopener noreferrer"
              style={{ color: '#E8547A' }} className="hover:opacity-70 transition-opacity">
              <FaInstagram size={22} />
            </a>
            <a href="https://tiktok.com/@picnicloverco" target="_blank" rel="noopener noreferrer"
              style={{ color: '#E8547A' }} className="hover:opacity-70 transition-opacity">
              <FaTiktok size={20} />
            </a>
            <a href="https://facebook.com/picnicloverco" target="_blank" rel="noopener noreferrer"
              style={{ color: '#E8547A' }} className="hover:opacity-70 transition-opacity">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #F2A0B4', marginTop: '2.5rem', paddingTop: '1.5rem' }}
        className="text-center">
        <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Picnic Lover Company. All rights reserved.
        </p>
        <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Designed by David Olatunji
        </p>
      </div>
    </footer>
  )
}
