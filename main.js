const form = document.querySelector('#my-form');
const message = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()
    if(nameInput.value === '' || emailInput.value === '')
    {
        message.classList.add('error')
        message.innerHTML = '<p>Please enter all fields</p>'
        
        setTimeout(() => message.remove(), 1000);
    }

    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields

        nameInput.value = '';
        emailInput.value = '';
    }
}