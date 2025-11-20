import React, { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' or 'yearly'

  const plans = [
    {
      name: '스타터',
      description: '개인 프로젝트나 소규모 팀에 적합',
      monthlyPrice: 29000,
      yearlyPrice: 290000,
      yearlyMonthlyPrice: 24167,
      features: [
        '프로젝트 문서 생성 (월 10회)',
        '기본 명세서 & 구조도',
        '간단한 웹사이트 제작 지원',
        '이메일 지원',
        '기본 유지보수 (월 1회)'
      ],
      popular: false,
      gradient: 'gradient-1'
    },
    {
      name: '프로',
      description: '중소기업 및 전문가를 위한 플랜',
      monthlyPrice: 69000,
      yearlyPrice: 690000,
      yearlyMonthlyPrice: 57500,
      features: [
        '프로젝트 문서 생성 (무제한)',
        '상세 명세서 & 구조도 & 일정표',
        '전문 웹사이트 제작',
        'Cafe24/I\'mweb 플랫폼 추천',
        '우선 이메일 & 전화 지원',
        '정기 유지보수 (월 2회)',
        'SEO 최적화 포함'
      ],
      popular: true,
      gradient: 'gradient-2'
    },
    {
      name: '엔터프라이즈',
      description: '대규모 프로젝트와 기업을 위한 솔루션',
      monthlyPrice: 149000,
      yearlyPrice: 1490000,
      yearlyMonthlyPrice: 124167,
      features: [
        '프로젝트 문서 생성 (무제한)',
        '전문 명세서 & 구조도 & 일정표 & 스토리보드',
        '맞춤형 웹사이트 제작',
        '전문 플랫폼 컨설팅',
        '24/7 전담 지원',
        '정기 유지보수 (주 1회)',
        'SEO & 성능 최적화',
        '보안 감사 포함',
        '전담 PM 할당'
      ],
      popular: false,
      gradient: 'gradient-3'
    }
  ]

  const toggleBilling = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')
  }

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">합리적인 가격</span>으로
            <br />
            시작하는 웹 프로젝트
          </h2>
          <p className="section-description">
            월 단위 또는 연 단위 결제로 선택할 수 있습니다
          </p>
        </div>

        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>월간</span>
          <button
            className={`toggle-switch ${billingCycle === 'yearly' ? 'yearly' : ''}`}
            onClick={toggleBilling}
          >
            <span className="toggle-slider"></span>
          </button>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>
            연간
            <span className="discount-badge">20% 할인</span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${plan.gradient}`}
            >
              {plan.popular && (
                <div className="popular-badge">인기</div>
              )}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-price">
                <div className="price-amount">
                  {billingCycle === 'monthly' ? (
                    <>
                      <span className="price-number">
                        {plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="price-unit">원</span>
                      <span className="price-period">/월</span>
                    </>
                  ) : (
                    <>
                      <span className="price-number">
                        {plan.yearlyMonthlyPrice.toLocaleString()}
                      </span>
                      <span className="price-unit">원</span>
                      <span className="price-period">/월</span>
                      <div className="yearly-total">
                        (연 {plan.yearlyPrice.toLocaleString()}원)
                      </div>
                    </>
                  )}
                </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="plan-feature">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="plan-cta">
                시작하기
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>
            * 모든 플랜은 첫 달 무료 체험 가능합니다
            <br />
            * 웹사이트 제작은 프로젝트 규모에 따라 추가 비용이 발생할 수 있습니다
            <br />
            * 엔터프라이즈 플랜은 맞춤형 견적을 제공합니다
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

