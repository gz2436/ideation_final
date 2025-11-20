"use client"

import * as React from "react"
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons"

interface CarrierFeature {
  name: string
  att: boolean
  verizon: boolean
  tmobile: boolean
  mint: boolean
  cricket: boolean
  visible: boolean
}

const carriers = [
  { name: "AT&T", logo: "/images/960px-AT&T_logo_2016.svg.png", key: "att" },
  { name: "Verizon", logo: "/images/960px-Verizon_2024.svg.png", key: "verizon" },
  { name: "T-Mobile", logo: "/images/T-Mobile_US_Logo_2020_RGB_Magenta_on_Transparent.svg", key: "tmobile" },
  { name: "Mint Mobile", logo: "/images/Mint_Mobile_Logo.svg", key: "mint" },
  { name: "Cricket", logo: "/images/640px-Cricket_Wireless_(2014).svg.png", key: "cricket" },
  { name: "Visible", logo: "/images/Visible_by_verizon_logo.svg", key: "visible" },
]

const features: CarrierFeature[] = [
  { name: "5G Network Access", att: true, verizon: true, tmobile: true, mint: true, cricket: true, visible: true },
  { name: "Unlimited Data Plans", att: true, verizon: true, tmobile: true, mint: true, cricket: true, visible: true },
  { name: "International Calling", att: true, verizon: true, tmobile: true, mint: true, cricket: true, visible: false },
  { name: "Mobile Hotspot", att: true, verizon: true, tmobile: true, mint: true, cricket: true, visible: true },
  { name: "No Contract Required", att: true, verizon: false, tmobile: false, mint: true, cricket: true, visible: true },
  { name: "eSIM Support", att: true, verizon: true, tmobile: true, mint: true, cricket: false, visible: true },
  { name: "WiFi Calling", att: true, verizon: true, tmobile: true, mint: true, cricket: true, visible: true },
  { name: "Family Plans Available", att: true, verizon: true, tmobile: true, mint: true, cricket: true, visible: false },
  { name: "Student Discounts", att: true, verizon: true, tmobile: true, mint: false, cricket: false, visible: false },
  { name: "Monthly Plans Under $30", att: false, verizon: false, tmobile: false, mint: true, cricket: true, visible: true },
]

export function PricingSection() {
  return (
    <section className="pt-8 pb-16 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-figtree text-[40px] font-normal leading-tight mb-4">Carrier Feature Comparison</h2>
          <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-wrap">
            Compare key features across major US carriers to find the best fit{"\n"}for your needs as an international student.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-border rounded-2xl bg-white shadow-sm">
              {/* Header Row - Carrier Logos */}
              <div className="grid grid-cols-7 gap-0 border-b border-border bg-muted/30">
                <div className="p-6 font-figtree font-semibold text-foreground">Features</div>
                {carriers.map((carrier) => (
                  <div key={carrier.key} className="p-3 flex items-center justify-center border-l border-border">
                    <img
                      src={carrier.logo}
                      alt={carrier.name}
                      className="max-w-[70px] max-h-11 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-7 gap-0 ${index !== features.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/20 transition-colors`}
                  style={{ minHeight: '64px' }}
                >
                  <div className="p-4 font-figtree text-sm text-foreground flex items-center">{feature.name}</div>
                  {carriers.map((carrier) => (
                    <div
                      key={`${feature.name}-${carrier.key}`}
                      className="p-3 flex items-center justify-center border-l border-border"
                    >
                      {feature[carrier.key as keyof Omit<CarrierFeature, 'name'>] ? (
                        <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center">
                          <CheckIcon className="w-3 h-3 text-green-700" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center">
                          <Cross2Icon className="w-3 h-3 text-red-700" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="text-[#202020] border border-[#202020] px-[18px] py-[15px] rounded-full font-figtree text-lg transition-all duration-200 hover:shadow-md">
            Compare Full Plan Details
          </button>
        </div>
      </div>
    </section>
  )
}
