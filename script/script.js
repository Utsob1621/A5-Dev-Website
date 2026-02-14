// task btn

const taskButtons = document.getElementsByClassName("task-btn");
  let taskDone = document.getElementById("task-done");
  let taskNumber = parseInt(taskDone.innerText);
  let taskAdd = document.getElementById("task-add");

for (let i = 0; i < taskButtons.length; i++){
  const  taskBtn = taskButtons[i]

  taskBtn.addEventListener("click", function(event){
    event.preventDefault();
    alert("Board updated successfully");
    
    if(taskNumber > 0 ){
      taskNumber--;
      taskDone.innerText = taskNumber;
    }

  })
}