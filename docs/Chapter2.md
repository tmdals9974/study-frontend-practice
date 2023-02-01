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

## 5. 첫 번째 프로젝트 분석 및 기획

- ### 모든 기록을 문서로 남겨라. `RFC`를 작성하라.
  - 각종 Reference 자료 (공식문서, 포스팅 등)
  - Timeline (기획 기간, 개발 기간, 운영 기간 등)
  - 개요
  - 목표 (서비스의 목표, 기대 효과 등)
  - 요구사항
  - 개발 (핵심목표, 적정기술, 위험요소, 검토기술, 솔루션(최종선택기술) 등)

## 6. PoC vs prototype

- 프로젝트 진행 전, 리스크 체크 필요.
- ### POC (Proof of Concept): 아이디어가 기술적인 관점에서 실현이 가능한지 확인하는 것
  - `최우선 목표`: 프로젝트의 `불확실한 요소를 제거`하는 것. 구현 가능한 기술과 구현 가능성이 `미지수`인 알 수 없는 기술을 분리한다.
    - 미지수의 예: 실현 가능한 기술인가? 성능이 필요한 수준인가?
- ### prototype: 아이디어를 실체화 하는 것
  - 실체를 만들어 아이디어의 정합성을 확인하는 것이 목표이기 때문에 구현 방법과 기술이 중요하지 않다. `시간`이 가장 중요하다.

## 7. 기술 스택 선택 - SSR vs CSR
  - 프로젝트 개발을 위한 기술 선택 시, 프로젝트 요구사항에 의거하여 선택하라. 관성적으로 혹은 외부 인지도에 따라 선택하는 것은 최악임.
  - 고려사항
    - `SEO`: Cross linking, title tag, meta description, URL canonicalization, Page Speed, Mobile Compatibility, OpenGraph
    - [`Web Vitals`](https://web.dev/i18n/ko/vitals)
    - 핵심 구현 방식
      - `CSR`
        - 장점: Backendless, CDN, Traffic (백엔드가 없는 정적파일이기에 CDN으로 호스팅이 가능하며, CDN은 대부분 트래픽 처리에 특화됨. 백엔드를 통해 배포하게 되면 트래픽 처리를 신경써야함), Cache, 초기 로딩 후 빠른 인터렉션
        - 단점: 초기 로딩 최적화에 많은 비용, SEO 대응 한계, 멀티 도메인 API 연동 시 추가 아키텍처 필요 (CORS, Gateway Server)
      - `SSR`
        - 장점: SEO 대응 용이, 빠른 초기 로딩 (무조건은 아님), 멀티 도메인 API 연동 용이
        - 단점: 렌더링 백엔드 필요, 조금 더 복잡한 아키텍처, 트래픽 대응 부담
    - SSR 솔루션
      - `React SSR`
        - Nodejs 서버를 이용하여 React만으로도 SSR 구현이 가능함. 직접 솔루션을 개발하며 시행착오를 겪지만 기능 제약은 없음.
      - `Next.js`
        - React SSR용 프레임워크. 빠른 개발이 가능하지만 프레임워크에서 지원하지 않는 기능은 개발할 수 없음.