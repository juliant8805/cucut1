

//$(".ol-full-screen").click();




function validarFormulario() {
    jQuery.validator.messages.required = 'Este campo es obligatorio';
    jQuery.validator.messages.number = 'Este campo debe ser num&eacute;rico.';
    jQuery.validator.messages.email = 'La direcci&oacute;n de correo es incorrecta.';
    $("#formulario").validate();
}
$(document).ready(function () {
    validarFormulario();
});

var openFile = function (event) {
    document.getElementById('labelfoto1').style.display = 'block';
    document.getElementById('output1').style.width = '40%';
    document.getElementById('output1').style.height = 'auto';
    document.getElementById('output1').style.border = '1px solid #62BAD3';


    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        console.log(dataURL);
        var output = document.getElementById('output1');
        output.src = dataURL;

    };
    reader.readAsDataURL(input.files[0]);
};
var openFile2 = function (event) {
    document.getElementById('labelfoto2').style.display = 'block';
    document.getElementById('output2').style.width = '40%';
    document.getElementById('output2').style.height = 'auto';
    document.getElementById('output2').style.border = '1px solid #62BAD3';
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output2');
        output.src = dataURL;

    };
    reader.readAsDataURL(input.files[0]);
};
var openFile3 = function (event) {
    document.getElementById('labelfoto3').style.display = 'block';
    document.getElementById('output3').style.width = '40%';
    document.getElementById('output3').style.height = 'auto';
    document.getElementById('output3').style.border = '1px solid #62BAD3';
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output3');
        output.src = dataURL;

    };
    reader.readAsDataURL(input.files[0]);
};
var openFile4 = function (event) {
    document.getElementById('labelfoto4').style.display = 'block';
    document.getElementById('output4').style.width = '40%';
    document.getElementById('output4').style.height = 'auto';
    document.getElementById('output4').style.border = '1px solid #62BAD3';
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output4');
        output.src = dataURL;

    };
    reader.readAsDataURL(input.files[0]);
};
var openFile5 = function (event) {
    document.getElementById('labelfoto5').style.display = 'block';
    document.getElementById('output5').style.width = '40%';
    document.getElementById('output5').style.height = 'auto';
    document.getElementById('output5').style.border = '1px solid #62BAD3';
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output5');
        output.src = dataURL;

    };
    reader.readAsDataURL(input.files[0]);
};



function getLocation() {
    document.getElementById("track").checked = false;
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    document.getElementById("label_latitud").style.display = 'block';
    document.getElementById("label_longitud").style.display = 'block';
    document.getElementById('input_coord1').value = latitud;
    document.getElementById('input_coord2').value = longitud;
}


function saveform() {
    if (cod_recolector.value/* && cod_supervisor && tipo_predio && uso_predio && via_acceso && input_coord && foto1.value && foto2.value && foto3.value*/) {
        // var prueba = update_query("SELECT Count(*) FROM u_terreno");
        // select_query

        actualizar();
        //guardar();

        //alert("formulario guardado"); 
    } else {
        alert("faltan campos");
    }

}

function verfotos() {




    //  mostrarfotos.innerHTML = "<img src=\"./imagenes/manual.png\" width=\"400px\" height=\"150px\">"; 
    var openFile = function (event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            if (foto1.value) {
                var output = document.getElementById('output');
            } else if (foto2.value) {
                var output = document.getElementById('output2');
            }
            output.src = dataURL;
        };
        reader.readAsDataURL(input.files[0]);
    };


    /*
     var foto1 = document.getElementById ("foto1");
     var preview = document.querySelector('img');
     var file    = document.querySelector('input[type=file]').files[0];
     
     reader.onloadend = function () {
     preview.src = reader.result;
     }
     
     
     var foto2 = document.getElementById ("foto2");
     var foto3 = document.getElementById ("foto3");
     if (foto1.value || foto2.value || foto3.value){
     if (foto1.value && foto2.value && foto3.value) {           
     //mostrarfotos.innerHTML = "<img src=\'./imagenes/foto_opt1.png\' width=\"120px\" >";  
     reader.readAsDataURL(file);
     }
     else if (foto1.value && foto2.value && foto3.value) {           
     mostrarfotos.innerHTML = "<img id='manual' src='./imagenes/manual.png' >";      
     }
     else if (foto1.value && foto2.value && foto3.value) {           
     mostrarfotos.innerHTML = "<img id='manual' src='./imagenes/manual.png' >";      
     }
     else if (foto1.value && foto2.value && foto3.value) {           
     mostrarfotos.innerHTML = "<img id='manual' src='./imagenes/manual.png' >";      
     }
     
     }
     
     else{
     mostrarfotos.innerHTML = "No Existen Fotografías Cargadas";
     }  */
}

function vercoordenadas() {
    coordenadas.setVisible(true);
}

function actualizar() {
    userid = 1;
    var prueba = "prueba";
    var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.176.7:8081/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="formulario:seleccion_predios">\
                        <Property>\
                            <Name>recoletor</Name>\
                            <Value>' + prueba + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="id.fid-22a1db29_15c5b9e32df_-78ab"/>\
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
function guardar() {
    var prueba = "prueba";
    var arrayResult = '<Transaction xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:formulario="formulario" xmlns:gml="http://www.opengis.net/gml" version="1.1.0" service="WFS" xsi:schemaLocation="http://35.184.176.7:8081/geoserver">\
     <Insert xmlns="http://www.opengis.net/wfs">\
     <formulario:seleccion_predios>\
     <recoletor>' + prueba + '</recoletor>\ </formulario:seleccion_predios>\
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
    /*if (res.responseText.substring(0, 62) === '<?xml version="1.0" encoding="UTF-8"?><wfs:TransactionResponse') {
     var urls = "./mail/envio_mail.php";
     var req = new ajaxRequest();
     var url = urls + "?c=" + document.getElementById('email').value + "&u=" + nomg + "&p=" + cont;
     req.open("GET", url, false);
     req.send();
     } else {
     alert("El usuario o correo electronico ya se encuentra registrado");
     }*/
}




































function mostrar(consulta) {
    var prueba = select_query("SELECT Count(*) FROM u_terreno");
    console.log(prueba);


}



function mostrar(consulta) {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById('barra_sitio').style.display = 'none';
    document.getElementById('barra_barrio').style.display = 'none';
    document.getElementById('barra_manzana').style.display = 'none';
    document.getElementById('barra_direccion').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    document.getElementById('direccion').value = "";
    document.getElementById('address1').value = "";
    document.getElementById('barrio').value = "";
    document.getElementById('manzana').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('codigo').value = "";
    if (consulta === 'consulta_direccion') {
        document.getElementById('barra_direccion').style.display = 'block';
        // localidad.setVisible(false);
        // manzana.setVisible(false);
        //barrio.setVisible(false);
    } else if (consulta === 'consulta_sitio') {
        document.getElementById('barra_sitio').style.display = 'block';
        //localidad.setVisible(false);
        // manzana.setVisible(false);
        barrios.setVisible(false);
    } else if (consulta === 'consulta_propietario') {
        document.getElementById('barra_propietario').style.display = 'block';
        barrios.setVisible(false);
    } else if (consulta === 'consulta_id_propietario') {
        document.getElementById('barra_id_propietario').style.display = 'block';
        barrios.setVisible(false);
    } else if (consulta === 'consulta_barrio') {
        document.getElementById('barra_barrio').style.display = 'block';
        barrios.setVisible(true);
        //localidad.setVisible(false);
        predio.setVisible(false);
        //manzana.setVisible(false);
        // map.getView().fitExtent(barrio.getExtent(), map.getSize());
    } else if (consulta === 'consulta_codigo') {
        document.getElementById('barra_codigo').style.display = 'block';
        barrios.setVisible(false);
    } else if (consulta === 'consulta_matricula') {
        document.getElementById('barra_matricula').style.display = 'block';
        barrios.setVisible(false);
    } else if (consulta === 'consulta_comuna') {
        document.getElementById('barra_comuna').style.display = 'block';
    } else if (consulta === 'consulta_localidad') {
        document.getElementById('barra_localidad').style.display = 'block';
        localidad.setVisible(true);
        barrio.setVisible(false);
        predio.setVisible(false);
        manzana.setVisible(false);
        map.getView().fitExtent(barrio.getExtent(), map.getSize());
    } else if (consulta === 'consulta_manzana') {
        document.getElementById('barra_manzana').style.display = 'block';
        //localidad.setVisible(false);
        barrios.setVisible(false);
        //manzana.setVisible(true);
        map.getView().fitExtent(predio.getExtent(), map.getSize());
    }
}

function mostrartotem(consulta) {
    if (consulta == 'direcciontotem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        document.getElementById('exp1').style.display = 'block';
        var x = document.getElementById("audiodireccion");
        x.play();
    } else if (consulta == 'referencia') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiorefcatastral");
        x.play();
    } else if (consulta == 'sitiototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiositio");
        x.play();
    } else if (consulta == 'localidad') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiolocalidad");
        x.play();
    } else if (consulta == 'barrio') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiobarrio");
        x.play();
    } else if (consulta == 'manzana') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        var x = document.getElementById("audiomanzana");
        x.play();
    } else if (consulta == 'barriototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'none';
        document.getElementById('menubarriototem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        // document.getElementById('inputmanzanatotem').style.display = 'block';
        // document.getElementById('consultas_totem').style.display = 'block';
        //var x = document.getElementById("audiomanzana");
        //x.play();
    } else if (consulta == 'manzanatotem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        // document.getElementById('inputmanzanatotem').style.display = 'block';
        // document.getElementById('consultas_totem').style.display = 'block';
        //var x = document.getElementById("audiomanzana");
        //x.play();
    } else if (consulta == 'prediototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('buscar_ref').style.display = 'none';
        document.getElementById('menu_predio').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        //document.getElementById('submenuprediototem').style.display = 'block';
        //document.getElementById('inputdirecciontotem').style.display = 'block';
        //document.getElementById('consultas_totem').style.display = 'block';
    } else if (consulta == 'direcciontotemp')
    {
        document.getElementById('menu_predio').style.display = 'none';
        document.getElementById('submenuprediototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('consultas_totem').style.display = 'none';
        document.getElementById('consultas_totemp').style.display = 'block';
    } else if (consulta == 'sitiototemp')
    {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputlocalidadtotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputlocalidadtotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'none';
        document.getElementById('menubarriototem').style.display = 'none';
        document.getElementById('menusitiostotem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
    }
}

function menu_principal() {
// document.getElementById('botones').style.display = 'block';
    document.getElementById('submenu').style.display = 'block';
    document.getElementById('cerrar_submenu').style.display = 'block';
    document.getElementById('lupa_pequeña').style.display = 'block';
    document.getElementById('boton_capas').style.display = 'block';
    document.getElementById('boton_principal').style.display = 'none';
}

function menu_consultas() {
    /*document.getElementById('busqueda_personalizada').style.display = 'block';
     document.getElementById('cerrar_submenu_cafe').style.display = 'block';
     document.getElementById('cerrar_submenu_verde').style.display = 'none';*/
    document.getElementById('botones').style.display = 'block';
    document.getElementById('herramientas').style.display = 'none';
    //document.getElementById('transicion_capas').style.display = 'none';

    /*if (document.getElementById('botones').style.display === "" || document.getElementById('botones').style.display === "none"){
     var ca = document.cookie.split('=');
     var select = select_query("SELECT * FROM usuario WHERE usuario ='" + ca[0] + "' AND contrasena ='" + ca[1] + "' AND estado='t';");
     console.log(select[0][8]);
     if(select[0][7]==='f'){
     document.getElementById('predios_actualizacion').style.display = 'none';
     document.getElementById('oficial_vs_AAA').style.display = 'none';
     document.getElementById('oficial_vs_AAA_uso').style.display = 'none';
     document.getElementById('disponibilidad_AAA').style.display = 'none';
     document.getElementById('transmetro').style.display = 'none';
     document.getElementById('espacio_publico').style.display = 'none';
     document.getElementById('Nomenclatura Domiciliaria').style.display = 'none';
     }
     } else
     {*/


    //document.getElementById('submenu').style.display = 'none';

    //}      
}

function herramientas() {
    /*document.getElementById('mensaje').style.display = 'none';
     document.getElementById('busqueda_personalizada').style.display = 'none';*/
    document.getElementById('botones').style.display = 'none';
    // document.getElementById('cerrar_submenu_cafe').style.display = 'none';
    document.getElementById('herramientas').style.display = 'block';
    /*document.getElementById('transicion_capas').style.display = 'block';
     document.getElementById('cerrar_submenu_verde').style.display = 'block';*/
}
function limpiar_consulta() {
    var x = document.getElementById("marco2");
    var y = (x.contentWindow || x.contentDocument);
    /*if (y.document)y = y.document;
     y.body.style.display = "none";	*/

    globalstyle = "sinconsulta";
    predio.setVisible(true);
    barrios.setVisible(false);
    coordenadas.setVisible(false);
    //construcciones.setVisible(true);
    //puntos_obras.setVisible(false);
    //obras.setVisible(false);
    //ejeobras.setVisible(false);
    //heatmap.setVisible(false);
    predio.getSource().updateParams({'STYLES': 'u_terreno_formulario', 'CQL_FILTER': null});
    document.getElementById("contenedorg").style.display = "none";
    document.getElementById('panel_atr').style.display = 'none';
    document.getElementById('botoncerrarstreetview').style.display = 'none';
    document.getElementById('botonmostrarstreetview').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
    var markerSource = highlightfeatures.getSource();
    markerSource.clear();
    var markerSource1 = highlight.getSource();
    markerSource1.clear();
    //document.getElementById('address1').value = "";
    document.getElementById('barrio').value = "";
    //document.getElementById('localidad').value = "";
    document.getElementById('manzana').value = "";
    //document.getElementById('matricula').value = "";
    document.getElementById('direccion').value = "";
    //document.getElementById('codigo').value = "";
    //document.getElementById("marco").style.display = "none";
    document.getElementById("marco2").style.display = "none";

    document.getElementById("botonocultarpanelatributos").style.display = "none";
    //document.getElementById("panel_atributos").style.display = "none";
    //document.getElementById("panel_atributos_alineamiento").style.display = "none";
    //document.getElementById("tablaatributos").style.display = "none";
    //document.getElementById("panel_atributos_predioshasusos").style.display = "none";
    document.getElementById("botonminimizar").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "none";
    //document.getElementById("botonminimizarhasusos").style.display = "none";
    document.getElementById("botonmaximizarhasusos").style.display = "none";
    document.getElementById("botonmostrarpanelatributos").style.display = "none";
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";

    document.getElementById("tabladir1").style.display = "none";
    document.getElementById("diry1").style.display = "none";

}
function busqueda_personalizada() {
    if (document.getElementById('personalizada').style.display === "" || document.getElementById('personalizada').style.display === "none")
    {
        document.getElementById('personalizada').style.display = 'block';
        document.getElementById('personalizada1').style.display = 'block';
        document.getElementById('personalizada2').style.display = 'block';
        document.getElementById('rango_area').style.display = 'block';
        document.getElementById('tipo_construccion').style.display = 'block';
        document.getElementById('estrato').style.display = 'block';
    } else
    {
        document.getElementById('personalizada').style.display = 'none';
        document.getElementById('personalizada1').style.display = 'none';
        document.getElementById('personalizada2').style.display = 'none';
        document.getElementById('barra_busqueda_matricula').style.display = 'none';
        //document.getElementById('barra_busqueda_direccion').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'none';
        document.getElementById('rango_area').style.display = 'none';
        document.getElementById('tipo_construccion').style.display = 'none';
        document.getElementById('estrato').style.display = 'none';
    }
}
function busqueda(id) {
//document.getElementById('barra_busqueda_direccion').style.display = 'none';
    document.getElementById('barra_busqueda_matricula').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    document.getElementById('barra_alineamiento').style.display = 'none';
    document.getElementById('barra_predioshasusos').style.display = 'none';
    document.getElementById('matricula').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('codigo').value = "";
    document.getElementById('cedul').value = "";
    document.getElementById('propietarios').value = "";
    document.getElementById('input_ladomanzana').value = "";
    document.getElementById('direccion_gestor').value = "";
    if (id === "propietar") {
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('codigo').style.display = 'none';
        document.getElementById('cedul').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('propietarios').style.display = 'block';
    } else if (id === "cedula") {
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('propietarios').style.display = 'none';
        document.getElementById('codigo').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('cedul').style.display = 'block';
    } else if (id === "personalizada1") {
        document.getElementById('barra_busqueda_matricula').style.display = 'block';
    } else if (id === "personalizada2") {
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('propietarios').style.display = 'none';
        document.getElementById('cedul').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('codigo').style.display = 'block';
    } else if (id === "alineamiento") {
        document.getElementById('barra_alineamiento').style.display = 'block';
    } else if (id === "Usos_Permitidos") {
        document.getElementById('barra_predioshasusos').style.display = 'block';
    } else if (id === "boton_geocoder") {
        document.getElementById('propietarios').style.display = 'none';
        document.getElementById('cedul').style.display = 'none';
        document.getElementById('codigo').style.display = 'none';
        document.getElementById('barra_codigo').style.display = 'block';
        document.getElementById('direccion_gestor').style.display = 'none';
        document.getElementById('tabladir').style.display = 'block';
    }
}




function cerrar_menu() {
    document.getElementById('mensaje').style.display = 'none';
    document.getElementById('botones').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    // document.getElementById('barra_busqueda_direccion').style.display = 'none';
    document.getElementById('barra_busqueda_matricula').style.display = 'none';
    document.getElementById('cerrar_submenu').style.display = 'none';
    document.getElementById('cerrar_submenu_cafe').style.display = 'none';
    document.getElementById('cerrar_submenu_verde').style.display = 'none';
    document.getElementById('boton_capas').style.display = 'none';
    document.getElementById('submenu').style.display = 'none';
    document.getElementById('boton_principal').style.display = 'block';
    document.getElementById('lupa_pequeña').style.display = 'none';
    document.getElementById('busqueda_personalizada').style.display = 'none';
    document.getElementById('transicion_capas').style.display = 'none';
    document.getElementById('herramientas').style.display = 'none';
}
$(document).ready(function () {
    $('#marco').load(function () {
        $(this).contents().find("img").css({'height': '100%', 'width': '100%'});
        //$(this).contents().find("img").css({'background-color':'red','font-weight':'bolder','color':'white'});
    });
    $('#marco2').load(function () {
        $(this).contents().find("img").css({'height': '100%', 'width': '100%'});
    });
});
function open_streetview() {
    //document.getElementById('marco').style.display = 'block';
    document.getElementById('botoncerrarstreetview').style.display = 'block';
    document.getElementById('marco2').style.display = 'block';
    //document.getElementById("panel_atr").style.display = "none";
    //document.getElementById("botonmaximizar").style.display = "block";
    //document.getElementById("contenedorg").style.display = "none";
}/*
 function close_streetview() {
 console.log(algo);
 //console.log(algo);
 //algo = 'none';
 //document.getElementById('marco').style.display = 'none';
 }*/
function lista() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function abrir_manual() {

    window.open('./documentos/manual.pdf', '_blank');

}


// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function (event) {
 if (document.getElementById("marco").style.display === "block"){
 document.body.style.cursor = 'crosshair';
 var transf = ol.proj.transform(coordinates.coordinate,'EPSG:3857','EPSG:4326');
 document.getElementById('marco').src = "street_view.html?coordenadas="+transf[1]+','+transf[0];
 }else {
 document.body.style.cursor = 'default';
 try {
 if (!event.target.matches('.dropbtn')) {
 var dropdowns = document.getElementsByClassName("dropdown-content");
 var i;
 for (i = 0; i < dropdoforwns.length; i++) {
 var openDropdown = dropdowns[i];
 if (openDropdown.classList.contains('show')) {
 openDropdown.classList.remove('show');
 }
 }
 }
 } catch (err) {
 }
 }
 };*/
function marcado() {
    if (document.getElementById("termin").checked === true) {
        document.getElementById('completo').style.display = 'none';
    } else {
        alert("Debes aceptar los términos y condiciones");
        return false;
    }
}

function changeImage(id) {
    /*if (id === "Tipo Construccion") {
     document.getElementById('Tipo Construccion').style = "background:url('./imagenes/botones_consultas/propiedad_horizontal/propiedad_horizontal.png'); background-color:#EAC102; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height:45px; width:150px; margin: 0.5em 0em 1em 1em;";
     } else*/
    if (id === "DiferenciaArea") {
        document.getElementById('DiferenciaArea').style = "background-color:#366777;height:100%;width:100%;";
        document.getElementById("DiferenciaArea").value = "seleccione";
    } else if (id === "oficial_vs_AAA") {
        document.getElementById('oficial_vs_AAA').style = "background-color:#366777;height:100%;width:100%;";
        document.getElementById("oficial_vs_AAA").value = "seleccione";
    } else if (id === "Uso_oficial_vs_AAA") {
        document.getElementById('Uso_oficial_vs_AAA').style = "background-color:#366777;height:100%;width:100%;";
        document.getElementById("Uso_oficial_vs_AAA").value = "seleccione";
    } /*else if (id === "exentos") {
     document.getElementById('exentos').style = "background:url('./imagenes/botones_consultas/exentos/exentos.png'); background-color:#EAC102; border:0px; background-repeat:no-repeat; background-position: 50%; min-height:45px; width:150px; margin: 0.5em 0em 1em 1em;";
     } */
    else if (id === "Saneamiento") {
        document.getElementById("Saneamiento").style = "background-color:#366777;height:100%;width:100%;";
        document.getElementById("Saneamiento").value = "seleccione";
    } else if (id === "Avaluo Catastral") {
        document.getElementById("Avaluo Catastral").style = "background-color:#366777;height:100%;width:100%;";
        document.getElementById("Avaluo Catastral").value = "seleccione";
    } else if (id === "valorizacion") {
        document.getElementById("valorizacion").style = "background-color:#366777;height:100%;width:100%;";
        document.getElementById("valorizacion").value = "seleccione";
    }
}

function normalImage(id) {
    /*  if (id === "Tipo Construccion") {
     document.getElementById('Tipo Construccion').style = "background:url('./imagenes/botones_consultas/propiedad_horizontal/propiedad_horizontal.png'); background-color:#00BCD4; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 40px; width:120px; margin: 0.5em 0em 1em 1em;";
     } else */
    if (id === "DiferenciaArea") {
        document.getElementById('DiferenciaArea').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } else if (id === "oficial_vs_AAA") {
        document.getElementById('oficial_vs_AAA').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } else if (id === "Uso_oficial_vs_AAA") {
        document.getElementById('Uso_oficial_vs_AAA').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } /*else if (id === "exentos") {
     document.getElementById('exentos').style = "background:url('./imagenes/botones_consultas/exentos/exentos.png'); background-color:#00BCD4; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 40px; width:120px; margin: 0.5em 0em 1em 1em;";
     } */else if (id === "Saneamiento") {
        document.getElementById('Saneamiento').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } else if (id === "Avaluo Catastral") {
        document.getElementById('Avaluo Catastral').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } else if (id === "valorizacion") {
        document.getElementById('valorizacion').style = "background-color:#4E9AAB;height:100%;width:100%;";
    }
}


function ocultarstreetview() {
    //document.getElementById("marco").style.display = "none";
    document.getElementById("marco2").style.display = "none";
    document.getElementById("botoncerrarstreetview").style.display = "none";
    document.getElementById("botonmostrarstreetview").style.display = "block";
}
function mostrarstreetview() {
    //document.getElementById("marco").style.display = "block";
    document.getElementById("marco2").style.display = "block";
    document.getElementById("botoncerrarstreetview").style.display = "block";
    document.getElementById("botonmostrarstreetview").style.display = "none";
    //document.getElementById('map').style.width = '70%';
}
function ocultarstatistics() {
    document.getElementById("botonmostrarstatistics").style.display = "block";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("statistics").style.display = "none";
}
function mostrarstatistics() {
    document.getElementById("statistics").style.display = "block";
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "block";
    //document.getElementById('mensaje').style.display = 'none';
}
function ocultarpanelatributos() {
    document.getElementById("panel_atr").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "block";
    document.getElementById("contenedorg").style.display = "none";
    //document.getElementById("botonocultarpanelatributos").style.display = "none";
    //document.getElementById("panel_atributos").style.display = "none";
    //document.getElementById("tablaatributos").style.display = "none";
}
function mostrarpanelatributos() {
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("botonmaximizar").style.display = "none";
    //document.getElementById("botonocultarstatistics").style.display = "none";
    //document.getElementById("statistics").style.display = "none";
    //document.getElementById("panel_atributos").style.display = "block";
    //document.getElementById("tablaatributos").style.display = "block";
    document.getElementById("botonmostrarpanelatributos").style.display = "none";
    //document.getElementById("botonocultarpanelatributos").style.display = "block";
    document.getElementById("contenedorg").style.display = "block";
}

function mapposi(coord, giro) {
    var coo = coord.toString(function () {
        return(this.lat(), this.lng());
    });
    var res = coo.substr(1, coo.length - 2).split(",");
    var a = res[0];
    res[0] = +res[1];
    res[1] = +a;
    var feat = new ol.Feature({
        geometry: new ol.geom.Point(res)
    });
    feat.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    var geom = feat.getGeometry();
    var view = map.getView();
    view.setCenter(geom.getFirstCoordinate());
    view.setZoom(19);
    var markerSource = highlight.getSource();
    markerSource.clear();
    if (giro >= 348.75 && giro <= 11.25) {
        highlight.setStyle(street1);
    } else if (giro >= 11.25 && giro <= 33.75) {
        highlight.setStyle(street2);
    } else if (giro >= 33.75 && giro <= 56.25) {
        highlight.setStyle(street3);
    } else if (giro >= 56.25 && giro <= 78.75) {
        highlight.setStyle(street4);
    } else if (giro >= 78.75 && giro <= 101.25) {
        highlight.setStyle(street5);
    } else if (giro >= 101.25 && giro <= 123.75) {
        highlight.setStyle(street6);
    } else if (giro >= 123.75 && giro <= 146.25) {
        highlight.setStyle(street7);
    } else if (giro >= 146.25 && giro <= 168.75) {
        highlight.setStyle(street8);
    } else if (giro >= 168.75 && giro <= 191.25) {
        highlight.setStyle(street9);
    } else if (giro >= 191.25 && giro <= 213.75) {
        highlight.setStyle(street10);
    } else if (giro >= 213.75 && giro <= 236.25) {
        highlight.setStyle(street11);
    } else if (giro >= 236.25 && giro <= 258.75) {
        highlight.setStyle(street12);
    } else if (giro >= 258.75 && giro <= 281.25) {
        highlight.setStyle(street13);
    } else if (giro >= 281.25 && giro <= 303.75) {
        highlight.setStyle(street14);
    } else if (giro >= 303.75 && giro <= 326.25) {
        highlight.setStyle(street15);
    } else if (giro >= 326.25 && giro <= 348.75) {
        highlight.setStyle(street16);
    }
    markerSource.addFeature(feat);
}
function cerrarbarrasconsultas() {
    document.getElementById("barra_alineamiento").style.display = "none";
    document.getElementById("barra_predioshasusos").style.display = "none";
}
function upd(validac) {
    var urlphp = 'http://35.184.79.25/charge.php?ref=' + validac;
    $.ajax({
        url: urlphp,
        dataType: 'jsonp',
        type: "GET",
        async: false,
        success: function () {}
    });
    $('#myModalC').modal('hide');
    alert("Solicitud aceptada, mañana se veran reflejados sus cambios");
}
function alertDGC(mensaje) {
    var dgcTiempo = 500
    var ventanaCS = '<div class="dgcAlert"><div class="dgcVentana"><div class="dgcCerrar"></div><div class="dgcMensaje">' + mensaje + '<img id="avat2" src="./avatar/avatar_02.gif">' + '<br><div class="dgcAceptar">Aceptar</div></div></div></div></div>';
    $('body').append(ventanaCS);
    var alVentana = $('.dgcVentana').height();
    var alNav = $(window).height();
    var supNav = $(window).scrollTop();
    $('.dgcAlert').css('height', $(document).height());
    $('.dgcVentana').css('top', ((alNav - alVentana) / 2 + supNav - 100) + 'px');
    $('.dgcAlert').css('display', 'block');
    $('.dgcAlert').animate({opacity: 1}, dgcTiempo);
    $('.dgcCerrar,.dgcAceptar').click(function (e) {
        $('.dgcAlert').animate({opacity: 0}, dgcTiempo);
        setTimeout("$('.dgcAlert').remove()", dgcTiempo);
    });
}
window.alert = function (message) {
    alertDGC(message);
};
function habilitar(id, value)
{
    if (document.getElementById(id).checked === true)
    {
        document.getElementById(value).style.display = "block";
    } else {
        document.getElementById(value).style.display = "none";
    }
}
function enviargesstor() {
    if (modulo === "gestor") {
        var archiv = document.getElementById("datfil0");
        var archivo = archiv.files;
        var archiv1 = document.getElementById("datfil1");
        var archivo1 = archiv1.files;
        if (!document.getElementById("raddir").value || !document.getElementById("radest").value || !document.getElementById("raduso").value || archivo.length !== 1 || archivo1.length !== 1) {
            //console.log("1");
            return false;
        } else {
            //console.log("2");
            chargegestor();
        }
        //alert("GESSTOR INFORMA:</br></br>La solicitud ###### fue radicada exitosamente");
    } else if (modulo === "planeacionmisional") {
        var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.3.4:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="user:gestor">\
                        <Property>\
                            <Name>observacionesp</Name>\
                            <Value>' + document.getElementById('observation').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="gestor.' + document.getElementById('titleedit').innerHTML.split('...')[1] + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>planeacion</Name>\
                            <Value>true</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="gestor.' + document.getElementById('titleedit').innerHTML.split('...')[1] + '"/>\
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
        var slc = search("preproduccion:selgestor");
        var cont = 0;
        //$('#notmsn').text(cont);
        for (i = 0; i < slc.length; i++) {
            if (slc[i][9] !== true) {
                cont = cont + 1;
            }
        }
        if (cont !== 0)
        {
            $('#notmsn').text(cont);
        } else {
            $('#notmsn').text('');
        }
        hideMe();
        document.getElementById('butt1').disabled = true;
    } else if (modulo === "catastro") {
        var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.3.4:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="user:gestor">\
                        <Property>\
                            <Name>observacionesc</Name>\
                            <Value>' + document.getElementById('observation').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="gestor.' + document.getElementById('titleedit').innerHTML.split('...')[1] + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>catastro</Name>\
                            <Value>true</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="gestor.' + document.getElementById('titleedit').innerHTML.split('...')[1] + '"/>\
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
        var slc = search("preproduccion:selgestor");
        var cont = 0;
        //$('#notmsn').text(cont);
        for (i = 0; i < slc.length; i++) {
            if (slc[i][8] !== true) {
                cont = cont + 1;
            }
        }
        if (cont !== 0)
        {
            $('#notmsn').text(cont);
        } else {
            $('#notmsn').text('');
        }
        highlight.getSource().clear();
        hideMe();
        document.getElementById('butt1').disabled = true;
    } else if (modulo === "hacienda") {
        var postData = '<Transaction service="WFS" xmlns="http://www.opengis.net/wfs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs http://35.184.3.4:8080/geoserver/schemas/wfs/1.1.0/wfs.xsd">\
                    <Update typeName="user:gestor">\
                        <Property>\
                            <Name>observacionesh</Name>\
                            <Value>' + document.getElementById('observation').value + '</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="gestor.' + document.getElementById('titleedit').innerHTML.split('...')[1] + '"/>\
                        </Filter>\
                        <Property>\
                            <Name>hacienda</Name>\
                            <Value>true</Value>\
                        </Property>\
                        <Filter>\
                            <FeatureId fid="gestor.' + document.getElementById('titleedit').innerHTML.split('...')[1] + '"/>\
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
        var slc = search("preproduccion:selgestor");
        var cont = 0;
        //$('#notmsn').text(cont);
        for (i = 0; i < slc.length; i++) {
            if (slc[i][10] !== true) {
                cont = cont + 1;
            }
        }
        if (cont !== 0)
        {
            $('#notmsn').text(cont);
        } else {
            $('#notmsn').text('');
        }
        highlight.getSource().clear();
        hideMe();
        document.getElementById('butt1').disabled = true;
    }
}
function comparacion()
{
    window.open('./control/comp/comp.html', '_blank');
}
function cerrardirec()
{
    document.getElementById("consultas_totem").style.display = "none";
    document.getElementById("exp1").style.display = "none";
}
function existeUrl(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
}
function listaprediototem() {
    document.getElementById("inputdirecciontotemp").value = "";
    document.getElementById("inputrefcatotemp").value = "";
    var x = document.getElementById("sel1").value;
    if (x === 'Busqueda por Dirección') {
        document.getElementById("buscar_ref").style.display = "block";
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("products").style.display = "none";
        document.getElementById("inputdirecciontotemp").style.display = "block";
        document.getElementById("inputrefcatotemp").style.display = "none";
        document.getElementById("inputrefcatotemp").style.display = "none";
    } else if (x === 'Busqueda por Referencia Catastral') {
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputdirecciontotemp").style.display = "none";
        document.getElementById("products").style.display = "none";
        document.getElementById("inputrefcatotemp").style.display = "block";
        document.getElementById("inputmatriculatotemp").style.display = "none";
    } else if (x === 'Busqueda por Matricula Inmobiliaria') {
        document.getElementById("inputdirecciontotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputrefcatotemp").value = "";
        document.getElementById("inputdirecciontotemp").style.display = "none";
        document.getElementById("products").style.display = "none";
        document.getElementById("inputrefcatotemp").style.display = "none";
        document.getElementById("inputmatriculatotemp").style.display = "block";
    }
}
function cambiocatastro() {
    if (document.getElementById("panel_atr_totem_catastro").style.display == "block") {
        document.getElementById("panel_atr_totem_catastro").style.display = "none";
        //document.getElementById("pestc").style.backgroundColor = "#F0AD4E";
        document.getElementById("pesth").style.display = "block";
        document.getElementById("pestp").style.display = "block";
        document.getElementById("pestp").style.top = "0em";
        document.getElementById("pestc").style.top = "0em";
        document.getElementById("pesth").style.top = "0em";
    } else {
        document.getElementById("panel_atr_totem_catastro").style.display = "block";
        document.getElementById("pestc").style.top = "0em";
        document.getElementById("pestp").style.top = "8em";
        //document.getElementById("pestc").style.backgroundColor = "#F0AD4E";
        //document.getElementById("pesth").style.display = "none";
        //document.getElementById("pestp").style.display = "none";  
    }
    //document.getElementById("pestp").style.backgroundColor = "#a6a6a6";
    //document.getElementById("pesth").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem_hacienda").style.display = "none";
    document.getElementById("panel_atr_totem_planeacion").style.display = "none";
}
function cambiohacienda() {
    if (document.getElementById("panel_atr_totem_hacienda").style.display == "block") {
        document.getElementById("panel_atr_totem_hacienda").style.display = 'none'
        document.getElementById("pestc").style.top = "0em";
        document.getElementById("pestp").style.top = "0em";
        document.getElementById("pesth").style.top = "0em";
        //document.getElementById("pesth").style.backgroundColor = "#5CB85C";
    } else {
        document.getElementById("panel_atr_totem_hacienda").style.display = "block";
        document.getElementById("pestc").style.top = "13.5em";
        document.getElementById("pestp").style.top = "13.5em";

        //document.getElementById("pesth").style.backgroundColor = "#5CB85C";
    }
    //document.getElementById("pestp").style.backgroundColor = "#a6a6a6";
    //document.getElementById("pestc").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem_catastro").style.display = "none";
    document.getElementById("panel_atr_totem_planeacion").style.display = "none";
}
function cambioplaneacion() {
    if (document.getElementById("panel_atr_totem_planeacion").style.display == "block") {
        document.getElementById("panel_atr_totem_planeacion").style.display = "none";
        //document.getElementById("pestp").style.backgroundColor = "#A6A6A6";
        document.getElementById("pesth").style.display = "block";
        document.getElementById("pestc").style.display = "block";
        document.getElementById("pesth").style.top = "0em";
        document.getElementById("pestc").style.top = "0em";
        document.getElementById("pestp").style.top = "0em";
    } else {
        document.getElementById("panel_atr_totem_planeacion").style.display = "block";
        document.getElementById("panel_atr_totem_hacienda").style.display = "none";
        //document.getElementById("pestp").style.backgroundColor = "#639BB3";
        document.getElementById("pesth").style.display = "block";
        document.getElementById("pestc").style.display = "block";
        document.getElementById("pesth").style.top = "0em";
        document.getElementById("pestc").style.top = "0em";
        document.getElementById("pestp").style.top = "0em";
        //document.getElementById("pestp").style.top = "13em";
    }
    //document.getElementById("pesth").style.backgroundColor = "#a6a6a6";
    //document.getElementById("pestc").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem_hacienda").style.display = "none";
    document.getElementById("panel_atr_totem_catastro").style.display = "none";
}
function menutotem() {
    document.getElementById("pestp").style.backgroundColor = "#a6a6a6";
    document.getElementById("pesth").style.backgroundColor = "#639BB3";
    document.getElementById("pestc").style.backgroundColor = "#a6a6a6";
    document.getElementById("panel_atr_totem").style.display = "block";
    document.getElementById("panel_atr_totem_catastro").style.display = "none";
    document.getElementById("inputdirecciontotemp").value = "";
    document.getElementById("volvertotem").style.display = "none";
    document.getElementById("menu_totemp").style.display = "block";
    document.getElementById("sel1").value = 'Seleccione el tipo de Busqueda';
    document.getElementById("inputdirecciontotemp").style.display = "none";
    document.getElementById("products").style.display = "block";
}
function enviarcorreo(ref) {
    //console.log(ref);
    //var dat = enviarRef(ref);
    //console.log(dat);
    document.getElementById("inputemail").value;
    var urls = "./mail/envio_mail.php";
    var req = new ajaxRequest();
    var url = urls + "?c=" + document.getElementById("inputemail").value + "&ref=" + ref;
    req.open("GET", url, false);
    req.send();
    alert("<br>La información fue enviada al correo electrónico:<br><br>" + document.getElementById("inputemail").value + "<br><br><br><br>");
}
function volvertotemboton() {
    document.getElementById("volver").style.display = "none";
    document.getElementById("menu_predio").style.display = "none";
    document.getElementById("menumanzanatotem").style.display = "none";
    document.getElementById("menubarriototem").style.display = "none";
    document.getElementById("menusitiostotem").style.display = "none";
    document.getElementById("menu_totemp").style.display = "block";
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

function formatNumber(n) {
    n = String(n).replace(/\D/g, "");
    return n === '' ? n : Number(n).toLocaleString();
}


function cambiarPestanna(pestannas, pestanna) {

    if (pestanna.id == 'pestana1') {
        document.getElementById("cpestana1").style.display = "block";
        document.getElementById("cpestana2").style.display = "none";
        document.getElementById("pestana1").style.backgroundColor = "#EAC102";
        document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
    } else if (pestanna.id == 'pestana2') {
        document.getElementById("cpestana2").style.display = "block";
        document.getElementById("cpestana1").style.display = "none";
        document.getElementById("pestana2").style.backgroundColor = "#EAC102";
        document.getElementById("pestana1").style.backgroundColor = "#A9A9A9";
    }
}


function medir() {


    var wgs84Sphere = new ol.Sphere(6378137);
    var source = new ol.source.Vector();

    var vector = new ol.layer.Vector({
        source: source,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffcc33',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#ffcc33'
                })
            })
        })
    });





    var sketch;
    var helpTooltipElement;
    var helpTooltip;
    var measureTooltipElement;
    var measureTooltip;
    var continuePolygonMsg = 'Click to continue drawing the polygon';
    var continueLineMsg = 'Click to continue drawing the line';
    var pointerMoveHandler = function (evt) {
        if (evt.dragging) {
            return;
        }
        /** @type {string} */
        var helpMsg = 'Click to start drawing';

        if (sketch) {
            var geom = (sketch.getGeometry());
            if (geom instanceof ol.geom.Polygon) {
                helpMsg = continuePolygonMsg;
            } else if (geom instanceof ol.geom.LineString) {
                helpMsg = continueLineMsg;
            }
        }

        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(evt.coordinate);

        helpTooltipElement.classList.remove('hidden');
    };




    map.on('pointermove', pointerMoveHandler);

    map.getViewport().addEventListener('mouseout', function () {
        helpTooltipElement.classList.add('hidden');
    });

    var typeSelect = document.getElementById('type');
    var draw; // global so we can remove it later
    /*var formatLength = function(line) {
     var length = ol.Sphere.getLength(line);
     var output;
     if (length > 100) {
     output = (Math.round(length / 1000 * 100) / 100) +
     ' ' + 'km';
     } else {
     output = (Math.round(length * 100) / 100) +
     ' ' + 'm';
     }
     return output;
     };*/


    var formatLength = function (line) {
        var length;
        length = Math.round(line.getLength() * 100) / 100;
        var output;
        if (length > 100) {
            output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
        } else {
            output = (Math.round(length * 100) / 100) + ' ' + 'm';
        }
        return output;
    };



    var formatArea = function (polygon) {
        var area;
        area = Math.round(polygon.getArea() * 100) / 100;
        var output;
        if (area > 10000) {
            output = (Math.round(area / 1000000 * 100) / 100) +
                    ' ' + 'km<sup>2</sup>';
        } else {
            output = (Math.round(area * 100) / 100) +
                    ' ' + 'm<sup>2</sup>';
        }
        return output;
    };


    function addInteraction() {
        var radioSelect = $('input[name=gender]:checked', '#type').val();
        var type = (radioSelect == 'area' ? 'Polygon' : 'LineString');
        draw = new ol.interaction.Draw({
            source: source,
            type: type,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.5)',
                    lineDash: [10, 10],
                    width: 2
                }),
                image: new ol.style.Circle({
                    radius: 5,
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.7)'
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    })
                })
            })
        });
        map.addInteraction(draw);

        createMeasureTooltip();
        createHelpTooltip();

        var listener;
        draw.on('drawstart',
                function (evt) {
                    // set sketch
                    sketch = evt.feature;

                    /** @type {ol.Coordinate|undefined} */
                    var tooltipCoord = evt.coordinate;

                    listener = sketch.getGeometry().on('change', function (evt) {
                        var geom = evt.target;
                        var output;
                        if (geom instanceof ol.geom.Polygon) {
                            output = formatArea(geom);
                            tooltipCoord = geom.getInteriorPoint().getCoordinates();
                        } else if (geom instanceof ol.geom.LineString) {
                            output = formatLength(geom);
                            tooltipCoord = geom.getLastCoordinate();
                        }
                        measureTooltipElement.innerHTML = output;
                        measureTooltip.setPosition(tooltipCoord);
                    });
                }, this);

        draw.on('drawend',
                function () {
                    measureTooltipElement.className = 'tooltip tooltip-static';
                    measureTooltip.setOffset([0, -7]);
                    // unset sketch
                    sketch = null;
                    // unset tooltip so that a new one can be created
                    measureTooltipElement = null;
                    createMeasureTooltip();
                    ol.Observable.unByKey(listener);
                }, this);
    }


    /**
     * Creates a new help tooltip
     */
    function createHelpTooltip() {
        if (helpTooltipElement) {
            helpTooltipElement.parentNode.removeChild(helpTooltipElement);
        }
        helpTooltipElement = document.createElement('div');
        helpTooltipElement.className = 'tooltip hidden';
        helpTooltip = new ol.Overlay({
            element: helpTooltipElement,
            offset: [15, 0],
            positioning: 'center-left'
        });
        map.addOverlay(helpTooltip);
    }











    /**
     * Creates a new measure tooltip
     */
    function createMeasureTooltip() {
        if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        map.addOverlay(measureTooltip);
    }


    /**
     * Let user change the geometry type.
     */
    typeSelect.onchange = function () {
        map.removeInteraction(draw);
        addInteraction();
    };

    addInteraction();






}


















