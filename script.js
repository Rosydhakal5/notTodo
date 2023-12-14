//selecting add button

const addBtn = document.querySelector('#form-btn');

//listen to click event in the button 
addBtn.addEventListener("click", () => {
    //select taskName and get value 
    const taskName = document.querySelector(".task-input").value;
    //select hour input and get value 
    const taskHour = document.querySelector(".hrs-input").value;
    console.log(taskHour, taskName)

})