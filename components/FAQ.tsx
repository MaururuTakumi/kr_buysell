'use client'

import { useState } from 'react'
import { event } from '@/lib/gtag'

const faqs = [
  {
    question: '방문감정 비용은?',
    answer: '무료입니다.',
  },
  {
    question: '감정 후 거절 가능?',
    answer: '가능합니다. 비용은 없습니다.',
  },
  {
    question: '인증서 없으면?',
    answer: '가능합니다.',
  },
  {
    question: '대상 지역?',
    answer: '서울/경기 우선 (순차 확대 예정)',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
    
    event({
      action: 'faq_click',
      category: 'engagement',
      label: faqs[index].question,
    })
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-text-dark">
              Q. {faq.question}
            </span>
            <span className="text-gray-400 text-xl">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600">A. {faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}