var empty = []
console.log(empty)

var a = [2, , 4]
console.log(a)
a.length = 1;
console.log(a)

var evens = new Array(2,3,4,5,6)
var empty = new Array()


var x= new Array(3);
console.log(x.length);

// 배열 요소의 추가와 삭제
var b = ["A","B","C"];
b[3] = "D";
console.log(b);

b.push("F");
console.log(b);
delete b[1];
console.log(b)