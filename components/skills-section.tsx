"use client"

import { useEffect, useRef, useState } from "react"

const featuredSkills = [
  {
    name: "JavaScript (ES6+)",
    desc: "비동기 처리(Promise/async-await), 모듈 시스템 활용",
    badge: "JS",
    level: 3,
  },
  {
    name: "Python",
    desc: "파일 파싱, 정규식 처리, 자동화 스크립트 작성",
    badge: "PY",
    level: 3,
  },
  {
    name: "React",
    desc: "함수형 컴포넌트 기반 UI 구성, Hook 활용, 에디터 라이브러리 연동",
    badge: "RE",
    level: 2,
  },
  {
    name: "HTML5 / CSS3",
    desc: "시맨틱 마크업, 반응형 레이아웃 구현",
    badge: "WB",
    level: 3,
  },
]

const otherSkills: Record<string, { name: string; badge: string }[]> = {
  "프론트엔드": [
    { name: "Tailwind CSS",                badge: "TW" },
    { name: "Vite",                        badge: "VT" },
  ],
  "백엔드": [
    { name: "Flask",                       badge: "FL" },
  ],
  "자동화·도구": [
    { name: "GitHub Actions",             badge: "GA" },
    { name: "PyInstaller",                badge: "PI" },
  ],
  "AI·도구": [
    { name: "Claude / Cursor / v0 / Groq", badge: "AI" },
  ],
  "협업": [
    { name: "Git",                         badge: "GT" },
    { name: "Confluence",                  badge: "CF" },
  ],
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {featuredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-5 rounded-2xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-700 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
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
          {Object.entries(otherSkills).map(([category, items], catIndex) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${480 + catIndex * 80}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-xs font-medium text-muted-foreground tracking-wide shrink-0">
                  {category}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-secondary/20 border border-border hover:border-primary/40 transition-all group flex items-center gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                      <span className="text-[9px] font-bold text-primary">{item.badge}</span>
                    </div>
                    <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
