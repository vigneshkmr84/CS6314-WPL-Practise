addButton = document.getElementById("add")

  addButton.onClick = function (){
    console.log(document.getElementById("new").value)
    liElement = document.createElement("li")
    liElement.innerHTML = document.getElementById("new").value
  }