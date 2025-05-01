import type React from "react"
import type { Metadata } from "next"
import { Geist, Space_Mono } from "next/font/google"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Shadcnblocks - 638 extra blocks for Shadcn UI",
  description: "Copy/paste our incredible components built with shadcn/ui, Tailwind & React.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${spaceMono.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
