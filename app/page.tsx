import Image from 'next/image'

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
      </section>
    </main>
  )
}
