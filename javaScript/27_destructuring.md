## 디스트럭쳐링할당

~~~javascript
const arr = [1,2,3];
const [one,two,three] = arr;

let x,y;
[x, y] = [1, 2];
// 배열 디스트럭쳐링, 객체 디스트럭쳐링
~~~







## 래퍼객체

~~~javascript
const n = 1;
n.  점을찍으면 래퍼객체가 생성된다.
그래서 number.prototype을 사용할 수있다. 

결국 string, number, bloean이 만든다. 
string과 number가 의미있다.
~~~



원시값을 객체에 하는`순간 래퍼객체가 된다.

원시값을 감싸는 객체다. 


원시값에 .을찍으면 래퍼객체가 생성되서 순식간에 객체가 된다. 그 래퍼객체는 스트링 생성자 함수로 만들었다.
스트링.prototype의 메소드를 상속 받는다. 유사배열객체.가 된다.
문이 끝나면 스트링이 다시 원시값으로 돌아옴

자바스크립트는 암묵적으로 처리를 해준다. 자바스크립트는 내부동작을 알아두면 좋다. 이런애들을 레퍼객체라고 한다. 


number도 메소드들이 다양하게 잇다. 

다시만든다.
str.prototype.toUpperCase();



### number래퍼객체

EPSILON 

Math. 인스턴스를 만들지 못함으로 정적 메소드이다

절대값 반환 abs

