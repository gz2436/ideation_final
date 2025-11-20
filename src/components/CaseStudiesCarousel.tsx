"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
type CaseStudy = {
  id: string
  company: string
  logo: React.ReactNode
  title: string
  features: string[]
  quote: string
  attribution: string
  accentColor: string
  cards: {
    type: "slack" | "meeting" | "sentiment" | "notion" | "stripe" | "figma"
    delay: number
    zIndex: number
  }[]
}
const caseStudies: CaseStudy[] = [
  {
    id: "nyu-china",
    company: "NYU Student",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 120 48" width="120" xmlns="http://www.w3.org/2000/svg">
        <text fill="#57068c" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" x="0" y="32">
          NYU
        </text>
      </svg>
    ),
    title: "Wei found the perfect prepaid plan for her first semester at NYU using GoUS's carrier comparison.",
    features: ["Plan Comparison", "Student Discount", "Activation Guide"],
    quote: "GoUS made it so easy to compare different carriers. I got a great Mint Mobile plan activated before I even landed in New York!",
    attribution: "Wei Zhang, Graduate Student from China, NYU",
    accentColor: "#57068c",
    cards: [
      {
        type: "notion",
        delay: 0,
        zIndex: 1,
      },
    ],
  },
  {
    id: "ucla-india",
    company: "UCLA Student",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 120 48" width="120" xmlns="http://www.w3.org/2000/svg">
        <text fill="#2774AE" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" x="0" y="32">
          UCLA
        </text>
      </svg>
    ),
    title: "Priya saved money by choosing a Cricket Wireless plan recommended by GoUS for her PhD at UCLA.",
    features: ["Budget Plans", "Coverage Maps", "International Calling"],
    quote: "The detailed comparison helped me find a plan with great coverage and affordable international calling to India. Best decision ever!",
    attribution: "Priya Sharma, PhD Student from India, UCLA",
    accentColor: "#2774AE",
    cards: [
      {
        type: "stripe",
        delay: 0,
        zIndex: 1,
      },
    ],
  },
  {
    id: "mit-brazil",
    company: "MIT Student",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 120 48" width="120" xmlns="http://www.w3.org/2000/svg">
        <text fill="#A31F34" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" x="0" y="32">
          MIT
        </text>
      </svg>
    ),
    title: "Lucas switched to T-Mobile's prepaid plan following GoUS recommendations during his first year at MIT.",
    features: ["Network Coverage", "5G Access", "Student Plans"],
    quote: "GoUS helped me understand the difference between carriers. T-Mobile's coverage at MIT is perfect and the price is right for a student budget!",
    attribution: "Lucas Silva, Engineering Student from Brazil, MIT",
    accentColor: "#A31F34",
    cards: [
      {
        type: "meeting",
        delay: 0,
        zIndex: 1,
      },
    ],
  },
  {
    id: "columbia-korea",
    company: "Columbia Student",
    logo: (
      <svg fill="none" height="48" viewBox="0 0 120 48" width="120" xmlns="http://www.w3.org/2000/svg">
        <text fill="#156d95" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" x="0" y="32">
          Columbia
        </text>
      </svg>
    ),
    title: "Jiwon got an unlimited Visible plan through GoUS and loves the coverage in New York City.",
    features: ["Unlimited Data", "No Contract", "Easy Activation"],
    quote: "I was worried about setting up a phone plan before arriving, but GoUS made it super clear. Visible was perfect for me — unlimited data and great coverage around Columbia!",
    attribution: "Jiwon Park, MBA Student from South Korea, Columbia",
    accentColor: "#156d95",
    cards: [
      {
        type: "figma",
        delay: 0,
        zIndex: 1,
      },
    ],
  },
]
const FeatureBadge = ({
  name,
}: {
  name: string
}) => {
  const getIcon = (featureName: string) => {
    if (featureName.includes("Slack")) {
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50">
          <path
            d="M6 2C6 1.44772 5.55228 1 5 1C4.44772 1 4 1.44772 4 2V6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6V2Z"
            fill="#E01E5A"
          />
          <path d="M10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.55228 4 10 4H6V6H10Z" fill="#36C5F0" />
          <path
            d="M14 5C14 4.44772 13.5523 4 13 4C12.4477 4 12 4.44772 12 5V9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9V5Z"
            fill="#2EB67D"
          />
          <path d="M6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12H10V10H6Z" fill="#ECB22E" />
        </svg>
      )
    } else if (featureName.includes("Meeting")) {
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50">
          <path
            d="M2 4C2 3.44772 2.44772 3 3 3H9C9.55228 3 10 3.44772 10 4V10C10 10.55228 9.55228 11 9 11H3C2.44772 11 2 10.55228 2 10V4Z"
            stroke="#5E6AD2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 5L13 3V11L10 9"
            stroke="#5E6AD2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    } else if (featureName.includes("Sentiment")) {
      return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-50">
          <path
            d="M3 9L5 11L8 8L13 13"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5H13M3 5V13M13 5V13M3 13H13"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
    return null
  }
  return (
    <div className="flex items-center gap-2 bg-white/75 shadow-sm border border-black/5 rounded-lg px-2 py-1 text-sm font-medium text-foreground">
      {getIcon(name)}
      {name}
    </div>
  )
}
const SlackCallCard = ({
  accentColor,
  delay,
  zIndex,
}: {
  accentColor: string
  delay: number
  zIndex: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay,
      }}
      className="absolute w-[380px] rounded-xl p-6 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.12)",
        filter: "drop-shadow(0 4px 6px rgba(30, 30, 44, 0.15))",
        transform: "translate(220px, -40px)",
        zIndex,
      }}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">Plan Pricing</h4>
          <span className="text-xs text-muted-foreground">Monthly</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <span className="text-sm text-foreground">Mint Mobile</span>
            <span className="text-lg font-bold" style={{ color: accentColor }}>$15</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <span className="text-sm text-foreground">Cricket</span>
            <span className="text-lg font-bold" style={{ color: accentColor }}>$25</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <span className="text-sm text-foreground">Visible</span>
            <span className="text-lg font-bold" style={{ color: accentColor }}>$25</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
const MeetingTranscriptCard = ({
  accentColor,
  delay,
  zIndex,
}: {
  accentColor: string
  delay: number
  zIndex: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay,
      }}
      className="absolute w-[380px] rounded-xl p-6 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.12)",
        filter: "drop-shadow(0 4px 6px rgba(30, 30, 44, 0.15))",
        transform: "translate(-200px, -60px)",
        zIndex,
      }}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">Coverage Score</h4>
          <span className="text-xs text-muted-foreground">Campus Area</span>
        </div>

        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">T-Mobile</span>
              <span className="text-sm font-semibold" style={{ color: accentColor }}>95%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "95%", backgroundColor: accentColor }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">AT&T</span>
              <span className="text-sm font-semibold" style={{ color: accentColor }}>92%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "92%", backgroundColor: accentColor }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Verizon</span>
              <span className="text-sm font-semibold" style={{ color: accentColor }}>88%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "88%", backgroundColor: accentColor }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
const NotionCollaborationCard = ({
  accentColor,
  delay,
  zIndex,
}: {
  accentColor: string
  delay: number
  zIndex: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay,
      }}
      className="absolute w-[380px] rounded-xl p-6 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.12)",
        filter: "drop-shadow(0 4px 6px rgba(30, 30, 44, 0.15))",
        transform: "translate(-200px, -80px)",
        zIndex,
      }}
    >
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">Carrier Comparison</h4>
          <span className="text-xs text-muted-foreground">Key Features</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-foreground">Mint Mobile</span>
            </div>
            <span className="text-sm font-semibold text-green-600">5G</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm text-foreground">AT&T</span>
            </div>
            <span className="text-sm font-semibold text-blue-600">5G+</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-sm text-foreground">T-Mobile</span>
            </div>
            <span className="text-sm font-semibold text-purple-600">5G UC</span>
          </div>
        </div>

        <div className="pt-3 border-t border-border/50">
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">15+</span> carriers compared
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const StripeGlobalCard = ({
  accentColor,
  delay,
  zIndex,
}: {
  accentColor: string
  delay: number
  zIndex: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay,
      }}
      className="absolute w-[400px] rounded-xl p-6 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.12)",
        filter: "drop-shadow(0 4px 6px rgba(30, 30, 44, 0.15))",
        transform: "translate(-180px, -60px)",
        zIndex,
      }}
    >
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">Data Usage</h4>
          <span className="text-xs text-muted-foreground">This Month</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-foreground">8.5 GB</div>
            <div className="text-xs text-muted-foreground mt-1">Used</div>
            <div className="text-xs font-semibold text-green-600 mt-2">Good</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-foreground">15 GB</div>
            <div className="text-xs text-muted-foreground mt-1">Limit</div>
            <div className="text-xs font-semibold text-blue-600 mt-2">Plan</div>
          </div>
          <div className="text-center p-3 bg-muted/20 rounded-lg">
            <div className="text-2xl font-bold text-foreground">6.5 GB</div>
            <div className="text-xs text-muted-foreground mt-1">Left</div>
            <div className="text-xs font-semibold text-purple-600 mt-2">57%</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Usage this month</span>
            <span className="font-semibold text-foreground">57%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "57%", backgroundColor: accentColor }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const FigmaSprintCard = ({
  accentColor,
  delay,
  zIndex,
}: {
  accentColor: string
  delay: number
  zIndex: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
        delay,
      }}
      className="absolute w-[380px] rounded-xl p-6 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.8), 0 8px 32px 0 rgba(0, 0, 0, 0.12)",
        filter: "drop-shadow(0 4px 6px rgba(30, 30, 44, 0.15))",
        transform: "translate(-190px, -70px)",
        zIndex,
      }}
    >
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: accentColor }}
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M8 2L9.5 6.5H14L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5H6.5L8 2Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Student Ratings</h4>
              <p className="text-xs text-muted-foreground">Satisfaction Scores</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <span className="text-sm text-foreground">Value for money</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: "94%" }} />
              </div>
              <span className="text-xs font-semibold text-foreground">4.7</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <span className="text-sm text-foreground">Network quality</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: "89%" }} />
              </div>
              <span className="text-xs font-semibold text-foreground">4.5</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
            <span className="text-sm text-foreground">Customer support</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-green-600">Excellent</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-border/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Based on reviews</span>
            <span className="font-semibold text-foreground">2.4K</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const CaseStudiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const currentStudy = caseStudies[currentIndex]
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
    return () => stopAutoPlay()
  }, [isAutoPlaying, currentIndex])
  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }
  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center pt-8 pb-16 px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1
            className="text-[40px] leading-tight font-normal text-foreground mb-6 tracking-tight"
            style={{
              fontWeight: "400",
              fontFamily: "var(--font-figtree), Figtree",
              fontSize: "40px",
            }}
          >
            What Students Say
          </h1>
          <p
            className="text-lg leading-7 text-muted-foreground max-w-2xl mx-auto whitespace-pre-wrap"
            style={{
              fontFamily: "var(--font-figtree), Figtree",
            }}
          >
            Real experiences from international students who found{"\n"}their perfect phone plan with GoUS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStudy.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                }}
                className="space-y-6"
              >
                <div className="text-foreground/60">{currentStudy.logo}</div>

                <h2
                  className="text-4xl font-bold text-foreground leading-tight tracking-tight"
                  style={{
                    fontFamily: "var(--font-figtree), Figtree",
                    fontWeight: "400",
                    fontSize: "32px",
                  }}
                >
                  {currentStudy.title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {currentStudy.features.map((feature, idx) => (
                    <FeatureBadge key={idx} name={feature} />
                  ))}
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-2">
                  <p
                    className="text-lg leading-7 text-foreground/80 italic mb-3"
                    style={{
                      fontFamily: "var(--font-figtree), Figtree",
                    }}
                  >
                    "{currentStudy.quote}"
                  </p>
                  <footer
                    className="text-sm text-muted-foreground"
                    style={{
                      fontFamily: "var(--font-inter), Inter",
                    }}
                  >
                    {currentStudy.attribution}
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Card Visualization */}
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStudy.id}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {currentStudy.id === "nyu-china" && (
                  <NotionCollaborationCard accentColor={currentStudy.accentColor} delay={0} zIndex={1} />
                )}
                {currentStudy.id === "ucla-india" && (
                  <StripeGlobalCard accentColor={currentStudy.accentColor} delay={0} zIndex={1} />
                )}
                {currentStudy.id === "mit-brazil" && (
                  <MeetingTranscriptCard accentColor={currentStudy.accentColor} delay={0} zIndex={1} />
                )}
                {currentStudy.id === "columbia-korea" && (
                  <FigmaSprintCard accentColor={currentStudy.accentColor} delay={0} zIndex={1} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
