// named import (이름으로 가져오기)
import { add, multiply, subtract } from "./utils.js";
console.log(add(5, 50), subtract(5, 50));

//이름을 변경해서 가져오기
import { multiply as m } from "./utils.js";
console.log(m(5, 50));

//한 번에 가져오기
import * as u from "./utils.js";
console.log(u.add(5, 50), u.divide(5, 50));

//default import (기본 가져오기)
import free from "./utils.js"; // 중괄호 없이, utils.js에 기본 내보낸 파일이 하나밖에 없기 때문에 아무 이름 사용 가능

//default+named
import greet, { divide } from "./utils.js";
