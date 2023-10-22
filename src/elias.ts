// エイリアス(型に名前をつける)
// const arr1: (string | number)[] = ["aaa", 100, 200];
type strNumArr = (string | number)[];
const arr1: strNumArr = ["aaa", 100, 200];
// arr1[0] = "bbb";
// arr1[0] = true;

// 関数の型指定
// const addNum = (a: number, b: number): number => {
//   console.log(a + b);
//   return a + b;
// };

// returnがないときに戻り値の型指定を書くと警告になるためvoidにする
// const addNum = (a: number, b: number): void => {
//   console.log(a + b);
// };

// 関数の型指定もエイリアスにできる
type addNumType = (a: number, b: number) => void;
const addNum: addNumType = (a, b) => {
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
const minusNum = (a: number = 10, b: number): void => {
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
const ifFunc = (arg: boolean): string | never => {
  if (arg === true) {
    return "OK";
  } else {
    throw new Error("エラーです");
  }
};
try {
  const result = ifFunc(false);
  console.log(result);
} catch (error) {
  const result = error;
  console.log(result);
}
