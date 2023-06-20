let tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value.trim();

    if (taskName !== '') {
        let newTask = {
            id: Date.now(),
            name: taskName,
            completed: false
        };

        tasks.push(newTask);

        updateTaskList();

        taskInput.value = '';
    }
});

function updateTaskList() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

        let listItem = document.createElement('li');
        listItem.className = 'task-item';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            toggleTaskCompletion(i);
        });

        let taskName = document.createElement('span');
        taskName.textContent = task.name;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(i);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskName);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}
