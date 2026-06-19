'use client'

import { motion } from 'framer-motion'
import { ReactNode, CSSProperties } from 'react'

type Direction = 'up' | 'up-far' | 'left' | 'right' | 'fade'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  onMount?: boolean
  direction?: Direction
}

function getInitial(direction: Direction) {
  switch (direction) {
    case 'up':      return { opacity: 0, y: 24 }
    case 'up-far':  return { opacity: 0, y: 60 }
    case 'left':    return { opacity: 0, x: -40 }
    case 'right':   return { opacity: 0, x: 40 }
    case 'fade':    return { opacity: 0 }
  }
}

function getAnimate(direction: Direction) {
  switch (direction) {
    case 'up':
    case 'up-far':  return { opacity: 1, y: 0 }
    case 'left':
    case 'right':   return { opacity: 1, x: 0 }
    case 'fade':    return { opacity: 1 }
  }
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  style,
  onMount = false,
  direction = 'up',
}: FadeInProps) {
  const initial = getInitial(direction)
  const animate = getAnimate(direction)

  if (onMount) {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.7, ease: 'easeOut', delay }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
