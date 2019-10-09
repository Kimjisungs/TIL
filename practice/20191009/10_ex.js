// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
var MAXNUMBER = 6;
for (var i = 0; i < MAXNUMBER; i++) {
  for (var j = 0; j < MAXNUMBER; j++) {
    if(i + j === MAXNUMBER) {
      console.log(`[${i},${j}]`);
    }
  }
}

