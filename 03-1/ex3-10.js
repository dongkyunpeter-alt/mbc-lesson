/* 변수: 두 번 이상 사용할 값을 저장하는 그릇 */
/* 변수 문법: 선언할 수 있는 키워드 + 식별자 */
/* 키워드 종류: let, const, var */
// let -> 값의 재할당이 가능
let a; //선언, 기본적으로 undifined가 할당됨
a = 10; //재할당, 10으로 재할당 함
console.log(a + a + a + a + a);
a = "1"; //""
console.log(a + a + a + a + a);
// let a = aaa; //같은 식별자로 선언 불가

//const
const b = 20;
// b = 20; //값의 재할당 불가
console.log(a + b);

// var -> 오래된 브라우저의 호환성 맞출때
// 값의 재할당, 변수의 중복 선언 가능
var c = 30;
var d;
d = 50;
var c = c + d;
console.log(c);
console.log(c + d);
