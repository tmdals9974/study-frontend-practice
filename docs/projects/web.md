# web0

- 서비스 소개 페이지

- ## web0 실행 방법

- npm install
- npm run dev

# web1

- ## web1 실행 방법
  - 의존환경 : `mysql` 실행, `b2c-server` 실행, `cdn` 실행
  - npm install
  - npm run dev:all
  - cypress를 이용한 테스트 : npm run test (web1 실행하고 해야함)
- ## 폴더구조
  - config : 개발 환경에 따라 달라지는 설정을 관리하는 폴더
    - config.common.js : 항상 고정적인 값을 보관
    - config.develop.js : 개발환경
    - config.prod.js : 운영환경
  - pages
    - index.js : 메인 화면
    - sentry_sample_error.js : 유료 로그 프로그램 예제
  - cypress : 테스팅 솔루션
- ## 코멘트
  - config/index.js 처럼 index.js에서 내부 객체들을 모아서 export 하는 것이 좋아보임. 습관화 필요.
  - 강사님이 말하길, 디펜던시 최소화를 위해 프로젝트가 여러개로 나뉠경우 config을 remote화 하는 것이 좋다함. 서버에서 관리하든, npm 패키지로 관리하든, 솔루션을 사용하든..
  - \_app.js의 ErrorBoundary를 알아두면 좋을 듯.
  - cypress를 이용하여 렌더링 된 화면을 다양하게 테스트 해볼 수 있음. 배민에서도 쓰고 있다 함. 공부해보면 좋을 듯.

# webview1.1

- ## webview1.1 실행방법
  - npm install
  - npm start
  - (storybook) npm run storybook
- ## webview1.1 구성환경
  - express (게이트웨이서버, CORS 회피 목적)
  - chakra ui (UI 라이브러리)
  - redux toolkit
  - storybook
  - 프로젝트 실행 시, package.json의 Proxy를 통해 프록시서버가 실행된다. 프론트에서 api 요청 시 express서버에 요청이 간다. gateway/server.js 파일을 보면, express서버는 단순 중계기 역할만 한다.
- ## 코멘트
  - storybook은 무조건 쓰라고 여러번 강조하심
  - 정말 간단한 express 서버를 만들어서 게이트웨이용으로 사용하셨음. CORS는 그냥 설정하면 되지않나 ..?? 일단 알아둘 것.
  - remote-config 서버와 통신하는 부분이 있음. MSA 구조일 때 필수라고 하심. 알아두면 좋을 듯.
  - redux는 프로젝트가 너무작으면 설정이 과하고, 너무커지면 너무복잡해지는 단점이 있으나, redux-toolkit을 쓰면 이런 부분이 대부분 해소됨. (대부분의 의사코드를 축약시키고 래핑해놨음.)
  - pages 폴더 내에 들어가는 page들은 컴포넌트가 아닌 컨테이너임. 비즈니스로직을 통해 데이터를 주입해야하며, 직접 컴포넌트처럼 UI를 다루는 부분은 없어야한다. (모든 ui를 컴포넌트화 하여 import하는 것이 맞다.)