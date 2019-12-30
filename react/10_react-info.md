~~~
import React, {Component} from 'react';

 
 class App extends Component {
 	render() {
 		return (
 		
 		)
 	}
 }
~~~

1. import: 다른 기능을 사용하기 위해
2. export: 기능을 내보내기 위해
3. component : 리엑트.컴포넌트
4. render() : 컴포넌트에서 받은 메소드를 오버라이딩 해서 사용
5. class, className으로
6. img Tag는 alt속성이 있어야한다.

### setState

~~~

~~~

단방향

### ReactDOM.render

~~~javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
~~~

### Hot Module Reloading



### key={item.objectID}

~~~
list.map(function (item){
  return (
	<div key={item.objectID}>
    </div>
   )
})
~~~

key값을 넣어주어야한다. 정렬 기능을 사용해야하기 때문에 key는 예측할 수 있는 고유값이어야한다. key값을 받아와서 사용해야하는데 index값을 사용하면 안된다. **key 값은** 순회를 도는 코드를 쓸때 대표적인게 map의 return 최상위 어야한다.

### setState의 update

안에서 데이터를 조작한다.

~~~
this.state = {
	serchTerm = ''  //초기화를 문자열로 해줘야한다.
}

onSearchChange(event) {
	this.setState({searchTerm: event.target.value})
}
~~~

### Functional Stateless Components 

상태가 없을때 함수로 만들면 된다. 

### ES6 Class Components

상태가 있는 컴포넌트

상태가 있을때는 리엑트의 컴포넌트를 만들어서 상속받아야한다.

### uuid

특정한 아이디를 부여하는 api, 업계 표준

#### fetch

axios보다 훨씬 더 빠르다.  

1. whatwg-fetch 모듈 : 크로스브라우징 문제가 끝남.  
   네트워크 오류를 제외하고는 체크할 수없음.   
   if (!res.ok)
2. 쿠키를 전달하지 않음
3. credentials : 'include'

### 쿠키

특정한 사이트에 들어가서 로그인 하거나 데이터가 서버와 교환하는 과정에 클라이언트에 저장하고 싶을때, 세션 - 사용자와 클라이언트가 통신하여 로그인한 후 에 세션을 만드는데. 클라이언트와 서버랑 정상적으로 로그인 되어서 로그인되어있는 상태다라는 것을 알기위해서 . 세션은 암호화된 문자열을 클라이언트에 저장한다. 로그인 이후에 정상적으로 판별하기위한데이터이고 그것을을 쿠키에 저장한다. 저장소라한다. front에서 set쿠키를해서 데이터를 저장할 수 있다.

javascript setcookie 검색



~~~
componentDidMount ()
shouldComponentUpdate(nextProps, nextState)
componentDidUpdate(prevProps, prevState, snapsshot)
componentWillUnmount()
~~~



