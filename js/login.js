const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signUpBtn = document.getElementById('signUpBtn');
const signInBtn = document.getElementById('signInBtn');

// Redirect and alert for Sign Up
signUpBtn.addEventListener('click', () => {
    alert("Welcome Teacher user");
    window.location.href = "http://localhost:3001/";
});

// Redirect and alert for Sign In
signInBtn.addEventListener('click', () => {
    alert("Welcome Student user");
    window.location.href = "allcard.html";
});
