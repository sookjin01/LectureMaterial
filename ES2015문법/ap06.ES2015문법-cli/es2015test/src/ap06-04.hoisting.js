/*

    ES2015의 const 와 let 에 대해서 알아본다.

    var
    1. 읽기 쓰기 변수 선언
    2. 함수 스코프 사용
    3. 변수 호이스팅 있음
    변수 중복 선언 가능
    변수 이름 충돌 가능


    let
    1. 읽기 쓰기 변수 선언
    2. 블락 스코프 사용
    3. 변수 호이스팅 없음
    변수 중복 선언 불가
    변수 이름 충돌 불가


    const
    1. 읽기 전용 변수 선언
    2. 블락 스코프 사용
    3. 변수 호이스팅 없음
    변수 중복 선언 불가
    변수 이름 충돌 불가
*/

// var aaa; // 변수의 호이스팅

console.log(aaa); // 변수의 사용 === undefined

var aaa = '변수의 호이스팅'; // 변수의 선언

console.log(aaa); // 변수의 사용 === 변수의 호이스팅

// 호이스팅이 안되는 모습 실습
console.log(bbb);
const bbb = '변수의 호이스팅2';

/*
// 함수의 호이스팅
function add(x, y) {
  return x + y;
}
*/
console.log(add(1, 2)); // 함수의 사용 === 3

function add(x, y) {
  return x + y;
}

/* 함수 호이스팅 막힘
function add2(x, y) {
  if(true) {
    const c = '1'
  }
  return x + y;
  console.log(c);
}
*/
