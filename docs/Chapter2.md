# 2장 - 입사, 새로운 출발

## 1. 서비스 탐색
  - 회사에 입사 후 서비스 탐색 (회사명, 서비스명, 서비스 컨셉 등에 대한 소개)

## 2. 기술스택, 아키텍처 리뷰 1
  - 프로젝트 소스 제공 및 프로젝트 구조 소개
  - `backend`: backend 서버 프로젝트 폴더
    - `b2c-server`: nestjs와 typeORM을 이용한 client용 API 서버
    - `backoffice-server`: admin용 API
    - `cdn`: 정적 파일을 보관하고 있는 cdn API (실 운영 시, 물리서버나 S3같은 클라우드 서버 이용)
    - `domain`: MSA를 위한 도메인별 분리 디렉토리
  - `bootstrap`: 강의를 위해 제공되는 폴더 (db script 등)
  - `client`: react native를 이용한 앱 폴더
  - `web`: nodejs를 이용한 웹 폴더

## 3. 기술스택, 아키텍처 리뷰 2
  - b2c-server에 사용한 기술스택에 대한 간단한 리뷰
  - nestjs, typescript, typeORM, mysql, swagger (http://api.12shop.com:1202/api-docs)

## 4. 기술스택, 아키텍처 리뷰 3
  - b2c-server 환경 설정 및 실행 방법 안내 ([정리 문서](./projects/b2c-server.md))
  - 12shopapp 간단 소개 ([정리 문서](./projects/12shopapp.md))
  - web 간단 소개 ([정리 문서](./projects/web.md))