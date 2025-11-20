import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Backend 연동
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!')
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">
              지금 바로
              <br />
              <span className="gradient-text">무료 상담</span>을 받아보세요
            </h2>
            <p className="contact-description">
              AI PM으로 프로젝트를 시작하고 싶으신가요?
              <br />
              전문가와 함께 최적의 솔루션을 찾아보세요.
            </p>
            <div className="contact-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>무료 상담 및 견적 제공</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>24시간 내 답변 보장</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>맞춤형 솔루션 제안</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="홍길동"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">회사명</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="회사명을 입력해주세요"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">전화번호</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-1234-5678"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">문의 내용</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="프로젝트에 대해 간단히 설명해주세요"
              />
            </div>
            <button type="submit" className="submit-button">
              무료 상담 신청하기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

