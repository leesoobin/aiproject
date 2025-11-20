import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI PM 서비스',
      description: '프롬프트 한 줄로 프로젝트의 모든 문서를 자동 생성',
      features: [
        '프로젝트 개요 자동 작성',
        '상세 명세서 생성',
        '시스템 구조도 제작',
        '프로젝트 일정표 작성',
        '스토리보드 자동 생성',
        '요약 제안서 제공'
      ],
      gradient: 'gradient-1'
    },
    {
      icon: '💻',
      title: '웹 프로젝트 제작',
      description: '간단한 웹 프로젝트부터 커머스까지 전문 제작',
      features: [
        '맞춤형 웹사이트 제작',
        'Cafe24 / Imweb 추천',
        '반응형 디자인',
        'SEO 최적화',
        '빠른 배포 지원',
        '사용자 친화적 UI/UX'
      ],
      gradient: 'gradient-2'
    },
    {
      icon: '🔧',
      title: '유지보수 서비스',
      description: '완성된 프로젝트를 안정적으로 관리하고 개선',
      features: [
        '정기적인 업데이트',
        '버그 수정 및 개선',
        '보안 패치 적용',
        '성능 최적화',
        '콘텐츠 관리 지원',
        '24/7 기술 지원'
      ],
      gradient: 'gradient-3'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">
            세 가지 핵심 서비스로
            <br />
            <span className="gradient-text">완벽한 웹 프로젝트</span>를 완성하세요
          </h2>
          <p className="section-description">
            AI 기반 프로젝트 관리부터 제작, 유지보수까지 원스톱 솔루션을 제공합니다
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.gradient}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">
                자세히 알아보기 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

