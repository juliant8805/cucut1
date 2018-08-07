// ========= config section ================================================
var url = 'http://35.184.176.7:8081/geoserver/ows?';
var featurePrefix = 'cucuta';
var featureType = ['seleccion_predios'];
var featureNS = 'http://cucuta.co';
var srsName = 'EPSG:4326';
var geometryName = 'geom';
var geometryType = 'MultiPolygon';
var fields = ['*'];
var infoFormat = 'application/vnd.ogc.gml/3.1.1';
var center = [-8070929, 883068];
var zoom = 12;
// =========================================================================
var proj = new ol.proj.Projection({
    code: 'http://www.opengis.net/gml/srs/epsg.xml#4326',
    axis: 'enu'
});
var format = [];
var wmsSource = [];


function putgif() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0);
        document.getElementById('carga2').style.display = "block";
    });
}
function quitgif() {
    document.getElementById('carga2').style.display = "none";
}
var rangoarea = async function (x) { // async function expression assigned to a variable
    await putgif();
    await rango(x);
    await quitgif();
};

for (var i = 0; i <= featureType.length - 1; i++)
{
    format[i] = new ol.format.GML({featureNS: featureNS, featureType: featureType[i]});
    wmsSource[i] = new ol.source.TileWMS({
        url: url,
        params: {
            'LAYERS': featurePrefix + ':' + featureType[i],
            'TILED': true
        },
        serverType: 'geoserver'
    });
};
var popup = new app.Popup({
    element: document.getElementById('popup'),
    closeBox: true,
    autoPan: true
});
var highlight = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FFFF',
            width: 3
        })
    }),
    source: new ol.source.Vector()
});
var highlightt = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FFFF',
            width: 3
        })
    }),
    source: new ol.source.Vector()
});

var positionFeature = new ol.Feature();
      positionFeature.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
          radius: 6,
          fill: new ol.style.Fill({
            color: '#3399CC'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: 2
          })
        })
      }));

var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map = new ol.Map({
    controls: ol.control.defaults().extend([new ol.control.ScaleLine(), new ol.control.FullScreen(), new ol.control.ZoomToExtent({
            extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457]
        }), 
        new ol.control.OverviewMap({
            className: 'ol-overviewmap ol-custom-overviewmap',
            layers: [new ol.layer.Tile({
                    source: new ol.source.OSM({
                        'url': 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
                    })
                })],
            collapseLabel: '\u00BB',
            label: '\u00AB',
            collapsed: true
        })
    ]).extend([mousePositionControl]),
    // add the popup as a map overlay
    overlays: [popup],
    // render the map in the 'map' div
    target: document.getElementById('map'),
    // use the Canvas renderer
    renderer: 'canvas',
    layers: [layerBase, layerCatastro, layerPot, layerBing, layerOrtofoto2012, sitios, layerValorizacion, highlight],
    view: new ol.View({
        center: center,
        zoom: zoom,
        //extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457],
        maxZoom: 20, minZoom: 3
    })
});

map.getLayerGroup().set('name', 'CAPAS');
// register a single click listener on the map and show a popup
// based on WMS GetFeatureInfo
map.on('singleclick', function (evt) {
	coordinates = evt;
    document.getElementById("panel_atr").style.display = "none"; 
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, map.getView().getProjection(),
            {'INFO_FORMAT': infoFormat}
    ); 
    var tamañopantalla = screen.width>800;
    if (url && predio.values_.visible==true && viewResolution<2) {
        $.ajax({
            url: url,
            beforeSend: function () {
            if (tamañopantalla==true){
                putgif();}
                else{
                    document.getElementById("carga3").style.display = "block";  
                }
            },
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var ph = values.cod_ph;
                    var direccion = search("cucuta:DireccionRegistroCucuta", values.codigo);
                    if (direccion[0] === undefined) {
                        var direccion = [];
                        direccion[0] = "Sin Información";
                    }  
                    if (ph >= 800) {
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>PROPIEDAD HORIZONTAL</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        for (i = 0; i < direccion.length; i++) {
                            var tablaph = ("<table max-width=20 border=1 id='tablaph'>");
                            for (i = 0; i < direccion.length; i++) {
                                //var req = {term: direccion[i], val:123};
                                dirg = direccion[i];
                                tablaph += ("<tr>");
                                tablaph += ("<td id=tt"+i+"><b>" + direccion[i] + "</b></td>");
                                tablaph += ("</tr>");
                            }
                            tablaph += ("</table>");
                        }
                        select[0] = "<b>Direcciones</b>";
                        select[1] = "<b>Street View</b>";
                        sel[0] = tablaph;
                        stv[1] = document.createElement("a");
                        stv[1].id = "imgstreet";
                        stv[1].target = "marco";
                        stv[1].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                        stv[1].setAttribute("onclick", "open_streetview()");
                        ig[1] = document.createElement("img");
                        ig[1].src = "./imagenes/streetview.png";
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.innerHTML = select[i];
                            if (i === 1) {
                                cell2.appendChild(stv[i]);
                                stv[i].appendChild(ig[i]);
                            } else {
                                cell2.innerHTML = sel[i];
                            } 
                        }
                        for (i = 0; i < direccion.length; i++) {
                            var ell = document.getElementById("tt"+i);
                            var alg = "addressSource('tt"+i+"')";
                            ell.setAttribute("onclick", alg);
                            ell.value = direccion[i];
                            //ell.onclick = function() {addressSource(direccion[i]);};
                        }
                    } 
                
                        else if (ph < 800) {    
                            var codigo = values.codigo;
                            geolocation.setTracking(false);
                            if (values.estado == 'PENDIENTE'){
                            var fecha = new Date();                         
                            var table = document.getElementById("tblatt");
                            table.innerHTML = "";
                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            cell1.colSpan = 2;
                            cell1.style = "background-color: #3B5998; color:white; text-align:center;";
                            cell1.innerHTML = "<b>INFORMACIÓN DE REFERENCIA</b>";
                            
                            var row = table.insertRow(1);
                            var cell2 = row.insertCell(0);
                            cell2.colSpan = 2;
                            cell2.style = "background-color: #3B5998; color:white; text-align:center;";
                            cell2.innerHTML = "<b>INFORMACIÓN PARA DILIGENCIAR</b>";
                            
                            var row = table.insertRow(2);
                            var cell3 = row.insertCell(0);
                            cell3.colSpan = 2;
                            cell3.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell3.innerHTML = "<b>Código del Recolector:</b>";
                                
                            var row = table.insertRow(3);
                            var cell4 = row.insertCell(0);
                            cell4.colSpan = 2;
                            cell4.style = "background-color: white; border:0; margin:0;";
                            cell4.innerHTML = "<input type='text' id='cod_recolector' class='required' name='cod_recolector' style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;'>";
                                                        
                            var row = table.insertRow(4);
                            var cell5 = row.insertCell(0);
                            cell5.colSpan = 2;
                            cell5.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell5.innerHTML = "<b>Codigo del Supervisor:</b>";
                            
                            var row = table.insertRow(5);
                            var cell6 = row.insertCell(0);
                            cell6.colSpan = 2;
                            cell6.style = "background-color: white; border:0; margin:0;";
                            cell6.innerHTML = "<input type='text' id='cod_supervisor' name='cod_supervisor' class='required' style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;'>";
                            
                            var row = table.insertRow(6);
                            var cell7 = row.insertCell(0);
                            cell7.colSpan = 2;
                            cell7.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell7.innerHTML = "<b>Tipo de Predio:</b>";
                            
                            var row = table.insertRow(7);
                            var cell8 = row.insertCell(0);
                            cell8.colSpan = 2;
                            cell8.style = "background-color: white; border:0; margin:0;";
                            cell8.innerHTML = "<select style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;' id='tipo_predio' name='tipo_predio'><option value ='casa'>Casa</option><option value ='casa_conjunto_cerrado'>Casa Conjunto Cerrado</option><option value ='edificio'>Edificio</option><option value ='propiedad_horizontal'>Edificio en Conjunto Cerrado</option><option value ='lote'>Lote</option></select>";
                            
                            var row = table.insertRow(8);
                            var cell9 = row.insertCell(0);
                            cell9.colSpan = 2;
                            cell9.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell9.innerHTML = "<b>Uso del Predio:</b>";
                            
                            var row = table.insertRow(9);
                            var cell10 = row.insertCell(0);
                            cell10.colSpan = 2;
                            cell10.style = "background-color: white; border:0; margin:0;";
                            cell10.innerHTML = "<select style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;' id='uso_predio' name='uso_predio'><option value ='residencial'>Residencial</option><option value ='industrial'>Industrial</option><option value ='dotacional'>Dotacional</option><option value ='recreacional'>Recreacional</option><option value ='comerciopuntual'>Comercio Puntual</option><option value ='comerciocorredor'>Comercio en Corredor Comercial</option><option value ='mixto'>Uso Mixto</option></select>";
                            
                            
                            var row = table.insertRow(10);
                            var cell11 = row.insertCell(0);
                            cell11.colSpan = 2;
                            cell11.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell11.innerHTML = "<b>Vía de Acceso:</b>";
                            
                            
                            var row = table.insertRow(11);
                            var cell12 = row.insertCell(0);
                            cell12.colSpan = 2;
                            cell12.style = "background-color: white; border:0; margin:0;";
                            cell12.innerHTML = "<select style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;' id='via_acceso' name='via_acceso'><option value ='sendero'>Sendero o Camino</option><option value ='peatonal'>Peatonal</option><option value ='vehicular_tierra'>Vehicular en Tierra</option><option value ='vehicular_recebo'>Vehicular en Recebo (Balastro o Gravilla)</option><option value ='vehicular_cemento'>Vehicular en Cemento, Asfalto o Adoquín</option></select>";
                            
                            
                            var row = table.insertRow(12);
                            var cell13 = row.insertCell(0);
                            cell13.colSpan = 2;
                            cell13.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell13.innerHTML = "<b>Focos de Contaminación:</b><br><a style='font-size:12px; color:#808080'>(Cerca o Frente a la Manzana)<a/>";
                            
                            
                            var row = table.insertRow(13);
                            var cell14 = row.insertCell(0);
                            cell14.colSpan = 2;
                            cell14.style = "background-color: white; border:0; margin:0;";
                            cell14.innerHTML = "<select style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;' id='focos_contaminacion' name='focos_contaminacion'><option value ='aguas_negras'>Aguas Negras a la Vista</option>   <option value ='botaderos'>Botaderos de Basura</option><option value ='plaza_mercado'>Plaza de Mercado o Ferias</option><option value ='talleres'>Talleres</option><option value ='fabrica'>Fabricas</option><option value ='billares'>Billares</option><option value ='terminal_bus'>Terminales de Buses</option><option value ='canchas_tejo'>Canchas de Tejo</option><option value ='cantinas'>Cantinas, Bares o Discotecas</option>       <option value ='otro'>Otro</option><option value ='ninguna'>Ninguna de las Anteriores</option></select>";

                            
                            
                            var row = table.insertRow(14);
                            var cell15 = row.insertCell(0);
                            cell15.colSpan = 2;
                            cell15.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell15.innerHTML = "<b>Observaciones:</b>";
                            
                            
                            var row = table.insertRow(15);
                            var cell16 = row.insertCell(0);
                            cell16.colSpan = 2;
                            cell16.style = "background-color: white; border:0; margin:0;";
                            cell16.innerHTML = "<input type='text' id='observaciones' name='observaciones' style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;' placeholder='Escriba cualquier tipo de información adicional'>";
                            
                                       
                            var row = table.insertRow(16);
                            var cell17 = row.insertCell(0);
                            cell17.colSpan = 2;
                            cell17.style = "background-color: #3B5998; color:white; text-align:center;";
                            cell17.innerHTML = "<b>FOTOGRAFÍAS</b>";
                            
                                                   
                            var row = table.insertRow(17);
                            var cell18 = row.insertCell(0);
                            cell18.colSpan = 2;
                            cell18.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:center;";
                            cell18.innerHTML = "<div class='fileUpload btn btn-primary btn-block'><span>Fotografía 1</span><input type='file' class='required upload' name='foto1' id='foto1' accept='image/*' onchange='openFile(event)' capture='camera' /></div><div class='fileUpload btn btn-success btn-block'><span>Fotografía 2</span><input type='file' class='required upload' name='foto2' id='foto2' class='upload' accept='image/*' onchange='openFile2(event)' capture='camera' /></div><div class='fileUpload btn btn-warning btn-block'><span>Fotografía 3</span><input type='file' class='required upload' name='foto3' id='foto3' class='upload' accept='image/*' onchange='openFile3(event)' capture='camera' /></div><div class='fileUpload btn btn-info btn-block'><span>Fotografía 4</span><input type='file' class='required upload' name='foto4' id='foto4' accept='image/*' onchange='openFile4(event)' capture='camera' /></div><div class='fileUpload btn btn-danger btn-block'><span>Fotografía 5</span><input type='file' class='required upload' name='foto5' id='foto5' accept='image/*' onchange='openFile5(event)' capture='camera' />";
                             
                            
                            
                            var row = table.insertRow(18);
                            var cell19 = row.insertCell(0);
                            cell19.colSpan = 2;
                            cell19.style = "background-color: white; color:black; font-size:14px; border:0;";    
                            cell19.innerHTML = "<div id='labelfoto1' hidden='hidden' style='text-align:center; font-style:italic; font-weight: bold;'>Fotografía #1:</div><br><img id='output1' style='display: block; margin:auto; background-color: #white; color:black; font-size: 14px; border-top:1px solid #62BAD3; border:0px; text-align:center; width:0%; height:0em; '>";
                                                
                            
                            var row = table.insertRow(19);
                            var cell20 = row.insertCell(0);
                            cell20.colSpan = 2;
                            cell20.style = "background-color: white; color:black; font-size:14px; border:0;";    
                            cell20.innerHTML = "<div id='labelfoto2' hidden='hidden' style='text-align:center; font-style:italic; font-weight: bold;'>Fotografía #2:</div><br><img id='output2' style='display: block; margin:auto; background-color: #white; color:black; font-size: 14px; border-top:1px solid #62BAD3; border:0px; text-align:center; width:0%; height:0em;'>";
                            
                            var row = table.insertRow(20);
                            var cell21 = row.insertCell(0);
                            cell21.colSpan = 2;
                            cell21.style = "background-color: white; color:black; font-size:14px; border:0;";    
                            cell21.innerHTML = "<div id='labelfoto3' hidden='hidden' style='text-align:center; font-style:italic; font-weight: bold;'>Fotografía #3:</div><br><img id='output3' style='display: block; margin:auto; background-color: #white; color:black; font-size: 14px; border-top:1px solid #62BAD3; border:0px; text-align:center; width:0%; height:0em;'>";
                            
                            
                            var row = table.insertRow(21);
                            var cell22 = row.insertCell(0);
                            cell22.colSpan = 2;
                            cell22.style = "background-color: white; color:black; font-size:14px; border:0;";    
                            cell22.innerHTML = "<div id='labelfoto4' hidden='hidden' style='text-align:center; font-style:italic; font-weight: bold;'>Fotografía #4:</div><br><img id='output4' style='display: block; margin:auto; background-color: #white; color:black; font-size: 14px; border-top:1px solid #62BAD3; border:0px; text-align:center; width:0%; height:0em;'>";
                            
                            
                            var row = table.insertRow(22);
                            var cell23 = row.insertCell(0);
                            cell23.colSpan = 2;
                            cell23.style = "background-color: white; color:black; font-size:14px; border:0;";    
                            cell23.innerHTML = "<div id='labelfoto5' hidden='hidden' style='text-align:center; font-style:italic; font-weight: bold;'>Fotografía #5:</div><br><img id='output5' style='display: block; margin:auto; background-color: #white; color:black; font-size: 14px; border-top:1px solid #62BAD3; border:0px; text-align:center; width:0%; height:0em;'>";
                            
                            
                            var row = table.insertRow(23);
                            var cell24 = row.insertCell(0);
                            cell24.colSpan = 2;
                            cell24.style = "background-color: #3B5998; color:white; text-align:center;";
                            cell24.innerHTML = "<b>LOCALIZACIÓN</b>";
                            
                            
                            
                            var row = table.insertRow(24);
                            var cell25 = row.insertCell(0); 
                            var col25 = row.insertCell(1);
                            cell25.style = "background-color: white; color:black; font-size: 14px; border:0; text-align:center;";
                            cell25.innerHTML = "<button type='button' id='boton_coordenadas' name='boton_coordenadas' class='btn btn-info'>Obtener Coordenadas</button>"; 
                            cell25.setAttribute("onclick", "getLocation()");   
                            cell25.colSpan = 2;

                                                   
                            var row = table.insertRow(25);
                            var cell26 = row.insertCell(0);
                            cell26.colSpan = 2;
                            cell26.style = "background-color: white; color:black; font-size:13px; border:0; text-align:left;";
                            cell26.innerHTML = "<label for='buscar' id='label_latitud' name='label_latitud' hidden='hidden' style='text-align: center;'>Latitud:</label><input type='text' id='input_coord1' name='latitud' class='required' onFocus='this.blur()' placeholder='Oprima el botón para obtener las coordenadas' style='background-color: #white; color:black; font-size: 14px; font-style:italic; font-weight: bold; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;'>";
                            
                            
                            var row = table.insertRow(26);
                            var cell27 = row.insertCell(0);
                            cell27.colSpan = 2;
                            cell27.style = "background-color: white; color:black; font-size:13px; border:0; text-align:left;";
                            cell27.innerHTML = "<label for='buscar' id='label_longitud' name='label_longitud' hidden='hidden' style='text-align: center;'>Longitud:</label><input type='text' id='input_coord2' name='longitud' class='required' onFocus='this.blur()'  style='background-color: #white; color:black; font-size: 14px; font-style:italic; font-weight: bold; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;'>";
                                                     
                            
                            var row = table.insertRow(27);
                            var cell28 = row.insertCell(0);
                            cell28.colSpan = 2;
                            cell28.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell28.innerHTML = "<input type='submit' id='enviar' class='btn btn-primary btn-lg btn-block'>";
                            /*cell23.innerHTML = "<button type='button' id='enviar' onclick='saveform()' class='btn btn-primary btn-lg btn-block'>Enviar Formulario</button>";*/
                            
                            
                            
                            var row = table.insertRow(28);
                            var cell29 = row.insertCell(0);
                            cell29.colSpan = 2;
                            cell29.style = "background-color: white; color:black; font-size: 15px; border:0; text-align:left;";
                            cell29.innerHTML = "<input type='text' hidden='hidden' id='codigo_catastral' name='codigo_catastral'>";
                            document.getElementById('codigo_catastral').value= codigo;
                            
                            
                            var select = [];
                            var sel = [];                        
                            select[0] = "<b>Código Catastral:</b>"; 
                            select[1] = "<b>Dirección:</b>";                           
				            select[2] = "<b>Barrio:</b>";
                            select[3] = "<b>Fecha:</b>&nbsp"+(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
                            sel[0] = codigo.substr(5,30);
                            sel[0].id = "codigo_corto";
                            sel[1] = direccion[0];                           
				            sel[2] = values.cod_barrio;
                            sel[3] = "<b>Hora:</b>&nbsp&nbsp" + fecha.getHours()+":"+fecha.getMinutes(); 
                            var campos = 3;
                                         
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.style = "background-color: #bfbfbf; color:white; font-size: 12px; border-right:0; border-left:0; text-align:left;";
                            cell1.innerHTML = select[i];
                            cell2.style = "background-color: #bfbfbf; color:white; font-size: 12px; border-right:0; border-left:0; text-align:left;";
                            cell2.innerHTML = sel[i];
                        } 
                    } 
                            
                        else if (values.estado == 'NOSELECT'){
                            var fecha = new Date();                         
                            var table = document.getElementById("tblatt");
                            table.innerHTML = "";
                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            cell1.colSpan = 2;
                            cell1.style = "background-color: #3B5998; color:white; text-align:center;";
                            cell1.innerHTML = "<b>PREDIO NO SELECCIONADO</b>";
                        
                            var select = [];
                            var sel = [];                        
                            select[0] = "<b>Código Catastral:</b>"; 
                            select[1] = "<b>Dirección:</b>";                           
				            select[2] = "<b>Barrio:</b>";
                            select[3] = "<b>Fecha:</b>&nbsp"+(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
                            sel[0] = codigo.substr(5,30);
                            sel[0].id = "codigo_corto";
                            sel[1] = direccion[0];                           
				            sel[2] = values.cod_barrio;
                            sel[3] = "<b>Hora:</b>&nbsp&nbsp" + fecha.getHours()+":"+fecha.getMinutes(); 
                            var campos = 3;
                            
                         
                            for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.style = "background-color: #bfbfbf; color:white; font-size: 12px; border-right:0; border-left:0; text-align:left;";
                            cell1.innerHTML = select[i];
                            cell2.style = "background-color: #bfbfbf; color:white; font-size: 12px; border-right:0; border-left:0; text-align:left;";
                            cell2.innerHTML = sel[i];
                        } 
                    }  
                            
                        else if (values.estado == 'CAPTURADO'){
                            var fecha = new Date();                         
                            var table = document.getElementById("tblatt");
                            table.innerHTML = "";
                            var row = table.insertRow(0);
                            var cell1 = row.insertCell(0);
                            cell1.colSpan = 2;
                            cell1.style = "background-color: #3B5998; color:white; text-align:left;";
                            cell1.innerHTML = "<b>PREDIO CAPTURADO</b>";
                        
                            var select = [];
                            var sel = [];  
                            var imag = [];
                            var stv = [];
                            var ig = [];
                            var stv3 = [];
                            var ig3 = [];
                            var stv4 = [];
                            var ig4 = [];
                            var stv5 = [];
                            var ig5 = [];
                            select[0] = "<b>Código Catastral:</b>"; 
                            select[1] = "<b>Dirección:</b>";                           
				            select[2] = "<b>Barrio:</b>";
                            select[3] = "<b>Fecha y hora de Captura:</b>";
                            select[4] = "<b>Recolector:</b>";
                            select[5] = "<b>Supervisor:</b>";
                            select[6] = "<b>Tipo Predio:</b>";
                            select[7] = "<b>Uso del Predio:</b>";
                            select[8] = "<b>Vía de Acceso:</b>";
                            select[9] = "<b>Focos de Contaminación:</b>";
                            select[10] = "<b>Observaciones:</b>";
                            select[11] = "<b>Coordenadas:</b>";
                            select[12] = "<b>Fotografías:</b>";
                            sel[0] = codigo.substr(5,30);
                            sel[0].id = "codigo_corto";
                            sel[1] = direccion[0];                           
				            sel[2] = values.cod_barrio;
                            sel[3] = values.fecha;
                            sel[4] = values.recoletor;
                            sel[5] = values.supervisor;
                            sel[6] = values.tipo_predio;
                            sel[7] = values.uso_predio;
                            sel[8] = values.via_acceso;
                            sel[9] = values.focos_contaminacion; 
                            sel[10] = values.observaciones;  
                            sel[11] = "Latitud: " + values.latitud + "<br>Longitud: " + values.longitud; 
                            sel[12] = document.createElement("a");
                            sel[12].id = "img";
                            sel[12].target = "marco2";
                            sel[12].setAttribute("onclick", "open_streetview()");
                            sel[12].href = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_1.jpg";
                            imag[12] = document.createElement("img");
                            imag[12].id = "im1";
                            imag[12].className = "pequeña";
                            imag[12].src = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_1.jpg";
                            
                            stv[12] = document.createElement("a");
                            stv[12].id = "img";
                            stv[12].target = "marco2";
                            stv[12].setAttribute("onclick", "open_streetview()");
                            stv[12].href = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_2.jpg";
                            ig[12] = document.createElement("img");
                            ig[12].id = "im2";
                            ig[12].className = "pequeña";
                            ig[12].src = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_2.jpg";
                            
                            stv3[12] = document.createElement("a");
                            stv3[12].id = "img";
                            stv3[12].target = "marco2";
                            stv3[12].setAttribute("onclick", "open_streetview()");
                            stv3[12].href = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_3.jpg";
                            ig3[12] = document.createElement("img");
                            ig3[12].id = "im3";
                            ig3[12].className = "pequeña";
                            ig3[12].src = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_3.jpg";
                            
                            stv4[12] = document.createElement("a");
                            stv4[12].id = "img";
                            stv4[12].target = "marco2";
                            stv4[12].setAttribute("onclick", "open_streetview()");
                            stv4[12].href = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_4.jpg";
                            ig4[12] = document.createElement("img");
                            ig4[12].id = "im4";
                            ig4[12].className = "pequeña";
                            ig4[12].src = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_4.jpg";
                            
                            stv5[12] = document.createElement("a");
                            stv5[12].id = "img";
                            stv5[12].target = "marco2";
                            stv5[12].setAttribute("onclick", "open_streetview()");
                            stv5[12].href = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_5.jpg";
                            ig5[12] = document.createElement("img");
                            ig5[12].id = "im4";
                            ig5[12].className = "pequeña";
                            ig5[12].src = "http://www.ideepcucuta.com/formulario/principal/fotos/" + values.codigo + "/" +  values.codigo + "_5.jpg";
                            
                            
                            
                            var campos = 12;
                             
                            
                            
                            for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            /*cell1.style = "background-color: #bfbfbf; color:white; font-size: 12px; border-right:0; border-left:0; text-align:left;";*/
                            cell1.innerHTML = select[i];
                            if (i === campos) {
                                cell2.appendChild(sel[i]);
                                cell2.appendChild(imag[i]);
                                sel[i].appendChild(imag[i]);
                                
                                cell2.appendChild(stv[i]);
                                cell2.appendChild(ig[i]);
                                stv[i].appendChild(ig[i]);
                                
                                cell2.appendChild(stv3[i]);
                                cell2.appendChild(ig3[i]);
                                stv3[i].appendChild(ig3[i]);
                                
                                cell2.appendChild(stv4[i]);
                                cell2.appendChild(ig4[i]);
                                stv4[i].appendChild(ig4[i]);
                                
                                cell2.appendChild(stv5[i]);
                                cell2.appendChild(ig5[i]);
                                stv5[i].appendChild(ig5[i]);

                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        } 
                    }
                            
                            
                }
                    
                    
                    
            
                    
                    
                    document.getElementById("contenedorg").style.display = "block";
					document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                    

                    var c = feature.values_.geom.flatCoordinates.length - 1;
                    for (var i = 0; i <= c; i = i + 3) {
                        var a = feature.values_.geom.flatCoordinates[i];
                        feature.values_.geom.flatCoordinates[i] = feature.values_.geom.flatCoordinates[i + 1];
                        feature.values_.geom.flatCoordinates[i + 1] = a;
                    }
                    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
                    highlightfeatures.setStyle(PredioStyle);
                    var markerSourcenoph = highlightfeatures.getSource();
                    markerSourcenoph.clear();
                    markerSourcenoph.addFeature(feature);
                    
                }
            },
         complete: function(){
                if (tamañopantalla==true){
                quitgif(); }
                else{
                document.getElementById("carga3").style.display = "none";  
                   }
            }   
        
        });
    }
      
    
    
});


//herramienta medir


