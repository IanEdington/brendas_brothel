interface WaveDividerProps {
  fillColor: string
  flip?: boolean
}

export default function WaveDivider({ fillColor, flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: '-1px',
        left: 0,
        right: 0,
        overflow: 'hidden',
        lineHeight: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '80px',
          transform: flip ? 'scaleX(-1)' : undefined,
        }}
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fillColor} />
      </svg>
    </div>
  )
}
