function log_in() {
    var login = document.querySelector("#login").value;
    var user_pwd = document.querySelector("#user_pwd").value;

    var body = {
        login: login,
        user_pwd: user_pwd
    };
    getToken(body, tokenIsCreated);
}

function tokenIsCreated(jsonData) {
    var login = JSON.parse(jsonData).login;
    var token = JSON.parse(jsonData).token;
    var user = getUserRole(login);
    var role_id = JSON.parse(user).role_id;

    createCookie("login", login, 3);
    createCookie("role_id", role_id, 3);
    createCookie("token", token, 3);
    location.assign("../cours/cours_list.html");
}