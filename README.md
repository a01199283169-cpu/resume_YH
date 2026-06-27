# 박연희 — 아파트 관리사무소장 이력서

정적 웹 이력서·자기소개서 사이트입니다.

## GitHub Pages 설정 (404 해결)

코드는 이미 GitHub에 올라가 있습니다. **아래 설정을 한 번만** 하면 사이트가 공개됩니다.

### 방법 1 — main 브랜치 (가장 간단, 권장)

1. [Settings → Pages](https://github.com/a01199283169-cpu/resume_YH/settings/pages) 로 이동
2. **Build and deployment** → **Source** → **Deploy from a branch**
3. **Branch** → `main` 선택, **Folder** → `/ (root)` 선택
4. **Save** 클릭
5. 1~3분 후 접속: **https://a01199283169-cpu.github.io/resume_YH/**

### 방법 2 — gh-pages 브랜치 (Actions 자동 배포)

Actions가 `gh-pages` 브랜치를 만들어 둔 경우:

1. 위와 같이 **Settings → Pages** 이동
2. **Source** → **Deploy from a branch**
3. **Branch** → `gh-pages` 선택, **Folder** → `/ (root)` 선택
4. **Save** 클릭

> **주의:** Source를 **GitHub Actions** 로 두면 Pages가 켜지지 않을 수 있습니다.  
> 반드시 **Deploy from a branch** 를 선택하세요.

## 로컬 미리보기

```powershell
cd c:\Users\82103\Desktop\spec
python -m http.server 8080
```

브라우저에서 http://localhost:8080

## 인쇄

Ctrl+P → A4 **가로(Landscape)** → **배경 그래픽** 켜기
