var user = [
    {
        id: '0001',
        name: 'aaa',
    },
    {
        id: '0002',
        name: 'bbb',
        email: 'test@test.com',
    },
];
var test = user[0];
if ('email' in test) {
    console.log('スタッフです。');
}
else {
    console.log('顧客です。');
}
