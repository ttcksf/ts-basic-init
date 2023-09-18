"use strict";
// const val = 100;
const val = "100";
// 型変更でエラーを出さない方法
// const result: number = val as unknown as number;
// 型変更のメソッドを使う
function checkVal(arg) {
    if (typeof val === "string") {
        const result = Number(val);
        return result;
    }
    else {
        const result = val;
        return result;
    }
}
// console.log(result);
// console.log(typeof result);
const test = checkVal(val);
console.log(test);
console.log(typeof test);
