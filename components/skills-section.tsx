"use client"

import { useEffect, useRef, useState } from "react"

const featuredSkills = [
  { name: "JavaScript", desc: "메인 언어 · 전 프로젝트 활용", badge: "JS", level: 3 },
  { name: "Python",     desc: "자동화 툴 · 봇 · 서버 개발",  badge: "PY", level: 3 },
  { name: "React",      desc: "P-Log 프론트엔드 리드",        badge: "RE", level: 2 },
  { name: "HTML / CSS", desc: "마크업 · 스타일링 전반",       badge: "WB", level: 3 },
]

const otherSkills: Record<string, string[]> = {
  "프론트엔드":  ["Tailwind CSS", "TipTap"],
  "백엔드":      ["Flask"],
  "자동화·배포": ["GitHub Actions", "PyInstaller", "Android ADB"],
  "AI·도구":     ["Groq API (LLaMA)"],
  "협업":        ["Git"],
}

function LevelDots({
  level,
  isVisible,
  delay,
}: {
  level: number
  isVisible: boolean
  delay: number
}) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          } ${
            i < level
              ? "bg-primary border-primary"
              : "bg-transparent border-muted-foreground/25"
          }`}
          style={{ transitionDelay: `${delay + i * 80}ms` }}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
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
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            기술 스택
          </h2>
        </div>

        {/* Featured Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {featuredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              {/* Badge + Dots */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <span className="text-[11px] font-bold text-primary">{skill.badge}</span>
                </div>
                <LevelDots
                  level={skill.level}
                  isVisible={isVisible}
                  delay={200 + index * 80}
                />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1">{skill.name}</p>
              <p className="text-[11px] text-muted-foreground leading-snug">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Other Skills by Category */}
        <div className="space-y-5">
          {Object.entries(otherSkills).map(([category, techs], catIndex) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${480 + catIndex * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-xs font-medium text-muted-foreground tracking-wide shrink-0">
                  {category}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-lg bg-secondary/30 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
