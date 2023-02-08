# b2c-server
  - client용 API 서버
  - 사용 기술 : nestjs, typescript, typeORM, mysql, swagger (http://localhost:1202/api-docs)

## setup
  - npm install

  - docker를 이용하여 mysql 설치 및 실행
  ```shell
  docker pull mysql:latest
  docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:latest
  ```
  
  - database 생성
  ```shell
  docker exec -it mysql-container bash
  mysql -u root -p
  CREATE DATABASE 12shop DEFAULT CHARACTER SET = 'utf8mb4';
  ```

  - typeORM과 연동(sync)
  ```shell
  npm run start:init
  ```

  - 프로젝트 실행 명령어
  ```shell
  npm run start:debug
  ```