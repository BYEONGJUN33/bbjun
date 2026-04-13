"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink, X, BookOpen, AlertTriangle, CheckCircle2, ArrowRight, Settings } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "P-Log",
    description: "팀장으로 기획·프론트엔드 전담한 카드 스와이프형 TIL 블로그 플랫폼",
    fullDescription: "기존 블로그의 무거운 줄글 방식에서 벗어나, 숏폼·스낵 컬처에 맞는 카드 스와이프형 TIL 블로그 플랫폼. 텍스트보다 비주얼 중심의 콘텐츠 탐색 UX를 구현했습니다.",
    achievements: [
      "팀장으로서 전체 일정 조율 및 개발 환경 구성",
      "프론트엔드 아키텍처 설계 및 구현",
      "TipTap 에디터 도입 — Drag & Drop, 이미지 확대/축소/이동 기능 구현",
      "좌우 Swipe 기반 Short-form Viewer 직접 기획 및 구현",
      "반응형 모바일 최적화",
      
    ],
    tech: ["React", "Vite", "JavaScript", "HTML/CSS", "TipTap", "Swiper.js", "Context API", "Axios", "Spring"],
    github: "https://github.com",
    demo: "",
    role: "팀장 / 프론트엔드 전담 | 3인 팀 프로젝트",
    period: "2025.10 - 2025.12",
    images: { pc: "/pc_plog.png", mobile: "/mobile_plog.png" }
  },
  {
    title: "EPUB 마이그레이션 툴",
    description: "수작업 EPUB 업무를 Python 툴로 해결. 기획부터 EXE 납품·인수인계까지 주도적으로 진행.",
    fullDescription: "IT혁신본부 프론트엔드팀 소속 인턴으로, 코드를 다룰 줄 모르는 컨텐츠 개발팀이 수백 권의 EPUB 전자책을 일일이 수작업으로 수정하거나 외부 인력에 의존하던 문제를 발견했습니다. Chrome 86+ 보안 정책 변경으로 레거시 JavaScript가 일괄 동작 불가 상태가 된 것이 발단이었고, 이를 해결하기 위해 기획부터 배포까지 진행했습니다.\n컨텐츠 개발팀과 직접 미팅을 진행하며 실무 환경과 사용 방식을 파악하고, \"코드를 모르는 담당자가 혼자 쓸 수 있어야 한다\"는 피드백을 수렴해 설치 없이 실행되는 EXE 형태와 편의성을 고려한 최종품을 납품했습니다.",
    achievements: [
      "수시간 걸리던 수작업을 손 쉽게 처리 가능하도록 자동화 도구 개발",
      "비개발자 담당자가 단독 운영할 수 있는 수준으로 최종 결과물 납품 및 인수인계까지 마무리",
      "태블릿에서만 동작하는 DRM 해제 APK를 ADB로 PC와 연결해 자동화 파이프라인 구성",
      "Python 서버 + ADB + APK를 단일 EXE로 패키징, 설치 없이 바로 실행",
      "GitHub Actions CI/CD 구축 경험 — 이후 사내 클라우드 배포로 전환",
      "Groq AI(LLaMA) 연동 오타 검증, WebP 이미지 최적화까지 단일 툴에 통합",
      "컨텐츠 개발팀과 미팅을 여러차례 진행해 요구사항을 직접 수렴하고 피드백을 반영"
    ],
    tech: ["Python", "Flask", "JavaScript", "HTML/CSS", "Tailwind CSS", "PyInstaller", "GitHub Actions", "Android ADB", "Groq API"],
    github: "https://github.com",
    demo: "",
    role: "1인 개발 | 웅진씽크빅 인턴",
    period: "2026.01 - 2026.03",
    retrospective: "모르는 부분은 멘토분들과 팀장님께 조언을 구해가며 진행했고, 기획·개발·배포를 2개월 만에 완주했습니다. AI 도구를 적극 활용했지만, 실제로 동작하게 만드는 디버깅·설계·판단은 제가 했습니다. \"AI가 코드를 주는 것\"과 \"완성된 도구를 납품하는 것\"의 차이를 실감한 프로젝트입니다."
  },
  {
    title: "Binance MA Cross 자동매매 봇",
    description: "이동평균 전략 자동매매 봇과 실시간 모니터링 대시보드. 24시간 운용 중.",
    fullDescription: "실생활 자동화에 관심이 생겨 시작한 개인 프로젝트입니다.\n바이낸스 거래소 API를 연동한 암호화폐 현물 자동매매 시스템입니다. 이동평균 크로스(MA Cross) 전략으로 매수·매도 신호를 자동 생성하고, 운용 현황을 실시간으로 확인할 수 있는 웹 모니터링 대시보드를 직접 설계·구현했습니다. Oracle Cloud 서버에 배포하여 24시간 무중단으로 운용 중입니다.",
    achievements: [
      "실시간 모니터링 대시보드 구현 — Fetch API + setInterval 폴링으로 가격·포지션·수익률·로그를 한 화면에서 실시간 갱신",
      "Chart.js 기반 캔들 차트 — zoom/pan 플러그인 적용, 최근 200개 캔들 인터랙티브 시각화",
      "로그 뷰어 UX 개선 — 레벨별(INFO/WARN/ERR) 필터, 키워드 검색, 매수·매도 색상 구분, 스마트 자동 스크롤",
      "반응형 레이아웃 — CSS Grid + Custom Properties 기반, 모바일~데스크탑 대응",
      "로그인 세션 인증, 브루트포스 방어(5회 실패 시 잠금), 긴급 정지 API 인증",
      "핵심 매매 로직 유닛 테스트 113개 전체 통과 유지"
    ],
    tech: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Chart.js", "pytest", "Oracle Cloud", "systemd"],
    github: "https://github.com",
    demo: "",
    role: "개인 프로젝트 | 기획·설계·개발 전담",
    period: "2026.03 ~ 진행 중",
    images: { pc: "/ma_bot.png", mobile: "" }
  }
]

type Project = typeof projects[number] & {
  images?: { pc: string; mobile: string | "" }
  retrospective?: string
}

function EpubThumbnail({ showFeatures = true }: { showFeatures?: boolean }) {
  return (
    <div className="absolute inset-0 bg-[#111318] flex flex-col justify-between p-4 overflow-hidden select-none">
      {/* Title row */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">
          사내 자동화 도구
        </p>
        {showFeatures && (
          <p className="text-[10px] text-gray-600 italic">
            * 사내 정책상 캡처·코드 비공개
          </p>
        )}
      </div>

      {/* Core flow: Problem → Tool → Result */}
      <div className="flex items-center justify-center gap-2">
        {/* Before */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center relative">
            <BookOpen className="w-5 h-5 text-red-400/80" />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500/90 flex items-center justify-center">
              <AlertTriangle className="w-2 h-2 text-white" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold text-gray-300 leading-tight">레거시 EPUB</p>
            <p className="text-[9px] text-red-400/80 mt-0.5 leading-tight">Chrome 동작 불가</p>
          </div>
        </div>

        {/* Arrow + Tool */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
            <Settings className="w-4 h-4 text-blue-400" />
          </div>
          <ArrowRight className="w-3 h-3 text-gray-600" />
          <p className="text-[8px] text-blue-400/80 tracking-wide whitespace-nowrap">Python 자동화 툴</p>
        </div>

        {/* After */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center relative">
            <BookOpen className="w-5 h-5 text-green-400/80" />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500/90 flex items-center justify-center">
              <CheckCircle2 className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-semibold text-gray-300 leading-tight">변환 완료</p>
            <p className="text-[9px] text-green-400/80 mt-0.5 leading-tight">전체 일괄 자동 처리</p>
          </div>
        </div>
      </div>

      {/* Bottom: Key features (modal only) */}
      {showFeatures && (
        <div className="flex gap-1.5 justify-center flex-wrap">
          {["클릭 한 번으로 완료", "AI 맞춤법 자동 검사", "사용 가이드 제작·인수인계"].map((label) => (
            <span
              key={label}
              className="px-2 py-1 rounded-full bg-gray-800/80 text-gray-400 text-[10px] border border-gray-700/50"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

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

        {/* Thumbnail */}
        <div className="aspect-video bg-secondary/30 relative overflow-hidden">
          {project.images ? (
            <>
              {/* PC 스크린샷 - 배경 */}
              <Image
                src={project.images.pc}
                alt={`${project.title} 데스크톱`}
                fill
                className="object-cover object-left-top"
              />
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-background/30" />
              {/* 모바일 스크린샷 - 있을 때만 우측 하단 겹치기 */}
              {project.images.mobile && (
                <div className="absolute bottom-3 right-4 h-[90%] w-auto shadow-2xl rounded-lg overflow-hidden border border-border/50">
                  <Image
                    src={project.images.mobile}
                    alt={`${project.title} 모바일`}
                    height={300}
                    width={140}
                    className="h-full w-auto object-cover object-top"
                  />
                </div>
              )}
            </>
          ) : project.title === "EPUB 마이그레이션 툴" ? (
            <EpubThumbnail />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-primary/70">{project.title}</span>
              </div>
            </>
          )}
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
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
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

          {/* Retrospective */}
          {project.retrospective && (
            <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-semibold text-primary mb-2">회고</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.retrospective}
              </p>
            </div>
          )}

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
                className={`group flex flex-col rounded-2xl bg-secondary/20 border border-border overflow-hidden transition-all duration-700 hover:border-primary/50 hover:scale-[1.02] text-left cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Thumbnail */}
                <div className="aspect-video w-full relative overflow-hidden">
                  {(project as Project).images ? (
                    <Image
                      src={(project as Project).images!.pc}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  ) : project.title === "EPUB 마이그레이션 툴" ? (
                    <EpubThumbnail showFeatures={false} />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center px-4">
                        <span className="text-lg font-bold text-primary/70 text-center">{project.title}</span>
                      </div>
                    </>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-foreground font-semibold text-sm">자세히 보기</span>
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
