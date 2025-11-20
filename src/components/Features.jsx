import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: '즉시 문서 생성',
      description: '복잡한 쿼리 없이 자연어 질문만으로 모든 프로젝트 문서를 즉시 생성합니다.'
    },
    {
      icon: '🎯',
      title: '정확한 명세서',
      description: 'AI가 프로젝트 요구사항을 분석하여 상세하고 정확한 명세서를 자동 작성합니다.'
    },
    {
      icon: '📊',
      title: '시각적 구조도',
      description: '시스템 구조도와 일정표를 자동으로 생성하여 프로젝트를 한눈에 파악할 수 있습니다.'
    },
    {
      icon: '🎨',
      title: '전문 스토리보드',
      description: 'UI/UX 전문가 수준의 스토리보드를 자동 생성하여 디자인 작업을 빠르게 시작합니다.'
    },
    {
      icon: '🛠️',
      title: '최적 플랫폼 추천',
      description: '프로젝트 특성에 맞는 최적의 플랫폼(Cafe24, I\'mweb 등)을 자동으로 추천합니다.'
    },
    {
      icon: '🔄',
      title: '지속적 유지보수',
      description: '완성된 프로젝트를 지속적으로 관리하고 개선하여 최상의 상태를 유지합니다.'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">강력한 기능</span>으로
            <br />
            프로젝트를 더욱 쉽게
          </h2>
          <p className="section-description">
            AI 기반의 스마트한 기능들로 웹 프로젝트의 모든 과정을 간소화합니다
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

