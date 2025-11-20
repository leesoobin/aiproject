import React, { useState } from 'react'
import './PromptInput.css'

const PromptInput = () => {
  // PM 전용 프롬프트 상태
  const [pmPrompt, setPmPrompt] = useState('')
  const [pmLoading, setPmLoading] = useState(false)
  const [pmSubmitted, setPmSubmitted] = useState(false)

  // 웹페이지 제작 & 유지보수 전용 프롬프트 상태
  const [webPrompt, setWebPrompt] = useState('')
  const [webLoading, setWebLoading] = useState(false)
  const [webSubmitted, setWebSubmitted] = useState(false)

  const handlePmSubmit = async (e) => {
    e.preventDefault()
    if (!pmPrompt.trim()) return

    setPmLoading(true)
    setPmSubmitted(true)

    // TODO: Backend API 연동
    setTimeout(() => {
      setPmLoading(false)
    }, 2000)
  }

  const handleWebSubmit = async (e) => {
    e.preventDefault()
    if (!webPrompt.trim()) return

    setWebLoading(true)
    setWebSubmitted(true)

    // TODO: Backend API 연동
    setTimeout(() => {
      setWebLoading(false)
    }, 2000)
  }

  const handlePmReset = () => {
    setPmPrompt('')
    setPmSubmitted(false)
    setPmLoading(false)
  }

  const handleWebReset = () => {
    setWebPrompt('')
    setWebSubmitted(false)
    setWebLoading(false)
  }

  return (
    <section className="prompt-input-section">
      <div className="prompt-container">
        <div className="prompt-header">
          <h2 className="prompt-title">
            지금 바로 <span className="gradient-text">프롬프트</span>를 입력해보세요
          </h2>
          <p className="prompt-description">
            원하는 서비스에 맞는 프롬프트를 선택하여 입력하세요
          </p>
        </div>

        <div className="prompt-boxes">
          {/* PM 전용 프롬프트 */}
          <div className="prompt-box">
            <div className="prompt-box-header">
              <div className="prompt-box-icon">🤖</div>
              <h3 className="prompt-box-title">PM 전용 프롬프트</h3>
              <p className="prompt-box-subtitle">
                프로젝트 문서를 자동으로 생성합니다
              </p>
            </div>
            <form onSubmit={handlePmSubmit} className="prompt-form">
              <div className="input-wrapper">
                <textarea
                  className="prompt-textarea"
                  placeholder="예: 쇼핑몰 웹사이트 프로젝트를 진행하려고 합니다. 상품 등록, 장바구니, 결제 기능이 필요하고, 3개월 내에 완료해야 합니다."
                  value={pmPrompt}
                  onChange={(e) => setPmPrompt(e.target.value)}
                  rows="4"
                  disabled={pmLoading}
                />
                <div className="input-footer">
                  <span className="input-hint">
                    💡 프로젝트 목적, 주요 기능, 일정, 타겟 사용자 등을 설명해주세요
                  </span>
                  {pmSubmitted && !pmLoading && (
                    <button
                      type="button"
                      onClick={handlePmReset}
                      className="reset-button"
                    >
                      다시 입력하기
                    </button>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="submit-prompt-button pm-button"
                disabled={!pmPrompt.trim() || pmLoading}
              >
                {pmLoading ? (
                  <>
                    <span className="spinner"></span>
                    생성 중...
                  </>
                ) : pmSubmitted ? (
                  '다시 생성하기'
                ) : (
                  '문서 생성하기 ✨'
                )}
              </button>
            </form>

            {pmSubmitted && !pmLoading && (
              <div className="result-preview">
                <div className="result-header">
                  <span className="result-icon">✅</span>
                  <span>생성된 문서 미리보기</span>
                </div>
                <div className="result-items">
                  <div className="result-item">
                    <span className="result-item-icon">📋</span>
                    <span>프로젝트 개요</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">📄</span>
                    <span>상세 명세서</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">📊</span>
                    <span>시스템 구조도</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">📅</span>
                    <span>프로젝트 일정표</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">🎨</span>
                    <span>스토리보드</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">📝</span>
                    <span>요약 제안서</span>
                  </div>
                </div>
                <p className="result-note">
                  * 실제 문서는 백엔드 연동 후 생성됩니다
                </p>
              </div>
            )}
          </div>

          {/* 웹페이지 제작 & 유지보수 전용 프롬프트 */}
          <div className="prompt-box">
            <div className="prompt-box-header">
              <div className="prompt-box-icon">💻</div>
              <h3 className="prompt-box-title">웹페이지 제작 & 유지보수 전용 프롬프트</h3>
              <p className="prompt-box-subtitle">
                웹사이트 제작 및 유지보수 서비스를 신청합니다
              </p>
            </div>
            <form onSubmit={handleWebSubmit} className="prompt-form">
              <div className="input-wrapper">
                <textarea
                  className="prompt-textarea"
                  placeholder="예: 패션 브랜드 쇼핑몰을 만들고 싶습니다. 반응형 디자인이 필요하고, Cafe24나 I'mweb 같은 플랫폼을 사용하고 싶어요."
                  value={webPrompt}
                  onChange={(e) => setWebPrompt(e.target.value)}
                  rows="4"
                  disabled={webLoading}
                />
                <div className="input-footer">
                  <span className="input-hint">
                    💡 원하는 웹사이트 종류, 디자인 스타일, 필요한 기능, 플랫폼 선호도 등을 설명해주세요
                  </span>
                  {webSubmitted && !webLoading && (
                    <button
                      type="button"
                      onClick={handleWebReset}
                      className="reset-button"
                    >
                      다시 입력하기
                    </button>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="submit-prompt-button web-button"
                disabled={!webPrompt.trim() || webLoading}
              >
                {webLoading ? (
                  <>
                    <span className="spinner"></span>
                    처리 중...
                  </>
                ) : webSubmitted ? (
                  '다시 신청하기'
                ) : (
                  '홈페이지 만들기 🚀'
                )}
              </button>
            </form>

            {webSubmitted && !webLoading && (
              <div className="result-preview web-result">
                <div className="result-header">
                  <span className="result-icon">✅</span>
                  <span>신청이 접수되었습니다</span>
                </div>
                <div className="result-items">
                  <div className="result-item">
                    <span className="result-item-icon">📧</span>
                    <span>이메일로 견적서 발송</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">📞</span>
                    <span>24시간 내 연락 드립니다</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">🎨</span>
                    <span>맞춤형 디자인 제안</span>
                  </div>
                  <div className="result-item">
                    <span className="result-item-icon">🛠️</span>
                    <span>최적 플랫폼 추천</span>
                  </div>
                </div>
                <p className="result-note">
                  * 전문가가 검토 후 빠른 시일 내에 연락드리겠습니다
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromptInput

