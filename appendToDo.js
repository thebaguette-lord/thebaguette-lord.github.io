const tasks = [];
var newtask = "getOutOfMyCode"
function appendToDo() {
    newtask = document.getElementById("input").value;
    tasks.push(newtask);
    FixList();
}
function severToDo(remove) {
    tasks.splice(remove,1)
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
            const delval = i;
            li.appendChild(deleteBtn);
            deleteBtn.innerText = 'Delete';
            deleteBtn.addEventListener('click', () => {severToDo(delval)});
            
    }
}