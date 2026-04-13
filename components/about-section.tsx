"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "9개월", label: "Since 2025.07" },
  { value: "3개",   label: "Projects" },
  { value: "2개월", label: "웅진씽크빅 인턴" },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-background px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            안녕하세요,
            <br />
            <span className="text-primary">배병준</span>입니다.
          </h2>
        </div>

        {/* Text Content — full width */}
        <div
          className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            상상한 것을 직접 만들 수 있다는 것에 매료되어 개발을 시작했습니다.
            불편함을 발견하면 직접 해결하고 싶어지고,{" "}
            <span className="text-foreground font-medium">
              아이디어가 실제로 동작하는 순간
            </span>
            에서 가장 큰 즐거움을 느낍니다.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            새로운 기술을 접하면 빠르게 익히고 바로 적용합니다.
            개발을 시작한 지{" "}
            <span className="text-foreground font-medium">
              9개월 만에 실무 프로젝트를 기획부터 배포까지 완성
            </span>
            한 것도, 그 방식 덕분이었다고 생각합니다.
          </p>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-6 pt-8 border-t border-border transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
