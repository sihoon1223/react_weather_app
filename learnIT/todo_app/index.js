/***
 * Todo : 시계 구현
 **
 * 1. 현재 시간을 구한다.
 * 2. 현재 시간을 인간이 알아 볼 수 있는 문자열로 수정한다
 * 3. 시계를 그릴 element를 찾는다.
 * 4. element의 텍스트를 수정한다.
 * 5. 주기적으로 위 동작을 반복한다.
 */

const clockEl = document.querySelector('#clock');

setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    //const humanized = hour + ":" + min + ":" + sec;

    const humanized = `${hour}:${pad(min)}:${pad(sec)}`;

    clockEl.textContent = humanized;
}, 1000);

const pad = num => {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}


/***
 * Todo : 인사하기
 **
 * 1. 이름을 그릴 element를 찾는다.
 * 2. 저장된 이름을 찾아 element에 그린다.
 * 3. more 버튼을 누르면 이름을 수정할 수 있다.
 * 4. 엔터를 누르면 이름이 저장된다.
 * 5. 다른 영역을 클릭했을 때 역시 저장된다.
 */
//localStorage.setItem('name','sihoon');
const nameEl = document.querySelector('.editable-name');
nameEl.textContent = localStorage.getItem('name');

const btnEl = document.querySelector('#more');
btnEl.addEventListener("click", () => {
    nameEl.setAttribute('contenteditable', 'true');
    nameEl.focus();
});
nameEl.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        saveName();
    }
});
nameEl.addEventListener("blur", (event) => {
    saveName();
});

const saveName = () => {
    nameEl.setAttribute('contenteditable', 'false');
    localStorage.setItem('name', nameEl.textContent);
}

/***
 * Todo : 만트라 보여주기
 **
 * 1. 만트라를 보여줄 액션을 정의한다
 * 2. 액션을 트리거할 element를 찾는다.
 * 2. element에 이벤트를 등록한다
 * 3. element의 클래스를 토글링한다
 * 4. 시간차를 둔다
 */
const centerEl = document.querySelector('.center');
const contentEl = document.querySelector('.content');
centerEl.addEventListener('dblclick', () => {
    contentEl.classList.add('show-mantra');
    //setInterval 은 시간만큼 간격을 두고 계속 실행
    //setTimeout은 시간 뒤 1번 실행
    setTimeout(() => {
        contentEl.classList.remove('show-mantra');
    }, 3000);

});


/***
 * Todo : Todo List
 **
 * 1. todo 생성자 만들기
 * 2. todo를 관리할 매니저 객체 만들기
 * 3. localStorage에 todo list get/set
 * 4. input에 할 일을 입력후 엔터 누를 시 todo 저장
 * 5. todo list가 있다면 마지막 todo 보여주기
 */
function Todo(todoText, done) {
    this.todo = todoText;
    this.done = done === undefined ? false : done;

    const boxEl = document.createElement('div');
    boxEl.classList.add('todo-box');

    const inputEl = document.createElement('input');
    inputEl.classList.add('check-todo');
    inputEl.type = 'checkbox';
    inputEl.checked = this.done;

    const todoTextEl = document.createElement('p');
    todoTextEl.classList.add('todo-text');

    const addTodoBtnEl = document.createElement('button');
    addTodoBtnEl.innerHTML = '<i class="material-icons">add</i>';
    addTodoBtnEl.id = 'add-todo';

    const removeTodoBtnEl = document.createElement('button');
    removeTodoBtnEl.id = 'remove-todo';

    boxEl.appendChild(inputEl);
    boxEl.appendChild(todoTextEl);
    boxEl.appendChild(addTodoBtnEl);
    boxEl.appendChild(removeTodoBtnEl);

    this.template = boxEl;
}

const TodoManager = {
    todoList: [],
    inputTodoWrapperEl: document.querySelector('#input-todo'),
    todoWrapperEl: document.querySelector('#todo'),
    init: function () {
        const _todoList = localStorage.getItem('todoList');
        if (_todoList) {
            TodoManager.todoList = JSON.parse(_todoList);
        }
        if (TodoManager.todoList.length > 0) {
            TodoManager.todoWrapperEl.classList.add('show');
        }else{
            TodoManager.inputTodoWrapperEl.classList.add('show');
        }
        TodoManager.inputTodoWrapperEl.querySelector('input')
            .addEventListener('keypress', function (event) {
                console.log('ddd');
                if(event.keyCode === 13){
                    event.preventDefault();
                    event.target.value = '';
                    event.target.blur();

                    const todo = event.target.value;
                    TodoManager.todoList.push(new Todo(todo));
                    TodoManager.save();


                }
            })

    },
    save: function () {
        localStorage.setItem('todoList', JSON.stringify(TodoManager.todoList));
    }
};


/***
 * Todo : 이미지 불러오기
 **
 * 1. unsplash 가입. 앱 등록
 * 2. access key 저장
 * 3. Document 읽기
 * 4. Ajax 모듈로 API 통신
 * 5. 응답으로 온 데이터에서 이미지 URL 불러들이기
 */
