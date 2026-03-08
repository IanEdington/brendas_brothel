import type { ReactNode } from 'react'
import WaveDivider from './WaveDivider'

interface SectionWrapperProps {
  children: ReactNode
  nextBg: string
  flip?: boolean
}

export default function SectionWrapper({ children, nextBg, flip = false }: SectionWrapperProps) {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      <WaveDivider fillColor={nextBg} flip={flip} />
    </div>
  )
}
