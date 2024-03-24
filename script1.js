const inputData = document.getElementById('input-box');
const add = document.getElementById('addBtn');
const listContainer = document.getElementById('list-container');

// Load tasks from localStorage if available
document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
});

// Function to create task element
function createTaskElement(taskValue, completed) {
    const list = document.createElement('li');
    list.classList = 'task';
    const label = document.createElement('label');
    label.setAttribute('for', `${taskValue.replaceAll(' ', '')}`);
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', `${taskValue.replaceAll(' ', '')}`);
    const para = document.createElement('p');
    para.innerHTML = `${taskValue}`;
    if (completed) {
        para.classList.add('cross');
        input.checked = true;
    }
    const icon = document.createElement('i');
    icon.classList = 'fa-solid fa-trash';

    list.appendChild(label);
    label.appendChild(input);
    label.appendChild(para);
    list.appendChild(icon);
    listContainer.appendChild(list);

    // Add event listeners
    label.addEventListener('click', () => {
        if (input.checked) {
            para.classList.add('cross');
        } else {
            para.classList.remove('cross');
        }
        saveTasks();
    });

    input.addEventListener('change', () => {
        saveTasks();
    });

    icon.addEventListener('click', () => {
        list.remove();
        saveTasks();
    });
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = Array.from(listContainer.querySelectorAll('.task')).map(task => {
        const text = task.querySelector('p').textContent;
        const completed = task.querySelector('input[type="checkbox"]').checked;
        return { text, completed };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task event listener
add.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = inputData.value.trim();
    if (inputValue !== '') {
        createTaskElement(inputValue, false);
        saveTasks();
        inputData.value = '';
    }
});
