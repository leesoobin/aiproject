import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포를 위한 base 경로 설정
// 저장소 이름에 맞게 자동으로 설정됩니다
// 로컬 개발 시에는 '/'로 작동합니다
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
const base = repositoryName ? `/${repositoryName}/` : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
})

