'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const photos = [
  { src: '/test_bg_wide.jpeg', alt: 'Picnic setup 1' },
  { src: '/bg_pink_full.jpeg', alt: 'Picnic setup 2' },
  { src: '/yellow_full.jpeg', alt: 'Picnic setup 3' },
]

export default function GalleryTeaser() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <section style={{ backgroundColor: '#FAF7F4' }} className="w-full px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 style={{
          fontFamily: 'var(--font-playfair)',
          color: '#E8547A',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: '500',
        }} className="text-center">
          Our Work
        </h2>

        {/* Divider */}
        <div style={{ backgroundColor: '#F2A0B4', height: '1px', width: '60px', margin: '1rem auto 3rem' }} />

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative w-full cursor-pointer overflow-hidden"
              style={{ height: '280px', borderRadius: '12px' }}
              onClick={() => { setIndex(i); setOpen(true) }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                className="hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="flex justify-center mt-10">
          <Link href="/gallery"
            style={{
              color: '#E8547A',
              fontFamily: 'var(--font-cormorant)',
              fontWeight: '700',
              fontSize: '1.1rem',
              letterSpacing: '0.08em',
            }}
            className="hover:opacity-60 transition-opacity">
            VIEW FULL GALLERY
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map(p => ({ src: p.src }))}
      />
    </section>
  )
}
