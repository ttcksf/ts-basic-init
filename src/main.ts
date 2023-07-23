// tsのインストール
// npm i typescript -g
// tsのコンパイル↓
// tsc ファイル名.tsの後にscriptタグでjsファイルを読み込む
// js側でvarが使われることがあるが古いブラウザ対応

const name1: string = "aaa";
console.log(name1);
// tsファイルはjsファイルにしないとHTML側で読み込めない（アプリを動かせない）→コンパイルという

// tsファイルは保存しても変更は反映されないため毎回コンパイルする
// 変更を監視して自動コンパイル↓
// tsc ファイル名.ts -w
const hello1: string = "hi";
console.log(hello1);
// 実務ではReactのようなフレームワークを使うため管理手法が求められ、src(コンパイル前)とbuild(コンパイル後)フォルダを作って分けている。

// そのような管理手法は「tsc --init」コマンドでtsconfig.jsonを作成してやる
// コンパイル前のディレクトリ指定は「"rootDir": "./src"」とする
// コンパイル後のディレクトリ指定は「"outDir": "./build/js"」とする
// ファイル監視を「tsc -w」で実行しておく
// scriptタグのパスをjs/に変えておく
// ※１設定を書く前にindex.htmlをbuildにmain.tsをsrcに移動させて、main.jsを削除しておく必要がある
// ※２tsファイルを削除してもjsファイルは消えないので手動で削除する必要がある
// ※３srcの外でtsファイルを作成すると自動コンパイルでjsファイルが生成されてしまうので「"include": ["src"]」を追加しておく必要がある
// ※４「"target": "es2016"」だとvarへの変換はなくなり、「"target":"es5"」だと古い対応になる

// ReactなどのフレームワークにTypeScriptを導入すると初期設定は不要であることが多いけど仕組みを理解しておくと理解が早くなる
