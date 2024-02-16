
// Accessing the Log in page's forms 

const logInForm = document.querySelectorAll("form");

// accessing the login & sign up switch buttons

const logInBtn = document.querySelector("#log-in-btn");

const signUpBtn = document.querySelector("#sign-up-btn");

// Adding event listener to the log in button
// when adding the login form I remove sign up form and vice-versa
//Removing one form and adding one form so that at any time only one form is visible
// Fixing the heights and margin so when forms change it, everything stays at their place

logInBtn.addEventListener("click", () => {

    document.querySelector("#log-in-page").append(logInForm[0]);
    logInForm[1].remove();
    document.querySelector("#sign-up-page header").style.marginTop = "0";
    document.querySelector("#log-in-page").style.height = "260px";

});

// Adding event listener to the sign up button

signUpBtn.addEventListener("click", () => {

    document.querySelector("#log-in-page").append(logInForm[1]);
    logInForm[0].remove();
    document.querySelector("#sign-up-page header").style.marginTop = "80px";
    document.querySelector("#log-in-page").style.height = "340px";

});

//sign-up button redirecting to the main page

document.querySelector("#sign-btn").addEventListener("click",() => {

    window.location.href = "index.html";

});




