/* Variables from html form inputs */
var nom = document.querySelector("#nom");
var prenom = document.querySelector("#prenom");
var ville = document.querySelector("#ville");
var pays = document.querySelector("#pays");
var email = document.querySelector("#email");
var login = document.querySelector("#login");
var user_pwd = document.querySelector("#user_pwd");

/**
 * Create a user
 * Given: html form fields id
 * When: json user object is constructed
 * Then: send the object with a POST method
 */
function createJSONUser() {
    var userJSON = {
        nom: nom.value,
        prenom: prenom.value,
        ville: ville.value,
        pays: pays.value,
        email: email.value,
        login: login.value,
        user_pwd: user_pwd.value,
        role_id: 1
    };
    return userJSON;
}

function inscription() {
    var userJSON = createJSONUser();
    createUser(login.value, userJSON, UserIsCreated);
    log_in();
}

function UserIsCreated() {
    location.assign("cours_list.html");
    alert(login.value + " user has been successfully created.");
}

function log_in() {
    var login = login.value;
    var user_pwd = user_pwd.value;
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