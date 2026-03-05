const myBtnSbmt = document.getElementById("submit");

function obtainResults() {
    preventDefault();
    if (document.getElementById("child").checked) {
        console.log("User has answered yes to this question");
    }
}

myBtnSbmt.addEventListener("click", obtainResults)


const child = document.getElementsByName("child");

function childOptionChanged(event) {
    const input = document.getElementById("a");
    if(event.target.value === "yes") {
        input.style.display = "block";
    }
    else {
        input.style.display = "none";
    }
}

for (let childOption of child) {
    childOption.addEventListener("change", childOptionChanged);
}


const pet = document.getElementsByName("pet");

function petOptionChanged(event) {
    const input = document.getElementById("pt");
    if(event.target.value === "yes") {
        input.style.display = "block";
    }
    else {
        input.style.display = "none";
    }
}

for (let petOption of pet) {
    petOption.addEventListener("change", petOptionChanged);
}