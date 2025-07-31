'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendToSheets } from '@/lib/sendToSheets'
import { event } from '@/lib/gtag'

type FormData = {
  email: string
}

export default function EmailForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const result = await sendToSheets(data.email)

    if (result.success) {
      event({
        action: 'submit_email',
        category: 'engagement',
        label: 'waitlist_signup',
      })
      setSubmitStatus('success')
      reset()
    } else {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="example@email.com"
          {...register('email', {
            required: '이메일 주소를 입력해주세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 주소를 입력해주세요',
            },
          })}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '등록 중...' : '등록하기'}
        </button>
      </div>
      
      {errors.email && (
        <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
      )}
      
      {submitStatus === 'success' && (
        <p className="mt-2 text-sm text-green-600">등록이 완료되었습니다!</p>
      )}
      
      {submitStatus === 'error' && (
        <p className="mt-2 text-sm text-red-600">등록에 실패했습니다. 다시 시도해주세요.</p>
      )}
    </form>
  )
}