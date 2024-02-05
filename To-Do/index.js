const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedListContainer = document.getElementById("completed-list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if (e.target.classList.contains("checked")) {
            completedListContainer.appendChild(e.target);
        } else {
            listContainer.appendChild(e.target);
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
