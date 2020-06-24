function login() {
    var login = document.querySelector("#login").value;
    var password = document.querySelector("#password").value;

    var body = {
        login: login,
        password: password
    };
    getToken(body, tokenIsCreated);
}

function tokenIsCreated(jsonData) {
    var login = JSON.parse(jsonData).login;
    var token = JSON.parse(jsonData).token;
    createCookie("login", login, 3);
    createCookie("token", token, 3);
    location.assign("cours/cours_list.html");
}