const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("Task Can't be Empty");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
    }

}

