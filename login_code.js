const registerURL = 'http://127.0.0.1:5000/register';
const loginURL = 'http://127.0.0.1:5000/login';

const loginBtn = document.getElementById('login_btn');
const registerBtn = document.getElementById('register_btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

function myFunction(url) {
    username = usernameInput.value;
    console.log(username);

    password = CryptoJS.SHA256(passwordInput.value);
    console.log(password);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        console.log(response.status);
    })
    .catch(error => {
        console.error(error);
    });
}

loginBtn.addEventListener('click', async (event) => {
    myFunction(loginURL);
})

registerBtn.addEventListener('click', async (event) => {
    myFunction(registerURL);
})