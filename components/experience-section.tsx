"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "유데미 KDT 부트캠프 풀스택 개발과정 5기",
    company: "웅진씽크빅 연계 | 프론트엔드 집중 이수",
    period: "2025.07 - 2025.12 (6개월)",
    bullets: [
      "P-Log 팀 프로젝트 팀장으로 기획·설계·프론트엔드 구현 주도",
      "TipTap 에디터 커스터마이징, Swiper.js 스와이프 UX 등 핵심 기능 직접 구현",
      "웹 기반 풀스택 개발 과정 수료",
    ],
  },
  {
    type: "work",
    title: "프론트엔드 개발 인턴",
    company: "웅진씽크빅 — IT혁신본부",
    period: "2026.01 - 2026.03 (2개월)",
    bullets: [
      "Chrome 보안 정책 변경으로 동작 불가해진 사내 EPUB 수작업 업무를 Python 자동화 툴로 해결",
      "컨텐츠 개발팀과 직접 미팅하며 현장 문제를 파악하고 피드백을 수렴해 실무 환경에 맞게 구현",
      "기획부터 EXE 납품·인수인계까지 주도적으로 진행",
    ],
  },
]

export function ExperienceSection() {
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
            경력 &amp; 교육
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
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}>
                  <div className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
                    {/* Icon + Period */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {exp.type === "work" ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-sm text-primary font-medium mb-4">{exp.company}</p>

                    {/* Bullets */}
                    <ul className="space-y-1.5">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary shrink-0 mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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
