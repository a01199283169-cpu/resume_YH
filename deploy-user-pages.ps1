# GitHub User Pages 자동 배포 스크립트
# 사전 준비: https://github.com/new?name=a01199283169-cpu.github.io 에서
#           저장소 이름을 a01199283169-cpu.github.io 로 만들고 (Public, README 없음) 저장

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$remoteName = "userpages"
$remoteUrl  = "https://github.com/a01199283169-cpu/a01199283169-cpu.github.io.git"

# 기존 userpages remote 제거 후 재등록
git remote remove $remoteName 2>$null
git remote add $remoteName $remoteUrl

Write-Host "main 브랜치를 userpages 저장소로 푸시합니다..." -ForegroundColor Cyan
git push -u $remoteName main:main

Write-Host ""
Write-Host "완료! 1~3분 후 아래 주소에서 확인하세요:" -ForegroundColor Green
Write-Host "https://a01199283169-cpu.github.io/" -ForegroundColor Yellow
