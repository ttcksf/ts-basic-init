let firstName = "Tanaka";
// 明らかなものは型指定しなくても自動推測してくれる(型推論)
// let firstName: string = "Tanaka";

// 違う型を再代入できない(コンパイルエラーになる。tsc -wを使った場合、コンパイルは保存時に実行される)
// firstName = true;
firstName = "Yoshida";

// any型は型指定をなくすものだが出来るだけユニオン型にしてany型として使わない方が良い
// let lastName: any = "taro";
let lastName: string | number = "taro";
lastName = 40;

let arr1 = ["aaa", "bbb", "ccc"];
let arr2 = ["aaa", 100, 200];
// string型のみの配列に数字の要素は入れれない
// arr1.push(40);
arr1.push("ddd");
arr2.push(40);
// 配列同士の代入も同じでstring型のみの配列にユニオン型の配列は代入できない
// arr1 = arr2;
arr2 = arr1;
// 空の配列はany型になるので型指定する（型名の後に[]を書く）
// let arr3 = [];
let arr3: number[] = [];
// arr3.push("aaa");
arr3.push(100);
// 基本的にユニオン型にしたときに要素内の順番は関係ないが、ユニオン型で順番ごとに型指定することもできる(書き方に注意)
let arr4: [number, string, string] = [100, "aaa", "bbb"];
// arr4[0] = "bbb";
arr4[0] = 200;

// オブジェクトで型指定を書くときはプロパティ名を決めてから書く
let obj1 = { id: "0001", name: "aaa", age: 20 };
let obj2: { id: string; name: string; age: number } = {
  id: "0002",
  name: "bbb",
  age: 21,
};
// 事前に型指定のみの宣言を使うことが多い（type, interface）
type sample = {
  id: string;
  name?: string;
  age: number;
  sports: string[];
};
let obj3: sample = {
  id: "0003",
  name: "ccc",
  age: 22,
  sports: ["baseball", "soccer"],
};
// ただ新しいプロパティ名の追加もできない
// obj3.zipcode = "1230001";
// 事前に決めた場合はプロパティの数まで正しく書かないとコンパイルエラーになる（プロパティが抜ける分はオプショナルチェーンで回避できる）
// let obj3: sample = {
//   name: "ccc",
//   age: 22,
//   sports: ["baseball", "soccer"],
// };
// typeやinterfaceで事前に型指定のみしておくと関数の引数にも使える（Reactの関数コンポーネントも同じ方法）
const obj4 = (arg: sample) => {
  // return arg.name;
  // オプショナルチェーンのプロパティは使用するときもオプショナルチェーンを書く
  // TypeScriptではオプショナルチェーンで値なしの時にメソッドなどを実行できないことによるエラーを回避する仕組みになっているから
  // return arg.name.length;
  return arg.name?.length;
};
