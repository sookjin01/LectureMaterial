"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1);
var x2 = points[0],
  y2 = points[1],
  z2 = points[2];
console.log(x2, y2, z2);
var x3 = points[0],
  z3 = points[2];
console.log(x3, z3);
var x4 = points[0],
  y4 = points[1];
console.log(x4, y4);
var car = {
  type: 't',
  color: 's',
  medel: '2017'
};
// 배열은 순서로 분해 할당을 처리한다

var type1 = car.type;
var color1 = car.color;
var medel1 = car.medel;
console.log(type1, color1, medel1);
var type = car.type,
  color = car.color,
  medel = car.medel,
  gear = car.gear;
console.log(type, color, medel, gear);
// 객체는 프로퍼티 명으로 매칭한다.