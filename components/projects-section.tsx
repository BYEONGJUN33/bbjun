"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "P-Log",
    description: "숏폼·스낵 컬처에 맞는 카드 스와이프형 TIL 블로그 플랫폼 - 비주얼 중심의 콘텐츠 탐색 UX 구현",
    fullDescription: "기존 블로그의 무거운 줄글 방식에서 벗어나, 숏폼·스낵 컬처에 맞는 카드 스와이프형 TIL 블로그 플랫폼. 텍스트보다 비주얼 중심의 콘텐츠 탐색 UX를 구현했습니다.",
    achievements: [
      "팀장으로서 전체 일정 조율, 프론트엔드 아키텍처 설계 및 구현 총괄",
      "TipTap 에디터 도입 — Drag & Drop, 이미지 확대/축소/이동 기능 구현",
      "좌우 Swipe 기반 Short-form Viewer 직접 기획 및 구현",
      "관심사 기반 태그 개인화 큐레이션, 반응형 모바일 최적화",
      "AWS 배포까지 완료, 전체 달성도 85%"
    ],
    tech: ["React", "Vite", "JavaScript", "HTML/CSS", "TipTap", "Swagger", "MySQL", "AWS", "Spring"],
    github: "https://github.com",
    demo: "",
    role: "팀장 / 프론트엔드 리드 | 3인 팀 프로젝트",
    period: "2025.10 - 2025.12"
  },
  {
    title: "EPUB 마이그레이션 툴",
    description: "레거시 EPUB 파일의 구조적 노후화 문제를 해결하기 위한 일괄 변환 자동화 툴",
    fullDescription: "레거시 EPUB 파일의 구조적 노후화 문제를 해결하기 위한 일괄 변환 자동화 툴입니다.",
    achievements: [
      "Python을 활용해 레거시 코드를 최신 브릿지 코드로 자동 변환하는 마이그레이션 파이프라인 설계",
      "DRM 해제 APK 이식, 이미지 최적화(용량 절감), AI(Grok) 오답 체크 기능을 단일 툴로 통합",
      "약 50일간 단독으로 기획·개발·완성, 실무 환경에서 즉시 활용 가능한 수준으로 납품"
    ],
    tech: ["Python", "Flask", "Grok API", "DRM 처리"],
    github: "https://github.com",
    demo: "",
    role: "단독 개발 | 웅진씽크빅 인턴십 과제",
    period: "2026.01 - 2026.03"
  },
  {
    title: "비트코인 자동 트레이딩 봇",
    description: "반복적인 수동 트레이딩의 불편함을 자동화로 해결한 개인 사이드 프로젝트",
    fullDescription: "반복적인 수동 트레이딩의 불편함을 자동화로 해결한 개인 사이드 프로젝트입니다.",
    achievements: [
      "거래소 API 연동으로 실시간 시세 분석 및 자동 매매 로직 구현",
      "Oracle Cloud 무료 서버에 배포하여 PC 종료 상태에서도 24시간 자율 운영",
      "버그 수정 및 전략 튜닝을 반복하며 실제 운영 가능한 수준으로 완성"
    ],
    tech: ["Python", "Oracle Cloud", "거래소 REST API"],
    github: "https://github.com",
    demo: "",
    role: "개인 프로젝트 | 단독 개발",
    period: "2026.03"
  }
]

type Project = typeof projects[number]

function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: Project
  onClose: () => void 
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Thumbnail - GIF 들어갈 자리 */}
        <div className="aspect-video bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg text-muted-foreground">GIF / 이미지 영역</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          
          {/* Meta Info */}
          <div className="mb-6 text-sm text-muted-foreground">
            <span>{project.role}</span>
            <span className="mx-2">|</span>
            <span>{project.period}</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary mb-2">프로젝트 소개</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary mb-3">주요 성과</h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary shrink-0 leading-relaxed">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-primary mb-3">사용 기술</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (
              <Button
                variant="outline"
                className="flex-1 gap-2 border-border hover:border-primary hover:text-primary"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section 
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center bg-background px-6 py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Section Title */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              프로젝트
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl bg-secondary/20 border border-border overflow-hidden transition-all duration-700 hover:border-primary/50 hover:scale-[1.02] text-left cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Thumbnail */}
                <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <span className="text-lg font-bold text-primary/70 text-center">{project.title}</span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-foreground font-medium">자세히 보기</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  )
}
