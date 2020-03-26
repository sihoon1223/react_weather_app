// html : hyper text transfer protocol 말 그대로 html 보내는 방식! ( html,js,css 등 다양한 타입 또한 지원 ~)

/* 일반 http 통신 -> html 요청 -> 페이지 로드 ( 화면 깜빡임)
*  ajax 통신 -> 데이터 요청 -> 페이지 로드 없음
*  ajax 인터페이스는 간단하다  new XMLHttpRequest(); 사용!
* */

const request = new XMLHttpRequest();

//open 인자: http method, GET POST PUT PATCH DELETE
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.addEventListener('readystatechange', function (e) {
    if (200 <= request.status && request.status < 300) {
        console.log(JSON.parse(request.responseText));
        console.log(request);
    }

    if (request.status >= 400) {
        console.error(request.status);
    }
});
request.send();

// 이러한 함수를 매번 호출하기엔 무리가 있다! 재사용을 위한 모듈화가 필요하다.

const ajax = function (method, url, success_callback, fail_back) {
    const request = new XMLHttpRequest();

//open 인자: http method, GET POST PUT PATCH DELETE
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.addEventListener('readystatechange', function (e) {
        if (200 <= request.status && request.status < 300) {
            const response = JSON.parse(request.responseText);
            console.log(request);
            console.log(response);
        }

        if (request.status >= 400) {
            console.error(request.status);
        }
    });
    request.send();

}
ajax('GET','https://jsonplaceholder.typicode.com/todos/1',
    function (res) {console.log(res);},
    function (err) {console.error(err);});
