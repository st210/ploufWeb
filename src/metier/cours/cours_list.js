function appeared(elt) {
    var login = getCookieValueByName("login");
    var user = getUserRole(login, IsVisible);
    var role = JSON.parse(user).role_id;

    if (role !== 1) {
        document.getElementById(elt).className = elt + "_visible";
    }
}

function isVisible() {
    alert(user)
}


function showCoursList(response) {
    var list_cours = JSON.parse(response);
    list_cours.forEach(function (cours) {
        document.querySelector('#list_cours').insertAdjacentHTML("beforeEnd",
            '<tr><td>' + cours.idCours
            + '</td><td>' + cours.nom
            + '</td><td>' + cours.niveau
            + '</td><td>' + cours.dateCours
            + '</td><td>' + cours.duree
            + '</td><td class="btns_table"><button class="btn btn_blue">Voir</button> <button class="btn btn_black">Editer</button>'
            + '</td></tr>');
    })
}

getCours(showCoursList);
