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

//Event Listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(username.value.length)
   
   //dont forget to get the value of an input u have to use the value property
   if(username.value === ''){
    showError(username, 'Username cannot be blank')
   } else{
       showSuccess(username)
   }

   if(email.value === ''){
    showError(email, 'email cannot be blank')
   } else{
       showSuccess(email)
   }

   if(password.value === ''){
    showError(password, 'Password cannot be blank')
   } else{
       showSuccess(password)
   }
   if(password2.value === ''){
    showError(password, 'Password confirmation cannot be blank')
   } else if(password.value !== password2.value ){
       showError(password2, "Passwords do not match")
   }
   else{
       showSuccess(password2)
   }
})


