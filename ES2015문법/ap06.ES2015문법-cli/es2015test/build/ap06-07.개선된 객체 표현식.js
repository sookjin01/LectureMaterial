"use strict";

/*

    개선된 객체 표현식에 대해서 알아본다.
      개선된 객체 프러퍼티 표현식
      개선된 객체 메서드 표현식
*/

var name = '홍길동';
var age = 20;
var p2 = {
  name: name,
  age: age,
  powerYell: function powerYell() {
    console.log("\uC774\uB984\uC774 : ".concat(this.name, " \uC785\uB2C8\uB2E4."));
  },
  setAge: function setAge(h) {
    this.age = h;
    console.log("\uB098\uC774\uAC00 : ".concat(this.age, " \uC785\uB2C8\uB2E4."));
  }
};