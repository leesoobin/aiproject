import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      quote: '프로젝트 문서 작성에 소요되던 시간이 90% 이상 줄었어요. AI PM 덕분에 실제 개발에 집중할 수 있게 되었습니다.',
      author: '스타트업 대표',
      company: 'IT 기업'
    },
    {
      quote: '비전문가도 전문가처럼 프로젝트 명세서와 구조도를 만들 수 있었습니다. 정말 혁신적인 도구예요!',
      author: '마케팅 담당자',
      company: '리테일 기업'
    },
    {
      quote: '생성된 문서를 바탕으로 웹사이트 제작까지 원스톱으로 진행할 수 있어서 정말 편리했습니다.',
      author: '사업주',
      company: '커머스 기업'
    }
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">
            이미 많은 기업이
            <br />
            <span className="gradient-text">혁신을 경험</span>하고 있습니다
          </h2>
          <p className="section-description">
            AI PM을 도입한 기업들의 생생한 후기를 확인해보세요
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-company">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

