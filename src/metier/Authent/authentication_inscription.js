/* Variables from html form inputs */
var nomFamille = document.querySelector("#nomFamille");
var prenom = document.querySelector("#prenom");
var adresseVille = document.querySelector("#adresseVille");
var adressePays = document.querySelector("#adressePays");
var email = document.querySelector("#email");
var username = document.querySelector("#username");
var mdp = document.querySelector("#mdp");
var niveau = document.querySelector("#niveau");
var dateCours = document.querySelector("#dateCours");
var numLicence = document.querySelector("#numLicence");

/**
 * Create a user
 * Given: html form fields id
 * When: json user object is constructed
 * Then: send the object with a POST method
 */
/* TODO: rename certains champs comme sur BD */
function createJSONUser() {
    var userJSON = {
        nomFamille: nomFamille.value,
        prenom: prenom.value,
        adresseVille: adresseVille.value,
        adressePays: adressePays.value,
        email: email.value,
        username: username.value,
        mdp: mdp.value,
        niveau: niveau.value,
        dateCours: dateCours.value,
        numLicence: numLicence.value,
        role_id: 1
    };
    return userJSON;
}

function inscription() {
    var userJSON = createJSONUser();
    createUser(username.value, userJSON, UserIsCreated);
}

function UserIsCreated() {
    location.assign("cours_list.html");
    alert(username.value + " user has been successfully created.");
}

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
    location.assign("../cours/cours_list.html");
}