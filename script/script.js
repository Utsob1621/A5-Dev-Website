// utilities function
function getElementById (id) {
  return document.getElementById(id);
}

// const dateAndTime make a dynamic
  const dateAndTime = document.getElementById("date-and-time");

  const datetime = document.createElement("p");
  // datetime.classList.add();

  datetime.innerHTML = `
    <p>
    ${new Date().toLocaleDateString('en-Gb', {
        weekday : 'long'
      })}
      <br>
    <span class = "text-base font-bold">${new Date().toLocaleDateString('en-Gb', {
        day : 'numeric',
        month : 'long',
        year : 'numeric'
      })}</span> 
    </p>
  `

  dateAndTime.appendChild(datetime);

// task btn

const taskButtons = document.getElementsByClassName("task-btn");
let taskDone = document.getElementById("task-done");
let taskNumber = parseInt(taskDone.innerText);
let taskAdd = document.getElementById("task-add")
let taskAddNumber = parseInt(taskAdd.innerText);
const noticeContainer = getElementById("notice-box");

for (let i = 0; i < taskButtons.length; i++) {
  const taskBtn = taskButtons[i]

  taskBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");

    if (taskNumber > 0) {
      taskNumber--;
      taskDone.innerText = taskNumber;
    }

    if (taskAddNumber > 1) {
      taskAddNumber++;
      taskAdd.innerText = taskAddNumber
    }

    // notice history 
    const cardTitles = event.target.parentNode.parentNode.parentNode.children[1].innerText;
    const notice = document.createElement("div");
    notice.classList.add("bg-slate-100", "rounded-lg", "p-2", "mb-2");

    notice.innerHTML = `
      <p>
        You have Complete The ${cardTitles} at ${new Date().toLocaleTimeString()}
      </p>
    `
    noticeContainer.appendChild(notice);
  })
}