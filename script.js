//creatung a variable to store to - do list 
let taskList = [];

let badTaskList = [{
    name: "study",
    hours: 5
}];


//selecting add button
const addBtn = document.querySelector('#form-btn');

//listen to click event in the button 
addBtn.addEventListener("click", () => {
    event.preventDefault(); //removing ?task which is preventing to show in console
    //select taskName and get value 
    const taskName = document.querySelector(".task-input").value;
    //select hour input and get value 
    const taskHour = document.querySelector(".hrs-input").value;
    // console.log(taskHour, taskName)\


// <-------------Task Object ----------------->
    //Create each task object 
const task = {
    name: taskName,
    hour: taskHour
}
//push the task object to the task list array
taskList.push(task);
displayTask();
})

//Loop over the task list and create eac table row 
const displayTask = () => {
    let tableRows = "";
    taskList.forEach((task, index) => {
        console.log(task)
        const todoRow = `
        <tr>
        <td> ${index + 1}  </td>
        <td> ${task.name} 
        <td> ${task.hour} </td>
        <td class = "text-end"> 
        <button onclick ="deleteTask(${index})" class = "btn btn-danger">
        <i class="fa-solid fa-trash">
                </i>
            </button>


        <button class = "btn btn-success"> 
        <i class="fa-solid fa-right-long"></i>
        </button>





    </td>
        </tr>`

        tableRows = tableRows + todoRow;
            
    });

    const tableBody = document.querySelector("#task-list");
    tableBody.innerHTML = tableRows;

    const addRow = (tableRows)=> {
    const tableBody = document.querySelector("#task-list");
    tableBody.appendChild(tableRows);
}

}

  // <===============Delete  task ==================>
  const deleteTask = (index) =>{
    taskList = taskList.filter((task, i) => i  !== index);

    displayTask();
}
const switchToBadTask = (index) => {
    const badTask = taskList[index];
    badTaskList.push(badTask);
    displayBadTask();
    deleteTask(index);
}


const displayBadTask = () => {
    let tableRows = "";
    badtaskList.forEach((task, index) => {
        console.log(task)
        const todoRow = `
        <tr>
        <td> ${index + 1}  </td>
        <td> ${task.name} 
        <td> ${task.hour} </td>
        <td class = "text-end"> 
        <button onclick ="deleteTask(${index})" class = "btn btn-danger">
        <i class="fa-solid fa-trash">
                </i>
            </button>


        <button class = "btn btn-success"> 
        <i class="fa-solid fa-right-long"></i>
        </button>

    </td>
    </tr>`

        tableRows = tableRows + todoRow;
            
    });

  

    const tableBody = document.querySelector("#bad-task");
    tableBody.innerHTML = tableRows;

}







// .
// .
// .

// .
// .








// <===============Different way ==================>


//     //addding the above to do list to the table 
//     const tableBody = document.querySelector("#task-list");
//     //create each table row with td datas 
//     //create seperate function to append each table row 
//     //call function -pass the table row
//     //add the to do list to the table body
// //    const newTodoTask = document.createElement("tr")
// //    newTodoTask.innerHTML =  `
// //     <tr>
// //     <td> 1 </td>
// //     <td> ${taskName} 
// //     <td> ${taskHour} </td>
// //     <td class = "text-end"> 
// //         <button class = "btn btn-danger">
// //             <i class="fa-solid fa-trash">
// //             </i>
// //         </button>
// //     <button class = "btn btn-success">
// //     <i class="fa-solid fa-right-long"></i>
// //     </button>
// // </td>
// //     </tr>`
// //     addRow(newTodoTask)

// // })

// const addRow = (tableRow)=> {
//     const tableBody = document.querySelector("#task-list");
//     tableBody.appendChild(tableRow);
// }



//reset input field on submit 
//dont add the to do task again 
//switch back to entry list from bad list 
//total bad list task hour s
//total hour -entry +bad list 

