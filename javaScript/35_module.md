## Module

함수 : 재사용 + 가독성

export : 공개하겠다.를 해주면 다른곳에서도 볼 수 있음.

import: 가지고 오겠다.

함수 레벨, 블록 레벨, 모듈 레벨
2015 



## Webpack + Babel

번들링 : http요청이 여러번 왔다갔다 해야하는것을 한개로 압축해 주는것.

ES6 이상으로 코딩해도 ES5, ES3로 떨군다. 모듈을 알수없으니 require하고 commonjs함수를 가지고 있다.

css, javascript, image, font등 모든것을 번들링한다. 



모듈에는 함수 이름이 붙지않고 import할때 가져와서 사용한다.

promise

## webpack 설정

해당폴더 진입

npm init -y > code . > pakage.json확인 > 
$ npm install --save-dev @babel/core @babel/cli 입력 >
.babelrc 파일 생성 >
npm install --save-dev @babel/preset-env 입력

.babelrc 파일에 

{
  "presets": ["@babel/preset-env"]
}

입력  >
제안 내용은 제안내용의 프리셋을 설치해줘야한다.



webpack 설치 : npm install --save-dev webpack webpack-cli > 

npm install @babel/polyfill