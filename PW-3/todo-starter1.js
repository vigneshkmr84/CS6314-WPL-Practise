
console.log("Loading js file")
addButton = document.getElementById("add")

eraser = document.createElement('i')
eraser.classList = 'bi bi-eraser-fill'


// toggle strike through
document.onclick = function (e) {
    if (e.target.tagName == 'LI') {
        // console.log(e);
        e.target.classList.toggle('done')
    }
}

const parent = document.querySelector('#ul1')
console.log(parent)
parent.addEventListener('click', function (e) {
    console.log(e.target)
    console.log(e.target.nodeName)
    if (e.target && e.target.nodeName == 'I') {
        /* console.log('i clicked for element ')
        console.log(e) */
        let li = e.target.parentNode

        console.log(li)
        let ulElement = e.target.parentNode.parentNode
        console.log(ulElement)
        ulElement.removeChild(li)


    }
})

function addFunction(e) {
    if (e.which == 13) {
        console.log("Add Element")
        let element = document.getElementById("new").value.trim()
        /* let img = document.createElement('i')
        img.classList = '<i class="bi bi-eraser-fill"></i>'
        element.appendChild('<i class="bi bi-eraser-fill"></i>') */

        /* let img = document.createElement('i')
        img.classList = 'bi bi-eraser-fill' */
        if (element != "") {
            let liElement = document.createElement("li")
            console.log('Added new element : ' + element)
            let textArea = document.createTextNode(element)
            liElement.appendChild(textArea)
            let img = document.createElement('i')
            img.classList = 'bi bi-eraser-fill'
            liElement.appendChild(img)

            document.getElementById('ul1').appendChild(liElement)
            // liElement.appendChild(eraser)
            console.log('Clearing existing input text')
            document.getElementById("new").value = ""
        }
    }
}


document.getElementById('new').addEventListener('keypress', addFunction);


