const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


//Show input error message
const showError = (input, message) => {

    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = message
    // small.className = ".form-control.error "
    // small.innerHTML = message
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
})


