import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">AI PM</span>
        </div>
        <nav className="nav">
          <a href="#services" className="nav-link">서비스</a>
          <a href="#how-it-works" className="nav-link">작동 방식</a>
          <a href="#features" className="nav-link">주요 기능</a>
          <a href="#contact" className="nav-link">문의하기</a>
        </nav>
        <a href="#contact" className="cta-button">
          무료 상담받기
        </a>
      </div>
    </header>
  )
}

export default Header

