# 박연희 — 아파트 관리사무소장 이력서

정적 웹 이력서·자기소개서 사이트입니다.

---

## ⚠️ 404가 뜨는 이유

GitHub API 확인 결과, 저장소 **`has_pages: false`** — Pages가 **아직 한 번도 켜지지 않았습니다.**  
코드·브랜치(`main`, `gh-pages`)는 정상입니다. **설정만 하면** 바로 열립니다.

---

## ✅ 방법 A — User Pages (가장 쉬움, Settings 불필요)

저장소 이름이 **`사용자명.github.io`** 이면 Pages가 **자동**으로 켜집니다.

### 1단계 — 저장소 만들기

아래 링크 클릭 → **Create repository** (README 추가 ❌, Public ✅)

👉 **https://github.com/new?name=a01199283169-cpu.github.io**

| 항목 | 값 |
|------|-----|
| Repository name | `a01199283169-cpu.github.io` (그대로) |
| Public | ✅ |
| Add README | ❌ 체크 해제 |

### 2단계 — 배포 스크립트 실행

PowerShell에서:

```powershell
cd c:\Users\82103\Desktop\spec
.\deploy-user-pages.ps1
```

### 3단계 — 접속 (1~3분 후)

**https://a01199283169-cpu.github.io/**

---

## ✅ 방법 B — resume_YH 프로젝트 Pages

### 1단계

👉 **https://github.com/a01199283169-cpu/resume_YH/settings/pages**

### 2단계 — 반드시 이렇게

| 항목 | 선택 |
|------|------|
| **Source** | **Deploy from a branch** ← GitHub Actions ❌ |
| **Branch** | `main` |
| **Folder** | `/ (root)` |

### 3단계

**Save** 클릭 → 1~3분 후:

**https://a01199283169-cpu.github.io/resume_YH/**

### 성공 확인

Settings → Pages 상단에 **"Your site is live at …"** 문구가 보여야 합니다.  
없으면 Save를 누르지 않았거나 Source가 **GitHub Actions** 로 되어 있는 것입니다.

---

## 로컬 미리보기

```powershell
cd c:\Users\82103\Desktop\spec
python -m http.server 8080
```

http://localhost:8080

## 인쇄

Ctrl+P → A4 **가로** → **배경 그래픽** 켜기
