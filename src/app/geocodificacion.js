var indicadora;
function controladorGeo() {
    var markerSource = highlight.getSource();
    markerSource.clear();
    var markerSource = highlightfeatures.getSource();
    markerSource.clear();    
    predio.getSource().updateParams({'STYLES': 'predios_sin_consulta_cucuta', 'CQL_FILTER': null});
    document.getElementById("contenedorg").style.display = "block";
    document.getElementById("contenedorg").style.display = "none";
    document.getElementById("panel_atr2").style.visibility = "hidden";
    document.getElementById("panel_atr2").style.display = "block";
    document.getElementById("panel_atr2").style.height = "0px";
    document.getElementById("tablaP").style.visibility = "hidden";
    document.getElementById("tblatt").style.visibility = "hidden";
    document.getElementById("panel_atr").style.height = "0px";
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("cpestana1").style.display = "block";
    document.getElementById("cpestana2").style.display = "none";    
    document.getElementById("diry").style.height = "auto";
    document.getElementById("diry").style.visibility = "visible";
    var x = document.getElementById("diry");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function cerrarT() {
    document.getElementById("tabladir1").style.visibility = "hidden";
    document.getElementById("tabladir1").style.height = "0px";
    document.getElementById("diry1").style.visibility = "hidden";
    document.getElementById("diry1").style.height = "0px";
}
function infoGeoc() {
    alert('GESSTOR INFORMA:</br></br>La dirección está compuesta de 4 partes: el tipo y valor de la vía principal: CL 1, el tipo y valor de la vía secundaria: AV 9 E, el número de placa: 55 y el barrio: Quinta Oriental.</br>Para geocodificar con éxito una dirección en el mapa, se sugiere lo siguiente: </br>1) Seleccione de la lista despegable el tipo de vía principal y escriba en la casilla de valor de la vía principal, ejemplo:  AV 13 E. </br>2) Seleccione de la lista despegable el tipo de vía secundaria y escriba en la casilla de valor de la vía secundaria, ejemplo: CL 7 A N. </br>3) Si el número de vía presenta complemento, escribirlo en las casillas usando espacio, por ejemplo 5 A N. No usar caracteres especiales. </br>4) Ingrese el número de placa, ejemplo: 13. </br>5) Seleccione el barrio de la lista despegable de barrios. </br>6) A continuación, de clic en el botón Buscar dirección. </br></br>');
}
function busca_dir() {
    var generadora = document.getElementById('dir_g1').value + " " + document.getElementById('dir1').value;
    var nomvial = document.getElementById('dir_g2').value + " " + document.getElementById('dir2').value;
    var numerop = document.getElementById('dir3').value;
    var barrio = document.getElementById('selBarrio').value;
    document.getElementById("panel_atr2").style.visibility = "hidden";
    document.getElementById("panel_atr2").style.display = "block";
    document.getElementById("panel_atr2").style.height = "0px";
    document.getElementById("tablaP").style.visibility = "hidden";
    document.getElementById("tblatt").style.visibility = "hidden";
    document.getElementById("panel_atr").style.height = "0px";
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("cpestana1").style.display = "block";
    document.getElementById("cpestana2").style.display = "none";
    if (generadora == "" || nomvial == "" || numerop == "" || barrio == "Barrio") {
        indicadora = 3;
        alert("GESSTOR INFORMA:</br></br>Por favor diligencie todos los campos de la direcci&oacuten\n");
    }
    if (indicadora != 3) {
        var direccionE = search("cucuta:geocodificadorB1", generadora, nomvial, numerop, barrio);
        if (direccionE.length == 1) {
            map.getView().setCenter([direccionE[0][0], direccionE[0][1]]);
            var thing = new ol.geom.Point([direccionE[0][0], direccionE[0][1]]);
            encontradaD = generadora + " " + nomvial + " " + numerop + " BR " + barrio;
            fuente = "<img style='height:40px;' src='./imagenes/gesstor.png'/>";
            htmlGeoc(encontradaD, fuente, thing, generadora + " # " + nomvial + " - " + numerop + " BR " + barrio);
        } else {
            var address = generadora + " # " + nomvial + " - " + numerop + " Barrio " + barrio + ', Cúcuta, Norte de Santander, Colombia';
            geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': address, componentRestrictions: {country: 'CO', locality: 'Cúcuta'}}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var long = ((results[0].geometry.viewport.b.b + results[0].geometry.viewport.b.f) / 2);
                    var lat = ((results[0].geometry.viewport.f.b + results[0].geometry.viewport.f.f) / 2);
                    fuente = "<img style='height:40px;' src='./imagenes/google.png'/>";
                    var thing = new ol.geom.Point(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
                    map.getView().setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
                    htmlGeoc(address, fuente, thing, generadora + " # " + nomvial + " - " + numerop + " BR " + barrio);
                } else {
                    alert("No podemos encontrar la direcci&oacute;n\n");
                }
            });
        }
    }
}
function htmlGeoc(direccionO, geocode, partT, direccionB) {
    document.getElementById("diry1").style.visibility = "visible";
    document.getElementById("diry1").style.display = "initial";
    document.getElementById("diry1").style.height = "auto";
    document.getElementById("diry").style.visibility = "visible";
    document.getElementById("diry").style.display = "initial";
    document.getElementById("diry").style.height = "auto";
    document.getElementById("tabladir1").style.visibility = "visible";
    document.getElementById("tabladir1").style.display = "initial";
    document.getElementById("tabladir1").style.height = "auto";
    map.getView().setZoom(18);
    var feat = new ol.Feature({
        name: "Thing",
        geometry: partT
    });
    highlight.setStyle(flagStyle);
    vectorSource = new ol.source.Vector({
        features: [feat]
    });
    vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    var tableg = document.getElementById("tabladir1");
    tableg.innerHTML = "";
    var row = tableg.insertRow(0);
    var celll = row.insertCell(0);
    celll.colSpan = 2;
    celll.innerHTML = "<H5><b>GEOREFERENCIADOR</b></H5>";
    var seleccion = [];
    var sel = [];
    var stv = [];
    var ig = [];
    seleccion[0] = "<b>Dirección Buscada</b>";
    seleccion[1] = "<b>Dirección Aproximada</b>";
    seleccion[2] = "<b>Fuente</b>";
    sel[0] = direccionB;
    sel[1] = direccionO;
    sel[2] = geocode;
    for (i = 0; i < seleccion.length; i++) {
        row = tableg.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = seleccion[i];
        if (i === 4) {
            cell2.appendChild(sel[i]);
            sel[i].appendChild(imag[i]);
            cell2.appendChild(stv[i]);
            stv[i].appendChild(ig[i]);
        } else {
            cell2.innerHTML = sel[i];
        }
    }
}