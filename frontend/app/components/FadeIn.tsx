'use client'

import { motion } from 'framer-motion'
import { ReactNode, CSSProperties } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  onMount?: boolean
}

export default function FadeIn({ children, delay = 0, className, style, onMount = false }: FadeInProps) {
  if (onMount) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
