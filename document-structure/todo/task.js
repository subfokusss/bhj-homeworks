document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.querySelector('#task-input');
    const addTaskButton = document.querySelector('#add-task-btn');
    const taskList = document.querySelector('.task-list');

    if (!taskInput || !addTaskButton || !taskList) return;

    function addTask(title) {
        const taskHTML = `
            <div class="task">
                <div class="task__title">${title}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        taskList.insertAdjacentHTML('afterbegin', taskHTML);
    }

    addTaskButton.addEventListener('click', function(event) {
        event.preventDefault();
        const taskTitle = taskInput.value.trim();
        if (taskTitle !== '') {
            addTask(taskTitle);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('task__remove')) {
            event.preventDefault();
            event.target.parentElement.remove();
        }
    });
});