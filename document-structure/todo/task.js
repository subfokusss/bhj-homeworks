document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.querySelector('#task-input');
    const taskList = document.querySelector('.task-list');

    function addTask(taskContent) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskContent;

        const removeButton = document.createElement('a');
        removeButton.href = '#';
        removeButton.classList.add('task__remove');
        removeButton.textContent = '×';

        removeButton.addEventListener('click', function(event) {
            event.preventDefault();
            taskItem.remove();
        });

        taskItem.appendChild(taskTitle);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            taskInput.value = ''; 
        }
    });
});