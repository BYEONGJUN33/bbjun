"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Mail } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col bg-background px-6 py-20"
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col flex-1">
        {/* Section Title */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            연락처
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            프로젝트나 협업에 관심이 있으시다면 언제든 연락 주세요.
          </p>
        </div>

        {/* Contact Info */}
        <div
          className={`space-y-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:bbj6887@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium text-lg">bbj6887@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/BYEONGJUN33"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <p className="text-foreground font-medium text-lg">github.com/BYEONGJUN33</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div
          className={`mt-auto pt-8 border-t border-border text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground text-sm">
            2026 배병준. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
