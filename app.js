document.querySelector(".inputField button").onclick = function () {
    if (document.querySelector(".inputField input").value.length == 0) {
      alert("plz enter a task");
    } else {
      document.querySelector(".todolist").innerHTML += `
          <div class="task">
          <span id="taskname">
                      ${document.querySelector(".inputField input").value}
                  </span>
                  <button class="delete">
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                  `;
                  var current_tasks = document.querySelectorAll(".delete");
          for(var i=0; i<current_tasks.length; i++){
              current_tasks[i].onclick = function(){
                  this.parentNode.remove();
              }
          }
         
          document.querySelector(".inputField input").value = "";
    }
  };

