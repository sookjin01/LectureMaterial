"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/

var string1 = "\uC548\uB155\uD558\uC138\uC694";
var string2 = "\uBC18\uAC11\uC2B5\uB2C8\uB2E4.";
var preeting = "".concat(string1, ", ").concat(string2);
console.log(preeting);