import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import FadeIn from '../components/FadeIn'

export default function Packages() {
  const pricing = [
    { guests: '1–2 Guests', price: '$200' },
    { guests: '3 Guests', price: '$250' },
    { guests: '4 Guests', price: '$300' },
    { guests: '5 Guests', price: '$350' },
    { guests: '6 Guests', price: '$400' },
    { guests: '7 Guests', price: '$450' },
    { guests: '8 Guests', price: '$500' },
    { guests: '9 Guests', price: '$550' },
    { guests: '10 Guests', price: '$600' },
    { guests: '10+ Guests', price: '+20% service fee' },
  ]

  const included = [
    '2 hours of picnic time',
    'Tarp & soft plush picnic basket',
    'Custom made picnic table',
    'Table decor with flowers, candles & table runner',
    'Placemats, charger plates, plates, napkins, silverware & cups',
    'Assorted pillows & cushions',
    'Personal fans',
    'Bluetooth speaker',
    'Letter board with custom message (up to 20 characters)',
    "Choice of 1 game (Uno, Would You Rather, or We're Not Really Strangers)",
    'Mini table for food placement',
    'Choice of small teepee tent or 13" round mirror',
    'Small trash container',
    'Romantic theme add-on: 5 printed couple photos hung above picnic table',
    'Gender reveal add-on: BABY boxes with balloons + Mom & Dad to be pins',
  ]

  const addons = [
    { name: 'Extra Time', detail: '$50 per 30 min', image: '/gallery/time.JPG' },
    { name: 'Painting Supplies', detail: '$20 per person', image: '/gallery/painting.JPG' },
    { name: 'Love Letter Writing Supplies', detail: '$20 per person', image: '/gallery/love_letter.JPG' },
    { name: 'Seating Cards', detail: '$2 per person', image: '/gallery/reserved.JPG' },
  ]

  const locations = [
    { name: 'East Potomac Park', area: 'Washington, DC', map: 'https://www.google.com/maps/dir//East+Potomac+Park,+Ohio+Dr+SW,+Washington,+DC+20024/@39.1373875,-76.8144292,3005m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x89b7b76b7d7aef3f:0xd778574bebb324d0!2m2!1d-77.0259589!2d38.8734163?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Gravelly Point Park', area: 'Arlington, VA', map: 'https://www.google.com/maps/dir//Gravelly+Point,+George+Washington+Mem+Pkwy,+Arlington,+VA+22202/@39.1373875,-76.8144292,3005m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x89b7b73dc03bd5c9:0x2eaafa7922fa0701!2m2!1d-77.0382552!2d38.8653794?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Columbia Park / Kentland Community Center Park', area: 'Landover, MD', map: 'https://www.google.com/maps/dir//Columbia+Park+Kentland+Community+Center+Park,+Columbia+Park+Rd+%26,+S+Club+Dr,+Landover,+MD+20785/@39.1373875,-76.8144292,3005m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x89b7c16ac3e8a363:0xae88c5f68a8e67a1!2m2!1d-76.8961812!2d38.9187872?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Centennial Park', area: 'Ellicott City, MD', map: 'https://www.google.com/maps/dir//Centennial+Park,+10000+Clarksville+Pike,+Ellicott+City,+MD+21042/@39.237947,-76.8612917,750m/data=!3m1!1e3!4m17!1m7!3m6!1s0x89c820747f9b2665:0x435629c1c11e2380!2sCentennial+Park!8m2!3d39.2407142!4d-76.8594124!16s%2Fm%2F0130_hdx!4m8!1m0!1m5!1m1!1s0x89c820747f9b2665:0x435629c1c11e2380!2m2!1d-76.8594124!2d39.2407142!3e0?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Allen Pond Park', area: 'Bowie, MD', map: 'https://www.google.com/maps/dir//Allen+Pond+Park,+3330+Northview+Dr,+Bowie,+MD+20716/@39.1373875,-76.8144292,3005m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x89b7eb7f7d5589ff:0xc6937c13d4a9971e!2m2!1d-76.7373843!2d38.9343828?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
  ]

  const themes = [
    { name: 'PINK CHIC', tagline: 'for the girls\' girl' },
    { name: 'GLOW', tagline: 'feeling zesty?' },
    { name: 'CHARM', tagline: 'premium soft life' },
    { name: 'ROMANTIC', tagline: 'relive the moments' },
    { name: 'WAVES', tagline: 'ride the tide, chase the vibe' },
    { name: 'NEUTRAL CHIC', tagline: 'your calmest dream' },
    { name: 'GENDER REVEAL', tagline: 'for your bundle of joy' },
  ]

  const sectionHeadingStyle = {
    fontFamily: 'var(--font-playfair)',
    color: '#E8547A',
    fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
    fontWeight: '500',
  }

  const dividerStyle = {
    backgroundColor: '#F2A0B4',
    height: '1px',
    width: '60px',
    margin: '0.75rem auto 2.5rem',
  }

  return (
    <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh', paddingTop: '4rem', paddingBottom: '5rem' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Page Header */}
        <FadeIn>
          <h1 style={{
            color: '#E8547A',
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '0.5rem',
          }} className="text-center">
            Packages
          </h1>
          <p style={{
            color: '#B5637A',
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.1rem',
            marginBottom: '3.5rem',
          }} className="text-center">
            Everything you need to make your experience unforgettable.
          </p>
        </FadeIn>

        {/* What's Included */}
        <section style={{ marginBottom: '4rem' }}>
          <FadeIn>
            <h2 style={sectionHeadingStyle} className="text-center">What's Included</h2>
            <div style={dividerStyle} />
          </FadeIn>
          <FadeIn delay={0.15}>
            <ul style={{ listStyle: 'none', padding: 0, maxWidth: '680px', margin: '0 auto' }}
              className="flex flex-col gap-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.05rem' }}>
                  <span style={{ color: '#E8547A', marginTop: '2px', flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        <div style={{ borderTop: '0.5px solid #F2A0B4', marginBottom: '4rem' }} />

        {/* Pricing */}
        <section id="pricing" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
          <FadeIn>
            <h2 style={sectionHeadingStyle} className="text-center">Pricing</h2>
            <div style={dividerStyle} />
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              color: '#B5637A',
              fontSize: '1rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}>
              All packages include the full setup listed above.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pricing.map(({ guests, price }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div style={{
                  border: '1px solid #F2A0B4',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: '#B5637A',
                    fontSize: '0.9rem',
                    marginBottom: '0.4rem',
                  }}>
                    {guests}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-playfair)',
                    color: '#E8547A',
                    fontSize: i === pricing.length - 1 ? '0.9rem' : '1.4rem',
                    fontWeight: '600',
                  }}>
                    {price}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '0.5px solid #F2A0B4', marginBottom: '4rem' }} />

        {/* Add-ons */}
        <section id="addons" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
          <FadeIn>
            <h2 style={sectionHeadingStyle} className="text-center">Add-Ons</h2>
            <div style={dividerStyle} />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {addons.map(({ name, detail, image }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  border: '1px solid #F2A0B4',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                }}>
                  <div className="relative w-full" style={{ height: '200px' }}>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1rem 1.25rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-playfair)',
                      color: '#E8547A',
                      fontSize: '1rem',
                      marginBottom: '0.2rem',
                    }}>
                      {name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-cormorant)',
                      color: '#B5637A',
                      fontSize: '1rem',
                    }}>
                      {detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '0.5px solid #F2A0B4', marginBottom: '4rem' }} />

        {/* Deposit Policy */}
        <section id="deposit" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
          <FadeIn>
            <h2 style={sectionHeadingStyle} className="text-center">Deposit Policy</h2>
            <div style={dividerStyle} />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{
              maxWidth: '640px',
              margin: '0 auto',
              border: '1px solid #F2A0B4',
              borderRadius: '12px',
              backgroundColor: '#fff',
              padding: '2rem',
            }}
              className="flex flex-col gap-3">
              {[
                'A non-refundable deposit of 50% is required to secure your booking date.',
                'The remaining balance is due 48 hours before your picnic date.',
                'Cancellations made within 48 hours of the event are non-refundable.',
                'Rescheduling is allowed up to 72 hours before your event at no additional charge.',
              ].map((line, i) => (
                <p key={i} className="flex items-start gap-3"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#2D1B1E', fontSize: '1.05rem' }}>
                  <span style={{ color: '#E8547A', flexShrink: 0 }}>✦</span>
                  {line}
                </p>
              ))}
            </div>
          </FadeIn>
        </section>

        <div style={{ borderTop: '0.5px solid #F2A0B4', marginBottom: '4rem' }} />

        {/* Preferred Locations */}
        <section id="locations" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
          <FadeIn>
            <h2 style={sectionHeadingStyle} className="text-center">Preferred Locations</h2>
            <div style={dividerStyle} />
            <p style={{
              fontFamily: 'var(--font-cormorant)',
              color: '#B5637A',
              fontSize: '1rem',
              marginBottom: '2rem',
              textAlign: 'center',
            }}>
              We set up at beautiful outdoor spaces across the DMV area.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map(({ name, area, map }, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  border: '1px solid #F2A0B4',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-playfair)',
                      color: '#E8547A',
                      fontSize: '1rem',
                      marginBottom: '0.25rem',
                    }}>
                      {name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-cormorant)',
                      color: '#B5637A',
                      fontSize: '0.95rem',
                    }}>
                      {area}
                    </p>
                  </div>
                  <a href={map} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#E8547A', flexShrink: 0 }}
                    className="hover:opacity-70 transition-opacity">
                    <MdLocationOn size={28} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <div style={{ borderTop: '0.5px solid #F2A0B4', marginBottom: '4rem' }} />

        {/* Themes */}
        <section id="themes" style={{ scrollMarginTop: '120px' }}>
          <FadeIn>
            <h2 style={sectionHeadingStyle} className="text-center">Themes</h2>
            <div style={dividerStyle} />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map(({ name, tagline }, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  border: '1px solid #F2A0B4',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  padding: '1.25rem 1.5rem',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-playfair)',
                    color: '#E8547A',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem',
                    letterSpacing: '0.05em',
                  }}>
                    {name}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: '#B5637A',
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                  }}>
                    {tagline}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <FadeIn delay={0.1}>
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <a href="/book"
              style={{
                backgroundColor: '#E8547A',
                color: 'white',
                fontFamily: 'var(--font-cormorant)',
                fontWeight: '700',
                fontSize: '1rem',
                letterSpacing: '0.08em',
                display: 'inline-block',
                padding: '0.75rem 2.5rem',
                borderRadius: '9999px',
              }}
              className="hover:opacity-90 transition-opacity">
              BOOK NOW
            </a>
          </div>
        </FadeIn>

      </div>
    </main>
  )
}
