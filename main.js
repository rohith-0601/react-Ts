"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msg = "welcome back";
console.log(msg);
var isbeginner = true;
var total = 23;
var name = "rohith";
// name = "true";
var line = "my name is ".concat(name);
console.log(line);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var p1 = ["chris", 23];
var Color;
(function (Color) {
    Color[Color["red"] = 50] = "red";
    Color[Color["green"] = 51] = "green";
    Color[Color["blue"] = 52] = "blue";
})(Color || (Color = {}));
var c = Color.green;
console.log(c);
var random = 10;
random = true;
random = "hii";
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(4, 9));
