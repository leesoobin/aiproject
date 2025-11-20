import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: '프롬프트 입력',
      description: '원하는 웹 프로젝트에 대해 간단히 설명해주세요. AI PM이 모든 것을 이해합니다.',
      icon: '💬'
    },
    {
      number: '02',
      title: 'AI 자동 생성',
      description: '프로젝트 개요, 명세서, 구조도, 일정표, 스토리보드가 자동으로 생성됩니다.',
      icon: '⚡'
    },
    {
      number: '03',
      title: '프로젝트 제작',
      description: '생성된 문서를 바탕으로 전문가가 웹 프로젝트를 제작하고 배포합니다.',
      icon: '🚀'
    },
    {
      number: '04',
      title: '유지보수',
      description: '완성된 프로젝트를 지속적으로 관리하고 개선하여 최상의 상태를 유지합니다.',
      icon: '🔧'
    }
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">
            간단한 <span className="gradient-text">4단계</span>로
            <br />
            프로젝트를 완성하세요
          </h2>
          <p className="section-description">
            복잡한 과정 없이, 질문 한 줄로 시작하는 웹 프로젝트
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

