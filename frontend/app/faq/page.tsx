'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Picnic Lover Company?',
    answer: 'Picnic Lover Company is a luxury picnic experience company serving the DC, Maryland, and Virginia (DMV) area. We specialize in creating beautifully curated setups for special occasions — including gender reveals, romantic proposals, and more — crafting unforgettable experiences tailored to your most cherished moments, available both indoors and outdoors.',
  },
  {
    question: 'How does a picnic work?',
    answer: 'At Picnic Lover Company, we handle all the setup and cleanup so you can simply relax and enjoy everything we have to offer. Your picnic will be fully prepared upon your arrival, and we\'ll return to pack everything up and tidy the space when you\'re done!',
  },
  {
    question: 'Does the picnic come with food & drinks?',
    answer: 'We do not provide food or drinks, but you are more than welcome to bring your own! We\'ll make sure everything else is perfectly arranged so you can focus on enjoying your experience.',
  },
  {
    question: 'What\'s your weather policy?',
    answer: 'We monitor the weather closely and stay in constant communication with our clients if conditions may not be ideal. Depending on the forecast, we may need to move the picnic indoors, reschedule, or cancel. Your comfort and experience are always our top priority.',
  },
  {
    question: 'How do I reschedule or cancel my booking?',
    answer: 'To reschedule or cancel, please text us at 443-364-8272 or DM us on Instagram at @picnicloverco. We recommend reaching out as early as possible so we can best accommodate your needs.',
  },
  {
    question: 'What if none of the available dates or times work for me?',
    answer: 'We\'d love to find a solution! Reach out to us on Instagram or TikTok at @picnicloverco, or text us at 443-364-8272 and we\'ll work with you to find a date and time that fits your schedule.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 1–2 weeks in advance to ensure your preferred date and time is available. For peak seasons and holidays, earlier is always better!',
  },
  {
    question: 'How long does the picnic last?',
    answer: 'Our standard picnic experience lasts 2 hours. Need more time? Extended hours will be available — contact us to discuss your options.',
  },
  {
    question: 'Where are your picnics located?',
    answer: 'We set up at a variety of beautiful locations across the DMV area, including parks, private properties, and indoor venues. Have a specific location in mind? Let us know and we\'ll do our best to accommodate! If you\'re not sure where to host your picnic, check out our preferred locations page for some inspiration!',
  },
  {
    question: 'What is your deposit and payment policy?',
    answer: 'A deposit is required at the time of booking to secure your date. We accept payment via Cash App or Venmo. Please contact us for full pricing and payment details.',
  },
  {
    question: 'Can I customize my picnic setup?',
    answer: 'Absolutely! We offer a range of customization options to make your experience truly one of a kind. Reach out to us to discuss themes, décor, and any special requests.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main style={{ backgroundColor: '#FAF7F4', minHeight: '100vh', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="max-w-3xl mx-auto px-6">

        <h1 style={{
          color: '#E8547A',
          fontFamily: 'var(--font-playfair)',
          fontSize: '3rem',
          marginBottom: '0.5rem',
        }} className="text-center">
          FAQs
        </h1>

        <p style={{
          color: '#B5637A',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.1rem',
          marginBottom: '3rem',
        }} className="text-center">
          Everything you need to know before booking your experience.
        </p>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{ border: '1px solid #F2A0B4', borderRadius: '12px', overflow: 'hidden' }}>

              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ backgroundColor: openIndex === index ? '#FDEEF2' : '#FAF7F4' }}
                className="w-full text-left px-6 py-4 flex items-center justify-between transition-colors">
                <span style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  color: '#2D1B1E',
                }}>
                  {faq.question}
                </span>
                <span style={{ color: '#E8547A', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem' }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div style={{ borderTop: '1px solid #F2A0B4' }} className="px-6 py-4">
                  <p style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1rem',
                    color: '#2D1B1E',
                    lineHeight: '1.7',
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
