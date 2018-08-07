$(document).on('ready', function () {
//codigo aquí
    //alert(1);
    var select = validacionusuarios();
    //console.log(select);
    if (navigator.vendor !== "Google Inc.") {
        location.href = "cucuta.html?ig=navegador";
    }
    if (select === null || select === undefined) {
        location.href = "index.html?ig=error";
    }
//registro de ingreso de usuarios
    else if (select[0][6]==="catastro"){
		//console.log(select);
        m="c";
		document.getElementById("catastro").style.display = "block";
    }else if (select[0][6]==="hacienda"){
		//console.log(select);
		document.getElementById("hacienda").style.display = "block";
        m="h";
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