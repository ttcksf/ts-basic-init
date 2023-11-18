"use strict";
// map型type(typeがオブジェクトであることを利用して値の判別に使用する)
// type stateType = {
//   state: "loading" | "success" | "error";
//   posts?: { id: number; title: string };
// };
function consoleState(data) {
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
