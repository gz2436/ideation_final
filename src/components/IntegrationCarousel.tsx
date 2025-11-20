"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
type IntegrationApp = {
  name: string
  logo: string
}
type IntegrationCarouselProps = {
  buttonText?: string
  buttonHref?: string
  title?: string
  subtitle?: string
  topRowApps?: IntegrationApp[]
  bottomRowApps?: IntegrationApp[]
}
const defaultTopRowApps: IntegrationApp[] = [
  {
    name: "AT&T",
    logo: "/images/960px-AT&T_logo_2016.svg.png",
  },
  {
    name: "Verizon",
    logo: "/images/960px-Verizon_2024.svg.png",
  },
  {
    name: "T-Mobile",
    logo: "/images/T-Mobile_US_Logo_2020_RGB_Magenta_on_Transparent.svg",
  },
  {
    name: "Mint Mobile",
    logo: "/images/Mint_Mobile_Logo.svg",
  },
  {
    name: "Cricket Wireless",
    logo: "/images/640px-Cricket_Wireless_(2014).svg.png",
  },
  {
    name: "Metro by T-Mobile",
    logo: "/images/640px-Metro_By_T-Mobile_2022.svg.png",
  },
  {
    name: "Visible",
    logo: "/images/Visible_by_verizon_logo.svg",
  },
  {
    name: "AT&T",
    logo: "/images/960px-AT&T_logo_2016.svg.png",
  },
  {
    name: "Verizon",
    logo: "/images/960px-Verizon_2024.svg.png",
  },
  {
    name: "T-Mobile",
    logo: "/images/T-Mobile_US_Logo_2020_RGB_Magenta_on_Transparent.svg",
  },
  {
    name: "US Cellular",
    logo: "/images/960px-United_States_Cellular_Corporation_logo.svg.png",
  },
  {
    name: "Boost Mobile",
    logo: "/images/960px-Boost_Mobile_(United_States)_logo.svg.png",
  },
]
const defaultBottomRowApps: IntegrationApp[] = [
  {
    name: "Google Fi",
    logo: "/images/Google_Fi_Wireless_-_Logo,_Text_(2023).svg",
  },
  {
    name: "Consumer Cellular",
    logo: "/images/Consumer_Cellular_logo.svg",
  },
  {
    name: "Spectrum Mobile",
    logo: "/images/Spectrum_Mobile_Logo.svg",
  },
  {
    name: "Xfinity Mobile",
    logo: "/images/960px-Xfinity_Mobile.svg.png",
  },
  {
    name: "Mint Mobile",
    logo: "/images/Mint_Mobile_Logo.svg",
  },
  {
    name: "Cricket Wireless",
    logo: "/images/640px-Cricket_Wireless_(2014).svg.png",
  },
  {
    name: "Metro by T-Mobile",
    logo: "/images/640px-Metro_By_T-Mobile_2022.svg.png",
  },
  {
    name: "Visible",
    logo: "/images/Visible_by_verizon_logo.svg",
  },
  {
    name: "AT&T",
    logo: "/images/960px-AT&T_logo_2016.svg.png",
  },
  {
    name: "Verizon",
    logo: "/images/960px-Verizon_2024.svg.png",
  },
  {
    name: "US Cellular",
    logo: "/images/960px-United_States_Cellular_Corporation_logo.svg.png",
  },
  {
    name: "Boost Mobile",
    logo: "/images/960px-Boost_Mobile_(United_States)_logo.svg.png",
  },
]

// @component: IntegrationCarousel
export const IntegrationCarousel = ({
  buttonText = "Compare Plans",
  buttonHref = "#",
  title = "Supporting All Major US Carriers",
  subtitle = "From AT&T and Verizon to budget-friendly MVNOs like Mint Mobile and Cricket —\nwe help you compare plans across every major network to find your perfect match.",
  topRowApps = defaultTopRowApps,
}: IntegrationCarouselProps) => {
  const topRowRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let topAnimationId: number
    let topPosition = 0

    // Set initial position to create seamless loop for right-to-left scroll
    if (topRowRef.current) {
      topPosition = -(topRowRef.current.scrollWidth / 2)
      topRowRef.current.style.transform = `translateX(${topPosition}px)`
    }

    const animateTopRow = () => {
      if (topRowRef.current) {
        topPosition += 0.3  // Move right (from negative toward zero)
        if (topPosition >= 0) {
          topPosition = -(topRowRef.current.scrollWidth / 2)
        }
        topRowRef.current.style.transform = `translateX(${topPosition}px)`
      }
      topAnimationId = requestAnimationFrame(animateTopRow)
    }
    topAnimationId = requestAnimationFrame(animateTopRow)
    return () => {
      cancelAnimationFrame(topAnimationId)
    }
  }, [])

  // @return
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-10"
        >
          <div className="flex flex-col items-center gap-1">
            <h2
              className="text-[40px] leading-tight font-normal text-[#222222] text-center tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
            <p
              className="text-lg leading-7 text-[#666666] text-center max-w-3xl mt-2 whitespace-pre-wrap"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl overflow-hidden" style={{ height: "160px" }}>
        <div
          ref={topRowRef}
          className="flex items-center gap-6 absolute top-0 whitespace-nowrap"
          style={{
            willChange: "transform",
          }}
        >
          {[...topRowApps, ...topRowApps].map((app, index) => (
            <div
              key={`top-${index}`}
              className="flex items-center justify-center w-40 h-28 rounded-3xl flex-shrink-0 px-5"
              style={{
                backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252))",
                boxShadow:
                  "rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.4px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 12px 12px -6px, rgba(0, 0, 0, 0.04) 0px 12px 12px -12px",
              }}
            >
              <img src={app.logo || "/placeholder.svg"} alt={app.name} className="max-w-full max-h-20 block object-contain" />
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 right-0 bottom-0 w-60 h-[160px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(255, 255, 255))",
          }}
        />

        <div
          className="absolute top-0 left-0 bottom-0 w-60 h-[160px] z-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255), rgba(0, 0, 0, 0))",
          }}
        />
      </div>
    </div>
  )
}
