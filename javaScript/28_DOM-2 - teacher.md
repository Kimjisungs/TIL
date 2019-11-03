## DOM

태그 안에 있어도 자바스크립트는 알아서 실행된다 

HTML콜렉션때문에 tag

document.querySelector 

도큐먼트 객체에 querySelector가 있다. document는 dom트리의 최상위다.

document.querySelect('input');

document.querySelect('input[type]') ;

요소는 $를 앞에 붙혀준다. 헝가리형 케이스

const $todos = document.querySelector('.todos');

$todos.innerHTML = `<li>HTML</li>`

$todos.removeChild($todos.childNodes[0]) 자식들을 지운다.

nodelist사입이다.

~~~javascript
$input = document.querySelect('input[type="text"]');

input.value //event 후에 나와야한다.
//하려면 함수를 알려줘야한다. eventLinster or eventHandler라고 한다. 
//check box radio box 는 change와 click이벤트이다.
$button.onclick = function () {
    console.log('click event')
}

const foo = function (){
    console.log('click event')
}

$button.onclick = foo;

$input.oninput = function(){
    console.log($input.value);
}

$button.onclick = function(){
    console.log($input.value);
}
~~~



