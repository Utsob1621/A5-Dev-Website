// utilities function
function getElementById(id) {
  return document.getElementById(id);
}

// const dateAndTime make a dynamic
const dateAndTime = document.getElementById("date-and-time");

const datetime = document.createElement("p");
// datetime.classList.add();

datetime.innerHTML = `
    <p>
    ${new Date().toLocaleDateString("en-Gb", {
      weekday: "long",
    })}
      <br>
    <span class = "text-base font-semibold">${new Date().toLocaleDateString(
      "en-Gb",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      },
    )}</span> 
    </p>
  `;
dateAndTime.appendChild(datetime);

// task btn

const taskButtons = document.getElementsByClassName("task-btn");
let taskDone = document.getElementById("task-done");
let taskNumber = parseInt(taskDone.innerText);
let taskAdd = document.getElementById("task-add");
let taskAddNumber = parseInt(taskAdd.innerText);
const noticeContainer = getElementById("notice-box");

for (let i = 0; i < taskButtons.length; i++) {
  const taskBtn = taskButtons[i];

  taskBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");

    if (taskNumber > 0) {
      taskNumber--;
      taskDone.innerText = taskNumber;
    }

    if (taskAddNumber > 1) {
      taskAddNumber++;
      taskAdd.innerText = taskAddNumber;
    }

    // notice history
    const cardTitles =
      event.target.parentNode.parentNode.parentNode.children[1].innerText;
    const notice = document.createElement("div");
    notice.classList.add("bg-slate-100", "rounded-lg", "p-2", "mb-2");

    notice.innerHTML = `
      <p>
        You have Complete The ${cardTitles} at ${new Date().toLocaleTimeString()}
      </p>
    `;
    noticeContainer.appendChild(notice);

    taskBtn.disabled = true;
    taskBtn.innerText = "Completed";

    if (taskNumber === 0) {
      alert("Congrates!! You have to completed all the current task");

      const finalNotice = document.createElement("div");
      finalNotice.classList.add("bg-slate-100", "rounded-lg", "p-2", "mb-2");

      finalNotice.innerHTML = `
      <p>
        You have complete the task Review Ami Utsob Saha at ${new Date().toLocaleTimeString()}
      </p>
    `;

      noticeContainer.appendChild(finalNotice);
    }
  });

  document.getElementById("clear-btn").addEventListener("click", function () {
    noticeContainer.innerHTML = "";
  });
}

document.getElementById("today-btn").addEventListener("click", function () {
  window.location.href = "./main.html";
});



// bg dynamic color 

const bgColor = document.getElementById("bg-color");
const ColorBtn = document.getElementById("color-d-btn");


let count = 0;

ColorBtn.addEventListener("click", function(){
  if (count === 0 ){
    bgColor.style.backgroundColor = "lightgreen";
    count = 1;
  }

  else if (count === 1){
    bgColor.style.backgroundColor = "lightblue";
    count = 2;
  }

  else if(count === 2){
    bgColor.style.backgroundColor = "lightyellow"
    count = 3;
  }

  else if (count === 3) {
    bgColor.style.backgroundColor = "lavender"
    count = 4;
  }

  else if (count === 4) {
    bgColor.style.backgroundColor = "lightpink"
    count = 5;
  }

  else if (count === 5) {
    bgColor.style.backgroundColor = "lightCyan"
    count = 6;
  }

else if (count === 6) {
    bgColor.style.backgroundColor = "maroon"
    count = 7;
  }
  
  else {
      bg.style.backgroundColor = "white";
      count = 0;
    }
})
