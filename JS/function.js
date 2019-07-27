tasks = [];
numOfTask = 1;



window.onload = function () {

    if (typeof localStorage.tasksLS != "undefined") {
        tasks = JSON.parse(localStorage.tasksLS);
        printTasks(tasks)
    }

}
function addTask() {
    if (checkIfDateValid()) {
        var myTask = document.getElementById("task").value;
        var myTime = document.getElementById("time").value;
        var myDate = document.getElementById("date").value;

        task = {
            task: myTask,
            time: myTime,
            date: myDate,
            id: numOfTask
        }

        tasks.push(task);
        //console.log(tasks);
        numOfTask += 1;
        printTasks(tasks);

        tasksLS = JSON.stringify(tasks);
        localStorage.tasksLS = tasksLS;
        restForm()

    }

}

function printTasks(tasks) {
    var notes = document.getElementById('notes');
    notes.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var note = "<div class='fade-in note col-md-2'>";
        note += `<div ><i class='fas fa-calendar-times' onclick="deleteTask(${tasks[i].id})"></i></div>`;
        note += `<textarea class="textNote">${tasks[i].task}</textarea><br>`;
        note += `${tasks[i].date}<br> `;
        note += `${tasks[i].time}`;
        note += "</div>";
        notes.innerHTML += note;
    }
}


function checkIfDateValid() {
    var value = document.getElementById("date").value;
    if (new Date() > new Date(value)) {
        alert("Past date - Enter again!");

    }
    else {
        return true;
    }
}

function restForm() {
    document.getElementById("task").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
}

function deleteTask(id) {

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
            tasksLS = JSON.stringify(tasks);
            localStorage.tasksLS = tasksLS;
            break;
        }
    }
    printTasks(tasks);

}

