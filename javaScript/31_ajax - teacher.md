지금 실행하고 있는 파일의 위치의 경로 : ./  
 (상대경로: 비교할 주소는 현재실행하고 있는 파일위치)

서버의 경로 : /-/   
(절대경로: 비교할 주소가 없다.)    

지금 실행하고 있는 파일의 위치의 js/폴더 : js / o.js  
 (상대경로: 비교할 주소는 현재실행하고 있는 파일위치)

나보다 위  : /

두칸올라가라 : ../ ../

## SERVER 와 Ajax 통신

서버마다 식별자가 있어야한다.  그것을 ip라고 한다. 

내 컴퓨터의 ip는 회사에서 ip를 보내줌.  

여러명에서 돌려쓰니 ip를 사야함. ip를 여러개 가지고있고 서버를 가지고 있는곳이 호스팅 업체, 여기에 방을 나눠서 나눠줌. 그래서 도메인이라는것으로 접근

도메인과 ip는 맵핑되어야한다.  이것을 운용하는 컴퓨터 서버가 있는데 이것을 dns서버라고한다. 여기로 접속해서 이 ip로 서버를 찾아간다. 접속하면 서버가 처음왔나보다 하고 루트 폴더에있는 index.html을 줘야지 

하드디스크의 물리적인 파일이 메모리에 올라옴 그다음 클라이언트에 아스키코드가 보내짐(아스키코드는 문자열).  단위가 있는데 그것은 패킷. ex 5006패킷 받았다. -> 브라우저는 메모리에 올림. -> 메모리에올라온 것을 파싱함(이것을 퉁쳐서 다운로드라고함) -> 

해석이되다가 링크를 만나면 서버에요청하고, src를 만나면 서버에요청하고받고 한다. 

ajax는 통신하는 수단을 배우는 것이다. 백엔드를 모르면 반쪽뿐이 모르는것.  request가 가면 response가 와야한다.

## npm

npm : pakage.json 
명령어 : npm init -y 

pakage.json 오픈소스 사용

Node.js를 깔면 npm이 깔린다. npm은 node pakage maneger

npm이 모든 패키지를 가지고 있다.

명령어 : npm install express치면 

dependencies에 express버전이 나옴.



## Express - nodejs 프레임워크중 1등

npm에서 express 치면 나옴

pakage.json을 프로젝트 폴더에 만든 후 

git bash에 npm install express를 깔면 나는 npm install만 하면 된다.

팀장이 파일을 주면 npm i 만하면 된다.  

localhost란? 

## Ajax

**메소드** 

1. GET : 서버에 있는 데이터를 받고싶을때, 조회하고 싶을때 : /todos (모든 투두스를 다가지고 온다)
   /todos/1 (todos중에서 id가 1인놈만 가지고온다) 
   /todos/active (todos중 active인것만) 정해진것이 아니라 서로 약속,
   (싹다 지울 수도있고 부분만 지울 수 있다. playload가 없다)

2. POST : 붙힌다. 편지를 쓴는데 주면서 response를 받을때, 대부분 create를 할때, add todo 할때 새로운 것을 만들때, 데이터베이스에 추가한 할일을 준다.정보를 줘야한다 그정보를 payload라고 한다. post를 할때는 반드시 payload가 있어야 한다. payload를 가지고 백엔드가 데이터를 create한다.

3. PUT : 데이터 전체를 고칠때,
   ex) id가 1번인 할일을 고치는데, content도 고치고 completed도 고칠떄 (playload가 있어야한다)

4. PATCH : 데이터 일부를 고칠때, 
   ex) id가 1번인 할일을 고치는데, content만 고친다. (playload가 있어야한다)

   DELETE : 

### rest api

클라이언트와 서버가 소통하기 위한 창구

## ajax

통신이 이루어질때마다 바뀌는 부분만 받기 위해 데이터만 받아서 front-end가 처리한다.  현재는 폼테그를 쓰지않고 버튼을 누르면 이벤트를 잡아서 이벤트 핸들러 내부에서 요청을 만들어서 보낸다. 백엔드가 보내준 respons를 잡아서 그 데이터를 랜더함수같은것을 만들어서 끼워넣는다.

1. request -> response -> 뿌리기

Header의 컨텐츠타입에 따라 백엔드에서 처리한다. http request책

JSON CORS 시험 문제

json 형태로 주고받는다.