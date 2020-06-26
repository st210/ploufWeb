function showUsername() {
    var username = getCookieValueByName("log_in");
    document.querySelector('#greetings').insertAdjacentHTML("beforeEnd",
        '<span id="username">' + username + '</span>')
}

function dropdown() {
    var css = document.querySelector("#dropdown");
    if (css.className.indexOf("show") === -1) {
        css.className += " show";
    } else {
        css.className = css.className.replace(" show", "");
    }
}

function logout() {
    deleteCookieByName("log_in");
    deleteCookieByName("token");
    location.replace("../authentication_login.html");
}

showUsername();