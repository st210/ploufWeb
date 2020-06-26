function showCours(cours) {
    document.querySelector('#thisCours').insertAdjacentHTML("beforeEnd",
    '<div class="cols_2">'
        + '<label for="idCours">Identifiant</label><div id="idCours" aria-label="the course ID">' + cours.idCours
        + '</div><label for="nom">Intitule du cours</label><div id="nom" aria-label="the course name">' + cours.nom
        + '</div></div><div class="cols_2">'
        + '<label for="niveau">Niveau du cours</label><div id="niveau" aria-label="the course level">' + cours.niveau
        + '</div><label for="duree">Durée du cours</label><div id="duree" aria-label="the course duration">' + cours.duree
        + '</div></div><div class="cols_2">'
        + '<label for="dateCours">Date du cours</label><div id="dateCours" aria-label="the course date">' + cours.dateCours
        + '</div><label for="nom">Lieu du cours</label><div id="lieu" aria-label="the course location">' + cours.lieu
        + '</div></div><div class="cols_1">'
        + '<label for="login">Identifiant Enseignant</label><div id="login" aria-label="the professor ID">' + cours.login
        + '</div></div>');
}

getOneCours(idCours, showCours);
