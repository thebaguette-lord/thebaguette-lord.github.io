let tasks = [];
var newtask = "getOutOfMyCode"
function appendToDo() {
    newtask = document.getElementById("input").value;
    tasks.push(newtask);
    SaveCookies();
    FixList();
}
function severToDo(remove) {
    tasks.splice(remove,1)
    SaveCookies();
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
function SaveCookies() {
    var taskStr = "";
    for (i = 0; i < tasks.length; ++i) {
        taskStr += tasks[i] + ",";
    }
    document.cookie = "tasks=" + taskStr;
    
}
function GetCookies() {
    let myCookies = document.cookie.split(";");
    let findCookie = "tasks=";

    for(i = 0; i < myCookies.length; i++){
        if(myCookies[i].indexOf(findCookie) !== -1){
            if(myCookies[i].substring(findCookie.length, myCookies[i].length-1) !== "=")
            tasks = myCookies[i].substring(findCookie.length, myCookies[i].length-1).split(",");
        }
    }
    FixList()
}