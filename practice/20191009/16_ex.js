/*
  16. 역정삼각형 출력하기

     *********
      *******
       *****
        ***
         *

*/
var MAXNUMBER = 5;
var star = '';

for (var i = 0; i < MAXNUMBER; i++) {
  for (var j = 0; j < MAXNUMBER; j++) {
    star += i <= j ? '*' : ' ';
  }
  for (var j = 0;j < MAXNUMBER; j++) {
    if(i < j) {
      star += '*';
    }
  }
  star += '\n';
}
console.log(star);
