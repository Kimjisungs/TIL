## 클래스

~~~javascript
class Person {
	constructor() {
		this.name = 'Lee';
	}
    name = name; //클래스 필드
	//prototype 메소드
	sayHi() {
		console.log(`Hi ${this.name}`);
	}
    //정적 메소드
    static foo() {}
} // 클래스 바디, 클래스 몸체

const me = new Person();

//function Person() {
//	this.name = 'Lee';
//}

//Person.prototype.sayHi = function(){}
~~~

클래스는 생성자 함수다. 프로토타입 기반이다. 새로운 객체 생성 방식. 생성자함수보다 더 엄격함. 

클래스를 표현식으로 만드는것은 클래스도 평가되면 값이다. 함수 객체가 된다.  프로토타입 메소드는 반드시 축약 표현으로 사용해야 한다.  this를 안쓰면 정적 메소드로.  정적 메소드와 프로토타입의 차이는 this가 떠올라야한다. 



## super

### super 호출

호출도하고 참조도 한다. 수퍼 클래스에 constuctor를 호출한다.  인스턴스는 super 클래스에서 생성한 것이고, 인스턴스는 super참조는 super클래스의 메소드를 참조할때 사용한다. 