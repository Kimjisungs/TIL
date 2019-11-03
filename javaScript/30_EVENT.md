## EVENT

input태그에서 텍스트를 누르면 이벤트는 window꼭대기서부터 타고 내려온다.  모두 이벤트를 알아 차릴 수 있다. 

버블링과 캡쳐링 둘다 잡으면 이벤트가 두번발생하니, 

둘중하나를 잡는데 그 중 캡쳐링을 잡는다.  왜 이런식으로 동작 하느냐..

~~~
   <ul class="todos"></ul>
  <button type="button" class="add">add</button>

  <script>
    const $todos = document.querySelector('.todos');
    const $addButton = document.querySelector('.add');

    $addButton.addEventListener('click', function () {
      $todos.innerHTML += `<li class="todo">test<button class="remove">X</button></li>`;
    });

    //함수는 this를 todos로 받는다.
    $todos.addEventListener('click', function (e) {
      //이벤트의 콜백함수는 호출할때 매개변수를 주는데 이벤트 객체 하나를 준다 이벤트 정보를 담고있는 객체.
      //console.log(e.target.className === 'remove'); //event객체의 타겟 이벤트를 발생시킨 타겟, 이벤트를 발생시킨 놈을 알 수 있다. 캡쳐링
      //만약 remove클래스를 가지고 있다면 하고, 아니면 무시한다.

       //여러개가 있던 하나만있던 포함되어있는걸 본다.
      //  if (e.target.classList.contains('remove')) e.target.parentNode.remove();
      //  else return;
      if (!e.target.classList.contains('remove')) return;
      // else e.target.parentNode.remove();
      this.removeChild(e.target.parentNode);
    })
~~~





![event-loop](https://poiemaweb.com/img/event-loop.png)

노란색은 자바스크립트 엔진 : 

이벤트들은 ECMAScript에 설명이 되어있을까 안되어있을까, core만 담당하고 있다. 환경에 좌지우지 되는것을 host객체라고 한다. 

실행 컨텍스트 스택은 ECMAScript 관리 대상이다. 실행 컨텍스트 스택은 콜 스택이라고 부른다.  이벤트핸들러가 담긴 곳을 EventQue에 담긴다. 이 아이는 선입 선출이다. 이벤트가 실행되면 eventQue에 들어간다. 그리고 바로 실행 컨텍스트에 들어간다.먼저들어간게 먼저 빠지게 되어있다. EventQue는 이벤트가 발생하면 실행컨텍트스 스택에 들어간다. call stack이 싹 비웠을때 와야한다.  비워있을때 오지않으면 이벤트 때문에 멈춰버리고 실행된다. 실행 컨텍스트 스택이 하나있는건 한번에 하나씩 뿐이 하지 못한다. 이것을 싱글 스레드라고 한다. 자바스크립트 엔진은 싱글 스레드로 동작하게 되어있다. 싱글 스레드 이지만 동시성을 갖는다. 한번에 여러가지 일을 하는것 처럼 보이고 동시성을 같기위해 위와같은 구조를 갖는다.  자바스크립트는 한번에 하나뿐이 하지 못한다. 예를 들어 클릭했을때 실행컨텍스트로 가서 실행 된다. 큐 선입 선출인 이유는 먼저 클릭된놈이 먼저 나와야하고, 스택은 먼저들어간놈이 나중에 나와야한다.

onlaod = 돔트리가 완료되고 모든 resouce가 완료될때, 이미지,폰트,javascript

css도되고 javascript도 되는 이벤트는 무조건 css로 한다.

method = "GET" POST 상수의 의미기때문에 대문자를 쓴다.

POST는 URL뒤가 안보이게 request바디에 담겨들어간다.

GET은 &키 값 & 키 값 붙혀들어간다. 

GET르 바뀌면 request를 보내면 reponse바꾸는데 그러면 깜박거린다. url이 변하기 때문에.

ajax를 사용하면 주소창을 건들지 않는다. 주소창이 바뀌면 깜박거리기때문

다만 주소창을 다 다르게 하기위해 hash bang이라는것을 쓴다. 이걸 쓰지 않기 위해서  이건 나중에. 페이지를 이동할때 발생하는 문제. 이것을 rout라고한다 라우트라고 한다. 얘네들은 다 framework의 도움을 받아서 하는게 best다. 

이벤트 내에서 event.currentTarget === this와 같다.