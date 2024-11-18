let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");

addTaskButton.addEventListener("click", addTaskHandler);

taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") addTaskHandler();
})

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = new Task(taskNameInput.value);
        newTask.createIn(taskList);

        taskNameInput.value = "";
    } else {
        alert("введіть ім'я завдання");
    }
}

function Task(text) {
    this.text = text;
    this.isDone = false;
    this.div = null;

    this.createIn = function (element) {
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let input = document.createElement("input");
        input.addEventListener("click", () => this.changeState(this.div));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.text;

        let del = document.createElement("div");
        del.classList.add('delete');

        this.div.append(input);
        this.div.append(p);
        this.div.append(del);
        element.append(this.div);
    }

    this.changeState = function (element) {
        this.isDone = !this.isDone;
        element.classList.toggle("completed");
    }
}