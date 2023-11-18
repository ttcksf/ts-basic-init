// map型type(typeがオブジェクトであることを利用して値の判別に使用する)
// type stateType = {
//   state: "loading" | "success" | "error";
//   posts?: { id: number; title: string };
// };

// ユニオン型で処理の可否で表現して、かつデータをオプショナルチェーンにすることでコードを短くしながらエラー回避にしようとしている
// undefinedをエラーにしたい場合にエラーにできない可能性がある
// undefinedをエラーにしたくない場合にエラーになる可能性がある
// _

type loadingStateType = {
  state: "loading";
};
type successStateType = {
  state: "success";
  posts: { id: number; title: string };
};
type errorStateType = {
  state: "error";
};
type stateType = loadingStateType | successStateType | errorStateType;

function consoleState(data: stateType): void {
  switch (data.state) {
    case "loading":
      console.log("loading");
      break;
    case "success":
      // console.log("success", data.posts?.title);
      // オプショナルチェーンにしなくて良い
      console.log("success", data.posts.title);
      break;
    case "error":
      console.log("error");
      break;
  }
}
