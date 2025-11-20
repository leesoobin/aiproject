import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀 AI 기반 프로젝트 관리 솔루션</span>
          </div>
          <h1 className="hero-title">
            질문 한 줄로
            <br />
            <span className="gradient-text">웹 프로젝트의 모든 것</span>
            <br />
            완성하세요
          </h1>
          <p className="hero-description">
            AI PM이 프로젝트 개요부터 명세서, 구조도, 일정표, 스토리보드까지
            <br />
            모든 프로젝트 문서를 자동으로 생성해드립니다.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              무료로 시작하기
            </a>
            <a href="#how-it-works" className="btn-secondary">
              작동 방식 보기
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">프로젝트 완료</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">고객사</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">시간 절약</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">📋</div>
            <div className="card-text">프로젝트 명세서</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📊</div>
            <div className="card-text">구조도 & 일정표</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🎨</div>
            <div className="card-text">스토리보드</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

