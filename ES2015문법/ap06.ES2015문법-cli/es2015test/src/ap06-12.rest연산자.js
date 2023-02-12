/*
    rest 연산자 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array 메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

    ES 6에서는
    rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.
*/

function func2(...args) {
  var [first, ...others] = args;
  console.log('func2 >>', first);
  console.log('func2 >>', others);
}
func2(1, 2, 3, 4, 0);

function func3(first, ...others) {
  console.log('func2 >>', first);
  console.log('func2 >>', others);
}
func2(1, 2, 3, 4, 0);

const [item1, ...otherItems] = [0, 1, 2];

// 객체형 rest 연산자
const { other, ...others } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  other: 0,
};
console.log('combined >> other', other); // other = 0
console.log('combined >> others', others); // others = { one: 1, two: 2, three: 3, four: 4}
