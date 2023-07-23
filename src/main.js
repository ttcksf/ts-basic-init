"use strict";
// tsのインストール
// npm i typescript -g
// tsのコンパイル↓
// tsc ファイル名.tsの後にscriptタグでjsファイルを読み込む
// js側でvarが使われることがあるが古いブラウザ対応で、再代入の可否はts側でチェックしている
const name = "aaa";
console.log(name);
// tsファイルはjsファイルにしないとHTML側で読み込めない（アプリを動かせない）→コンパイルという
// tsファイルは保存しても変更は反映されないため毎回コンパイルする
// 変更を監視して自動コンパイル↓
// tsc ファイル名.ts -w
const hello = "hi";
console.log(hello);
// 実務ではReactのようなフレームワークを使うため管理手法が求められ、src(コンパイル前)とbuild(コンパイル後)フォルダを作って分けている
// そのような管理手法は「tsc --init」コマンドでtsconfig.jsonを作成してやる
// コンパイル前のディレクトリ指定は「"rootDir": "./src"」とする
// コンパイル後のディレクトリ指定は「"outDir": "./build/js"」とする
// ファイル監視を「tsc -w」で実行しておく
