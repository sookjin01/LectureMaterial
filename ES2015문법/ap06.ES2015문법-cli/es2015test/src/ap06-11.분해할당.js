/*
 (구조) 분해 할당에 대해서 알아본다.


*/
const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];
console.log(x1, y1, z1);

const [x2, y2, z2] = points;
console.log(x2, y2, z2);

const [x3, , z3] = points;
console.log(x3, z3);

const [x4, y4] = points;
console.log(x4, y4);

const car = {
  type: 't',
  color: 's',
  medel: '2017',
};
// 배열은 순서로 분해 할당을 처리한다

const type1 = car.type;
const color1 = car.color;
const medel1 = car.medel;
console.log(type1, color1, medel1);

const { type, color, medel, gear } = car;
console.log(type, color, medel, gear);

// 객체는 프로퍼티 이름으로 매칭한다.
const { type: type2, color: color2, model2: model2, gear: gear2 } = car;

console.log('car02', type2, color2);

const func1 = ({ type, color }) => {
  console.log('func1 : type', type);
  console.log('func1 : type', color);
};

func1(car);

const func2 = (car) => {
  const { type, color } = car;
  console.log('func2 : type', type);
  console.log('func2 : type', color);
};

func2(car);
