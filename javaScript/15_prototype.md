## 객체지향 프로그래밍

자바스크립트는 프로토타입 기반의 객체지향 프로그래밍 언어이다.
**자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다**

객체지향 프로그래밍은 객체의 **상태(state)**를 나타내는 데이터와 상태 데이터를 조작할 수 있는 **동작(behavior)**을 하나의 논리적인 단위로 묶어 생각한다. 이때 **상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료 구조를 객체(object)라 한다.** 

## 상속과 프로토타입

상속(Inheritance)은 객체지향 프로그래밍의 핵심 개념으로 어떤 객체의 프로퍼티 또는 메소드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.

## 프로토타입 객체

모든 객체는 하나의 프로토타입을 갖는다. 프로토타입은 null이거나 객체이다. 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다. 즉, 객체와 프로토타입과 생성자 함수는 서로 연결되어 있다.

## __ proto __ 접근자 프로퍼티

**모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[Prototype]] 내부 슬롯에 접근할 수 있다.** 아래 예제를 크롬 브라우저의 콘솔에서 출력해보자.

## 프로토타입의 constructor 프로퍼티와 생성자 함수

모든 프로토타입은 constructor 프로퍼티를 갖는다. 이 constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다. 이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이루어진다. 

## 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

Object 생성자 함수는 new 연산자와 함께 호출하지 않아도 new 연산자와 함께 호출한 것과 동일하게 동작한다. 그리고 인수가 전달되지 않았을 때 추상 연산 ObjectCreate을 호출하여 빈 객체를 생성한다. 인수가 전달된 경우에는 인수를 객체로 변환한다.

## 사용자 정의 생성자 함수와 프로토타입 생성 시점

부 메소드 [[Construct]]를 갖는 함수 객체, 즉 화살표 함수나 ES6의 메소드 축약 표현으로 정의하지 않고 일반 함수(함수 선언문, 함수 표현식)로 정의한 함수 객체는 new 연산자와 함께 생성자 함수로서 호출할 수 있다.

## 전역객체(Global Object)

전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 클라이언트 사이드 환경(브라우저)에서는 window, 서버 사이드 환경(Node.js)에서는 global 객체를 의미한다. 전역 객체는 Object, String, Number, Function, Array, RegExp, Date, Math와 같은 표준 빌트인 객체(standard built-in object)를 프로퍼티로 갖는다. Math를 제외한 표준 빌트인 객체는 생성자 함수 객체이다.

## 객체 생성 방식과 프로토타입의 결정

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메소드
- 클래스 (ES6)



생성자 함수의 프로토타입은 프로토타입 프로퍼티가 constructor뿐이다.

## 프로토타입 체인

Person 생성자 함수에 의해 생성된 me 객체는 Object.prototype의 메소드인 hasOwnProperty를 호출할 수 있다. 이것은 me 객체가 Person.prototype 뿐만 아니라 Object.prototype를 상속받았다는 의미이다.

자바스크립트는 객체의 프로퍼티(메소드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 __proto__ 접근자 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이것을 프로토타입 체인이라 한다. 프로토타입 체인은 자바스크립트가 객체 지향 프로그래밍의 상속을 구현하는 메커니즘이다.

## 캡슐화

 



## 오버라이딩과 프로퍼티 쉐도잉

프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가한다. 이때 인스턴스 메소드 sayHello는 프로토타입 메소드 sayHello를 오버라이딩하였고 프로토타입 메소드 sayHello는 가려진다.

## instanceof 연산자

~~~javascript
객체 instanceof 생성자 함수
~~~

~~~javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// me 객체는 Person 생성자 함수에 의해 생성된 인스턴스이다.
console.log(me instanceof Person); // true
// instanceof 연산자는 상속 관계를 고려한다.
// me 객체는 Object.prototype을 상속받기 때문에 아래의 코드는 true로 평가된다.
console.log(me instanceof Object); // true
~~~

## 직접 상속

### Object.create에 의한 직접 상속

## 프로퍼티 존재 확인

~~~javascript
/**
 * prop: 프로퍼티 키를 나타내는 문자열
 * object: 객체로 평가되는 표현식
 */
prop in object
~~~

~~~javascript
const person = {
  name: 'Lee',
  address: 'Seoul'
};

// person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person);    // true
// person 객체에 address 프로퍼티가 존재한다.
console.log('address' in person); // true
// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log('age' in person);     // false
~~~

person 객체에는 toString이라는 프로퍼티가 없지만 아래의 실행 결과는 true이다.

~~~javascript
console.log('toString' in person); // true
~~~



question
1. 모든 객체는 하나의 프로토타입을 갖는다.
2. Object.prototype의 프로퍼티인 __proto__ 접근자 프로퍼티는 getter/setter 함수라고 부르는 접근자 함수를 통해 [[Prototype]] 내부 슬롯의 값, 즉 프로토타입을 취득하거나 할당한다.