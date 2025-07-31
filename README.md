# VisitPlus Korean Landing Page

일본식 방문감정 서비스의 한국 런칭을 위한 랜딩 페이지입니다.

## 프로젝트 구조

```
visitplus-kr/
├── app/              # Next.js App Router
├── components/       # React 컴포넌트
├── lib/             # 유틸리티 함수
├── public/          # 정적 파일
└── types/           # TypeScript 타입 정의
```

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 정적 파일 생성 (Netlify 배포용)
npm run export
```

## 환경 설정

1. `.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SHEETS_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. Google Apps Script 설정:
   - Google Sheets를 생성
   - Apps Script 에디터 열기
   - `google-apps-script.js` 내용 복사
   - 웹 앱으로 배포하고 URL 복사

3. Google Analytics 4 설정:
   - GA4 속성 생성
   - 측정 ID (G-XXXXXXXXXX) 복사

## 배포

Netlify에 배포하려면:

1. GitHub에 코드 푸시
2. Netlify에서 새 사이트 생성
3. GitHub 리포지토리 연결
4. 환경 변수 설정
5. 배포

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Google Analytics 4
- Google Sheets (이메일 수집)