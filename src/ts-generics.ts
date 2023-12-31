// const arr = [1, 2, 3];
const arr = ['1', '2', '3'];

const first = getFirst(arr);
console.log(first);

// 数字がnumberかstringかどちらでくるかわからない時（フォームやAPIなど）
// function getFirst(arr: number[]) {
// function getFirst(arr: any) {

// genericsは数字と文字の両方を自動でスイッチするためエラーを回避できた
// function getFirst(arr: (number | string)[]) {
function getFirst<T>(arr: T[]) {
  return arr[0];
}

type apiType<T> = {
  // data: any;
  data: T;
  isError: boolean;
};

// ジェネリクスを使って型定義を引数のようにして不明なデータをエラーなく受けることができる(anyは非推奨)
type studentType = apiType<{ id: string; name: string; age: number }>;
type articleType = apiType<{ id: string; title: string; desc: string }>;

const student: studentType = {
  data: {
    id: '0001',
    name: 'aaa',
    age: 20,
  },
  isError: false,
};
const article: articleType = {
  data: {
    id: '0001',
    title: 'タイトル',
    desc: '本文です',
  },
  isError: false,
};
console.log(article);
console.log(student);
