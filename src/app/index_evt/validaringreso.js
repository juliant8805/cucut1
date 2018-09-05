$(document).on('ready', function () {
//codigo aquí
    //alert(1);
    var select = validacionusuarios();
    //console.log(select[0][6]);
    if (navigator.vendor !== "Google Inc.") {
        location.href = "cucuta.html?ig=navegador";
    }
    if (select === null || select === undefined) {
        location.href = "index.html?ig=error";
    }
//registro de ingreso de usuarios
    else if (select[0][6] === "catastro") {
        //console.log(select);
        document.getElementById("catastro").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "hacienda") {
        //console.log(select);
        document.getElementById("hacienda").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "totem") {
        document.getElementById("boton_comparacion").style.display = "none";
        document.getElementById("manual").style.display = "none";
        document.getElementById("menu_totem").style.display = "block";
        document.getElementById("ortofotototem").style.display = "block";
        document.getElementById("totemmenu").style.display = "block";
        importarScript("src/app/totem/ConsultaTotem.js");
    } else if (select[0][6] === "planeacion") {
        document.getElementById("planeacion").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "demo") {
        document.getElementById("posicionbarra").style.display = "block";
        document.getElementById("boton_comparacion").style.display = "none";
        document.getElementById("layertree").style.display = "none";
        document.getElementById("manual").style.display = "none";
        document.getElementById("coordinates").style.display = "none";
        document.getElementById("consulta_matricula").style.display = "none";
        document.getElementById("consulta_propietario").style.display = "none";
        document.getElementById("consulta_id_propietario").style.display = "none";
        document.getElementById("pestana2").style.display = "none";
    }
});
function validacionusuarios() {
    var ca = document.cookie.split('=');
    if (ca["0"] === "") {
        location.href = "index.html?ig=error";
    } else {
        try {
            var select = search("cucuta:ValidateUser", ca[0], ca[1]);
            document.getElementById("carga").style.display = "none";
            document.getElementById("nombre_usuario").innerHTML = select[0][0].split(" ", 1);
        } catch (err) {
        }
        return(select);
    }
}
function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}
