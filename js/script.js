const name = document.getElementById('name')
const message = document.getElementById('message')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const results = [];


function validation() {

    const check = form.addEventListener('submit', (e) => {
        let messages = []
        if (name.value === '' || name.value == null) 
        {
          messages.push('Name is required')
        }
      
        if (/^\s+$/.test(name.value))
        {
          messages.push(`Name contains only whitespace`)
        } 
        
        if ((name.value[0] === name.value.charAt(0).toUpperCase()) === false) 
        {
          messages.push(`Name doesn't start with capital letter!`)
        }
      
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) === false) {
          messages.push('Email is incorrect!')
        }
      
        if (/^\s+$/.test(email.value))
        {
          messages.push(`Email contains only whitespace`)
        }
      
        if (message.value.length <= 0) 
        {
          messages.push('Message cannot be blank! ')
        }
      
        if (message.value.length >= 20) 
        {
          messages.push('Message must be less than 100 characters')
          message.ValidateEmail
        }
      
        if (messages.length > 0) {
          e.preventDefault()
          errorElement.innerText = messages.join(', \n')
        } 
    })


        showAlert();
}


  
function showAlert() {
    alert("Your input: \n" + "NAME: " + document.getElementById('name').value + "\n" + "EMAIL: " + document.getElementById('email').value + "\n" + "MESSAGE: " + document.getElementById('message').value)
}



