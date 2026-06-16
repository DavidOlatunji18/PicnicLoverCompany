import Image from 'next/image'
import Link from 'next/link'
import GalleryTeaser from './components/GalleryTeaser'

const steps = [
  {
    image: '/setthescene.jpeg',
    title: 'Choose Your Experience',
  },
  {
    image: '/yellow.jpeg',
    title: 'We Set the Scene',
  },
  {
    image: '/willubemygf.jpeg',
    title: 'Make Memories',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full" style={{ aspectRatio: '3/2' }}>
        <Image
          src="/cropped_bg.jpeg"
          alt="Picnic Lover hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }} />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            fontWeight: '600',
          }}>
            Luxury Picnic Experiences<br />in the DMV Area
          </h1>

          <Link href="/book"
            style={{
              backgroundColor: '#F2A0B4',
              color: 'white',
              fontFamily: 'var(--font-cormorant)',
              fontWeight: '700',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              letterSpacing: '0.08em',
            }}
            className="px-5 py-2 md:px-8 md:py-3 rounded-full hover:opacity-90 transition-opacity">
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#FAF7F4', borderBottom: '0.5px solid #F2A0B4' }} className="w-full px-6 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            color: '#E8547A',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '500',
          }} className="text-center">
            How It Works
          </h2>

          {/* Divider */}
          <div style={{ backgroundColor: '#F2A0B4', height: '1px', width: '60px', margin: '1rem auto 3rem' }} />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-5">

                {/* Circle image */}
                <div className="relative rounded-full overflow-hidden w-56 h-56 md:w-64 md:h-64" style={{ border: '2px solid #F2A0B4' }}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Step title */}
                <p style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  color: '#2D1B1E',
                }} className="text-center">
                  {step.title.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <GalleryTeaser />
    </main>
  )
}
