function log_in() {
    var login = document.querySelector("#login").value;
    var user_pwd = document.querySelector("#user_pwd").value;

    var body = {
        login: login,
        user_pwd: user_pwd
    };

    /* test */
    var user = getUserRole(login);
    var role_id = user.role_id;

    //getToken(body, tokenIsCreated);
    //tokenIsCreated(body);
    createCookie("login", login, 3);
    createCookie("role_id", role_id, 3);
    location.assign("../cours/cours_list.html");
}

function tokenIsCreated(data) {
    var login = data.login;
    var token = data.token;
    var user = getUserRole(login);
    var role_id = JSON.parse(user).role_id;

    createCookie("login", login, 3);
    createCookie("role_id", role_id, 3);
    createCookie("token", token, 3);
    location.assign("../cours/cours_list.html");
}