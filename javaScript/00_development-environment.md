---
title: 자바스크립트 개발 환경 및 실행 환경
date: 
tags:
categories:
- [study,javascript]
---

<span> </span>

<!-- more -->

## 자바스크립트 실행환경

모든 브라우저는 자바스크립트를 실행할 수 있는 엔진을 가지고있다. node에서도 역시 작동한다. 브라우저와 node.js는 용도가 다르다. 



#### 차이점

브라우저 : 클라이언트 사이드 Web API 제공
node.js : node.js 고유의 api



## 웹 브라우저

### 웹 브라우저는 어떻게 작동하는가?

#### 작동순서

1. 사용자 도메인 입력 
2. DNS서버에서 ip주소로 변환하여 서버에 웹페이지를 요청(request)  (DNS 서버는 IP주소 변환 뿐만 아니라 위조된 사이트로 이동되는것을 막아주고 특정사이트에 접속되지 않거나 경고 메세지를 보여주는 페이지로 이동하는 등의 추가 동작을 한다.)
3. 서버의 응답을 받아(responsive) 브라우저에 표출 (브라우저는 서버로부터 html, css, javascript, 이미지 파일) 등 을 응답
4. 브라우저에 의해 HTML,CSS,javascript가 파싱되어 웹페이지에 표시
5. 이때 각 언어에 맞는 컴파일언어, 인터프리터 언어의 과정을 거치며 실행한다.
6. 태그의 위치에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있기때문에 script의 위치가 중요하기 떄문에 DOM이 완전히 생성 된 후 script가 실행될 수 있도록 body 최하단에 위치 시킨다. async 및 defer을 사용하면 파싱완료 후 실행할 수 있다.



### 개발자 도구

elements : dom과 css를 편집하여 렌더링된 뷰를 볼 수 있다.
console : 에러 및 console.log메소드 결과를 확인 할 수 있다.
sources : 로딩된 웹 페이지의 자바스크립트 코딩을 디버깅 할 수있다.
Network : 로딩 웹페이지에 관련 네트워크 요청 정보 및 퍼포먼스 확인할 수있다.
Application : 웹 스토리지, 세션, 쿠키를 확인하고 관리할 수 있다.



### 콘솔

에플리케이션이 정상적으로 동작하지 않을때 가장 우선적으로 살펴보아야한다.  에러가아니더라도 콘솔 함수를 사용하거나 자바스크립트 코드를 직접 입력하여 사용 할 수 있다.



### 디버깅

source패널에서 에러가 발생한 코드 왼쪽의 라인 번호를 클릭하여 브레이크 포인트(중단점)을 걸고 다시 버튼을 클릭하면 디버깅 모드에 들어가게 된다.

#### 참고사이트

Tools for Web Developers:콘솔사용 : https://developers.google.com/web/tools/chrome-devtools/console/?hl=ko

Tools for web Developers: Chrome Devtools 자바스크립트 디버깅 시작하기 : https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=ko



## Node.js

React와같은 라이브러리를 도입하거나 Babel, Webpack, ESlint 등 여러가지 를 사용할때 Node.js와 npm이 필요하다



### Node.js와 npm

브라우저 이외의 환경에서 동작 시킬 수 있는 자바스크립트 실행환경이 node.js이다. 주로 서버사이드 애플리케이션 개발에 사용되고 빌트인api를 제공한다. SPA(Single Page Application)에 적합하다.

npm(node pakage manager)은 자바스크립트 패키지 매니저이다. node.js에서 사용할 수 있는 모듈들을 패키지화 하여 저장소 역할과 패키지 설치 및 관리를 위해 cli를 제공한다.