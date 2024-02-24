document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.querySelector('ul');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            deleteTask(event.target.closest('li'));
        }
    });

    function addTask(taskText) {
        const newTask = document.createElement('li');
        newTask.className = 'task task-red';
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Eliminar</button>
        `;
        taskList.appendChild(newTask);
    }

    function deleteTask(task) {
        task.remove();
        
    }
});
