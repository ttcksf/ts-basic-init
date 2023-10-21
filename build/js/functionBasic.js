"use strict";
const arr1 = ["aaa", 100, 200];
const addNum = (a, b) => {
    console.log(a + b);
};
addNum(1, 3);
// addNum("1", 3);
// 引数がオプショナルチェーンの時は注意
// const minusNum = (a: number, b?: number): void => {
//   if (b === undefined) {
//     console.log(a);
//   } else {
//     console.log(a - b);
//   }
// };
// デフォルト引数にも型指定できる
// const minusNum = (a: number, b: number = 1): void => {
//   console.log(a - b);
// };
// minusNum(6);
// 第一引数がデフォルトのときは実行時に、undefinedを書かないと第二引数が第一引数の方に当たってしまう
const minusNum = (a = 10, b) => {
    console.log(a - b);
};
// minusNum(6);
minusNum(undefined, 6);
// 通常のJSでも同じ
// <script>
//   function test(a = 10, b) {
//     console.log(a - b);
//   }
//   test(6);
//   test(undefined, 6);
// </script>
// エラー時のnever型
// エラーをスローすると戻り値の型が自動でneverになる
// const testErr = (err: string) => {
//   throw new Error(err);
// };
const ifFunc = (arg) => {
    if (arg === true) {
        return "OK";
    }
    else {
        throw new Error("エラーです");
    }
};
try {
    const result = ifFunc(false);
    console.log(result);
}
catch (error) {
    const result = error;
    console.log(result);
}
