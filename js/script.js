// get the form and task list from the DOM  
let form = document.querySelector('#addForm');
let list = document.querySelector('#items');
let noTasksMessage = document.querySelector('#noTasksMessage'); // Correctly reference the message

// CHECK AND SEE IF THE NO TASKS MESSAGE SHOULD BE DISPLAYED
showNoTasksMessage();

// Add Tasks
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let task = document.querySelector('#item').value.trim();
    if (task === '') return; // prevent empty tasks

    // Create the li container with Bootstrap spacing classes
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Create a span to hold the task text (keeps spacing clean)
    let taskText = document.createElement('span');
    taskText.textContent = task;

    // Create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm delete flex-shrink-0';
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append task text and delete button to the li
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    form.reset();
    showNoTasksMessage();
});

// DELETE TASKS
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) { // check if clicked element is a delete button
        if (confirm('Are you sure you want to delete the task?')) {
            list.removeChild(e.target.parentElement);
            showNoTasksMessage();
        }
    }
});

// FUNCTION TO SHOW OR HIDE "NO TASKS" MESSAGE
function showNoTasksMessage() {
    if (list.children.length === 0) {
        noTasksMessage.classList.add('show'); // Correct reference
    } else {
        noTasksMessage.classList.remove('show');
    }
}
