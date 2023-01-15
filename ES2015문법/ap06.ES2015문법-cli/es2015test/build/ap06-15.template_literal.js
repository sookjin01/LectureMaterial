"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/

var string1 = "\uC548\uB155\uD558\uC138\uC694";
var string2 = "\uBC18\uAC11\uC2B5\uB2C8\uB2E4.";
var preeting = "".concat(string1, ", ").concat(string2);
console.log(preeting);
var product = {
  name: '까까',
  price: '500원'
};
var messaage = "\n  \uC81C\uD488 ".concat(product.name, " \uC758  \uAC00\uACA9\uC740 ").concat(product.price, " \uC785\uB2C8\uB2E4.\n\n  end\n");
console.log(messaage);