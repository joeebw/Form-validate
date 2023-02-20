const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm(){
    // Using contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'white';
        messageContainer.style.background = 'red';
        return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'white';
        messageContainer.style.background = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if(isValid && passwordMatch){
        message.textContent = 'Succesfully Registered';
        message.style.color = 'white';
        messageContainer.style.background = 'green';
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value 
    };
    // Do somenthing with user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit dara if valid
    if(isValid && passwordMatch){
        storeFormData();
    }
}


// Event listener
form.addEventListener('submit', processFormData);