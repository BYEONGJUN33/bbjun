"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
      className="min-h-screen flex items-center justify-center bg-background px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              사용자 중심의 인터페이스를 설계하고 구현하는 것을 좋아하는 
              프론트엔드 개발자입니다. 단순히 작동하는 코드를 넘어, 
              <span className="text-foreground font-medium"> 사용자에게 가치를 전달하는 제품</span>을 
              만들기 위해 노력합니다.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              깔끔한 코드 아키텍처와 섬세한 인터랙션 디자인에 관심이 많으며,
              팀과 함께 성장하는 것을 중요하게 생각합니다.
              새로운 기술을 배우고 적용하는 것을 즐기며, 
              <span className="text-foreground font-medium"> 더 나은 사용자 경험</span>을 위해 
              끊임없이 고민합니다.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-square rounded-2xl bg-secondary/30 border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">B</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
