// named export (이름 지정 내보내기)

//작성과 동시에 하나씩 내보내기
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//여러개 한 번에 내보내기
export { multiply, divide };

// default export (기본 내보내기) - 파일당 딱 하나만
export default function greet(name) {
  return `안녕${name}`;
}
/* export default function member(name) {
  return `안녕${name}`; //또 작성하면 오류
} */
