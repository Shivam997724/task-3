const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container")
const countValue = document.querySelector(".count-value")




const addtask = ()=>{
    if(inputBox.value === '')
    {
        alert("You must write something!")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let edit = document.createElement("p")
        edit.innerHTML = "&#9998"
        li.appendChild(edit)
    }
    inputBox.value = "";
    savedata();
}



listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML =  localStorage.getItem("data")
}

showdata();