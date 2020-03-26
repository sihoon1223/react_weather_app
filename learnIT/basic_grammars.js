// 변수 선언과 초기화
var first_variable = 1;
var second_variable = 'hello world';

//snake 표기법
var third_variable = 3;

//camel case 표기법
var four_variable = 4;

//pascal 표기법
var five_variable = 5;

//-------------------------------------------------------------------------------------------------------------//

/* const, let, var ?
* var은 예전 문법... 선언된 변수에 재할당이 가능하다.
* const 는 상수! 재할당이 불가능하다.
* 그럼 var와 let의 차이는?
* */
const str1 = 'hello world';
let str2 = "hello world";

// 에러 -> str1 = 'enjoy!'
str2 = 'enjoy!'

//선언은 하였으나 초기화 하지 않은 경우
var something;
let some;
// 에러 (const는 무조건 초기화가 필요하다.) -> const test;

//-------------------------------------------------------------------------------------------------------------//
/*
    데이터 타입 - 원시형
    String
    Number
    Boolean
    undefined
    null

    데이터 타입 - 참조형
    Object
    Array
    Function
 */
//-------------------------------------------------------------------------------------------------------------//
//Object
const human = {
    name: 'sihoon',
    age: 25,
    gender: 'female',
    job: {
        name: 'computer engineer'
    }
};
console.log(human);

//get -> 닷노테이션방식
console.log(human.name);
console.log(human.job.name);

//set
human.isFemale = true;
human['city'] = 'seoul' //key-value 방식
console.log(human.isFemale);

//-------------------------------------------------------------------------------------------------------------//
//Array
const arr = [1, 2, 3, 4, '12342', human];
console.log(arr);
console.log(arr[100]);

// 배열에는 특수한 설정이 있다. 바로 length
console.log(arr.length);

//function 생성 - function literal 방식
function firstFunction() {
}

//function 생성 - 익명함수 방식
const second_func = function (a) {
    console.log(a);
}

//function 생성 - arrow function 방식
const third_func = (a) => {
    return a + 3;
}

//함수 호출
firstFunction();

//인자,parameter,argument ?
second_func('hello world');

//return
const result = third_func(4);
console.log(result);

//Method
const obj = {
        fn: (something) => {
            return something * 4;
        }
    }
;
console.log(obj)

// 복사와 참조
let a = 1;
let b = a;
a = 'hi';

// 데이터 타입 - 참조형은..?!?!?
let obj1 = {
    a: 1
}

let obj2 = obj1;
obj1.a = 3;

//배열일 때

let arr1 = [1, 2, 3];
let arr2 = arr1;

// 반복문
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// for/in 문
const obj3 = {
    a: 1,
    b: 2,
    c: true
}

for (let obj in obj3) {
    console.log('obj:' + obj + ', ' + obj3[obj]);
}

let j = 0;
do {
    if (j === 6) {
        j++;
        continue;
    }
    console.log(j); // continue 때문에 6은 건너 뜀
    j++;
} while (j < 10)

/*생성자 함수*/
function User(name) {
    this.name = name;
    this.greet = () => {
        console.log('hi! i\'m ' + name);
    }
}

const user1 = new User('sihoon');

/*프로토타입*/

User.prototype.introduce = function () {
    console.log('hello! i\'m ' + this.name);
}

// class
class User2 {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        // 템플릿 리터럴 `` -> 표현식 사용 가능
        console.log(`hi, i am ${this.name}`);
    }
}

let sisi = new User2('sisi');
sisi.greeting();
console.log(sisi.name);


/* 표준 내장 객체
* String, Number, Boolean
* Object, Function, Array, Date, Math
*  */

User2.isUser = (user) => {
    return user instanceof User2;
}
console.log(User2.isUser(sisi));
//Object, Array, Function 의 조상은 Object 이다.

const aa= 1; //a-> 숫자
aa.toString(); // aa -> "1" 문자!
//(new Number(1)).toString() 으로 해석이 됨

Number.prototype.toString();
