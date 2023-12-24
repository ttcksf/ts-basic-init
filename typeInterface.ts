// 1.typeとinterfaceの書き方の違い
type StudentType = {
  id: string;
  name: string;
  age: number;
};
interface StudentInterFace {
  id: string;
  name: string;
  age: number;
}
const studentA1: StudentType = {
  id: '0001',
  name: 'tanaka',
  age: 20,
};
const studentA2: StudentInterFace = {
  id: '0001',
  name: 'tanaka',
  age: 20,
};

// 2.typeはいろんな形に書けるがinterfaceはオブジェクト型で書く
// 1個になった場合はこのようにかく
type StudentType1 = string;
// interface StudentInterFace1 = string;
// 1個しかなくてもオブジェクトの形で書く
interface StudentInterFace1 {
  name: string;
}
const studentB1: StudentType1 = 'tanaka';
const studentB2: StudentInterFace1 = {
  name: 'tanaka',
};

// 3.拡張するときの違い
// type StudentType2 = {
//   id: string;
//   name: string;
//   age: number;
// };
type StudentType2 = {
  id: string;
  name: string;
  age: number;
} & {
  sports: string;
};
// 同じ名前で2回宣言できる
interface StudentInterFace2 {
  id: string;
  name: string;
  age: number;
}
// interface StudentInterFace2 {
//   sports: string;
// }
// もしくはextendsで継承できる
interface StudentInterFace3 extends StudentInterFace2 {
  sports: string;
}
const studentC1: StudentType2 = {
  id: '0001',
  name: 'tanaka',
  age: 20,
  sports: 'tennis',
};
const studentC2: StudentInterFace3 = {
  id: '0001',
  name: 'tanaka',
  age: 20,
  sports: 'tennis',
};
