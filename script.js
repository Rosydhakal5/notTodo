// get form data on form submit
// store data in a global array
// create a display function to display all the data from array to entry list

// create variable to store to-do lists
let taskList = [];

let badTaskList = [];

// const taskList = [
//   {
//     name: 'Study',
//     hours: 5
//   },
//   {
//     name: 'Code',
//     hours: 3
//   }
// ];

// add button select
const addBtn = document.querySelector('#form-btn');

// listen to click event in the button
addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // select taskName and get value
  const taskName = document.querySelector('.task-input').value;

  // select hours input and get value
  const taskHour = document.querySelector('.hrs-input').value;

  // create each task object
  const task = {
    name: taskName,
    hour: taskHour,
  };

  // push the task object to the task list array
  taskList.push(task);

  // display tasks
  displayTasks();
});

const displayTasks = () => {
  let tableRows = '';
  // loop over the task list and create each table row
  taskList.forEach((task, index) => {
    const todoRow = `
      <tr>
        <td>${index + 1}</td>
        <td>${task.name}</td>
        <td>${task.hour}</td>
        <td class="text-end">
          <button onclick="deleteTask(${index})" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button onclick="switchToBadTask(${index})" class="btn btn-success">
            <i class="fa-solid fa-right-long"></i>
          </button>
        </td>
      </tr>
    `;
    tableRows = tableRows + todoRow;
  });

  const tableBody = document.querySelector('#task-list');
   
  // add the to-do list to the table body
   tableBody.innerHTML = tableRows;
}

// delete -

const deleteTask = (index) => {
  // remove the todo from taskList array using index
  taskList = taskList.filter((task, i) => i !== index);
  // display tasks again
  displayTasks();
}

const switchToBadTask = (index) => {
  const badTask = taskList[index];
  badTaskList.push(badTask);
  displayBadTasks();
  deleteTask(index);
}

const displayBadTasks = () => {
  let tableRows = '';
  // loop over the task list and create each table row
  badTaskList.forEach((task, index) => {
    const todoRow = `
      <tr>
        <td>${index + 1}</td>
        <td>${task.name}</td>
        <td>${task.hour}</td>
        <td class="text-end">
          <button onclick="deleteTask(${index})" class="btn btn-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button class="btn btn-success">
            <i class="fa-solid fa-right-long"></i>
          </button>
        </td>
      </tr>
    `;
    tableRows = tableRows + todoRow;
  });

  const tableBody = document.querySelector('#bad-task');
  // add the to-do list to the table body
   tableBody.innerHTML = tableRows;
}

displayBadTasks();

// reset input fields on submit
// don't add the to do task again
// switch back to entry list from bad list
// total bad list task hours

// total hours - enty + bad list
// total hours shouldn't be more than (24*7) hours - 168
// checked in the button click
