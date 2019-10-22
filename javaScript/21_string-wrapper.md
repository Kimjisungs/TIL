## String 레퍼 객체

String 객체는 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼(wrapper) 객체이다. 변수 또는 객체 프로퍼티가 문자열을 값으로 가지고 있다면 String 객체의 별도 생성없이 String 객체의 프로퍼티와 메소드를 사용할 수 있다.

원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.

~~~javascript
const str = 'Hello world!';
console.log(str.toUpperCase()); // 'HELLO WORLD!'
~~~

위에서 원시 타입 문자열을 담고 있는 변수 str이 String.prototype.toUpperCase() 메소드를 호출할 수 있는 것은 변수 str의 값이 일시적으로 wrapper객체로 변환되었기 때문이다.