var base_path_API_membres = "https://localhost:10000";
var base_path_API_cours = "https://localhost:20000";

function getToken(data, callback) {
    ajaxPostAuth("http://localhost:20000/authent/tokens", data, callback);
}

/* useless now : gestion v1 without tokens */
function authenticateUser(data)
{
    var token = data.login + ":" + data.user_pwd;
    var hash = btoa(token);
    return "Basic " + hash;
}

/*
    Membres
 */
function createUser(userJSON, callback) {
    ajaxPost(base_path_API_membres + "/clients", userJSON, callback());
}

function getUserRole(login, callback) {
    ajaxGet(base_path_API_membres + "/clients/" + login, callback);
}

/*
    Cours
 */
function createCours(coursCreation, callback) {
    ajaxPost(base_path_API_cours + "/cours/", coursCreation, callback);
}

function getCours(callback) {
    ajaxGet(base_path_API_cours + "/cours", callback);
}

function getOneCours(idCours, callback) {
    ajaxGet(base_path_API_cours + "/cours/" + idCours, callback);
}

/*
    AJAX requests
 */
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.setRequestHeader('Accept', '*/*');
    req.setRequestHeader('Access-Control-Allow-Origin', '*');

    callbackRegistration(url, req, callback);
    req.send();
}

function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.setRequestHeader('Accept', '*/*');
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Access-Control-Allow-Origin', '*');

    callbackRegistration(url, req, callback);
    req.send(JSON.stringify(data));
}

function ajaxPostAuth(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.withCredentials = true;
    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader("Authorization", authenticateUser(data));

    callbackRegistration(url, req, callback);
    req.send(JSON.stringify(data));
}

function callbackRegistration(url, req, callback) {
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            if (callback !== undefined) {
                callback(req.responseText);
            }
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Network error with the url : " + url);
    });
}

function createCookie(name,value,hours) {
    var expires = "";
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookieValueByName(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

function deleteCookieByName(name) {
    createCookie(name,"",-1);
}