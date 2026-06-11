import { useEffect, useRef, useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  aspectRatio?: string
  className?: string
}

export function YouTubeEmbed({
  videoId,
  aspectRatio,
  className,
}: YouTubeEmbedProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '1000px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {shouldLoad ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      ) : (
        <div className="w-full h-full bg-black/20" />
      )}
    </div>
  )
}
