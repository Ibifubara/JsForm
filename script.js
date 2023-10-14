const myForm = document.querySelector('#my-form');
const userName = document.querySelector('#name');
const userMail = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(userName.value == '' || userMail.value == ''){
        message.classList.add('error');
        message.innerHTML = 'Please enter all fields';

        setTimeout(() => message.remove(), 3000);
    }  else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${userName.value} : ${userMail.value}`));

        userList.appendChild(li);


        userName.value = '';
        userMail.value = '';
    }
}