const tasks = [];
var newtask = "getOutOfMyCode"
var remove = "naneinf"
function appendToDo() {
    newtask = document.getElementById("input").value;
    tasks.push(newtask);
    FixList();
}
function severToDo() {
    remove = document.getElementById("input2").value;
    delete tasks[remove-1]
    FixList();
}
function FixList() {
    let list = document.getElementById("todolist");
    list.replaceChildren("");
    for (i = 0; i < tasks.length; ++i) {
        if (tasks[i] == undefined) {
            tasks.copyWithin(i,i+1);
            tasks.pop();
        }
        if (i < tasks.length) {
            let li = document.createElement("li");
            li.innerText = tasks[i];
            list.appendChild(li);
        }    
    }
}