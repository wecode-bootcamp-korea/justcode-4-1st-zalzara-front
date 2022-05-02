# **🏠ZALZARA HOME**

## **📌Intro**

- 잘자라 프로젝트는 최신 패션 트렌드에 기반한 홈웨어를 판매하는 [ZARA HOME](https://www.zarahome.com/kr/) 웹 사이트를 클론하는 프로젝트입니다.
- 한정된 인원 및 짧은 프로젝트 기간으로 디자인/일부 기능만 구현했습니다.
- 해당 프로젝트는 자라홈 웹사이트를 보고 구현할 부분을 직접 선정하여 초기 세팅부터 전부 직접 구현했습니다. 이에 따라 라이브러리 사용은 최대한 자제했습니다.
- Scrum 방식으로 구현했습니다.
- 데모 영상 추가 예정

### **Front-end/Back-end 소개**

### **✨개발 인원 및 기간**

- 개발기간 : 2022/03/28 ~ 2022/4/10
- 개발 인원 : 풀스택 3명, 프론트엔드 2명
- Front-end 깃허브 링크

[GitHub - wecode-bootcamp-korea/justcode-4-1st-zalzara-front](https://github.com/wecode-bootcamp-korea/justcode-4-1st-zalzara-front)

- Front-end 깃허브 링크

[GitHub - wecode-bootcamp-korea/justcode-4-1st-zalzara-back](https://github.com/wecode-bootcamp-korea/justcode-4-1st-zalzara-back)

### **✔️프로젝트 선정이유**

- 이 사이트는 자라홈 웹 사이트를 클론했습니다.
- 레이아웃이 미니멀하고 간단한 애니메이션을 구현해볼 수 있어서 선택했습니다.

### **🎥Demo Video**

_유투브 영상 링크, 이미지 게시 예정._

## **📌Tech Stack**

### **Front-end**

- React
- Sass
- Eslint
- Prettier

### **Back-end**

- Node.js
- Express
- Prisma
- MySQL

### **Teamwork**

- Github
- Notion
- Slack
- Zoom, Google Meet

## **📌Modeling**

![https://velog.velcdn.com/images/jhsol24/post/22c9e1d3-1c19-4e67-b0a8-867a4473771c/zalzara_db_diagram.png](https://velog.velcdn.com/images/jhsol24/post/22c9e1d3-1c19-4e67-b0a8-867a4473771c/zalzara_db_diagram.png)

## **📌Main Features**

### **1. Login, Sign up**

### **Front-end**

- 로그인, 회원가입 Modal 창 레이아웃
- `useState` 를 활용하여 로그인 창과 회원가입 창 상태 관리

### **Back-end**

- `useState` 를 활용하여 Validation 여부 관리
- 존재하는 User 의 경우 중복 가입이 되지 않도록 DB user 테이블에서 관리

## **2. Main**

### **Front-end**

- Category 리스트 레이아웃

### **Back-end**

- Category 테이블과 연동하여 API 구현

### **3. List**

### **Front-end**

- List 페이지 레이아웃
- `useState` 를 활용하여 마우스 오버에 따른 `장바구니에 담기` 버튼의 색상 변경 상태 관리

### **Back-end**

- Product 테이블과 연동하여 API 구현

### **4. Detail**

### **Front-end**

- Detail 페이지 레이아웃
- `useState` 를 활용하여 마우스 오버에 따른 `장바구니에 담기` 버튼의 색상 변경 상태 관리

### **Back-end**

- Product 테이블과 연동하여 API 구현

### 5. **Shop Cart**

### **Front-end**

- 장바구니 페이지 레이아웃
- 장바구니 / 나중에 쇼핑하기 탭 전환
- 수량 증가에 따른 총 가격 변화 상태 관리
- 장바구니 상품 삭제 버튼 구현

### **Back-end**

- ShopCart 테이블과 연동하여 API 구현

## 👨‍👩‍👧‍👦 Team

- http://github.com/sseul22
- https://github.com/haleyisfree
- https://github.com/jhsol24
- https://github.com/wjdghks963
- https://github.com/yeon55

## **📖Reference**

- 이 프로젝트는 [ZARA HOME](https://www.zarahome.com/kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
