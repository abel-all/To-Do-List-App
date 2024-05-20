const inputBox = document.getElementById("i-box")
const listConatiner = document.getElementById("ul-container")

function addTask() {
    if (inputBox.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listConatiner.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listConatiner.innerHTML);
}
function showTask() {
    listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();
