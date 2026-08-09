import Image from 'next/image'
import Link from 'next/link'
import GalleryTeaser from './components/GalleryTeaser'
import FadeIn from './components/FadeIn'

const reviews = [
  {
    quote: "Everything! Really made my boyfriend's birthday special! Time efficient and able to adjust on the fly due to weather concerns! Very sweet and down to earth as well! Thank you so much!",
  },
  {
    quote: "We loved the setup and how accommodating you were with weather. Also your communication was also amazing.",
  },
]

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
          <FadeIn onMount delay={0.2}>
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
          </FadeIn>

          <FadeIn onMount delay={0.5}>
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
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#FDF5F7', borderBottom: '0.5px solid #F2A0B4' }} className="w-full px-6 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <FadeIn>
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
          </FadeIn>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="flex flex-col items-center gap-5">

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
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <GalleryTeaser />

      {/* Reviews */}
      <section style={{ backgroundColor: '#FDF5F7', borderTop: '0.5px solid #F2A0B4' }} className="w-full px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              color: '#E8547A',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: '500',
            }} className="text-center">
              What Our Clients Say
            </h2>
            <div style={{ backgroundColor: '#F2A0B4', height: '1px', width: '60px', margin: '1rem auto 3rem' }} />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #F2A0B4',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  <div style={{ color: '#F59E0B', fontSize: '1.2rem', letterSpacing: '2px' }}>
                    ★★★★★
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: '#2D1B1E',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    fontStyle: 'italic',
                    flex: 1,
                  }}>
                    "{review.quote}"
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
