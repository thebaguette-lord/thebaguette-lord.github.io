const tasks = [];
var newtask = "getOutOfMyCode"
var remove = "naneinf"
function appendToDo() {
    newtask = document.getElementById("input").value;
    tasks.push(newtask);
    FixList();
}
function severToDo(remove) {
    tasks.splice(remove-1,1)
    FixList();
}
function FixList() {
    let list = document.getElementById("todolist");
    list.replaceChildren("");
    for (i = 0; i < tasks.length; ++i) {
            let li = document.createElement("li");
            li.innerText = tasks[i];
            list.appendChild(li);    
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            //deleteBtn.classList.add('a');
            deleteBtn.addEventListener('click', () => {severToDo(i)});
            li.appendChild(deleteBtn);
    }
}