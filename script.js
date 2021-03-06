const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


//Show input error message
const showError = (input, message) => {

    const formControl = input.parentElement; //This will go to the direct parent of any given input tag
    formControl.className = "form-control error" //Manipulate class name for special CSS effects
    const small = formControl.querySelector('small') //to retrieve small tag that belongs to the specific form control 
    small.innerText = message //Changes the text to the given message passed into the parameter
    // small.className = ".form-control.error "
    // small.innerHTML = message
}

const showSuccess = (input) => {
    const formControl = input.parentElement; //This will go to the direct parent of any given input tag
    formControl.className = "form-control success" //Manipulate class name for special CSS effects
}

//Username and Password length

const validLength = (input) => {
    if(input.value.length < 3){
        showError(input, 'Length should be ')
    }
}

//Valid email

const validEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){ 
        showSuccess(input)
        // The test() method tests for a match in a string. 
        // This method returns true if it finds a match, 
        // otherwise it returns false.
    }
    else {
        showError(input, 'Email is not valid')
    }
}
//Check required fields
function checkRequired (inputArr){
    inputArr.forEach(function (input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} Cannot be Empty`)
        } 
        else{
            showSuccess(input)
        }
    })
}

//get field name and uppercase the first letter
//string manipulation
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} should be minimum of ${min}`)
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} should be less than ${max}`)
    } else{
        showSuccess(input)
    }
}

//Password match

const passwordValid = (password1, password2) => {
    if(password2.value !== password1.value ){
        showError(password2, "Passwords do not match")
    } else {
        showSuccess(password2)
    }
}

//Event Listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(username.value.length)
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    passwordValid(password, password2)
    validEmail(email)
   //dont forget to get the value of an input u have to use the value property

 
})


//Old code
// if(username.value === ''){
//     showError(username, 'Username cannot be blank')
//    } else{
//        showSuccess(username)
//    }

//    if(email.value === ''){
//     showError(email, 'email cannot be blank')
//    } else if (!validEmail(email.value)) {
//        showError(email, 'Please enter a valid email value')
//    }
   
//    else{
//        showSuccess(email)
//    }

//    if(password.value === ''){
//     showError(password, 'Password cannot be blank')
//    }
   
//    else{
//        showSuccess(password)
//    }
//    if(password2.value === ''){
//     showError(password2, 'Password confirmation cannot be blank')
//    } else if(password.value !== password2.value ){
//        showError(password2, "Passwords do not match")
//    } 
//    else{
//        showSuccess(password2)
//    }

