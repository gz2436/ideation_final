"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
type ProductTeaserCardProps = {
  dailyVolume?: string
  dailyVolumeLabel?: string
  headline?: string
  subheadline?: string
  description?: string
  videoSrc?: string
  posterSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

// @component: ProductTeaserCard
export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    dailyVolume = "1,430,992,688",
    dailyVolumeLabel = "STUDENTS HELPED THIS YEAR",
    headline = "Your Complete Guide to\nUS Phone Plans",
    subheadline = "GoUS helps international students find, compare, and activate the perfect phone plan with honest recommendations and step-by-step guides.",
    description = "Trusted by fast-growing teams and enterprises, Auralink powers smarter communication across 1,000+ organizations — with enterprise-grade security, multilingual analysis, and instant emotional detection.",
    videoSrc = "https://cdn.sanity.io/files/1t8iva7t/production/a2cbbed7c998cf93e7ecb6dae75bab42b13139c2.mp4",
    posterSrc = "/images/design-mode/9ad78a5534a46e77bafe116ce1c38172c60dc21a-1069x1068.png",
    primaryButtonText = "Get Started",
    primaryButtonHref = "",
    secondaryButtonText = "View Plans",
    secondaryButtonHref = "",
  } = props

  // Mouse tracking for gradient orb
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  // @return
  return (
    <section
      className="w-full px-8 pt-40 pb-0 relative bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mesh Gradient Background - Follows Mouse with Smooth Delay */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-[100px] z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 140, 66, 0.15) 0%, rgba(255, 210, 63, 0.08) 40%, rgba(255, 165, 0, 0.05) 70%, transparent 100%)",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.5, ease: "easeOut" },
          left: { type: "spring", damping: 30, stiffness: 200 },
          top: { type: "spring", damping: 30, stiffness: 200 },
        }}
      />

      {/* Secondary lighter glow for depth */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[80px] z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 210, 63, 0.2) 0%, rgba(255, 165, 0, 0.1) 50%, transparent 100%)",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: isHovering ? 0.6 : 0,
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          left: { type: "spring", damping: 25, stiffness: 150 },
          top: { type: "spring", damping: 25, stiffness: 150 },
        }}
      />

      {/* Gradient fade-out at bottom for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
          }}
          className="p-12 lg:p-16"
          style={{
            aspectRatio: "2/1",
          }}
        >
          {/* Content */}
          <div className="flex flex-col justify-center items-center h-full max-w-[900px] mx-auto text-center">
            <a
              href={primaryButtonHref}
              onClick={(e) => e.preventDefault()}
              className="flex flex-col gap-1 text-[#666666] items-center"
            >
              <motion.span
                initial={{
                  transform: "translateY(20px)",
                  opacity: 0,
                }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.6,
                }}
                className="text-sm uppercase tracking-tight font-mono flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                }}
              >
                {dailyVolumeLabel}
                <ArrowUpRight className="w-[0.71em] h-[0.71em]" />
              </motion.span>
            </a>

            <h1
              className="text-[56px] leading-[60px] tracking-tight text-[#202020] max-w-[700px] mb-6 mt-4 whitespace-pre-wrap text-center"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              <style jsx>{`
                @keyframes gradient-flow {
                  0% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }
                .gradient-text {
                  background: linear-gradient(
                    to right,
                    #EA4335 0%,
                    #FF8C42 15%,
                    #FBBC04 30%,
                    #34A853 45%,
                    #4285F4 60%,
                    #EA4335 75%,
                    #FF8C42 90%,
                    #FBBC04 100%
                  );
                  background-size: 400% auto;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  animation: gradient-flow 6s linear infinite;
                }
                

              `}</style>
              Your Complete <span className="gradient-text">Guide</span> to{"\n"}US Phone Plans
            </h1>

            <p
              className="text-lg leading-7 text-muted-foreground max-w-2xl mx-auto mb-10"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4">
              <a
                href={primaryButtonHref}
                onClick={(e) => e.preventDefault()}
                className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-[18px] py-[15px] text-base leading-4 whitespace-nowrap transition-all duration-200 hover:shadow-md"
              >
                {primaryButtonText}
              </a>

              <a
                href={secondaryButtonHref}
                onClick={(e) => e.preventDefault()}
                className="text-sm font-medium text-[#555555] hover:text-[#202020] transition-colors underline decoration-1 underline-offset-4"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
