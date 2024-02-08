const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-list");
const taskCountElement = document.getElementById("task-count");
function addTask(){
        if(inputBox.value ===''){
            alert("You must write something"); //This will generate alert if you did not enter input text to add in todo list
        }else{
            let li =document.createElement("li"); //its create HTML element
            li.innerHTML =inputBox.value;  // in this line we added some text into html element
            listContainer.appendChild(li); //Where should be displayed the li (container list)
            let span =document.createElement("span");
            span.innerHTML= "\u00d7";  //This code will create a cross mark
            li.appendChild(span);
            updateTaskCount();
        }
        inputBox.value='';
}
//Below code update the task count
function updateTaskCount() {
    const taskCount = listContainer.getElementsByTagName("li").length;
    taskCountElement.textContent = `Tasks: ${taskCount}`;

}
// Below js code select and delete the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        updateTaskCount();
    }
},false);