import { YouTubeEmbed } from '#/components/YouTubeEmbed'

export default function SocialProof() {
  return (
    <section id="ambiente" className="py-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center reveal">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
            O Ambiente <span className="text-white/30">Silva Fitness</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <YouTubeEmbed
            videoId="4djE6Mpgqqo"
            aspectRatio="9/16"
            className="reveal rounded-xl overflow-hidden glass"
          />
          <YouTubeEmbed
            videoId="Z4EJYwBIX7w"
            aspectRatio="9/16"
            className="reveal rounded-xl overflow-hidden glass"
          />
          <YouTubeEmbed
            videoId="Wfo8Zj63Kfk"
            aspectRatio="9/16"
            className="reveal rounded-xl overflow-hidden glass"
          />
          <YouTubeEmbed
            videoId="raf5cUpGlI4"
            aspectRatio="9/16"
            className="reveal rounded-xl overflow-hidden glass"
          />
          <YouTubeEmbed
            videoId="AwTgxbqYkkA"
            aspectRatio="9/16"
            className="reveal rounded-xl overflow-hidden glass"
          />
          <YouTubeEmbed
            videoId="pPkZ4W-dhQ4"
            aspectRatio="9/16"
            className="reveal rounded-xl overflow-hidden glass"
          />
        </div>
      </div>
    </section>
  )
}
