constuctor와 non-constructor


인스턴스

객체 instanceof 

라이터블, 값의 갱신 true false
이뮤러블, 열거
컨피규어러블, 재정의가 가능한지


접근자 프로퍼티
읽거나, 저장, 수정
get:읽을때 호출, set:저장할때 호출, 이뮤러블, 컨피규러블,

생성자함수를 사용해서 빈 객체를 사용했을때 
빈객체를 생성한다. 생성한 빈 객체를 this로 할당함.
기술한 코드를 실행한 다음에 마지막에 this를 리턴 



데이터 프로퍼티 어트리뷰트
value, writable, eumeable, conguable

접근자 프로퍼티 어트리뷰트
get, set  접근자 함수다. 접근자 함수는 getter, setter 로 정의한다. 


functionCreate(

	kind => normal
	         => arrow
	         => method 
)


foo();   foo[[call]]
new foo();  new foo[[constructor]]  

함수 객체만이 가지고있는 프로퍼티가 있더라.
arguments
foo.arguments는 잘못접근. arguments는 자바스크립트 엔진내에서 인수들의 목록을 가지고 있다.
arguments는 length를 가지고 있다. 그래서 for문을 돌릴 수 있다. iterable은 for of에서 돌릴 수 있다. 유사배열 객체.
`