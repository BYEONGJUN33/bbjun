"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "P-Log",
    description: "팀장으로 기획·프론트엔드 전담한 카드 스와이프형 TIL 블로그 플랫폼",
    fullDescription: "기존 TIL 블로그는 긴 글 중심 구조로 인해 찾는 사람들이 줄고 모바일 환경에서 콘텐츠 탐색 효율이 낮다는 문제를 해결하고자, 카드 스와이프 기반 Short-form 콘텐츠 탐색 UX를 설계한 TIL 블로그 플랫폼입니다.",
    achievements: [
      "팀장으로서 전체 일정 조율 및 개발 환경 구성 — 디스코드 푸시 알림 연동, 협업 스테이션 관리, 회의 주도 및 회의록 작성",
      "컴포넌트 재사용성을 고려한 React 기반 프론트엔드 아키텍처 설계 및 상태 관리 구조 설계",
      "TipTap 에디터 도입 — Drag & Drop, 이미지 확대/축소/이동 기능 구현",
      "모바일 사용성을 고려한 Swipe 기반 Short-form 콘텐츠 Viewer 설계 및 구현",
      "반응형 모바일 최적화를 담당하여 모바일 퍼스트 방식으로 프로젝트를 개발.",
    ],
    tech: [
      { name: "React",       reason: "카드·에디터 등 반복 구조가 많아 컴포넌트 재사용성이 중요했기 때문에 선택" },
      { name: "Vite",        reason: "UI를 반복 수정하는 사이클이 많아 빠른 HMR로 개발 생산성을 높이기 위해 선택" },
      { name: "JavaScript",  reason: "Swipe 제스처·에디터 등 브라우저 인터랙션 로직을 직접 제어하기 위해 사용" },
      { name: "HTML/CSS",    reason: "모바일 우선 카드 뷰 레이아웃을 직접 설계하기 위해 사용" },
      { name: "TipTap",      reason: "에디터를 처음부터 구현하는 대신 확장 API가 자유로운 라이브러리를 선택해 커스텀 기능에 집중" },
      { name: "Swiper.js",   reason: "Swipe 인터랙션을 직접 구현하는 대신 성숙한 라이브러리로 안정성을 확보하고 UX에 집중" },
      { name: "Context API", reason: "전역 상태가 단순해 Redux 없이 경량으로 관리하기 위해 선택" },
      { name: "Axios",       reason: "공통 인터셉터로 인증 토큰 처리를 일괄 관리하기 위해 fetch 대신 선택" },
      { name: "Spring",      reason: "팀원 담당 백엔드 — REST API 연동 방식 협의 및 프론트 연결 담당" },
    ],
    github: "",
    role: "팀장 / 프론트엔드 전담 | 3인 팀 프로젝트",
    period: "2025.10 - 2025.12",
    images: { pc: "/pc_plog.png", mobile: "/mobile_plog.png" }
  },
  {
    title: "EPUB 마이그레이션 툴",
    description: "수작업 EPUB 업무를 Python 툴로 해결. 기획부터 EXE 납품·인수인계까지 주도적으로 진행.",
    fullDescription: "Chrome 86+ 보안 정책 변경으로 사내 클라우드의 1만 권 이상 EPUB 전자책 내 레거시 JavaScript가 일괄 동작 불가 상태가 됐습니다. 외부 인력에 의존하던 수작업을 자동화하기 위해 기획부터 EXE 납품까지 1인 개발로 진행했습니다.\n이후 팀장님 피드백을 반영해 WebP 최적화(용량 50~90% 절감), DRM 일괄 자동화, Groq API 기반 오타 검증까지 기능을 확장해 단일 통합 도구로 완성했습니다.",
    achievements: [
      "외부 인력 기준 파일 1개당 약 5분 → 도구 적용 시 10초 이내로 단축, 다량 파일 일괄 처리로 전체 작업 시간 대폭 감소",
      "비개발자 담당자가 단독 운영할 수 있는 수준으로 최종 결과물 납품 및 인수인계까지 마무리",
      "건별 수동 해제가 필요하던 DRM을 ADB로 태블릿 APK와 연결해 일괄 자동화 — 웹 단독 도구에서 통합 도구로 확장",
      "Python 서버, ADB, APK 의존성을 PyInstaller로 패키징하여 설치 없이 실행 가능한 단일 EXE 배포 환경 구축",
      "GitHub Actions CI/CD 구축 경험 — 이후 사내 클라우드 배포로 전환",
      "WebP 변환으로 이미지 용량 50~90% 절감, 반복 실험으로 최적 필터링 도출 후 Groq API(LLaMA) 연동 오타 검증까지 단일 툴에 통합 — Groq는 xAI의 Grok과 무관한 별개 서비스",
      "컨텐츠 개발팀과 미팅을 여러차례 진행해 요구사항을 직접 수렴하고 피드백을 반영"
    ],
    tech: [
      { name: "Python",         reason: "파일 파싱·정규식·OS 제어 등 자동화 작업 전반에 가장 적합해 선택" },
      { name: "Flask",          reason: "Python 환경에서 경량 API 서버가 필요했고, SSE로 진행 상태를 실시간 스트리밍하기 위해 선택" },
      { name: "JavaScript",     reason: "서버 없이 브라우저에서 바로 동작하는 간단한 UI가 필요해 사용" },
      { name: "HTML/CSS",       reason: "코드를 모르는 담당자도 직관적으로 쓸 수 있는 단순한 UI를 빠르게 구성하기 위해 사용" },
      { name: "Tailwind CSS",   reason: "디자인 결정 비용 없이 빠르게 UI를 완성하기 위해 선택" },
      { name: "PyInstaller",    reason: "사용자 PC에 Python 설치 없이 실행할 수 있어야 했기 때문에 선택" },
      { name: "GitHub Actions", reason: "태그 push 시 EXE 빌드·배포가 자동으로 이뤄져야 해서 선택" },
      { name: "Android ADB",    reason: "태블릿 전용 APK를 PC에서 자동 실행할 수 있는 유일한 방법이었기 때문에 사용" },
      { name: "Groq API (LLaMA)", reason: "무료 토큰 한도가 가장 넉넉해 오타 검증을 부담 없이 연동하기 위해 선택" },
    ],
    github: "",
    demo: "",
    role: "1인 개발 | 웅진씽크빅 인턴",
    period: "2026.01 - 2026.03",
    retrospective: "모르는 부분은 멘토분들과 팀장님께 조언을 구해가며 진행했고, 기획·개발·배포를 약 50일 만에 완주했습니다. 사내 보안 정책상 깃헙 코드 & 캡처본이 없습니다."
  },
  {
    title: "MA Cross 자동매매 봇",
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
    tech: [
      { name: "Python",       reason: "바이낸스 API 연동·데이터 처리·스케줄링을 하나로 통합하기에 가장 적합해 선택" },
      { name: "Flask",        reason: "봇과 동일 프로세스에서 모니터링 대시보드를 가볍게 서빙하기 위해 선택" },
      { name: "HTML5",        reason: "프레임워크 없이 대시보드 UI를 가볍게 구성하기 위해 사용" },
      { name: "CSS3",         reason: "Grid·Custom Properties로 반응형 레이아웃을 직접 제어하기 위해 사용" },
      { name: "JavaScript",   reason: "폴링·차트 업데이트 등 실시간 UI 인터랙션을 직접 구현하기 위해 사용" },
      { name: "Chart.js",     reason: "캔들 차트와 zoom/pan 플러그인을 빠르게 통합할 수 있어 선택" },
      { name: "pytest",       reason: "매매 로직 엣지 케이스를 자동 검증해 실거래 오류를 사전에 방지하기 위해 도입" },
      { name: "Oracle Cloud", reason: "24시간 무중단 운영이 필요했고 무료로 사용 가능한 서버를 확보하기 위해 선택" },
      { name: "systemd",      reason: "서버 재부팅 시 봇이 자동으로 재시작되도록 프로세스를 관리하기 위해 사용" },
    ],
    github: "",
    demo: "",
    role: "개인 프로젝트 | 기획·설계·개발 전담",
    period: "2026.03 ~ 진행 중",
    images: { pc: "/ma_bot.png", mobile: "" }
  }
]

type TechItem = { name: string; reason: string }

type Project = typeof projects[number] & {
  images?: { pc: string; mobile: string | "" }
  retrospective?: string
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
            <Image
              src="/epub_thumbnail.svg"
              alt="EPUB 마이그레이션 툴 프로세스"
              fill
              className="object-cover"
            />
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
            <div className="flex flex-col gap-1.5">
              {(project.tech as TechItem[]).map((tech) => (
                <div key={tech.name} className="flex items-baseline gap-2 text-sm">
                  <span className="px-2.5 py-1 rounded-md bg-secondary text-foreground font-medium shrink-0">
                    {tech.name}
                  </span>
                  {tech.reason && (
                    <span className="text-muted-foreground leading-relaxed">
                      {tech.reason}
                    </span>
                  )}
                </div>
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
                    <Image
                      src="/epub_thumbnail.svg"
                      alt="EPUB 마이그레이션 툴 프로세스"
                      fill
                      className="object-cover"
                    />
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
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {(project.tech as TechItem[]).slice(0, 3).map((tech) => (
                      <span
                        key={tech.name}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech.name}
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
