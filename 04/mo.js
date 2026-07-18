//named export로 점심메뉴 입력받아 반환하는 모듈
const menu1 = "점심";
const menu2 = "메뉴";
export { menu1, menu2 };

export function lunch(menu) {
  return `점심메뉴:${menu}`;
}
