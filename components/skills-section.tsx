"use client"

import { useEffect, useRef, useState } from "react"

// level: 0 ~ 3 (동그라미 개수)
const skills = [
  { name: "React", level: 3, category: "Frontend" },
  { name: "TypeScript", level: 1, category: "Language" },
  { name: "Next.js", level: 2, category: "Framework" },
  { name: "JavaScript", level: 3, category: "Language" },
  { name: "Tailwind CSS", level: 2, category: "Styling" },
  { name: "HTML/CSS", level: 3, category: "Frontend" },
  { name: "Git", level: 2, category: "Tool" },
  { name: "Figma", level: 0, category: "Design" },
]

const categories = ["Frontend", "Language", "Framework", "Styling", "Tool", "Design"]

function SkillLevel({ level, isVisible, delay }: { level: number; isVisible: boolean; delay: number }) {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          } ${
            index < level 
              ? "bg-primary border-primary" 
              : "bg-transparent border-muted-foreground/30"
          }`}
          style={{ transitionDelay: `${delay + index * 100}ms` }}
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
      className="min-h-dvh flex items-center justify-center bg-background px-6 py-20"
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 rounded-2xl bg-secondary/20 border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
                <SkillLevel 
                  level={skill.level} 
                  isVisible={isVisible} 
                  delay={index * 100 + 300} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Category Badges */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-secondary/30 border border-border text-sm text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
