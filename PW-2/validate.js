window.onload = function () {

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
    // they are initially hidden

    const userNameRegex = /^[0-9a-zA-Z]+$/
    const emailRegex = /^[0-9a-zA-Z]{1,}@[0-9a-zA-Z]{1,}\.[0-9a-zA-Z]{1,}$/


    var span1 = document.createElement("span");
    var username = document.getElementById("username");
    username.parentNode.appendChild(span1);
    span1.style.display = "none"; //hide the span element

    var span2 = document.createElement("span");
    var password = document.getElementById("password");
    password.parentNode.appendChild(span2);
    span2.style.display = "none"; //hide the span element

    var span3 = document.createElement("span");
    var email = document.getElementById("email");
    email.parentNode.appendChild(span3);
    span3.style.display = "none"; //hide the span element

    username.onfocus = function () {
        span1.style.display = ""
        span1.className = "info"
        span1.innerHTML = "Only alpha numeric Characters"
    }

    username.onblur = function () {
        span1.style.display = "none";
        validateField('username', span1);
    }

    password.onfocus = function () {
        span2.style.display = ""
        span2.className = "info"
        span2.innerHTML = "Minumum 6 characters"
    }

    password.onblur = function () {
        span2.style.display = "none";
        validateField('password', span2);
    }

    email.onfocus = function () {
        span3.style.display = ""
        span3.className = "info"
        span3.innerHTML = "Valid email id format : abc@def.xyz"
    }

    email.onblur = function () {
        span3.style.display = "none";
        validateField('email', span3);
    }

    function validateField(fieldId, spanElement) {
        console.log('Validating for Field : ' + fieldId)
        let element = document.getElementById(fieldId);

        if (fieldId === 'username') {

            if (element.value.match(userNameRegex)) {
                console.log("valid " + fieldId)
                spanElement.className = 'ok'
                spanElement.innerHTML = 'OK'
                spanElement.style.display = ''
            } else {
                console.log("invalid " + fieldId)
                spanElement.className = 'error'
                spanElement.innerHTML = 'Error'
                spanElement.style.display = ''
            }
        } else if (fieldId === 'password') {
            console.log("Password field")
            console.log(element.value)
            if (element.value.length >= 6) {
                console.log("valid " + fieldId)
                spanElement.className = 'ok'
                spanElement.innerHTML = 'OK'
                spanElement.style.display = ''
            } else {
                console.log("invalid " + fieldId)
                spanElement.className = 'error'
                spanElement.innerHTML = 'Error'
                spanElement.style.display = ''
            }
            emailRegex
        } else if (fieldId === 'email') {
            console.log("Email field")
            console.log(element.value)
            if (element.value.match(emailRegex)) {
                console.log("valid " + fieldId)
                spanElement.className = 'ok'
                spanElement.innerHTML = 'OK'
                spanElement.style.display = ''
            } else {
                console.log("invalid " + fieldId)
                spanElement.className = 'error'
                spanElement.innerHTML = 'Error'
                spanElement.style.display = ''
            }
        }
    }
}

