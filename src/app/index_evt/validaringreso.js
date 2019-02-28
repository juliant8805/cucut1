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
    else if (select[0][6] === "Catastro") {
    	  document.getElementById("tipo_usuario").style.display = "block";
        //console.log(select);
        document.getElementById("catastro").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "Hacienda") {
    	 document.getElementById("tipo_usuario").style.display = "block";
        //console.log(select);
        document.getElementById("hacienda").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "HaciendaS") {
    	 document.getElementById("tipo_usuario").style.display = "block";
        //console.log(select);
        document.getElementById("hacienda").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "Totem") {
        document.getElementById("boton_comparacion").style.display = "none";
        document.getElementById("manual").style.display = "none";
        document.getElementById("menu_totem").style.display = "block";
        document.getElementById("ortofotototem").style.display = "block";
        document.getElementById("totemmenu").style.display = "block";
        importarScript("src/app/totem/ConsultaTotem.js");
    } else if (select[0][6] === "Planeacion") {
    	  document.getElementById("tipo_usuario").style.display = "block";
        document.getElementById("planeacion").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "PlaneacionS") {
    	  document.getElementById("tipo_usuario").style.display = "block";
        document.getElementById("planeacion").style.display = "block";
        document.getElementById("posicionbarra").style.display = "block";
    } else if (select[0][6] === "Demo") {
        document.getElementById("posicionbarra").style.display = "block";
        document.getElementById("boton_comparacion").style.display = "none";
        document.getElementById("layertree").style.display = "none";
        document.getElementById("manual").style.display = "none";
        document.getElementById("coordinates").style.display = "none";
        document.getElementById("consulta_matricula").style.display = "none";
        document.getElementById("consulta_propietario").style.display = "none";
        document.getElementById("consulta_id_propietario").style.display = "none";
        document.getElementById("pestana2").style.display = "none";
        document.getElementById("leyenda_actividades").style.display = "block";
        construcciones.setVisible(false);
        predio.getSource().updateParams({'STYLES': "zonas_actividad"});
    }
});
function validacionusuarios() { 
    var ca = document.cookie.split('=');
    if (ca["0"] === "") {
        location.href = "index.html?ig=error";
    } else {
        try {
            var select = search("cucuta:ValidateUser", ca[0], ca[1]);
            //document.getElementById("carga").style.display = "none";
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
function password() {
    var ca = document.cookie.split('=');
    var select = search("cucuta:ValidateUser", ca[0], hex_md5(document.getElementById('password').value));
    if (select === null || select.length === 0) {
        alert("La Contraseña Actual es Incorrecta</br></br>");
    } else if (document.getElementById("newpassword").value === document.getElementById("cpassword").value) {
        console.log(select);
       var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.176.7:8081/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
            <Update typeName="user:usuario">\
                <Property>\
                    <Name>contrasena</Name>\
                    <Value>' + hex_md5(document.getElementById('newpassword').value) + '</Value>\
                </Property>\
                <Filter>\
                    <FeatureId fid="usuario.' + select[0][5] + '"/>\
                </Filter>\
            </Update>\
        </Transaction>';
        rooturl = 'http://35.184.176.7:8081/geoserver/user/ows?';
        $.ajax({
            type: "POST",
            url: rooturl,
            dataType: "xml",
            async: false,
            contentType: "text/xml",
            data: postData,
            success: function (xml) {
                alert('Datos actualizados con exito</br></br>');
            },
            error: function (xml) {
                alert('Los datos NO se actualizaron');
            }
        });
       // $('#myModal').modal('hide');
    } else {
        alert("La contraseña nueva y su confirmacion no coinciden</br></br>");
    }
    return;
}
