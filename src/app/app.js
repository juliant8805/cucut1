// ========= config section ================================================
var url = 'http://35.184.176.7:8081/geoserver/ows?';
var featurePrefix = 'cucuta';
var featureType = ['u_terreno','barrios'];
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

var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});
map = new ol.Map({
    controls: ol.control.defaults().extend([new ol.control.ScaleLine(), new ol.control.ZoomToExtent({
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
    layers: [layerBase, layerCatastro, layerPot, layerBing, layerOrtofoto2017, sitios, layerValorizacion, highlight],
    view: new ol.View({
        center: center,
        zoom: zoom,
        extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457],
        maxZoom: 21, minZoom: 12
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
    if (url && predio.values_.visible==true && viewResolution<2 && document.getElementById("medidas").style.display =="none") {
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
                          var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        //var avaluohacienda = formatNumber(values.avaluo);
                       // var codfoto = values.codigo_ant.substring(0, 17);
                        if (values.estrato_acueducto=='1' || values.estrato_acueducto=='2' || values.estrato_acueducto=='3' || values.estrato_acueducto=='4' || values.estrato_acueducto=='5' || values.estrato_acueducto=='6')
                        {
                                var uso_acueducto = "Residencial";   
                        }
                        else if (values.estrato_acueducto=='11' || values.estrato_acueducto=='12' || values.estrato_acueducto=='13' || values.estrato_acueducto=='14')
                        {
                                var uso_acueducto = "Comercial";   
                        }
                        else{
                            var uso_acueducto = "Sin Informacion";
                        }
                        if (values.estrato_alcantarillado=='1' || values.estrato_alcantarillado=='2' || values.estrato_alcantarillado=='3' || values.estrato_alcantarillado=='4' || values.estrato_alcantarillado=='5' || values.estrato_alcantarillado=='6')
                        {
                                var uso_alcantarillado = "Residencial";   
                        }
                        else if (values.estrato_alcantarillado=='11' || values.estrato_alcantarillado=='12' || values.estrato_alcantarillado=='13' || values.estrato_alcantarillado=='14')
                        {
                                var uso_alcantarillado = "Comercial";   
                        }
                        else{
                            var uso_alcantarillado = "Sin Informacion";
                        }
                        if (values.estrato_aseo=='1' || values.estrato_aseo=='2' || values.estrato_aseo=='3' || values.estrato_aseo=='4' || values.estrato_aseo=='5' || values.estrato_aseo=='6')
                        {
                                var uso_aseo = "Residencial";   
                        }
                        else if (values.estrato_aseo=='11' || values.estrato_aseo=='12' || values.estrato_aseo=='13' || values.estrato_aseo=='14')
                        {
                                var uso_aseo = "Comercial";   
                        }
                        else{
                            var uso_aseo = "Sin Informacion";
                        }
							
							var cod = values.codigo_ant.substring(5,20);
                            var simplestabla = search("cucuta:simplestabla", cod); 
                            
	try {
                           var avaluo = search("cucuta:avaluohacienda", values.codigo);
	         var avaluo2018 = simplestabla["0"][3];
	         var avaluo2018 = "$" + formatNumber(avaluo2018);
	         var avaluo2017p = "$" + avaluo["0"][1];
	         var avaluo2017p = "$" + formatNumber(avaluo2017p); 
	         var avaluo2017 = "$" + avaluo["0"][2];
	         var avaluo2017 = "$" + formatNumber(avaluo2017);	   
	         var avaluo2016 = "$" + avaluo["0"][3];
	         var avaluo2016 = "$" + formatNumber(avaluo2016); 
	         var avaluo2015 = "$" + avaluo["0"][4];
	         var avaluo2015 = "$" + formatNumber(avaluo2015);
	         var areat = avaluo["0"][6] + " m2";
	         var areac = avaluo["0"][7] + " m2";   
                        } 
	catch (err) {
                            var avaluo2018 = "Sin Informacion";
	       var avaluo2017p = "Sin Informacion";
	          var avaluo2017 = "Sin Informacion";
	          var avaluo2016 = "Sin Informacion";
	          var avaluo2015 = "Sin Informacion";
	          var areat = "Sin Informacion";
	          var areac = "Sin Informacion";
	          
                          }
                          
           try {
                           var matricula = search("cucuta:consultamatricula", cod);
	          
                        } 
	      catch (err) {
                            var matricula = "Sin Informacion";     
	          
                          }
                          
                          
                          
	           
                           /* ref_cat = values.codigo_ant.substring(5, 21);
                            ref_cat = "'" + ref_cat + "'";
                            var arregloDeSubCadenas = enviarRef(eval(ref_cat));
                            console.log(arregloDeSubCadenas[0]);
                            console.log(arregloDeSubCadenas[1]);
                            console.log(arregloDeSubCadenas[2]);
                            console.log(arregloDeSubCadenas[3]);
                            console.log(arregloDeSubCadenas[4]);
                            console.log(arregloDeSubCadenas[5]);*/
                            
                            
                            select[0] = "<b>Codigo Manzana</b>";
                            select[1] = "<b>Codigo Catastral Nuevo</b>";
                            select[2] = "<b>Codigo Catastral Anterior</b>";
                            select[3] = "<b>Matricula</b>";
                            select[4] = "<b>Dirección</b>";
                            select[5] = "<b>Destino Económico Hacienda</b>";
                            select[6] = "<b>Uso Acueducto</b>";
                            select[7] = "<b>Uso Alcantarillado</b>";
                            select[8] = "<b>Uso Aseo</b>";
                            select[9] = "<b>Estrato Hacienda</b>";
                            select[10] = "<b>Estrato Acueducto</b>";
                            select[11] = "<b>Estrato Alcantarillado</b>";
                            select[12] = "<b>Estrato Aseo</b>"; 
                            select[13] = "<b>Empresa de Acueducto</b>";
                            select[14] = "<b>Empresa de Alcantarillado</b>";
                            select[15] = "<b>Empresa de Aseo</b>";
                            select[16] = "<b>Avalúo Catastral 2018</b>";
	                         select[17] = "<b>Area de Terreno</b>";
	                         select[18] = "<b>Area Construida</b>";
	                         select[19] = "<b>Barrio</b>";
                            select[20] = "<b>Fotografias</b>";
                            sel[0] = values.manzana_co;
                            sel[1] = values.codigo;
                            sel[2] = cod;
                            sel[3] = matricula;
                            sel[4] = direccion[0];
                            sel[5] = simplestabla["0"]["0"];
                            sel[6] = uso_acueducto;
                            sel[7] = uso_alcantarillado;
                            sel[8] = uso_aseo;
                            sel[9] = simplestabla["0"][5];
                            sel[10] = values.estrato_acueducto;
                            sel[11] = values.estrato_alcantarillado;
                            sel[12] = values.estrato_aseo;
                            sel[13] = values.disp_acued;
                            sel[14] = values.disp_alc;
                            sel[15] = values.disp_aseo;
                            sel[16] = avaluo2018;
	                         sel[17] = simplestabla["0"][1] + "m2"; 
	                         sel[18] = simplestabla["0"][2] + "m2";
	                         sel[19] = values.cod_barrio;
                            sel[20] = document.createElement("a");
                            sel[20].id = "img1";
                            sel[20].target = "marco2";
                            sel[20].setAttribute("onclick", "open_streetview()");
                            sel[20].href = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                            imag[20] = document.createElement("img");
                            imag[20].id = "im1";
                            imag[20].className = "pequeña";
                            imag[20].src = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                            stv[20] = document.createElement("a");
                            stv[20].id = "imgstreet1";
                            stv[20].target = "marco";
                            stv[20].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                            stv[20].setAttribute("onclick", "open_streetview()");
                            ig[20] = document.createElement("img");
                            ig[20].src = "./imagenes/streetview.png";
                            var campos = 20;
                        
                        
                        
                        for (i = 0; i < select.length; i++) {
                            row = table.insertRow(i + 1);
                            cell1 = row.insertCell(0);
                            cell2 = row.insertCell(1);
                            cell1.innerHTML = select[i];

                            if (i === campos) {
                                cell2.appendChild(sel[i]);
                                //cell2.appendChild(imag[i]);
                                sel[i].appendChild(imag[i]);
                                cell2.appendChild(stv[i]);
                                //cell2.appendChild(ig[i]);
                                stv[i].appendChild(ig[i]);

                            } else {
                                cell2.innerHTML = sel[i];
                            }
                        } 
                    }  
                    
                    document.getElementById("contenedorg").style.display = "block";
					document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("cpestana1").style.display = "block";
                    document.getElementById("cpestana2").style.display = "none";
                    document.getElementById("pestana1").style.backgroundColor = "#EAC102";
                    document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
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




