let a: number = 17
let b: number = 18
import { isNil } from "lodash"

function testFun(first: number, second?: number | undefined): number {
  return isNil(second) ? first : (first + second)
}

console.log("What is testFun(1)", testFun(1))
console.log("What is testFun(1, 2)", testFun(1, 2))