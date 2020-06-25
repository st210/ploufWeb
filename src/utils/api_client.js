var base_path_API_membres = "http://localhost:10000";
var base_path_API_cours = "http://localhost:20000";


/*
    TODO : voir si possible de générer un token côté back, sinon générer aléatoirement par fonction http
 */
function getToken(data, callback) {
    ajaxPostAuth("http://localhost/authent/tokens", data, callback);
}

/*
    Membres
 */
function createUser(username, userJSON, callback) {
    ajaxPut(base_path_API_membres + /clients/ + username, userJSON, callback());
}

/*
    Cours
 */
function createCours(idCours, coursCreation, callback) {
    ajaxPut(base_path_API_cours + "/cours/" + idCours, coursCreation, callback);
}

function getCours(data, callback) {
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
    req.setRequestHeader('Accept', 'application/json');

    callbackRegistration(url, req, callback);
    req.send(null);
}

function ajaxPut(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("PUT", url);
    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('Content-Type', 'application/json');

    callbackRegistration(url, req, callback);
    req.send(JSON.stringify(data));
}

function ajaxPostAuth(url, jsonData, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.withCredentials = true;
    req.setRequestHeader('Accept', 'application/json');
    req.setRequestHeader('Content-Type', 'application/json');

    callbackRegistration(url, req, callback);
    req.send(JSON.stringify(jsonData));
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