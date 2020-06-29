window.onload = userLogIn;

function userLogIn() {
    let loggedInUser = localStorage.getItem('user');
    console.log(loggedInUser);
    if (typeof loggedInUser === "string" && loggedInUser.length > 0) {
        document.getElementById('userId').disabled = true;
        document.getElementById('logInButton').style.display = 'none';
        document.getElementById('knownUser').innerText = "Welcome, " + loggedInUser;
        document.getElementById('logOutButton').style.display = 'block';
    }
}
function retineUser() {
    localStorage.setItem('user', document.getElementById('userId').value);
    userLogIn();
}

function forgetUser() {
    localStorage.removeItem('user');
    location.reload(); // refresh
}