"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "유데미 KDT 부트캠프 풀스택 개발과정 (JAVA) 5기",
    company: "웅진씽크빅 연계 | 프론트엔드 집중 이수",
    period: "2025.07 - 2025.12 (6개월)",
    description: "집중적인 풀스택 교육과정을 수료하며 React, TypeScript, Java 등 모던 웹 기술을 학습했습니다. 프론트엔드에 집중하여 실무 수준의 프로젝트를 진행했습니다.",
  },
  {
    type: "work",
    title: "프론트엔드 개발 인턴",
    company: "웅진씽크빅",
    period: "2026.01 - 2026.03 (2개월)",
    description: "레거시 EPUB 파일 오동작 문제를 발견하고, Python 기반 마이그레이션 툴을 자체 설계하여 해결. DRM 해제 기능, 이미지 최적화, AI(Grok) 기반 오답 체크 기능을 단일 툴에 통합 구현. 약 50일간 단독 개발 완료.",
  },
]

export function ExperienceSection() {
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
      <div className="max-w-3xl mx-auto w-full">
        {/* Section Title */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            경력 & 교육
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex items-start gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        {exp.type === "work" ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      {exp.period && (
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
