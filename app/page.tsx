'use client'

import EmailForm from '@/components/EmailForm'
import FAQ from '@/components/FAQ'
import { event } from '@/lib/gtag'

export default function Home() {
  const scrollToForm = () => {
    event({
      action: 'cta_click',
      category: 'engagement',
      label: 'hero_cta',
    })
    
    const formSection = document.getElementById('email-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      {/* HERO 섹션 */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark mb-4">
            일본식 방문감정 서비스, 한국 첫 선!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            집에서 간편하게 → 당일 최고가 현금 지급
          </p>
          <button
            onClick={scrollToForm}
            className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            사전 오픈 웨이팅리스트 등록
          </button>
        </div>
      </section>

      {/* 3가지 핵심 베네피트 */}
      <section className="py-16 px-4">
        <div className="max-w-container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">방문만으로 무료 감정</h3>
              <p className="text-gray-600">전문가가 직접 찾아갑니다.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">즉시 현금 지급</h3>
              <p className="text-gray-600">감정가 OK → 그 자리에서 현금.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">안전·신뢰 일본식 프로세스</h3>
              <p className="text-gray-600">15년 노하우 / 개인정보 암호화.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 취급 카테고리 슬라이더 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">취급 품목</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4 pb-4 min-w-max mx-auto">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm whitespace-nowrap">
                럭셔리 브랜드 가방 · 시계 · 주얼리
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm whitespace-nowrap">
                전통 한복 · 골동품 · 일본 앤틱
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 이용 절차 */}
      <section className="py-16 px-4">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">이용 절차</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <p className="font-medium">온라인 신청</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <p className="font-medium">24시간 내 일정 확정</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <p className="font-medium">방문·감정</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <p className="font-medium">현금 수령</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">자주 묻는 질문</h2>
          <FAQ />
        </div>
      </section>

      {/* CTA 섹션 */}
      <section id="email-form" className="py-20 px-4">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">사전 오픈 웨이팅리스트 등록</h2>
          <p className="text-gray-600 mb-8">이메일 주소만 입력하세요</p>
          <EmailForm />
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-container mx-auto text-center text-sm text-gray-600">
          <p>VisitPlus © 2025 | 베타 서비스 (수요 조사용)</p>
          <p className="mt-2">
            문의: info@visitplus.kr | 개인정보처리방침(간략)
          </p>
        </div>
      </footer>
    </main>
  )
}