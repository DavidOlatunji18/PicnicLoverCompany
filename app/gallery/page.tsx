'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/counter.css'

const photos = [
  '/gallery/DSC00304.jpeg',
  '/gallery/DSC00305.jpeg',
  '/gallery/DSC00306.jpeg',
  '/gallery/DSC00308.jpeg',
  '/gallery/IMG_2277.jpeg',
  '/gallery/DSC00226.jpeg',
  '/gallery/IMG_5918.jpeg',
  '/gallery/DSC00215.jpeg',
  '/gallery/IMG_6277.jpeg',
  '/gallery/DSC00219.jpeg',
  '/gallery/IMG_2715.jpeg',
  '/gallery/DSC00229.jpeg',
  '/gallery/IMG_5920.jpeg',
  '/gallery/DSC00223.jpeg',
  '/gallery/IMG_6280.jpeg',
  '/gallery/DSC00231.jpeg',
  '/gallery/IMG_2716.jpeg',
  '/gallery/DSC00208.jpeg',
  '/gallery/IMG_5921.jpeg',
  '/gallery/DSC00232.jpeg',
  '/gallery/IMG_6281.jpeg',
  '/gallery/DSC00239.jpeg',
  '/gallery/IMG_2721.jpeg',
  '/gallery/DSC00246.jpeg',
  '/gallery/IMG_6283.jpeg',
  '/gallery/DSC00249.jpeg',
  '/gallery/DSC00250.jpeg',
]

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h1 style={{
          color: '#E8547A',
          fontFamily: 'var(--font-playfair)',
          fontSize: '3rem',
          marginBottom: '0.5rem',
        }} className="text-center">
          Gallery
        </h1>

        <p style={{
          color: '#B5637A',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
        }} className="text-center">
          Every setup tells a story — take a look at the moments we've had the pleasure of creating.
        </p>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
              onClick={() => { setIndex(i); setOpen(true) }}>
              <Image
                src={src}
                alt={`Picnic setup ${i + 1}`}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                className="hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map(src => ({ src }))}
        plugins={[Counter]}
        counter={{ container: { style: { top: 0, bottom: 'unset', left: 0 } } }}
      />
    </main>
  )
}
