//selecting add button

const addBtn = document.querySelector('#form-btn');

//listen to click event in the button 
addBtn.addEventListener("click", () => {
    event.preventDefault(); //removing ?task which is preventing to show in console
    //select taskName and get value 
    const taskName = document.querySelector(".task-input").value;
    //select hour input and get value 
    const taskHour = document.querySelector(".hrs-input").value;
    console.log(taskHour, taskName)

    //addding the above to do list to the table 
    const tableBody = document.querySelector("#task-list");
    //create each table row with td datas 
    //create seperate function to append each table row 
    //call function -pass the table row
    //add the to do list to the table body
   const newTodoTask = document.createElement("tr")
   newTodoTask.innerHTML =  `
    <tr>
    <td> 1 </td>
    <td> ${taskName} 
    <td> ${taskHour} </td>
    <td class = "text-end"> 
        <button class = "btn btn-danger">
            <i class="fa-solid fa-trash">
            </i>
        </button>
    <button class = "btn btn-success">
    <i class="fa-solid fa-right-long"></i>
    </button>
</td>
    </tr>`
    addRow(newTodoTask)

})

const addRow = (tableRow)=> {
    const tableBody = document.querySelector("#task-list");
    tableBody.appendChild(tableRow);
}