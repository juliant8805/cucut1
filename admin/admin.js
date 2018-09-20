window.onload = function () {
    var ca = document.cookie.split('=');
    try {
        var select = search("cucuta:ValidateUser", ca[0], ca[1], 't');
    } catch (err) {
    }
    if (navigator.vendor !== "Google Inc.") {
        location.href = "index.html?ig=navegador";
    }
    if (select === undefined) {
        location.href = "index.html";
    }
};
/*function checksui() {
    document.getElementById("planeacionConsul").className = 'btn btn-success';
    document.getElementById("planeacion").className = 'btn btn-success';
}

function checkplaneacion() {
    document.getElementById("sui").className = 'btn btn-warning';
}
/*
function changeprofile(c) {
    //console.log(char);
    if (document.getElementById("dependencia" + c).value !== "") {
        $("#labelP").removeAttr("hidden").show();
        $("#table").removeAttr("hidden").show();
    } else if (document.getElementById("dependencia" + c).value === "") {
        $("#labelP").hide();
        $("#table").hide();
    }
    document.getElementById("catastro" + c).className = "btn btn-primary";
    document.getElementById("catastroConsul" + c).className = "btn btn-success";
    document.getElementById("sui" + c).className = "btn btn-warning";
    document.getElementById("pot" + c).className = "btn btn-danger";
    document.getElementById("planeacion" + c).className = "btn btn-primary";
    document.getElementById("hacienda" + c).className = "btn btn-primary";
    document.getElementById("sistemas" + c).className = "btn btn-warning";
    document.getElementById("gestor" + c).className = "btn btn-danger";
    document.getElementById("planeacionConsul" + c).className = "btn btn-success";
    document.getElementById("haciendaConsul" + c).className = "btn btn-success";
    if (document.getElementById("dependencia" + c).value === "Planeación") {
        $("#th1" + c).hide();
        $("#th11" + c).hide();
        $("#th12" + c).hide();
        $("#c11" + c).hide();
        $("#c12" + c).hide();
        $("#th2" + c).removeAttr("hidden").show();
        $("#th21" + c).removeAttr("hidden").show();
        $("#th22" + c).removeAttr("hidden").show();
        $("#th23" + c).removeAttr("hidden").show();
        $("#c21" + c).removeAttr("hidden").show();
        $("#c22" + c).removeAttr("hidden").show();
        $("#c23" + c).removeAttr("hidden").show();
        $("#th3" + c).hide();
        $("#th31" + c).hide();
        $("#th32" + c).hide();
        $("#c31" + c).hide();
        $("#c32" + c).hide();
        $("#th4" + c).hide();
        $("#c4" + c).hide();
        $("#th5" + c).hide();
        $("#c5" + c).hide();
        $("#th6" + c).hide();
        $("#c6" + c).hide();
    } else if (document.getElementById("dependencia" + c).value === "Hacienda") {
        $("#th1" + c).hide();
        $("#th11" + c).hide();
        $("#th12" + c).hide();
        $("#c11" + c).hide();
        $("#c12" + c).hide();
        $("#th2" + c).hide();
        $("#th21" + c).hide();
        $("#th22" + c).hide();
        $("#th23" + c).hide();
        $("#c21" + c).hide();
        $("#c22" + c).hide();
        $("#c23" + c).hide();
        $("#th3" + c).removeAttr("hidden").show();
        $("#th31" + c).removeAttr("hidden").show();
        $("#th32" + c).removeAttr("hidden").show();
        $("#c31" + c).hide();
        $("#c32" + c).removeAttr("hidden").show();
        $("#th4" + c).hide();
        $("#c4" + c).removeAttr("hidden").show();
        $("#th5" + c).hide();
        $("#c5" + c).hide();
        $("#th6" + c).hide();
        $("#c6" + c).hide();
    } else if (document.getElementById("dependencia" + c).value === "Catastro") {
        $("#th1" + c).removeAttr("hidden").show();
        $("#th11" + c).removeAttr("hidden").show();
        $("#th12" + c).removeAttr("hidden").show();
        $("#c11" + c).removeAttr("hidden").show();
        $("#c12" + c).removeAttr("hidden").show();
        $("#th2" + c).hide();
        $("#th21" + c).hide();
        $("#th22" + c).hide();
        $("#th23" + c).hide();
        $("#c21" + c).hide();
        $("#c22" + c).hide();
        $("#c23" + c).hide();
        $("#th3" + c).hide();
        $("#th31" + c).hide();
        $("#th32" + c).hide();
        $("#c31" + c).hide();
        $("#c32" + c).hide();
        $("#th4" + c).hide();
        $("#c4" + c).hide();
        $("#th5" + c).hide();
        $("#c5" + c).hide();
        $("#th6" + c).hide();
        $("#c6" + c).hide();
    } else if (document.getElementById("dependencia" + c).value === "GESSTOR") {
        $("#th1" + c).hide();
        $("#th11" + c).hide();
        $("#th12" + c).hide();
        $("#c11" + c).hide();
        $("#c12" + c).hide();
        $("#th2" + c).hide();
        $("#th21" + c).hide();
        $("#th22" + c).hide();
        $("#th23" + c).hide();
        $("#c21" + c).hide();
        $("#c22" + c).hide();
        $("#c23" + c).hide();
        $("#th3" + c).hide();
        $("#th31" + c).hide();
        $("#th32" + c).hide();
        $("#c31" + c).hide();
        $("#c32" + c).hide();
        $("#th4" + c).hide();
        $("#c4" + c).hide();
        $("#th5" + c).removeAttr("hidden").show();
        $("#c5" + c).hide();
        $("#th6" + c).hide();
        $("#c6" + c).removeAttr("hidden").show();
        document.getElementById("gestor" + c).className = "btn btn-danger active";
    } else if (document.getElementById("dependencia" + c).value === "Sistemas") {
        $("#th1" + c).hide();
        $("#th11" + c).hide();
        $("#th12" + c).hide();
        $("#c11" + c).hide();
        $("#c12" + c).hide();
        $("#th2" + c).hide();
        $("#th21" + c).hide();
        $("#th22" + c).hide();
        $("#th23" + c).hide();
        $("#c21" + c).hide();
        $("#c22" + c).hide();
        $("#c23" + c).hide();
        $("#th3" + c).hide();
        $("#th31" + c).hide();
        $("#th32" + c).hide();
        $("#c31" + c).hide();
        $("#c32" + c).hide();
        $("#th4" + c).removeAttr("hidden").show();
        $("#c4" + c).hide();
        $("#th5" + c).hide();
        $("#c5" + c).removeAttr("hidden").show();
        $("#th6" + c).hide();
        $("#c6" + c).hide();
        document.getElementById("sistemas" + c).className = "btn btn-warning active";
    } else if (document.getElementById("dependencia" + c).value === "Totem") {
        $("#th1" + c).hide();
        $("#th11" + c).hide();
        $("#th12" + c).hide();
        $("#c11" + c).hide();
        $("#c12" + c).hide();
        $("#th2" + c).hide();
        $("#th21" + c).hide();
        $("#th22" + c).hide();
        $("#th23" + c).hide();
        $("#c21" + c).hide();
        $("#c22" + c).hide();
        $("#c23" + c).hide();
        $("#th3" + c).hide();
        $("#th31" + c).hide();
        $("#th32" + c).hide();
        $("#c31" + c).removeAttr("hidden").show();
        $("#c32" + c).hide();
        $("#th4" + c).hide();
        $("#c4" + c).hide();
        $("#th5" + c).hide();
        $("#c5" + c).hide();
        $("#th6" + c).removeAttr("hidden").show();
        $("#c6" + c).hide();
        document.getElementById("pot" + c).className = "btn btn-danger active";
    }
}*/
function Sourceuser(requestString, responseFunc) {
    var querystr = requestString.term.replace(/[^0-9a-zA-Z ]/g, "");
    if (querystr.length === 0) {
        response([]);
        return;
    }
    var viewParamsStr = viewparamsToStr({
        query: querystr
    });
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: 'cucuta:BuscarUsuario',
        outputFormat: 'application/json',
        srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };
    $.ajax({
        url: 'http://35.184.176.7:8081/geoserver/ows?',
        data: wfsParams,
        type: "GET",
        dataType: "json",
        success: function (data, status, xhr) {
            var arr = [];
            for (i = 0; i < data.features.length; i++) {
                arr.push({
                    value: data.features[i].properties.usuario,
                    //cargo: data.features[i].properties.cargo,
                    //dependenci: data.features[i].properties.dependenci,
                    email: data.features[i].properties.email,
                    estado: data.features[i].properties.estado,
                    id: data.features[i].properties.id,
                    tipo: data.features[i].properties.tipo
                });
            }
            if (arr.length !== 0) {
                responseFunc(arr);
            } else {
                arr[0] = "No se encuentra informacion asociada a la consulta";
                responseFunc(arr);
            }
        },
        error: function (jqXHR, exception) {
            console.log(jqXHR);
            console.log(exception);
        }
    });
}
function SelectUser(event, ui) {
    var select = [];
    select[0] = [];
    for (j = 0; j < Object.keys(ui.item).length; j++) {
        var a = Object.keys(ui.item)[j];
        select[0][j] = ui.item[a];
    }
    console.log(select[0]);
    userid = select[0][3];
    document.getElementById('usu').disabled = true;
    document.getElementById('group').style.display = 'block';
    document.getElementById('button').style.display = 'block';
    //document.getElementById('e_nombre1').value = select["0"][0];
    //document.getElementById('e_apellido1').value = select["0"][2];
    //document.getElementById('e_apellido2').value = select["0"][3];
    //document.getElementById('e_cargo').value = select[0][1];
    document.getElementById('e_email').value = select[0][1];
    //document.getElementById('e_fecha').value = select[0][7].substring(0, 10);
    /*if (select[0][4] === "Planeación") {
        document.getElementById("dependenciaE").value = "Planeación";
        $("#th2E").removeAttr("hidden").show();
        $("#th21E").removeAttr("hidden").show();
        $("#th22E").removeAttr("hidden").show();
        $("#th23E").removeAttr("hidden").show();
        $("#c21E").removeAttr("hidden").show();
        $("#c22E").removeAttr("hidden").show();
        $("#c23E").removeAttr("hidden").show();
    } else if (select[0][4] === "Catastro") {
        document.getElementById("dependenciaE").value = "Catastro";
        $("#th1E").removeAttr("hidden").show();
        $("#th11E").removeAttr("hidden").show();
        $("#th12E").removeAttr("hidden").show();
        $("#c11E").removeAttr("hidden").show();
        $("#c12E").removeAttr("hidden").show();
    } else if (select[0][4] === "Hacienda") {
        document.getElementById("dependenciaE").value = "Hacienda";
        $("#th3E").removeAttr("hidden").show();
        $("#th31E").removeAttr("hidden").show();
        $("#th32E").removeAttr("hidden").show();
        $("#c32E").removeAttr("hidden").show();
        $("#c4E").removeAttr("hidden").show();
    } else if (select[0][4] === "Sistemas") {
        document.getElementById("dependenciaE").value = "Sistemas";
        $("#th4E").removeAttr("hidden").show();
        $("#c5E").removeAttr("hidden").show();
        document.getElementById("sistemasE").className = "btn btn-warning active";
    } else if (select[0][4] === "GESSTOR") {
        document.getElementById("dependenciaE").value = "GESSTOR";
        $("#th5E").removeAttr("hidden").show();
        $("#c6E").removeAttr("hidden").show();
        document.getElementById("gestorE").className = "btn btn-danger active";
    } else if (select[0][4] === "Totem") {
        document.getElementById("dependenciaE").value = "Totem";
        $("#c31E").removeAttr("hidden").show();
        $("#th6E").removeAttr("hidden").show();
        document.getElementById("potE").className = "btn btn-danger active";
    }*/
    if (select[0][2] === true) {
        document.getElementById("rad1").checked = true;
    } else {
        document.getElementById("rad2").checked = true;
    }
    if (select[0][4] === 'Catastro'){
        document.getElementById("dependenciaE").value = "Catastro";
    } else if (select[0][4] === 'Hacienda'){
        document.getElementById("dependenciaE").value = "Hacienda";
    } else if (select[0][4] === 'Planeacion'){
        document.getElementById("dependenciaE").value = "Planeacion";
    } else if (select[0][4] === 'Totem'){
        document.getElementById("dependenciaE").value = "Totem";
    } else if (select[0][4] === 'Administracion'){
        document.getElementById("dependenciaE").value = "Administracion";
    }
    /*if (select[0][3] === true) {
        document.getElementById("catastroE").className = "btn btn-primary active";
    } else {
        document.getElementById("catastroE").className = "btn btn-primary";
    }
    if (select[0][2] === true) {
        document.getElementById("catastroConsulE").className = "btn btn-success active";
    } else {
        document.getElementById("catastroConsulE").className = "btn btn-success";
    }
    if (select[0][16] === true) {
        document.getElementById("suiE").className = "btn btn-warning active";
    } else {
        document.getElementById("suiE").className = "btn btn-warning";
    }
    if (select[0][14] === true) {
        document.getElementById("potE").className = "btn btn-danger active";
    } else {
        document.getElementById("potE").className = "btn btn-danger";
    }
    if (select[0][13] === true) {
        document.getElementById("planeacionE").className = "btn btn-primary active";
    } else {
        document.getElementById("planeacionE").className = "btn btn-primary";
    }
    if (select[0][10] === true) {
        document.getElementById("haciendaE").className = "btn btn-primary active";
    } else {
        document.getElementById("haciendaE").className = "btn btn-primary";
    }
    if (select[0][15] === true) {
        document.getElementById("sistemasE").className = "btn btn-warning active";
    } else {
        document.getElementById("sistemasE").className = "btn btn-warning";
    }
    if (select[0][8] === true) {
        document.getElementById("gestorE").className = "btn btn-danger active";
    } else {
        document.getElementById("gestorE").className = "btn btn-danger";
    }
    if (select[0][12] === true) {
        document.getElementById("planeacionConsulE").className = "btn btn-success active";
    } else {
        document.getElementById("planeacionConsulE").className = "btn btn-success";
    }
    if (select[0][9] === true) {
        document.getElementById("haciendaConsulE").className = "btn btn-success active";
    } else {
        document.getElementById("haciendaConsulE").className = "btn btn-success";
    }*/
}
function actualizar() {
    /*if (document.getElementById('catastroE').className === 'btn btn-primary') {
        var catastroE = false;
    } else {
        var catastroE = true;
    }
    if (document.getElementById('catastroConsulE').className === 'btn btn-success') {
        var catastroConsulE = false;
    } else {
        var catastroConsulE = true;
    }
    if (document.getElementById('planeacionE').className === 'btn btn-primary') {
        var planeacionE = false;
    } else {
        var planeacionE = true;
    }
    if (document.getElementById('planeacionConsulE').className === 'btn btn-success') {
        var planeacionConsulE = false;
    } else {
        var planeacionConsulE = true;
    }
    if (document.getElementById('suiE').className === 'btn btn-warning') {
        var suiE = false;
    } else {
        var suiE = true;
    }
    if (document.getElementById('potE').className === 'btn btn-danger') {
        var potE = false;
    } else {
        var potE = true;
    }
    if (document.getElementById('haciendaE').className === 'btn btn-primary') {
        var haciendaE = false;
    } else {
        var haciendaE = true;
    }
    if (document.getElementById('haciendaConsulE').className === 'btn btn-success') {
        var haciendaConsulE = false;
    } else {
        var haciendaConsulE = true;
    }
    if (document.getElementById('sistemasE').className === 'btn btn-warning') {
        var sistemasE = false;
    } else {
        var sistemasE = true;
    }
    if (document.getElementById('gestorE').className === 'btn btn-danger') {
        var gestorE = false;
    } else {
        var gestorE = true;
    }*/
    var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.176.7:8081/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="formulario:usuario">\
                        <Property>\
                            <Name>email</Name>\
                            <Value>' + document.getElementById('e_email').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>estado</Name>\
                            <Value>' + document.getElementById('rad1').checked + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>tipo</Name>\
                            <Value>' + document.getElementById('dependenciaE').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="usuario.' + userid + '"/>\
                        </Filter>\
                    </Update>\
                </Transaction>';
    rooturl = 'http://35.184.176.7:8081/geoserver/formulario/ows?';
    $.ajax({
        type: "POST",
        url: rooturl,
        dataType: "xml",
        async: false,
        contentType: "text/xml",
        data: postData,
        success: function (xml) {
            alert('Datos actualizados con exito');
        },
        error: function (xml) {
            alert('Los datos NO se actualizaron');
        }
    });
}
function saveuser() {
    var nom1 = document.getElementById('nombre').value.toLowerCase();
    var nom = nom1.split(' ');
    if (nom.length === 1) {
        var nomg = nom[0].charAt(0).toUpperCase() + nom[0].slice(1);
    } else {
        var nomg = nom[0].charAt(0).toUpperCase() + nom[0].slice(1) + nom[nom.length - 1].charAt(0).toUpperCase() + nom[nom.length - 1].slice(1);
    }
    var cont = nomg + "2018";
    var contrasena = hex_md5(cont);
    var arrayResult = '<Transaction xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:formulario="formulario" xmlns:gml="http://www.opengis.net/gml" version="1.1.0" service="WFS" xsi:schemaLocation="http://35.184.176.7:8081/geoserver">\
     <Insert xmlns="http://www.opengis.net/wfs">\
     <formulario:usuario>\
     <usuario>' + nomg + '</usuario>\
     <nombre>' + document.getElementById('nombre').value + '</nombre>\
     <tipo>' + document.getElementById('dependencia').value + '</tipo>\
     <email>' + document.getElementById('email').value + '</email>\
     <contrasena>' + contrasena + '</contrasena>\
     <estado>' + true + '</estado>\
     </formulario:usuario>\
     </Insert>\
     </Transaction>';
    rooturl = 'http://35.184.176.7:8081/geoserver/formulario/ows?';
    var res = $.ajax({
        type: "POST",
        url: rooturl,
        dataType: "xml",
        contentType: "text/xml",
        async: false,
        data: arrayResult,
        success: function (xml) {
        },
        error: function (xml) {
            console.log('error');
        }
    });
    if (res.responseText.substring(0, 62) === '<?xml version="1.0" encoding="UTF-8"?><wfs:TransactionResponse') {
        var urls = "./mail/envio_mail.php";
        var req = new ajaxRequest();
        var url = urls + "?c=" + document.getElementById('email').value + "&u=" + nomg + "&p=" + cont;
        req.open("GET", url, false);
        req.send();
    } else {
        alert("El usuario o correo electronico ya se encuentra registrado");
    }
}
function password() {
    var ca = document.cookie.split('=');
    //console.log(ca);
    var select = search("preproduccion:ValidateUser", ca[0], hex_md5(document.getElementById('password').value), "t");
    //console.log(select);
    //console.log(document.getElementById('password').value);
    //console.log(hex_md5(document.getElementById('password').value));
    if (select === null || select.length === 0) {
        alert("Contraseña incorrecta");
    } else if (document.getElementById("newpassword").value === document.getElementById("cpassword").value) {
        var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.176.7:8081/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
            <Update typeName="user:usuario">\
                <Property>\
                    <Name>contrasena</Name>\
                    <Value>' + hex_md5(document.getElementById('newpassword').value) + '</Value>\
                </Property>\
                <Filter>\
                    <FeatureId fid="usuario.' + select[0][18] + '"/>\
                </Filter>\
            </Update>\
        </Transaction>';
        rooturl = 'http://35.184.3.4:8080/geoserver/user/ows?';
        $.ajax({
            type: "POST",
            url: rooturl,
            dataType: "xml",
            async: false,
            contentType: "text/xml",
            data: postData,
            success: function (xml) {
                alert('Datos actualizados con exito');
            },
            error: function (xml) {
                alert('Los datos NO se actualizaron');
            }
        });
        $('#myModal').modal('hide');
    } else {
        alert("La contraseña nueva y su confirmacion no coinciden");
    }
    return;
}
function ajaxRequest() {
    try {
        var request = new XMLHttpRequest();
    } catch (e1) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e2) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e3) {
                request = false;
            }
        }
    }
    return request;
}