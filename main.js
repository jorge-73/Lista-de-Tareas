let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=> {
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
    IdCounter++;
    let newValue = input.value;
    list.innerHTML += 
    `<div class="task-container" id="${IdCounter}">
        <label for="">
            <input type="checkbox" name="" id="">
            ${newValue}
        </label>
    <img src="./imagenes/delete.png" class="closeBtn">
    </div>`
    input.value="";

    upDateStats();
};

list.addEventListener('click', (event)=>{
    if (event.srcElement.nodeName=='INPUT') {
        upDateStats();
    }else if(event.srcElement.nodeName=='IMG'){
        deleteTask(event.srcElement.parentNode.id);
    } 
});

let upDateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: ${checkbox.length}</p>`;
};

let deleteTask = (id) =>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    upDateStats();
};