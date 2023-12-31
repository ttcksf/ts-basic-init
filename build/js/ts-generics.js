"use strict";
// const arr = [1, 2, 3];
const arr = ['1', '2', '3'];
const first = getFirst(arr);
console.log(first);
// 数字がnumberかstringかどちらでくるかわからない時（フォームやAPIなど）
// function getFirst(arr: number[]) {
// function getFirst(arr: any) {
// genericsは数字と文字の両方を自動でスイッチするためエラーを回避できた
// function getFirst(arr: (number | string)[]) {
function getFirst(arr) {
    return arr[0];
}
const student = {
    data: {
        id: '0001',
        name: 'aaa',
        age: 20,
    },
    isError: false,
};
const article = {
    data: {
        id: '0001',
        title: 'タイトル',
        desc: '本文です',
    },
    isError: false,
};
console.log(article);
console.log(student);
