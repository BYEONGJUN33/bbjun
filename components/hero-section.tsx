"use client"

import { useEffect, useState } from "react"
import { Github, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl"
          style={{ 
            animationName: "pulse",
            animationDuration: "4s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
            animationIterationCount: "infinite"
          }}
        />
        <div 
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/10 via-transparent to-transparent rounded-full blur-3xl"
          style={{ 
            animationName: "pulse",
            animationDuration: "6s",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
            animationIterationCount: "infinite",
            animationDelay: "2s"
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">Open to opportunities</span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-balance">배병준</span>
        </h1>

        {/* Title */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary mb-8">
            Frontend Developer
          </h2>
        </div>

        {/* Description */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          AI 시대에 누구보다 빠르게 흡수하고 실행합니다.{" "}
          상상한 것을 실제 서비스로 완성하는 프론트엔드 개발자입니다.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="min-w-[160px] bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            프로젝트 보기
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://github.com/BYEONGJUN33"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* Tech stack floating tags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingTag 
          text="React" 
          className="top-[20%] left-[10%]" 
          delayMs={0}
          isVisible={isVisible}
        />
        <FloatingTag 
          text="TypeScript" 
          className="top-[30%] right-[15%]" 
          delayMs={500}
          isVisible={isVisible}
        />
        <FloatingTag 
          text="Next.js" 
          className="bottom-[30%] left-[15%]" 
          delayMs={1000}
          isVisible={isVisible}
        />
        <FloatingTag 
          text="Tailwind" 
          className="bottom-[25%] right-[10%]" 
          delayMs={1500}
          isVisible={isVisible}
        />
      </div>
    </section>
  )
}

function FloatingTag({ 
  text, 
  className, 
  delayMs,
  isVisible 
}: { 
  text: string
  className: string
  delayMs: number
  isVisible: boolean
}) {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowAnimation(true)
      }, delayMs)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delayMs])

  return (
    <div
      className={`absolute px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-sm text-muted-foreground/70 backdrop-blur-sm ${className} ${
        showAnimation ? "opacity-100" : "opacity-0"
      }`}
      style={showAnimation ? { 
        animationName: "float",
        animationDuration: "6s",
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        transition: "opacity 1s ease-out"
      } : {
        transition: "opacity 1s ease-out"
      }}
    >
      {text}
    </div>
  )
}
