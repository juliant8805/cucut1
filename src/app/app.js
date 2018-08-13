// ========= config section ================================================
var url = 'http://35.184.176.7:8081/geoserver/ows?';
var featurePrefix = 'cucuta';
var featureType = ['u_terreno', 'barrios'];
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
}
;
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
var tipoUsuario = validacionusuarios()[0][6];
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
    layers: [layerBase, layerCatastro, layerPot2001, layerPot2011, layerBing, layerOrtofoto2017, sitios, layerValorizacion, highlight],
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
    document.getElementById("panel_atr2").style.display = "none";
    if (tipoUsuario === "catastro") {
        document.getElementById("panel_atr2").style.visibility = "hidden";
        document.getElementById("panel_atr2").style.height = "0px";
        document.getElementById("tablaP").style.visibility = "hidden";
    }
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(
            evt.coordinate, viewResolution, map.getView().getProjection(),
            {'INFO_FORMAT': infoFormat}
    );
    var tamañopantalla = screen.width > 800;
    if (url && predio.values_.visible == true && viewResolution < 2 && document.getElementById("medidas").style.display == "none") {
        $.ajax({
            url: url,
            beforeSend: function () {
                if (tamañopantalla == true) {
                    putgif();
                } else {
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
                        if (tipoUsuario === "catastro") {
                            var table = document.getElementById("tblatt");
                        }
                        if (tipoUsuario === "hacienda") {
                            var table = document.getElementById("tablaP");
                            document.getElementById("tblatt").style.visibility = "hidden";
                            document.getElementById("panel_atr").style.height = "0px";
                        }
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<H5><b>PROPIEDAD HORIZONTAL</b></H5>";
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
                                tablaph += ("<td id=tt" + i + "><b>" + direccion[i] + "</b></td>");
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
                            var ell = document.getElementById("tt" + i);
                            var alg = "addressSource('tt" + i + "')";
                            ell.setAttribute("onclick", alg);
                            ell.value = direccion[i];
                            //ell.onclick = function() {addressSource(direccion[i]);};
                        }

                    } else if (ph < 800) {
                        var table = document.getElementById("tblatt");
                        table.innerHTML = "";
                        var row = table.insertRow(0);
                        var cell1 = row.insertCell(0);
                        cell1.colSpan = 2;
                        cell1.innerHTML = "<H5><b>INFORMACION DEL PREDIO</b></H5>";
                        var select = [];
                        var sel = [];
                        var imag = [];
                        var stv = [];
                        var ig = [];
                        //var avaluohacienda = formatNumber(values.avaluo);
                        // var codfoto = values.codigo_ant.substring(0, 17);
                        if (values.estrato_acueducto == '1' || values.estrato_acueducto == '2' || values.estrato_acueducto == '3' || values.estrato_acueducto == '4' || values.estrato_acueducto == '5' || values.estrato_acueducto == '6')
                        {
                            var uso_acueducto = "Residencial";
                        } else if (values.estrato_acueducto == '11' || values.estrato_acueducto == '12' || values.estrato_acueducto == '13' || values.estrato_acueducto == '14')
                        {
                            var uso_acueducto = "Comercial";
                        } else {
                            var uso_acueducto = "Sin Informacion";
                        }
                        if (values.estrato_alcantarillado == '1' || values.estrato_alcantarillado == '2' || values.estrato_alcantarillado == '3' || values.estrato_alcantarillado == '4' || values.estrato_alcantarillado == '5' || values.estrato_alcantarillado == '6')
                        {
                            var uso_alcantarillado = "Residencial";
                        } else if (values.estrato_alcantarillado == '11' || values.estrato_alcantarillado == '12' || values.estrato_alcantarillado == '13' || values.estrato_alcantarillado == '14')
                        {
                            var uso_alcantarillado = "Comercial";
                        } else {
                            var uso_alcantarillado = "Sin Informacion";
                        }
                        if (values.estrato_aseo == '1' || values.estrato_aseo == '2' || values.estrato_aseo == '3' || values.estrato_aseo == '4' || values.estrato_aseo == '5' || values.estrato_aseo == '6')
                        {
                            var uso_aseo = "Residencial";
                        } else if (values.estrato_aseo == '11' || values.estrato_aseo == '12' || values.estrato_aseo == '13' || values.estrato_aseo == '14')
                        {
                            var uso_aseo = "Comercial";
                        } else {
                            var uso_aseo = "Sin Informacion";
                        }

                        var cod = values.codigo_ant.substring(5, 20);
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
                        } catch (err) {
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
                        } catch (err) {
                            var matricula = "Sin Informacion";
                        }

                        if (tipoUsuario === "catastro") {
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

                        if (tipoUsuario === "hacienda") {
                            document.getElementById("tblatt").style.visibility = "visible";
                            document.getElementById("tblatt").style.display = "initial";
                            document.getElementById("tblatt").style.height = "auto";
                            document.getElementById("panel_atr").style.visibility = "visible";
                            document.getElementById("panel_atr").style.display = "initial";
                            document.getElementById("panel_atr").style.height = "auto";
                            document.getElementById("panel_atr2").style.visibility = "visible";
                            document.getElementById("panel_atr2").style.display = "initial";
                            document.getElementById("panel_atr2").style.height = "auto";
                            document.getElementById("tablaP").style.visibility = "visible";
                            document.getElementById("tablaP").style.display = "initial";
                            document.getElementById("tablaP").style.height = "auto";
                            
                            ref_cat = values.codigo_ant.substring(5, 21);
                            ref_cat = "'" + ref_cat + "'";
                            function enviarRef(referencia) {
                                var ref = referencia;
                                var urlphp = 'sql/wsDatosBasicos.php';
                                var temp = $.ajax({
                                    url: urlphp,
                                    data: {ref: ref},
                                    type: "POST",
                                    //dataType: "json",
                                    async: false,
                                    success: function (data, status, xhr) {},
                                    error: function (jqXHR, exception) {
                                        console.log(jqXHR);
                                        console.log(exception);
                                    }
                                });
                                var cadena1 = temp.responseText;
                                separador = "%%"; // un espacio en blanco
                                arregloDeSubCadenas1 = cadena1.split(separador);
                                var urlphp = 'sql/wsLiquidacion.php';
                                //var url = urlphp + "?ref=" + ref;  
                                var temp = $.ajax({
                                    url: urlphp,
                                    data: {ref: ref},
                                    type: "POST",
                                    //dataType: "json",
                                    async: false,
                                    success: function (data, status, xhr) {},
                                    error: function (jqXHR, exception) {
                                        console.log(jqXHR);
                                        console.log(exception);
                                    }
                                });
                                var cadena2 = temp.responseText;
                                arregloDeSubCadenas2 = cadena2.split(separador);
                                var urlphp = 'sql/wsEstadoCuenta.php';
                                var temp = $.ajax({
                                    url: urlphp,
                                    data: {ref: ref},
                                    type: "POST",
                                    //dataType: "json",
                                    async: false,
                                    success: function (data, status, xhr) {},
                                    error: function (jqXHR, exception) {
                                        console.log(jqXHR);
                                        console.log(exception);
                                    }
                                });
                                var cadena3 = temp.responseText;
                                arregloDeSubCadenas3 = cadena3.split(separador);
                                var urlphp = 'sql/wsHistoricoPagos.php';
                                var temp = $.ajax({
                                    url: urlphp,
                                    data: {ref: ref},
                                    type: "POST",
                                    //dataType: "json",
                                    async: false,
                                    success: function (data, status, xhr) {},
                                    error: function (jqXHR, exception) {
                                        console.log(jqXHR);
                                        console.log(exception);
                                    }
                                });
                                var cadena4 = temp.responseText;
                                arregloDeSubCadenas4 = cadena4.split(separador);
                                var urlphp = 'sql/wsHistoricoAbonos.php';
                                var temp = $.ajax({
                                    url: urlphp,
                                    data: {ref: ref},
                                    type: "POST",
                                    //dataType: "json",
                                    async: false,
                                    success: function (data, status, xhr) {},
                                    error: function (jqXHR, exception) {
                                        console.log(jqXHR);
                                        console.log(exception);
                                    }
                                });
                                var cadena5 = temp.responseText;
                                arregloDeSubCadenas5 = cadena5.split(separador);
                                return [arregloDeSubCadenas1, arregloDeSubCadenas2, arregloDeSubCadenas3, arregloDeSubCadenas4, arregloDeSubCadenas5];
                            }

                            var tableP = document.getElementById("tablaP");
                            tableP.innerHTML = "";
                            var row = tableP.insertRow(0);
                            var cell1 = row.insertCell(0);
                            cell1.colSpan = 2;
                            cell1.innerHTML = "<H5><b>INFORMACION DEL PREDIO</b></H5>";
                            var select = [];
                            var sel = [];
                            var imag = [];
                            var stv = [];
                            var ig = [];
                            var arregloDeSubCadenas = enviarRef(eval(ref_cat));
                            select[0] = "<b>Codigo Catastral</b>";
                            select[1] = "<b>Nombre del Propietario</b>";
                            select[2] = "<b>Dirección</b>";
                            select[3] = "<b>Destino</b>";
                            select[4] = "<b>Area de Terreno</b>";
                            select[5] = "<b>Avaluo</b>";
                            select[6] = "<b>Estrato</b>";
                            select[7] = "<b>Clase de Predio</b>";
                            select[8] = "<b>Tipo de Predio</b>";
                            select[9] = "<b>Fotografias</b>";
                            sel[0] = arregloDeSubCadenas[0][5];
                            sel[1] = arregloDeSubCadenas[0][7];
                            sel[2] = arregloDeSubCadenas[0][6];
                            sel[3] = arregloDeSubCadenas[0][4];
                            sel[4] = Intl.NumberFormat().format(arregloDeSubCadenas[0][1]) + " M2";
                            sel[5] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[0][2]);
                            sel[6] = arregloDeSubCadenas[0][9];
                            sel[7] = arregloDeSubCadenas[0][3];
                            sel[8] = arregloDeSubCadenas[0][8];
                            select[9] = "<b>Fotografias</b>";
                            sel[9] = document.createElement("a");
                            sel[9].id = "img1";
                            sel[9].target = "marco2";
                            sel[9].setAttribute("onclick", "open_streetview()");
                            sel[9].href = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                            imag[9] = document.createElement("img");
                            imag[9].id = "im1";
                            imag[9].className = "pequeña";
                            imag[9].src = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                            stv[9] = document.createElement("a");
                            stv[9].id = "imgstreet1";
                            stv[9].target = "marco";
                            stv[9].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                            stv[9].setAttribute("onclick", "open_streetview()");
                            ig[9] = document.createElement("img");
                            ig[9].src = "./imagenes/streetview.png";
                            var campos = 9;
                            for (i = 0; i < select.length; i++) {
                                row = tableP.insertRow(i + 1);
                                cell1 = row.insertCell(0);
                                cell2 = row.insertCell(1);
                                cell1.innerHTML = select[i];
                                if (i === campos) {
                                    cell2.appendChild(sel[i]);
                                    sel[i].appendChild(imag[i]);
                                    cell2.appendChild(stv[i]);
                                    stv[i].appendChild(ig[i]);
                                } else {
                                    cell2.innerHTML = sel[i];
                                }
                            }

                            var table = document.getElementById("tblatt");
                            table.innerHTML = "";
                            var select = [];
                            var sel = [];
                            var imag = [];
                            var stv = [];
                            var ig = [];
                            if (arregloDeSubCadenas[1].length == 1) {
                                row1 = table.insertRow(select.length);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>LIQUIDACIÓN DEL PREDIO</b></H5>";
                                row1 = table.insertRow(select.length + 1);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<FONT SIZE=2 color='green'><b>NO POSEE DEUDA CON EL MUNICIPIO</b></font>";
                                row1 = table.insertRow(select.length + 2);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>HISTÓRICO DE PAGOS</b></H5>";
                                if (arregloDeSubCadenas[3].length <= 6) {
                                    row1 = table.insertRow(select.length + 3);
                                    cellMas = row1.insertCell(0);
                                    cellMas.colSpan = 2;
                                    cellMas.innerHTML = "<b>No se encuentran pagos en el sistema</b>";
                                }
                                if (arregloDeSubCadenas[3].length > 6) {
                                    arreglo1 = [];
                                    arreglo2 = [];
                                    for (i = 1; i < parseInt(arregloDeSubCadenas[3][1]) + 1; i++) {
                                        if (arregloDeSubCadenas[3][3 + 6 * (i - 1)] == arregloDeSubCadenas[3][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[3][3 + 6 * (i - 1)];
                                        }
                                        if (arregloDeSubCadenas[3][3 + 6 * (i - 1)] != arregloDeSubCadenas[3][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[3][3 + 6 * (i - 1)] + " - " + arregloDeSubCadenas[3][4 + 6 * (i - 1)];
                                        }
                                        arreglo1[i - 1] = "<b>Pago " + i + "</b>";
                                        arreglo2[i - 1] = "# de Factura: " + arregloDeSubCadenas[3][2 + 6 * (i - 1)] + "</br>Periodo de pago: " + periodoPago + "</br>Valor pagado: $" + Intl.NumberFormat().format(arregloDeSubCadenas[3][5 + 6 * (i - 1)]) + "</br>Fecha de pago: " + arregloDeSubCadenas[3][6 + 6 * (i - 1)].slice(0, -9) + "</br>Banco: " + arregloDeSubCadenas[3][7 + 6 * (i - 1)];
                                    }
                                    for (i = 2; i < 2 + parseInt(arregloDeSubCadenas[3][1]); i++) {
                                        row = table.insertRow(i + 1);
                                        cell1 = row.insertCell(0);
                                        cell2 = row.insertCell(1);
                                        cell1.innerHTML = arreglo1[i - 2];
                                        cell2.innerHTML = arreglo2[i - 2];
                                    }
                                }
                                row1 = table.insertRow(3 + parseInt(arregloDeSubCadenas[3][1]));
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>HISTÓRICO DE ABONOS</b></H5>";
                                if (arregloDeSubCadenas[4].length <= 6) {
                                    row1 = table.insertRow(4 + parseInt(arregloDeSubCadenas[3][1]));
                                    cellMas = row1.insertCell(0);
                                    cellMas.colSpan = 2;
                                    cellMas.innerHTML = "<b>No se encuentran abonos en el sistema</b>";
                                }
                                if (arregloDeSubCadenas[4].length > 6) {
                                    arreglo1 = [];
                                    arreglo2 = [];
                                    for (i = 1; i < parseInt(arregloDeSubCadenas[4][1]) + 1; i++) {
                                        if (arregloDeSubCadenas[4][3 + 6 * (i - 1)] == arregloDeSubCadenas[4][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[4][3 + 6 * (i - 1)];
                                        }
                                        if (arregloDeSubCadenas[4][3 + 6 * (i - 1)] != arregloDeSubCadenas[4][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[4][3 + 6 * (i - 1)] + " - " + arregloDeSubCadenas[4][4 + 6 * (i - 1)];
                                        }
                                        arreglo1[i - 1] = "<b>Abono " + i + "</b>";
                                        arreglo2[i - 1] = "# de Recibo: " + arregloDeSubCadenas[4][2 + 6 * (i - 1)] + "</br>Periodo de abono: " + periodoPago + "</br>Valor abonado: $" + Intl.NumberFormat().format(arregloDeSubCadenas[4][5 + 6 * (i - 1)]) + "</br>Fecha de abono: " + arregloDeSubCadenas[4][6 + 6 * (i - 1)].slice(0, -9) + "</br>Banco: " + arregloDeSubCadenas[4][7 + 6 * (i - 1)];
                                    }
                                    for (i = parseInt(arregloDeSubCadenas[3][1]) + 3; i < parseInt(arregloDeSubCadenas[3][1]) + 3 + parseInt(arregloDeSubCadenas[4][1]); i++) {
                                        row = table.insertRow(i + 1);
                                        cell1 = row.insertCell(0);
                                        cell2 = row.insertCell(1);
                                        cell1.innerHTML = arreglo1[i - (parseInt(arregloDeSubCadenas[3][1]) + 3)];
                                        cell2.innerHTML = arreglo2[i - (parseInt(arregloDeSubCadenas[3][1]) + 3)];
                                    }
                                }
                            }
                            if (arregloDeSubCadenas[1].length > 1) {
                                row1 = table.insertRow(0);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>DATOS DE FACTURACIÓN</b></H5>";
                                select[0] = "<b>Estado de Factura</b>";
                                select[1] = "<b># de Factura</b>";
                                select[2] = "<b>Fecha de vencimiento</b>";
                                select[3] = "<b>Información del pago</b>";
                                select[4] = "<b>Tarifa</b>";
                                select[5] = "<b>Vigencia actual</b>";
                                sel[0] = "<FONT SIZE=2 color='red'><b>POR PAGAR</b></font>";
                                sel[1] = arregloDeSubCadenas[1][1];
                                sel[2] = arregloDeSubCadenas[1][2].slice(0, -9);
                                sel[3] = arregloDeSubCadenas[1][3];
                                sel[4] = arregloDeSubCadenas[1][4];
                                sel[5] = arregloDeSubCadenas[1][5];
                                for (i = 0; i <= 5; i++) {
                                    row = table.insertRow(i + 1);
                                    cell1 = row.insertCell(0);
                                    cell2 = row.insertCell(1);
                                    cell1.innerHTML = select[i];
                                    cell2.innerHTML = sel[i];
                                }
                                row1 = table.insertRow(select.length + 1);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>ESTADO DE CUENTA</b></H5>";
                                row1 = table.insertRow(select.length + 2);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<FONT SIZE=2><b>Impuesto Predial</b></font>";
                                select[9] = "<b>Deuda (+)</b>";
                                select[10] = "<b>Interés (+)</b>";
                                select[11] = "<b>Descuento (-)</b>";
                                select[12] = "<FONT SIZE=2><b>Total Impuesto Predial</b></font>";
                                sel[9] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][1]);
                                sel[10] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][2]);
                                sel[11] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][3]);
                                sel[12] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][4]);
                                for (i = 9; i <= 12; i++) {
                                    row = table.insertRow(i);
                                    cell1 = row.insertCell(0);
                                    cell2 = row.insertCell(1);
                                    cell1.innerHTML = select[i];
                                    cell2.innerHTML = sel[i];
                                }
                                row1 = table.insertRow(select.length);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<FONT SIZE=2><b>Corponor</b></font>";
                                select[14] = "<b>Deuda (+)</b>";
                                select[15] = "<b>Interés (+)</b>";
                                select[16] = "<b>Descuento (-)</b>";
                                select[17] = "<FONT SIZE=2><b>Total Corponor</b></font>";
                                sel[14] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][9]);
                                sel[15] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][10]);
                                sel[16] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][11]);
                                sel[17] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][12]);
                                for (i = 14; i <= 17; i++) {
                                    row = table.insertRow(i);
                                    cell1 = row.insertCell(0);
                                    cell2 = row.insertCell(1);
                                    cell1.innerHTML = select[i];
                                    cell2.innerHTML = sel[i];
                                }
                                row1 = table.insertRow(select.length);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<FONT SIZE=2><b>Valorización</b></font>";
                                select[19] = "<b>Deuda (+)</b>";
                                select[20] = "<b>Interés (+)</b>";
                                select[21] = "<b>Descuento (-)</b>";
                                select[22] = "<FONT SIZE=2><b>Total Valorización</b></font>";
                                sel[19] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][5]);
                                sel[20] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][6]);
                                sel[21] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][7]);
                                sel[22] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][8]);
                                for (i = 19; i <= 22; i++) {
                                    row = table.insertRow(i);
                                    cell1 = row.insertCell(0);
                                    cell2 = row.insertCell(1);
                                    cell1.innerHTML = select[i];
                                    cell2.innerHTML = sel[i];
                                }
                                row1 = table.insertRow(select.length);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>LIQUIDACIÓN DEL PREDIO</b></H5>";
                                select[24] = "<b>Total Impuestos y Contribuciones (+)</b>";
                                select[25] = "<b>Total Interés (+)</b>";
                                select[26] = "<b>Total Descuento (-)</b>";
                                select[27] = "<b>Costo Facturación (+)</b>";
                                select[28] = "<FONT SIZE=2><b>Total a Pagar Predio</b></font>";
                                sel[24] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][13]);
                                sel[25] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][14]);
                                sel[26] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][15]);
                                sel[27] = "$2.600";
                                sel[28] = "<FONT SIZE=2 color='red'><b>$" + Intl.NumberFormat().format(arregloDeSubCadenas[2][16]) + "</b></font>";
                                for (i = 24; i <= 28; i++) {
                                    row = table.insertRow(i);
                                    cell1 = row.insertCell(0);
                                    cell2 = row.insertCell(1);
                                    cell1.innerHTML = select[i];
                                    cell2.innerHTML = sel[i];
                                }
                                if (arregloDeSubCadenas[2][17] == arregloDeSubCadenas[1][5]) {
                                    periodoDeuda = "Los datos anteriores corresponden a los impuestos y contribuciones del año " + arregloDeSubCadenas[1][5];
                                }
                                if (arregloDeSubCadenas[2][17] != arregloDeSubCadenas[1][5]) {
                                    periodoDeuda = "Los datos anteriores corresponden a la suma de impuestos y contribuciones desde el año " + arregloDeSubCadenas[2][17] + " hasta el año " + arregloDeSubCadenas[1][5];
                                }
                                row1 = table.insertRow(select.length);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = periodoDeuda;
                                row1 = table.insertRow(select.length + 1);
                                cellMas = row1.insertCell(0);
                                cellMas.colSpan = 2;
                                cellMas.innerHTML = "<H5><b>HISTÓRICO DE PAGOS</b></H5>";
                                if (arregloDeSubCadenas[3].length <= 6) {
                                    row1 = table.insertRow(select.length + 2);
                                    cellMas = row1.insertCell(0);
                                    cellMas.colSpan = 2;
                                    cellMas.innerHTML = "<b>No se encuentran pagos en el sistema</b>";
                                    if (arregloDeSubCadenas[4].length <= 6) {
                                        row1 = table.insertRow(select.length + 3);
                                        cellMas = row1.insertCell(0);
                                        cellMas.colSpan = 2;
                                        cellMas.innerHTML = "<H5><b>HISTÓRICO DE ABONOS</b></H5>";
                                        row1 = table.insertRow(select.length + 4);
                                        cellMas = row1.insertCell(0);
                                        cellMas.colSpan = 2;
                                        cellMas.innerHTML = "<b>No se encuentran abonos en el sistema</b>";
                                    }
                                }
                                if (arregloDeSubCadenas[3].length > 6) {
                                    arreglo1 = [];
                                    arreglo2 = [];
                                    for (i = 1; i < parseInt(arregloDeSubCadenas[3][1]) + 1; i++) {
                                        if (arregloDeSubCadenas[3][3 + 6 * (i - 1)] == arregloDeSubCadenas[3][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[3][3 + 6 * (i - 1)];
                                        }
                                        if (arregloDeSubCadenas[3][3 + 6 * (i - 1)] != arregloDeSubCadenas[3][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[3][3 + 6 * (i - 1)] + " - " + arregloDeSubCadenas[3][4 + 6 * (i - 1)];
                                        }
                                        arreglo1[i - 1] = "<b>Pago " + i + "</b>";
                                        arreglo2[i - 1] = "# de Factura: " + arregloDeSubCadenas[3][2 + 6 * (i - 1)] + "</br>Periodo de pago: " + periodoPago + "</br>Valor pagado: $" + Intl.NumberFormat().format(arregloDeSubCadenas[3][5 + 6 * (i - 1)]) + "</br>Fecha de pago: " + arregloDeSubCadenas[3][6 + 6 * (i - 1)].slice(0, -9) + "</br>Banco: " + arregloDeSubCadenas[3][7 + 6 * (i - 1)];
                                    }
                                    for (i = 31; i < 31 + parseInt(arregloDeSubCadenas[3][1]); i++) {
                                        row = table.insertRow(i);
                                        cell1 = row.insertCell(0);
                                        cell2 = row.insertCell(1);
                                        cell1.innerHTML = arreglo1[i - 31];
                                        cell2.innerHTML = arreglo2[i - 31];
                                    }
                                    if (arregloDeSubCadenas[4].length <= 6) {
                                        row1 = table.insertRow(31 + parseInt(arregloDeSubCadenas[3][1]));
                                        cellMas = row1.insertCell(0);
                                        cellMas.colSpan = 2;
                                        cellMas.innerHTML = "<H5><b>HISTÓRICO DE ABONOS</b></H5>";
                                        row1 = table.insertRow(32 + parseInt(arregloDeSubCadenas[3][1]));
                                        cellMas = row1.insertCell(0);
                                        cellMas.colSpan = 2;
                                        cellMas.innerHTML = "<b>No se encuentran abonos en el sistema</b>";
                                    }
                                }
                                if (arregloDeSubCadenas[4].length > 6) {
                                    row1 = table.insertRow(31 + parseInt(arregloDeSubCadenas[3][1]));
                                    cellMas = row1.insertCell(0);
                                    cellMas.colSpan = 2;
                                    cellMas.innerHTML = "<H5><b>HISTÓRICO DE ABONOS</b></H5>";
                                    arreglo1 = [];
                                    arreglo2 = [];
                                    for (i = 1; i < parseInt(arregloDeSubCadenas[4][1]) + 1; i++) {
                                        if (arregloDeSubCadenas[4][3 + 6 * (i - 1)] == arregloDeSubCadenas[4][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[4][3 + 6 * (i - 1)];
                                        }
                                        if (arregloDeSubCadenas[4][3 + 6 * (i - 1)] != arregloDeSubCadenas[4][4 + 6 * (i - 1)]) {
                                            periodoPago = arregloDeSubCadenas[4][3 + 6 * (i - 1)] + " - " + arregloDeSubCadenas[4][4 + 6 * (i - 1)];
                                        }
                                        arreglo1[i - 1] = "<b>Abono " + i + "</b>";
                                        arreglo2[i - 1] = "# de Recibo: " + arregloDeSubCadenas[4][2 + 6 * (i - 1)] + "</br>Periodo de abono: " + periodoPago + "</br>Valor abonado: $" + Intl.NumberFormat().format(arregloDeSubCadenas[4][5 + 6 * (i - 1)]) + "</br>Fecha de abono: " + arregloDeSubCadenas[4][6 + 6 * (i - 1)].slice(0, -9) + "</br>Banco: " + arregloDeSubCadenas[4][7 + 6 * (i - 1)];
                                    }
                                    for (i = parseInt(arregloDeSubCadenas[3][1]) + 32; i < parseInt(arregloDeSubCadenas[3][1]) + 32 + parseInt(arregloDeSubCadenas[4][1]); i++) {
                                        row = table.insertRow(i);
                                        cell1 = row.insertCell(0);
                                        cell2 = row.insertCell(1);
                                        cell1.innerHTML = arreglo1[i - (parseInt(arregloDeSubCadenas[3][1]) + 32)];
                                        cell2.innerHTML = arreglo2[i - (parseInt(arregloDeSubCadenas[3][1]) + 32)];
                                    }
                                }
                            }
                        }
                    }
                    document.getElementById("contenedorg").style.display = "block";
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("cpestana1").style.display = "block";
                    document.getElementById("panel_atr2").style.display = "block";
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
            complete: function () {
                if (tamañopantalla == true) {
                    quitgif();
                } else {
                    document.getElementById("carga3").style.display = "none";
                }
            }
        });
    }
}
);