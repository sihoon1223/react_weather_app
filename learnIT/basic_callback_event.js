// callback

function example(value,cb){
    console.log(value);
    cb(value +1);
}

// javascript 는 함수를 값으로 전달 가능하다! 콜백메서드!
function doSomething(value){
    console.log(value);
}

// event
const input = document.querySelector('#input');
input.addEventListener("keyup", function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
})

const button = document.querySelector('#btn');
const title = document.querySelector('#title');
const changeColor = function(e){
    const value = input.value;
    title.setAttribute("class",value);
}
button.addEventListener("click",changeColor ); //함수를 호출하는게 아니라 값으로 전달!