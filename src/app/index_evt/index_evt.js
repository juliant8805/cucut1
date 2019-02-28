
function loadobs(){
	var usob = document.cookie.split('=');
	var usob = usob[0];
   var obs = document.getElementById('observaciones').value;
   var payloadobs = '<wfs:Transaction service="WFS" version="1.0.0" xmlns:prueba="http://prueba" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wfs="http://www.opengis.net/wfs"><wfs:Update typeName="prueba:wfs_prueba_xml"><wfs:Property><wfs:Name>observaciones</wfs:Name><wfs:Value>' + obs + '</wfs:Value></wfs:Property><wfs:Property><wfs:Name>usuario</wfs:Name><wfs:Value>' + usob + '</wfs:Value></wfs:Property><ogc:Filter><ogc:FeatureId fid="'+ wfsupdate +'"/></ogc:Filter></wfs:Update></wfs:Transaction>';
                    $.ajax('http://35.184.176.7:8081/geoserver/prueba/ows', {
                            type: 'POST',
                            dataType: 'xml',
                            processData: false,
                            contentType: 'text/xml',
                            data: payloadobs,
                            success: function (xml) {
                                },
                                error: function (xml) {
                                    console.log('error');
                                }
                        }); 
                        
var valor = "'" + usob + "'";
var filtro = '"usuario=' + valor + '"';
poligonosedicion.getSource().updateParams({'CQL_FILTER': eval(filtro)});                        
                        
            /* if (conteo == 1){
                            poligonosedicion.getSource().updateParams({CQL_FILTER:"1=1"});
                                conteo = conteo + 1;
                                }
                            else if (conteo == 2){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"2=2"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 3){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"3=3"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 4){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"4=4"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 5){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"5=5"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 6){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"6=6"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 7){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"7=7"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 8){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"8=8"});
                                conteo = conteo + 1;
                            }
                            else if (conteo == 9){
                              poligonosedicion.getSource().updateParams({CQL_FILTER:"9=9"});
                                conteo = conteo + 1;
                            }*/
    alert("informacion guardada exitosamente");
}


function mostrar(consulta) {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById('barra_sitio').style.display = 'none';
    
    document.getElementById('barra_barrio').style.display = 'none';
    document.getElementById('barra_comuna').style.display = 'none';
    document.getElementById('barra_localidad').style.display = 'none';
    document.getElementById('barra_manzana').style.display = 'none';
    document.getElementById('barra_direccion').style.display = 'none';
    document.getElementById('barra_codigo').style.display = 'none';
    document.getElementById('barra_matricula').style.display = 'none';
    document.getElementById('barra_propietario').style.display = 'none';
    document.getElementById('barra_id_propietario').style.display = 'none';
    document.getElementById('direccion').value = "";
    document.getElementById('address1').value = "";
    document.getElementById('propietarios').value = "";
    document.getElementById('cedul').value = "";
    document.getElementById('barrio').value = "";  
    document.getElementById('comuna').value = "";
    document.getElementById('localidad').value = "";
    document.getElementById('manzana').value = "";
    document.getElementById('matricula').value = "";
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
  //  location.reload(true);
  /*  var x = document.getElementById("marco2");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    y.body.style.display = "none";	*/
    globalstyle = "sinconsulta"; 
    predio.setVisible(true);
    restitucion_arbol.setVisible(false);
    poligonosedicion.setVisible(false);
    barrios.setVisible(false);
    construcciones.setVisible(true);
    puntos_obras.setVisible(false);
    obras.setVisible(false);
    ejeobras.setVisible(false);
    heatmap.setVisible(false);
    /*redvialrural.setVisible(false);
    centrospoblados.setVisible(false);
    nodosregionales.setVisible(false);
    modelonodos.setVisible(false);
    subsistemavialrural.setVisible(false);
    ejesintegracionbinacional.setVisible(false);
    ejesintegracionnacional.setVisible(false);
    ejesintegracionregional.setVisible(false);
    suelodeproteccion.setVisible(false);
    hidrografia.setVisible(false);
    cabecerasmunicipalesvecinas.setVisible(false);
    perimetromunicipal.setVisible(false);
    perimetrodeexpansion.setVisible(false);
    cuerposdeagua.setVisible(false);
    cabecerasmunicipalescolombia.setVisible(false);
    clasesdesuelo.setVisible(false);
    perimetro2015.setVisible(false);
    toponimiabarrios.setVisible(false);
    anillovial.setVisible(false);
    lineascomplementarias2015.setVisible(false);
    nomenclaturapot2011.setVisible(false);
    mapaconjuntoactualizado2015.setVisible(false);
    categoriasdelsuelourbano.setVisible(false);*/ 
    layerPot2011.setVisible(false);
    predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_cucuta', 'CQL_FILTER': null});
    document.getElementById('divgetinfo').style.display = "none";
    document.getElementById('plano_01').style.display = "none";
    document.getElementById('plano_03').style.display = "none";
    document.getElementById('plano_04').style.display = "none";
    document.getElementById('plano_05').style.display = "none";
    document.getElementById('plano_06').style.display = "none";
    document.getElementById("menu_coordenadas_wgs84").style.display = "none"; 
    document.getElementById("menu_coordenadas_3116").style.display = "none"; 
    document.getElementById("menu_coordenadas_3117").style.display = "none";
    document.getElementById("menu_coordenadas_21897").style.display = "none"; 
    document.getElementById("menu_coordenadas_21898").style.display = "none"; 
    document.getElementById('label_street').style.display = "none";
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
    document.getElementById("marco").style.display = "none";
	document.getElementById("marco2").style.display = "none";
    document.getElementById("marco3").style.display = "none";
    document.getElementById("statistics").style.display = "none"; 
    document.getElementById("excel").style.display = "none";
    document.getElementById("pie").style.display = "none"; 
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";
    document.getElementById("botonmostrarstatistics").style.display = "none";
    document.getElementById("botonocultarstatistics").style.display = "none";
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
    document.getElementById("statistics").style.display = "none";
    document.getElementById("botonminimizarph").style.display = "none";
    document.getElementById("panel_atributos_ph").style.display = "none";
    document.getElementById("tablaatributosprediosph").style.display = "none";
    
    document.getElementById("tabladir1").style.display = "none";
    document.getElementById("diry1").style.display = "none";
    document.getElementById("diry").style.display = "none";
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
    document.getElementById('marco').style.display = 'block';
    document.getElementById('botoncerrarstreetview').style.display = 'block';
    document.getElementById('marco2').style.display = 'block';
    document.getElementById('mover_streetview').style.display = 'block';
    document.getElementById('label_street').style.display = 'block';
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
window.onclick = function (event) {
	var checkBox = document.getElementById("mover_streetview");
	if (document.getElementById("marco").style.display === "block" && checkBox.checked == true){
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
};
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
    }
    else if (id === "oficial_vs_AAA") {
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
    }
    else if (id === "Avaluo Catastral") {
        document.getElementById("Avaluo Catastral").style = "background-color:#366777;height:100%;width:100%;"; 
        document.getElementById("Avaluo Catastral").value = "seleccione";
    } 
    else if (id === "valorizacion") {
        document.getElementById("valorizacion").style = "background-color:#366777;height:100%;width:100%;"; 
        document.getElementById("valorizacion").value = "seleccione";
    }
    else if (id === "planospot") {
        document.getElementById('planospot').style = "background-color:#366777;height:100%;width:100%;"; 
        document.getElementById("planospot").value = "seleccione";
    }
}

function normalImage(id) {
  /*  if (id === "Tipo Construccion") {
        document.getElementById('Tipo Construccion').style = "background:url('./imagenes/botones_consultas/propiedad_horizontal/propiedad_horizontal.png'); background-color:#00BCD4; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 40px; width:120px; margin: 0.5em 0em 1em 1em;";
    } else */
    if (id === "DiferenciaArea") {
        document.getElementById('DiferenciaArea').style = "background-color:#4E9AAB;height:100%;width:100%;";
    }
    else if (id === "oficial_vs_AAA") {
        document.getElementById('oficial_vs_AAA').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } 
    else if (id === "Uso_oficial_vs_AAA") {
        document.getElementById('Uso_oficial_vs_AAA').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } /*else if (id === "exentos") {
        document.getElementById('exentos').style = "background:url('./imagenes/botones_consultas/exentos/exentos.png'); background-color:#00BCD4; min-height: 40px; border:0px; background-repeat:no-repeat; background-position: 50%; min-height: 40px; width:120px; margin: 0.5em 0em 1em 1em;";
    } */else if (id === "Saneamiento") {
        document.getElementById('Saneamiento').style = "background-color:#4E9AAB;height:100%;width:100%;";
    }
    else if (id === "Avaluo Catastral") {
       document.getElementById('Avaluo Catastral').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } 
    else if (id === "valorizacion") {
        document.getElementById('valorizacion').style = "background-color:#4E9AAB;height:100%;width:100%;";
    } 
    else if (id === "planospot") {
        document.getElementById('planospot').style = "background-color:#4E9AAB;height:100%;width:100%;";
    }
}

function comparacion_imagenes() {
    window.open(
            'http://104.197.185.151/calidad/control/comparacion_imagenes/map.control.swipe.html',
            '_blank' // <- This is what makes it open in a new window.
            );
}
function ocultarstreetview() {
    document.getElementById("marco").style.display = "none";
    document.getElementById("marco2").style.display = "none";
    document.getElementById("botoncerrarstreetview").style.display = "none";
    document.getElementById("botonmostrarstreetview").style.display = "block";
    document.getElementById("label_street").style.display = "none";  
}
function mostrarstreetview() {
    document.getElementById("marco").style.display = "block";
    document.getElementById("marco2").style.display = "block";
    document.getElementById("botoncerrarstreetview").style.display = "block";
    document.getElementById("botonmostrarstreetview").style.display = "none";
    document.getElementById("label_street").style.display = "block";  
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
    $('.dgcCerrar,.dgcAceptar, .dgcCerrar2').click(function (e) {
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
        }else{
            $('#notmsn').text('');
        }
        hideMe();
        document.getElementById('butt1').disabled=true;
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
        }else{
            $('#notmsn').text('');
        }
        highlight.getSource().clear();
        hideMe();
        document.getElementById('butt1').disabled=true;
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
        }else{
            $('#notmsn').text('');
        }
        highlight.getSource().clear();
        hideMe();
        document.getElementById('butt1').disabled=true;
    }
}
function comparacion()
{
    window.open('./control/comp/comp.html', '_blank');
}
function cerrardirec()
{
    document.getElementById("consultas_totem").style.display = "none";
    //document.getElementById("exp1").style.display = "none";
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


function cambiarPestanna(pestannas,pestanna) {
    
    if (pestanna.id == 'pestana1'){
        document.getElementById("cpestana1").style.display = "block";
        document.getElementById("cpestana2").style.display = "none";
        document.getElementById("pestana1").style.backgroundColor = "#EAC102";
        document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
    }
    else if (pestanna.id == 'pestana2'){ 
        document.getElementById("cpestana2").style.display = "block";
        document.getElementById("cpestana1").style.display = "none";
        document.getElementById("pestana2").style.backgroundColor = "#EAC102";
        document.getElementById("pestana1").style.backgroundColor = "#A9A9A9";
    }
    
}

function medir() {
   document.getElementById("boton_medir_off").style.display = "none";
   document.getElementById("boton_medir").style.display = "block";
   document.getElementById("medidas").style.display = "block"; 
    
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
      var continuePolygonMsg = 'Click para añadir punto';
      var continueLineMsg = 'Click para añadir punto';
      var pointerMoveHandler = function(evt) {
        if (evt.dragging) {
          return;
        }
        /** @type {string} */
          
        var helpMsg = 'Click para añadir punto';

        if (sketch) {
          var geom = (sketch.getGeometry());
          if (geom instanceof ol.geom.Polygon) {
           var helpMsg = continuePolygonMsg;
          } else if (geom instanceof ol.geom.LineString) {
            helpMsg = continueLineMsg;
          }
        }

        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(evt.coordinate);
        if(document.getElementById("medidas").style.display == "block"){
        helpTooltipElement.classList.remove('hidden');
       }
      };


     

      map.on('pointermove', pointerMoveHandler);

      map.getViewport().addEventListener('mouseout', function() {
        helpTooltipElement.classList.add('hidden');
      });

      var typeSelect = document.getElementById('medidas');
      //var draw; // global so we can remove it later
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
    /*if (length > 100) {
        output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km';
    } else {*/
        output = (Math.round(length * 100) / 100) + ' ' + 'm';
    //}
    return output;
};
    
    

      var formatArea = function(polygon) {
      var area;
          area = Math.round(polygon.getArea() * 100) / 100;
        var output;
       /* if (area > 10000) {
          output = (Math.round(area / 1000000 * 100) / 100) +
              ' ' + 'km<sup>2</sup>';
        } else {*/
          output = (Math.round(area * 100) / 100) +
              ' ' + 'm<sup>2</sup>';
      //  }
        return output;
      };

     
      function addInteraction() { 
          var radioSelect = $('input[name=gender]:checked', '#medidas').val();
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
            function(evt) {
              // set sketch
              sketch = evt.feature;

              /** @type {ol.Coordinate|undefined} */
              var tooltipCoord = evt.coordinate;

              listener = sketch.getGeometry().on('change', function(evt) {
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
            function() {
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
      typeSelect.onchange = function() {
        map.removeInteraction(draw);
        addInteraction();
      };

      addInteraction(); 
    
   // var vector = highlightfeatures.getSource();
    
    
}

function medir_off() {
    //console.log(draw);
    map.removeInteraction(draw);
    draw.values_.active = false;
    document.getElementById("boton_medir").style.display = "none";
    document.getElementById("boton_medir_off").style.display = "block";  
    document.getElementById("medidas").style.display = "none";  
}

function mostraredicion() {
   document.getElementById("boton_menuedicion_off").style.display = "block";
   document.getElementById("boton_menuedicion").style.display = "none";
   document.getElementById("menu_edicion").style.display = "block";
   poligonosedicion.setVisible(true);
}

function ocultaredicion() {
    document.getElementById("boton_menuedicion").style.display = "block";
    document.getElementById("boton_menuedicion_off").style.display = "none";  
    document.getElementById("menu_edicion").style.display = "none";  
    map.removeInteraction(interaction);
    interactionSelect.getFeatures().clear();
    map.removeInteraction(interactionSelect);
}


function formcoordenadas() {
     //document.getElementById("menu_coordenadas").style.display = "block"; 
     document.getElementById("opc_coord").style.display = "block"; 
}

function formcoordenadas2() {
     var button1 = document.getElementById('button1a');
     var button2 = document.getElementById('button2b');
     var button3 = document.getElementById('button3c');
     var button4 = document.getElementById('button4d');
     var button5 = document.getElementById('button5e');
     document.getElementById("opc_coord").style.display = "none";
     if (button1.checked == true){
     document.getElementById("menu_coordenadas_wgs84").style.display = "block"; 
     }
     if (button2.checked == true){
        document.getElementById("menu_coordenadas_decimales").style.display = "block"; 
     }
   if (button3.checked == true){
        document.getElementById("menu_coordenadas_3116").style.display = "block"; 
     }
    /* if (button4.checked == true){
        document.getElementById("menu_coordenadas_3116").style.display = "block"; 
     }
    if (button5.checked == true){
        document.getElementById("menu_coordenadas_3116").style.display = "block"; 
     }*/
}


function input_coordinates() {
    //alert(button1.checked?"Button1 is checked":"Button2 is checked");
     document.getElementById("menu_coordenadas_wgs84").style.display = "none"; 
     document.getElementById("menu_coordenadas_decimales").style.display = "none"; 
     /*document.getElementById("menu_coordenadas_3116").style.display = "none"; 
     document.getElementById("menu_coordenadas_3117").style.display = "none"; 
     document.getElementById("menu_coordenadas_21897").style.display = "none"; 
     document.getElementById("menu_coordenadas_21898").style.display = "none"; */
     var button1 = document.getElementById('button1a');
     var button2 = document.getElementById('button2b');
     var button3 = document.getElementById('button3c');
     /*var button4 = document.getElementById('button4d');
     var button5 = document.getElementById('button5e');*/
     document.getElementById("opc_coord").style.display = "none";
     if (button1.checked == true){
            var view = map.getView();
            var latgrados = document.getElementById('ex1').value;
            var latminutos = document.getElementById('ex2').value;
            var latsegundos = document.getElementById('ex3').value;

            var loggrados = document.getElementById('ex4').value;
            var logminutos = document.getElementById('ex5').value;
            var logsegundos = document.getElementById('ex6').value;

            var long = parseInt(loggrados) + parseInt(logminutos) / 60 + parseInt(logsegundos) / 3600;
            var lat = parseInt(latgrados) + parseInt(latminutos) / 60 + parseInt(latsegundos) / 3600;
            var long = long * -1;
            map.getView().setCenter(ol.proj.transform([long, eval(lat)], 'EPSG:4326', 'EPSG:3857'));
            map.getView().setZoom(18); 
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([long, eval(lat)], 'EPSG:4326',
              'EPSG:3857')),
            name: 'wgs84gms',
            population: 4000,
            rainfall: 500
          });
            
     }
     if (button2.checked == true){
            var view = map.getView();
            var x = document.getElementById('ex15').value;
            var y = document.getElementById('ex16').value;
            map.getView().setCenter(ol.proj.transform([eval(y), eval(x)], 'EPSG:4326', 'EPSG:3857'));
            map.getView().setZoom(18); 
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([eval(y), eval(x)], 'EPSG:4326',
              'EPSG:3857')),
            name: 'wgs84d',
            population: 4000,
            rainfall: 500
          });             
     }
    if (button3.checked == true){
            var view = map.getView();
            var x = document.getElementById('ex7').value;
            var y = document.getElementById('ex8').value;
            window.open("projeccion.html?var1=" + x + "," + y, target='_blank');
            /*map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:3116', 'EPSG:3857'));
            map.getView().setZoom(18); 
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([x, y], 'EPSG:3116',
              'EPSG:3857')),
            name: 'magnacolombiabogota',
            population: 4000,
            rainfall: 500*/
       //   });       
     }
   /* if (button3.checked == true){
            var view = map.getView();
            var x = document.getElementById('ex9').value;
            var y = document.getElementById('ex10').value;
            map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:3117', 'EPSG:3857'));
            map.getView().setZoom(18); 
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([x, y], 'EPSG:3117',
              'EPSG:3857')),
            name: 'magnacolombiaeste',
            population: 4000,
            rainfall: 500
          });       
     }
    if (button4.checked == true){
            var view = map.getView();
            var x = document.getElementById('ex11').value;
            var y = document.getElementById('ex12').value;
            map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:21897', 'EPSG:3857'));
            map.getView().setZoom(18); 
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([x, y], 'EPSG:21897',
              'EPSG:3857')),
            name: 'magnacolombiaeste',
            population: 4000,
            rainfall: 500
          });       
     }
    if (button5.checked == true){
            var view = map.getView();
            var x = document.getElementById('ex13').value;
            var y = document.getElementById('ex14').value;
            map.getView().setCenter(ol.proj.transform([x, y], 'EPSG:21898', 'EPSG:3857'));
            map.getView().setZoom(18); 
            var iconFeatures = [];
            var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.transform([x, y], 'EPSG:21898',
              'EPSG:3857')),
            name: 'magnacolombiaeste',
            population: 4000,
            rainfall: 500
          });       
     }*/
      highlight.setStyle(flagStyle);
      var markerSource = highlight.getSource();
      markerSource.clear();
      markerSource.addFeature(iconFeature);  
}

function agregarinfopredio(cod2) {
	var cod2 = cod2.toString();
	var cod2 = cod2.substr(1, 15);

var observaciones = document.getElementById('observacionespredio').value;
var payload3 = '<wfs:Transaction service="WFS" version="1.0.0" xmlns:prueba="http://prueba" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wfs="http://www.opengis.net/wfs"><wfs:Update typeName="prueba:u_terreno_obs"><wfs:Property><wfs:Name>observacio</wfs:Name><wfs:Value>' + observaciones + '</wfs:Value></wfs:Property><ogc:Filter><ogc:PropertyIsEqualTo><ogc:PropertyName>cod</ogc:PropertyName><ogc:Literal>' + cod2 + '</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter></wfs:Update></wfs:Transaction>';
$.ajax('http://35.184.176.7:8081/geoserver/prueba/ows', {
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'text/xml',
        data: payload3,
        success: function (xml) {
            },
                error: function (xml) {
                        console.log('error');
            }
        }).done(function() {
                sourceWFS.clear();
    });
    //predio.getSource().updateParams({'STYLES': 'predios_hallazgos'})
    alert("Información guardada exitosamente</br>");
}
