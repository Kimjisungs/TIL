/*
  // 12. 삼각형 출력하기 - pattern 2

  *****
   ****
    ***
     **
      *

*/
var MAXNUMBER = 5;
var star = '';

for (var i = 0; i < MAXNUMBER; i++) {
  for (var j = 0; j < MAXNUMBER; j++) {
    star += i <= j ? '*' : ' ';
  }
  star += '\n';
}
console.log(star);
