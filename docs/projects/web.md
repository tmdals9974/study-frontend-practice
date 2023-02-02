# web0
  - 서비스 소개 페이지

## web0 실행 방법
  - npm install
  - npm run dev

# web1

## web1 실행 방법
  - 의존환경 : `mysql` 실행, `b2c-server` 실행, `cdn` 실행
  - npm install
  - npm run dev:all

## 폴더구조
  - config : 개발 환경에 따라 달라지는 설정을 관리하는 폴더
    - config.common.js : 항상 고정적인 값을 보관
    - config.develop.js : 개발환경
    - config.prod.js : 운영환경
  - pages
    - index.js : 메인 화면
    - sentry_sample_error.js : 유료 로그 프로그램 예제
  - cypress : 테스팅 솔루션

## 코멘트
  - config/index.js 처럼 index.js에서 내부 객체들을 모아서 export 하는 것이 좋아보임. 습관화 필요.
  - 강사님이 말하길, 디펜던시 최소화를 위해 프로젝트가 여러개로 나뉠경우 config을 remote화 하는 것이 좋다함. 서버에서 관리하든, npm 패키지로 관리하든, 솔루션을 사용하든..
  - _app.js의 ErrorBoundary를 알아두면 좋을 듯.