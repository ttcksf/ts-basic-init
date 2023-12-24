type Person = {
  id: string;
  name: string;
};

type Staff = Person & {
  email: string;
};

const user: (Person | Staff)[] = [
  {
    id: '0001',
    name: 'aaa',
  },
  {
    id: '0002',
    name: 'bbb',
    email: 'test@test.com',
  },
  {
    id: '0003',
    email: 'test@test.com',
  },
];

const test = user[1];
console.log(test);
// console.log(typeof test);

// if ('email' in test) {
//   console.log('スタッフです。');
// } else {
//   console.log('顧客です。');
// }

if ('email' in test && 'id' in test && 'name' in test) {
  console.log('スタッフです。');
} else if ('id' in test && 'name' in test) {
  console.log('顧客です。');
} else {
  console.log('データに不備があります');
}
