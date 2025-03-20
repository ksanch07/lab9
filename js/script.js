// get the form and task list from the DOM  
let form = document.querySelector('#addForm')
let list = document.querySelector('#items')

// CHECK AND SEE IF THE NO TASKS MESSAGE SHOULD BE DISPLAYED
showNoTasksMessage()

// Add Tasks
form.addEventListener('submit', (e) => {
    // prevent submission
    e.preventDefault()
    //get the task value
    let task = document.querySelector('#item').value
    // create a new li element
    let li = document.createElement('li')
    // add a class to the li
    li.className = 'list-group-item'
    // add the task to the li as text node
    li.appendChild(document.createTextNode(task))
  // let textNode = document.createTextNode(task)
   //li.appendChild(textNode)
// add task to tasl list
list.appendChild(li)
})

// DELETE TASKS

let li
let deleteBtn = document.createElement('button')
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
deleteBtn.appendChild(document.createTextNode('X'))
li.appendChild(deleteBtn)
form.reset ()
showNoTasksMessage() 


list.addEventListener('click', (e) => {
    // check if the clicked element is a delete button
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete the task?')) {
            list.removeChild(e.target.parentElement)
            showNoTasksMessage()
        }
    }
})

// FUNCTION TO SHOW OR HIDE "NO TASKS" MESSAGE
function showNoTasksMessage() {
    if (list.children.length === 0) {
        document.querySelector('span').classList.add('show');
    } else {
        document.querySelector('span').classList.remove('show');
    }
}
