// 산술연산자
console.log(`100+200=${100 + 200}`);
console.log(`100-200=${100 - 200}`);
console.log(`100/200=${100 / 200}`);
console.log(`100*200=${100 * 200}`);
console.log(`100**200=${100 ** 2}`); //제곱
console.log(`100%200=${100 % 200}`);
console.log(`100%200=${3 % 8}`); //나머지 연산자

let t1 = "망고는";
let t2 = 8;
let t3 = "살";
let t4 = true;
let t5;
console.log(`자료형은: t1: ${typeof t1}/t2: ${typeof t2}/t3: ${typeof t3}/t4: ${typeof t4} //t5: ${typeof t5}`);
t5 = t1 + t2;
console.log(`${typeof t5}//// ${t5}`);
/* 자바스크립트는 동적타입언어
값(데이터)의 타입에 따라 변함
개발자가 예측할 수 없는 오류가 발생할 수 있음
디버깅을 많이 해야함
 */
/* 타입스크립트: 자바스크립트의 슈퍼셋
정적타입언어
초기 개발속도 저하 (개발자의 숙련도, 코드가 길어짐)
유지보수 개선
ts
 */
let mon = 1;
let text1 = "월";
let text2 = "일";
