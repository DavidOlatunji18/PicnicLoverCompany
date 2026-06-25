'use client'

import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '../components/FadeIn'

const values = [
  {
    title: 'Attention to Detail',
    body: 'From the flower arrangements to the table settings, every element of your picnic is thoughtfully curated. No detail is too small — because the small things are what make a moment unforgettable.',
  },
  {
    title: 'Stress-Free Experience',
    body: 'We handle everything so you don\'t have to. Show up, sit down, and enjoy the moment. Setup, styling, and breakdown are all taken care of from start to finish.',
  },
  {
    title: 'Your Vision, Our Craft',
    body: 'We don\'t believe in one-size-fits-all. Every picnic is designed around you — your vibe, your people, your story. We bring your vision to life with creativity and heart.',
  },
]

const testimonial = {
  quote: 'I cannot say enough great things about Picnic Lover Co. Every single detail was perfect — the setup was beautiful, the team was professional, and I didn\'t have to worry about a thing. It was the most magical afternoon.',
  name: 'Tiffany R.',
}

export default function About() {
  return (
    <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh', paddingBottom: '5rem' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#FAF7F4', paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn onMount direction="up" delay={0.2}>
            <h1 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              Our Story
            </h1>
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Born from a love of beautiful moments and intentional gatherings.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <FadeIn direction="left">
            <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/5', backgroundColor: '#F2A0B4', position: 'relative' }}>
              {/* Replace with actual founder photo */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
                <p style={{ fontFamily: 'var(--font-cormorant)', color: 'white', fontSize: '1rem', textAlign: 'center', padding: '1rem' }}>
                  [Owner photo goes here]
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Intro Text */}
          <FadeIn direction="right">
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              MEET THE FOUNDER
            </p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
              Vanessa Olatunji
            </h2>
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.1rem', lineHeight: '1.85', marginBottom: '1rem' }}>
              Hi, I'm Vanessa — the heart and hands behind Picnic Lover Co. What started as a personal passion for creating beautiful, intimate gatherings has grown into something I never imagined: a business built entirely around love, laughter, and the magic of a perfectly set table under the open sky.
            </p>
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.1rem', lineHeight: '1.85' }}>
              I started Picnic Lover Co. because I believed that everyday moments deserve to feel extraordinary. Whether it's a birthday, an anniversary, a proposal, or just a Tuesday — you deserve something beautiful.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: '#FDF5F7', padding: '5rem 0' }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1.5rem', textAlign: 'center' }}>
              How It All Started
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.25rem' }}>
              [Placeholder: Share the origin story here — what inspired you to start Picnic Lover Co., what was happening in your life at the time, and what moment made you realize this was something worth pursuing.]
            </p>
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '1.25rem' }}>
              What began as intimate setups for close friends and family quickly grew into something bigger. Word spread, bookings came in, and Picnic Lover Co. was born — rooted in the DMV area and fueled by a genuine love for people and meaningful experiences.
            </p>
            <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.1rem', lineHeight: '1.9' }}>
              Today, every setup we create carries the same energy as that very first one: care, intention, and the belief that you deserve a moment that feels like it was made just for you. Because it was.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn direction="up">
          <h2 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', textAlign: 'center', marginBottom: '0.5rem' }}>
            What We Stand For
          </h2>
          <div style={{ width: '48px', height: '2px', backgroundColor: '#F2A0B4', margin: '0 auto 3rem' }} />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ backgroundColor: 'white', border: '1px solid #F2A0B4', borderRadius: '16px', padding: '2rem', height: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: '#E8547A', padding: '5rem 1.5rem' }}>
        <FadeIn direction="fade">
          <div className="max-w-3xl mx-auto text-center">
            <p style={{ fontFamily: 'var(--font-cormorant)', color: 'rgba(255,255,255,0.8)', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              OUR MISSION
            </p>
            <p style={{ fontFamily: 'var(--font-playfair)', color: 'white', fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: '1.7' }}>
              "To create intentional, beautiful moments that bring people together and remind them that the best memories are made when the details are done with love."
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <FadeIn direction="up">
          <p style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: '2rem', marginBottom: '1rem' }}>"</p>
          <p style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.2rem', lineHeight: '1.9', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            {testimonial.quote}
          </p>
          <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontWeight: '700', fontSize: '1rem', letterSpacing: '0.06em' }}>
            — {testimonial.name}
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="text-center px-6 pb-8">
        <FadeIn direction="up">
          <h2 style={{ fontFamily: 'var(--font-playfair)', color: '#E8547A', fontSize: 'clamp(1.6rem, 3vw, 2rem)', marginBottom: '1rem' }}>
            Ready to create your moment?
          </h2>
          <p style={{ fontFamily: 'var(--font-cormorant)', color: '#B5637A', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Let's build something beautiful together.
          </p>
          <Link href="/book"
            style={{ backgroundColor: '#E8547A', color: 'white', fontFamily: 'var(--font-cormorant)', fontWeight: '700', fontSize: '1rem', letterSpacing: '0.08em', borderRadius: '999px', padding: '0.9rem 2.5rem', display: 'inline-block' }}
            className="hover:opacity-90 transition-opacity">
            BOOK YOUR PICNIC
          </Link>
        </FadeIn>
      </section>

    </main>
  )
}
