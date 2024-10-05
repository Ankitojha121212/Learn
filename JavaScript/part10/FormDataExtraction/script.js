let form = document.querySelector('form');

form.addEventListener('submit',function (event) {
    event.preventDefault();

    let user = document.querySelector('input');
    console.log(user);
    console.dir(user.value);
})