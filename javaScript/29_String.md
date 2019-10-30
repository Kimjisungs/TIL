## String

~~~javascript
const strObj = new String('Lee');
console.log(strObj)
// String {0: 'L', 1: 'e', 2: 'e', length: 3
~~~

이터러블 

~~~
NodeList, HTMLCollection
이터러블은 for of로 순회할 수 있다. 
문자열도 for of로 순회할 수 있고,
NodeList HTMLCollection 도 for of로 순회할 수 있고
spread로 사용할 수 있다. 

문자 객체는 유사배열이면서 이터러블이다
arguments는 이터러블이다. for of, for문으로 돌릴 수 있다. 
랭스와 키가 있으면된다. 
es6의 제안하는 문법은 for문을 돌거면 자료구조를 배열을 비롯한 이터러블로 만들어라. for of로 돌아라. for문은 안쓰는게 좋다. string객체는 이터러블이다. for문, for of로 돌 수 있다. 
charAt() char문자를 얘기한다. 여러개 문자를 얘기하는것을 string 이라고 한다. 
~~~

string이 아닌 숫자를 넣으면 형변환하여 문자열로 변환한다.

new 띠면 형 변환만 하고 문자열 1만 리턴한다. 

String.prototype.indexOf () 결과값을 index로 준다. 

includes배열이 있다. true false를 반환한다. 

substring 

replace가 중요

split 문자열은 배열 정규 표현식을 줄 수도있고 배열을 줄 수도있다.

리턴할 요소의 개수를 산정한다.

