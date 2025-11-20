# AI PM 랜딩 페이지

웹 프로젝트를 위한 AI 기반 프로젝트 관리 솔루션 랜딩 페이지입니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 http://localhost:5173 에서 실행됩니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 주요 기능

- 반응형 디자인
- 모던한 UI/UX
- 부드러운 스크롤 애니메이션
- 문의 폼 (백엔드 연동 필요)

## 기술 스택

- React 18
- Vite
- CSS3

## GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 배포 방법

1. **GitHub 저장소 생성**
   ```bash
   # GitHub에서 새 저장소를 생성하세요
   ```

2. **코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/사용자명/저장소명.git
   git push -u origin main
   ```

3. **GitHub Pages 설정**
   - GitHub 저장소로 이동
   - Settings → Pages 메뉴 클릭
   - Source를 "GitHub Actions"로 선택
   - 저장하면 자동으로 배포가 시작됩니다

4. **배포 확인**
   - Actions 탭에서 배포 진행 상황 확인
   - 배포 완료 후 `https://사용자명.github.io/저장소명/` 에서 사이트 확인

### 로컬에서 빌드 테스트

```bash
# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 주의사항

- 저장소 이름이 변경되면 `vite.config.js`의 base 경로도 수동으로 수정해야 할 수 있습니다
- 첫 배포는 몇 분 정도 소요될 수 있습니다

