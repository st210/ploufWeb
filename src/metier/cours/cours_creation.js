/**
 * Identification of the course
 */
var idCours = document.querySelector("#idCours");

/**
 * Name of the course
 */
var nom = document.querySelector("#nom");

/**
 * Level of the course
 */
var niveau = document.querySelector("#niveau");

/**
 * Course Duration
 */
var duree = document.querySelector("#duree");

/**
 * Course Date
 */
var dateCours = document.querySelector("#dateCours");

/**
 * Course Location
 */
var lieu = document.querySelector("#lieu");


/**
 * Create a course
 * Given: html form fields id
 * When: json course object is constructed
 * Then: send the object with a POST method
 */
function createJSONCours() {
    var coursJSON = {
        idCours: idCours.value,
        nom: nom.value,
        niveau: niveau.value,
        duree: duree.value,
        dateCours: dateCours.value,
        lieu: lieu.value
    };
    return coursJSON;
}

function submitCours() {
    var coursJSON = createJSONCours();
    createCours(idCours.value, coursJSON, coursIsCreated);
}

function coursIsCreated() {
    location.assign("cours_list.html");
    alert(idCours.value + " course has been successfully created.");
}