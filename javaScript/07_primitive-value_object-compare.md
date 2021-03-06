원시 타입과 객체 타입은 근본적으로 다르다는 의미일 것이다. 원시 타입과 객체 타입은 크게 세가지 측면에서 다르다.

- 원시 타입의 값, 즉 원시 값은 변경 불가능한 값(immutable value)이다. 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.
- 원시 값을 변수에 할당하면 변수에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수에는 참조 값이 저장된다.
- 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달(Pass by value)라 한다. 이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이를 참조에 의한 전달(Pass by reference)라 한다.

## 원시값

### 변경 불가능한 값

**원시 타입의 값, 즉 원시 값은 변경 불가능한 값이다.** 다시 말해, 한번 생성된 원시 값은 readonly한 값이므로 변경할 수 없다.

~~~javascript
const o = {};
o.a = 1;
console.log(o); // {a: 1}
/*
	const 키워드를 사용해 선언한 상수는 재할당이 금지된다.
	하지만 const 키워드를 사용해 선언한 상수에 할당된 객체는 변경할 수 있다.
	즉 상수는 재할당이 금지된 변수일 뿐이다.
*/
~~~

원시 값은 변경 불가능한 값이기 때문에 값을 직접 변경할 수 없다. 따라서 변수의 값을 변경하기 위해 원시 값을 재할당하면 새로운 메모리 공간을 확보하고 재할당한 값을 저장한 후, 변수가 참조하던 메모리 공간의 주소를 변경한다. 원시 값의 이러한 특성을 **불변성** 이라 한다.

### 문자열과 불변성

~~~javascript
var str = 'Hello';
str = 'world';
~~~

첫번째 문이 실행되면 메모리에 문자열 'Hello'가 생성되고 식별자 str은 문자열 'Hello'을 수정하는 것이 아니라 새로운 문자열 'world'를 메모리에 생성하고 식별자 str은 이것을 가리킨다.  이때 문자열 'Hello'와 'world'는 모두 메모리에 존재하고 있다. 식별자 str은 문자열 'Hello'를 가르키고 있다가 문자열 'world'를 가르키도록 변경되었을 뿐이다.

**유사배열객체** : 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체를 말한다.

### 값에 의한 전달

변수에 변수를 할당하는 경우, 할당되는 변수(score)가 원시값을 갖는 변수라면 할당받는 변수(copy)에는 할당되는 변수(score)의 원시값이 복사되어 전달된다. 이를 **값에 의한 전달(Pass by value)**라 한다.



### 객체

