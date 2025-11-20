import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">AI PM</span>
            </div>
            <p className="footer-description">
              질문 한 줄로 완성하는 웹 프로젝트 솔루션
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">서비스</h4>
            <ul className="footer-links">
              <li><a href="#services">AI PM 서비스</a></li>
              <li><a href="#services">웹 프로젝트 제작</a></li>
              <li><a href="#services">유지보수 서비스</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">회사</h4>
            <ul className="footer-links">
              <li><a href="#how-it-works">작동 방식</a></li>
              <li><a href="#features">주요 기능</a></li>
              <li><a href="#contact">문의하기</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">연락처</h4>
            <ul className="footer-links">
              <li>이메일: contact@aipm.com</li>
              <li>전화: 02-1234-5678</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AI PM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

