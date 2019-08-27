
const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");


const TODOS_LS = "todos";

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);

    if(todos !== null){
        // console.log(loadedTodos);
        const parsedTodos = JSON.parse(loadedTodos);
        
        //foreach 로 각 아이템 출력
        parsedTodos.forEach(printItem);
    
    
    }
    else{

    }
}

function printItem(todo){
    printTodo(todo.text);
}

let todos = [];


function filterFn(todo){


    return todo.id === 1;


}

function deleteTodo(event){

    const curBtn = event.target;
    const li = curBtn.parentNode;

    todoList.removeChild(li);

    //array 필터 기능 : array에서 조건을 만족하는 애들로 새로 array를 뽑아줌
    const cleanTodos = todos.filter(function(todo){


        return todo.id !== parseInt(li.id);
    });

    todos = cleanTodos;
    saveTodos();

    console.log(cleanTodos);
}


function saveTodos(){

    localStorage.setItem(TODOS_LS, JSON.stringify(todos) );

}

function printTodo(text){

    // console.log(text);
    // todoList.append Child(text);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = todos.length+1;

    delBtn = document.createElement("button");
    delBtn.innerText = "❌"; 
    delBtn.addEventListener("click", deleteTodo);
    
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    todoList.appendChild(li);

    const todoObj = {
        text:text,
        id:newId

    };
    todos.push(todoObj);
    
    saveTodos();


}

function handleSubmit(event){
    event.preventDefault();
    const curValue = todoInput.value;
    printTodo(curValue);
}


function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();