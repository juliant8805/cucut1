var BarrioStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    /*fill : new ol.style.Fill({
     color : "rgba(0,0,255,0.7)"
     })*/
    text: new ol.style.Text({
        font: '12px helvetica,sans-serif',
        scale: 1.5,
        fill: new ol.style.Fill({
            color: '#000000'
        }),
        stroke: new ol.style.Stroke({
            color: '#FFFFFF',
            width: 3.5
        })
    })
});

var PredioStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    fill: new ol.style.Fill({
        color: "rgba(0,255,255,0.1)"
    })
});

var PuntoStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgba(0,255,255,1)",

    }),
    fill: new ol.style.Fill({
        color: "rgba(0,255,255,0.3)"
    })
});
// A point marker style using a flag image as the icon.
var flagStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.2, 0.9],
        opacity: 0.75,
        scale: 0.25,
        src: './imagenes/flag.png'
    })
});
/*function styleFunction() {
    //console.log(this);
    return [
        new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255,255,255,0.4)'
            }),
            stroke: new ol.style.Stroke({
                color: '#3399CC',
                width: 1.25
            }),
            text: new ol.style.Text({
                font: '12px Calibri,sans-serif',
                fill: new ol.style.Fill({color: '#000'}),
                stroke: new ol.style.Stroke({
                    color: '#fff', width: 2
                }),
                // get the text from the feature - `this` is ol.Feature
                // and show only under certain resolution
                //text: map.getView().getZoom() > 12 ? this.get('description') : ''
                text: 'qqqqqq'
            })
        })
    ];
}*/
var alerta = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        snapToPixel: false,
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 0.8)',
            width: 3
        })
    })
});

var alertc = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        snapToPixel: false,
        stroke: new ol.style.Stroke({
            color: 'rgba(214, 147, 12, 0.8)',
            width: 3
        })
    })
});
var txt = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.4)'
    }),
    stroke: new ol.style.Stroke({
        color: '#3399CC',
        width: 1.25
    }),
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({color: '#000'}),
        stroke: new ol.style.Stroke({
            color: '#fff', width: 2
        }),
        // get the text from the feature - `this` is ol.Feature
        // and show only under certain resolution
        //text: map.getView().getZoom() > 12 ? this.get('description') : ''
        text: ''
    })
});
var street1 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/1.png'
    })
});
var street2 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/2.png'
    })
});
var street3 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/3.png'
    })
});
var street4 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/4.png'
    })
});
var street5 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/5.png'
    })
});
var street6 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],

        scale: 1,
        src: './imagenes/street/6.png'
    })
});
var street7 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/7.png'
    })
});
var street8 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/8.png'
    })
});
var street9 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/9.png'
    })
});
var street10 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/10.png'
    })
});
var street11 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/11.png'
    })
});
var street12 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/12.png'
    })
});
var street13 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/13.png'
    })
});
var street14 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/14.png'
    })
});
var street15 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/15.png'
    })
});
var street16 = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [1, 1],
        scale: 1,
        src: './imagenes/street/16.png'
    })
});
var ubicacion = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        opacity: 1,
        scale: 0.3,
        src: './imagenes/ubicacion.png'
    })
});
//AUTOCOMPLETE INITIAL
$(".direccion").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#address1").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#inputmanzanatotem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#inputbarriototem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#inputsitiototem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#inputsitiostotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#inputlocalidadtotem").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#direccion_gestor").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PlaceSelect
});
$("#cedul").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#barrio").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#comuna").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#localidad").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#manzana").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#inputmanzanatotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: manzanaSelect
});
$("#inputbarriototemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: PoligonSelect
});
$("#codigo").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#matricula").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#inputmatriculatotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#inputrefcatotemp").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#propietarios").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});
$("#input_ladomanzana").autocomplete({
    minLength: 1,
    source: addressSource,
    select: ladomanzanaSelect
});
$("#input_predioshasusos").autocomplete({
    minLength: 1,
    source: addressSource,
    select: predioshasusosSelect
});
function addressSource(requestString, responseFunc) {
    //globalstyle = "sinconsulta";
    predio.setVisible(true);
    //try{
    if (requestString.term != null){
        var querystr = requestString.term;
    //}catch (err){
    }else{
        var querystr = document.getElementById(requestString).value;
        var requestString = {val:123};
    //}
    }
    if (querystr.length === 0) {
        response([]);
        return;
    }
    var viewParamsStr = viewparamsToStr({
        query: querystr
    });
    // Set up the parameters for our WFS call to the address_autocomplete
    // web service.
    //busqueda direccion y codigo en reg
    if (requestString.val === "direccion") {
        //console.log(4);
        var tempname = "cucuta:codigo_autocompletar";
        var temp = "codigo";
    } else if ($("#direccion")["0"].value !== "" || requestString.val === 123) {
        var tempname = "cucuta:buscar_direccion_registro1";
        var temp = "direccion";
    }
    else if ($("#barrio")["0"].value !== "" /*|| $("#inputbarriototem")["0"].value !== "" || $("#inputbarriototemp")["0"].value !== ""*/) {
        var tempname = "cucuta:buscar_barrio";
        var temp = "nombre";
    }
    else if ($("#manzana")["0"].value !== "" /*|| $("#inputmanzanatotem")["0"].value !== ""*/) {
        var tempname = "cucuta:buscar_manzana";
        var temp = "codigo";
    }
     else if ($("#address1")["0"].value !== "") {
        var tempname = "cucuta:sitios_autocompletar";
        var temp = "address1";
    }
    //busqueda cod en reg 
    else if ($("#codigo")["0"].value !== "") {
        var tempname = "cucuta:buscar_cod_hac";
        var temp = "cod";//no significa que este buscando por direccion; busqueda por codigo
    }
    else if ($("#matricula")["0"].value !== "") {
        var tempname = "cucuta:buscar_matricula_reg";
        var temp = "matricula";
    } 
    
    else if ($("#propietarios")["0"].value !== "") {
        var tempname = "cucuta:buscar_propietario_reg";
        var temp = "propietario";
    } else if ($("#cedul")["0"].value !== "") {
        var tempname = "cucuta:buscar_cedula_reg";
        var temp = "cedula";
    } /*else if ($("#inputmanzanatotemp")["0"].value !== "") {
        var tempname = "cucuta:buscar_manzana";
        var temp = "codigo";
    } else if ($("#inputrefcatotemp")["0"].value !== "") {
        var tempname = "cucuta:buscar_referencia_reg";
        var temp = "referencia_cat";
    } else if ($("#matricula")["0"].value !== "" || $("#inputmatriculatotemp")["0"].value !== "") {
        var tempname = "cucuta:buscar_matricula_reg";
        var temp = "matricula";
    } else if ($("#direccion_gestor")["0"].value !== "") {
        var tempname = "cucuta:buscar_dir_gestor";
        var temp = "direcci";
    }*/ else if ($("#barrio")["0"].value !== ""/* || $("#inputbarriototem")["0"].value !== "" || $("#inputbarriototemp")["0"].value !== ""*/) {
        var tempname = "cucuta:buscar_barrio";
        var temp = "nombre";
    }/* else if ($("#comuna")["0"].value !== "") {
        var tempname = "cucuta:buscar_comuna";
        var temp = "nombre";
    } else if ($("#localidad")["0"].value !== "" || $("#inputlocalidadtotem")["0"].value !== "") {
        var tempname = "cucuta:buscar_localidad";
        var temp = "nombre";
    }*/ /* else if ($("#input_ladomanzana")["0"].value !== "") {
        var tempname = "cucuta:ladomanzana_autocompletar";
        var temp = "lado_manzanas";
    } else if ($("#input_predioshasusos")["0"].value !== "") {
        var tempname = "cucuta:predioshasusos_autocompletar";
        var temp = "referencia";
    }*/
    var tamañopantalla = screen.width>800;
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: tempname,
        outputFormat: 'application/json',
        srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };
    $.ajax({
        url: url,
        beforeSend: function () {
            if (tamañopantalla==true){
                putgif();}
                else{
                    document.getElementById("carga3").style.display = "block";  
                }
            },
        data: wfsParams,
        type: "GET",
        dataType: "json",
        success: function (data, status, xhr) {
            var geojson = new ol.source.GeoJSON({
                object: data
            });
            var arr = [];
            if (temp === "direccion") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        //label: data.features[i].properties.direccion,
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.direccion,
                        feature: data
                    });
                }
            } else if (temp === "cod") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.cod_u_terreno,
                        value: data.features[i].properties.codigo,
                        feature: data,
                        direccion: data.features[i].properties.dir
                    });
                }
            } else if (temp === "matricula") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.cod_u_terreno,
                        value: data.features[i].properties.matricula,
                        feature: data,
                        direccion: data.features[i].properties.dir
                    });
                }
            } else if (temp === "propietario") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.propietario,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "cedula") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.cedula,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else if (temp === "referencia_cat") {
                for (i = 0; i < data.features.length; i++) {
                    arr.push({
                        codigo: data.features[i].properties.codigo,
                        value: data.features[i].properties.ref_catastral,
                        feature: data,
                        direccion: data.features[i].properties.direccion
                    });
                }
            } else {
                geojson.forEachFeature(function (feat) {
                    arr.push({
                        label: feat.get(temp),
                        value: feat.get(temp),
                        feature: feat,
                        direccionoriginal: requestString.direccionoriginal
                    });
                });
            }
            if (arr.length !== 0) {
                //console.log(requestString.val);
                if (requestString.val === "direccion") {
                    //console.log(requestString);
                    var arreglado = {};
                    for (var i = 0; i < arr.length; ++i) {
                        arreglado[i] = arr[i];
                    }
                    arreglado.item = arreglado["0"];
                    //console.log(arreglado);
                    addressSelect(1, arreglado);
                }
                try {
                    responseFunc(arr);
                } catch (err) {
                    var arreglado = {};
                    arreglado.item = arr["0"];
                    try {
                        addressSelect(1, arreglado);
                    } catch (err) {
                        alert("GESSTOR INFORMA:</br></br>La información se encuentra en la base de datos alfanumérica y no en la base de datos geográfica, este caso se presenta por diferencia de vigencias de  información</br>");
                    }
                }
            } else {
                if (temp === 'direcci') {
                    codeAddress(viewParamsStr);
                } else {
                    if (tempname == "cucuta:buscar_direccion_registro1") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a la consulta en la base de datos Catastral. Por favor intente lo siguiente:</br> 1). Ingrese la dirección mediante abreviaturas, ejemplo: (calle) C 29 1C 45 ó (Avenida) A 1D 27A 80</br> 2). Obtenga una ubicación aproximada mediante el Georeferenciador:</br> <input type='image' id='indicadorgeo' name='boton_geocoder' src='imagenes/geocoder.png' onclick='busqueda(name)'></br>");
                        document.getElementById("direccion").value = "";
                        // else {}
                    } else if (tempname == "cucuta:buscar_barrio") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el nombre de Barrio Ingresado, por favor verifique que el nombre ingresado sea correcto. Ejemplo:</br></br> La Castellana</br></br>");
                        document.getElementById("barrio").value = "";
                    } else if (tempname == "cucuta:buscar_localidad") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el nombre de Localidad Ingresado, por favor verifique que el nombre ingresado corresponda a una de las 5 Localidades Existentes:</br></br>Riomar</br>Centro Historico</br>Suroccidente</br>Suroriente</br>Metropolitana</br>");
                        document.getElementById("localidad").value = "";
                    } else if (tempname == "cucuta:buscar_manzana") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código de manzana ingresado, tenga en cuenta que todos los códigos comienzan por 54001... Ejemplo:</br></br>54001010700000073</br>54001010500000406</br>54001010600000302</br>etc.</br>");
                        document.getElementById("manzana").value = "";
                    } else if (tempname == "cucuta:sitios_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el sitio de interés ingresado, por favor verifique que el nombre ingresado sea correcto. Ejemplo:</br></br>Alcaldia de Cucuta</br>Colegio Mongi</br>Clinica San Diego</br>etc.</br>");
                        document.getElementById("address1").value = "";
                    } else if (tempname == "cucuta:buscar_matricula_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código de matricula ingresado, por favor verifique que el código de matricula inmobiliario ingresado sea correcto. Ejemplo:</br></br>260-62284</br>");
                        document.getElementById("matricula").value = "";
                    } else if (tempname == "cucuta:buscar_cod_hac") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código catastral ingresado, por favor verifique que el código ingresado sea correcto. Ejemplo:</br></br>010700840021000</br>");
                        document.getElementById("codigo").value = "";
                    } else if (tempname == "cucuta:buscar_propietario_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el nombre de propietario ingresado, por favor verifique que el nombre ingresado sea correcto.</br>");
                        document.getElementById("propietarios").value = "";
                    } else if (tempname == "cucuta:buscar_cedula_reg") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el ID de propietario ingresado, por favor verifique que el ID (Cédula, Nit etc.) ingresado sea correcto.</br>");
                        document.getElementById("cedul").value = "";
                    } else if (tempname == "cucuta:ladomanzana_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información de Alineamiento Urbano con este Código Catastral, por favor verifique que el Código Catastral ingresado sea correcto. Ejemplo: </br></br>0800101010021B</br>");
                        document.getElementById("input_ladomanzana").value = "";
                    } else if (tempname == "cucuta:predioshasusos_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información de Usos Permitidos con esta referencia Catastral, por favor verifique que la referencia catastral ingresada sea correcta. Ejemplo: </br></br>010101710004000</br>");
                        document.getElementById("input_predioshasusos").value = "";
                    } /*else {
                        if (modulo !== 'totem') {
                            alert("GESSTOR INFORMA:</br></br>La información se encuentra en la base de datos alfanumérica y no en la base de datos geográfica, este caso se presenta por diferencia de vigencias de  información</br>");
                            document.getElementById("direccion").value = "";
                            document.getElementById("codigo").value = "";
                            document.getElementById("propietarios").value = "";
                            document.getElementById("cedul").value = "";
                            document.getElementById("barrio").value = "";
                            document.getElementById("matricula").value = "";
                            document.getElementById("address1").value = "";
                            document.getElementById("localidad").value = "";
                            document.getElementById("manzana").value = "";
                            document.getElementById("input_ladomanzana").value = "";
                            document.getElementById("input_predioshasusos").value = "";
                        }
                    }*/
                }
            }
        },
        error: function () {
            console.log("error");
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

function addressSelect(event, ui) {
   //console.log(ui.item.codigo);
   // document.getElementById("exp1").style.display = "none";
    document.getElementById("direccion").value = "";
   // document.getElementById("codigo").value = "";
   // document.getElementById("propietarios").value = "";
   // document.getElementById("cedul").value = "";
    //document.getElementById("barrio").value = "";
    //document.getElementById("matricula").value = "";
    document.getElementById("address1").value = "";
    //document.getElementById("localidad").value = "";
    //document.getElementById("manzana").value = "";
    //document.getElementById("input_ladomanzana").value = "";
    //document.getElementById("input_predioshasusos").value = "";
    //var select = validacionusuarios();
    var consultaregistro = new Object();
    consultaregistro.term = ui.item.codigo;
    consultaregistro.val = "direccion";
    //consultaregistro.direccionoriginal = ui.item.value;
    //consultaregistro.direccion = ui.item.direccion;
    if (ui.item.direccion) {
        consultaregistro.direccionoriginal = ui.item.direccion;
        dataprop = ui.item.feature.features["0"].properties.propietario;
    } else {
        consultaregistro.direccionoriginal = ui.item.value;
    }
    try {
        if (!ui.item.feature.features["0"].geometry) {
            //console.log(1);
            addressSource(consultaregistro);
            //console.log(consultaregistro);
            return;
        }
    } catch (err) {
        //console.log(2);
    }
  
    //var feat = ui.item.feature;
    globalstyle = "sinconsulta";
    //document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
   
    values = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSourceAlineamiento.clear();
    markerSourceAlineamiento.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    //var select = validacionusuarios();
    //console.log(modulo);
   
        predio.setVisible(true);
        /*document.getElementById("panel_atributos").style.display = "block";
         document.getElementById("tablaatributos").style.display = "block";
         document.getElementById("botonocultarpanelatributos").style.display = "block";*/
        $.ajax({
            url: url,
            success: function (data) {
                //console.log(data);
                var features = format[0].readFeatures(data);
                //console.log(format[0]);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
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
                    var codfoto = values.codigo_ant.substring(0, 17);
                    var avaluohacienda = formatNumber(values.avaluo);
                     
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
                          
                    if (values.cod_ph>='800'){
                        try {
                        var hacienda_ph = search("cucuta:hacienda_ph", ui.item.direccionoriginal);
                        var destino_h = hacienda_ph["0"]["0"];
                        var estrato_h = hacienda_ph["0"][1];
						} 
						catch (err) {
						var destino_h = "Sin Informacion";
						var estrato_h = "Sin Informacion";
						}	
						
						try {
							var avaluo = search("cucuta:avaluo2018ph",  ui.item.direccionoriginal);     
							var avaluo2018 = avaluo["0"]["0"];
							var avaluo2018 = "$" + formatNumber(avaluo2018);
							var avaluo2017p = avaluo["0"][1];
							var avaluo2017p = "$" + formatNumber(avaluo2017p); 
							var avaluo2017 = avaluo["0"][2];
							var avaluo2017 = "$" + formatNumber(avaluo2017);			   
							var avaluo2016 = avaluo["0"][3];
							var avaluo2016 = "$" + formatNumber(avaluo2016); 
							var avaluo2015 = avaluo["0"][4];
							var avaluo2015 = "$" + formatNumber(avaluo2015); 
							var areat = avaluo["0"][6]+ " m2";
							var areac = avaluo["0"][7]+ " m2";  
                           } 
							catch (err) {
                            var avaluo2018 = "Sin Informacion";
							var avaluo2017p = "Sin Informacion";
						    var avaluo2017 = "Sin Informacion";
						    var avaluo2016 = "Sin Informacion";
						    var avaluo2015 = "Sin Informacion";
                          }
													
						try {	
							var prestador_ph = search("cucuta:prestador_ph", ui.item.direccionoriginal);
							var uso_acueducto = prestador_ph["0"][0];
							var uso_alcantarillado = prestador_ph["0"][1];
							var uso_aseo = prestador_ph["0"][2];
							var emp_acued = prestador_ph["0"][3];
							var emp_alc = prestador_ph["0"][4];
							var emp_aseo = prestador_ph["0"][5];
							var estrato_acued = prestador_ph["0"][0];
							var estrato_alc = prestador_ph["0"][1];
							var estrato_aseo = prestador_ph["0"][2];
						}
						catch (err) {
                            var prestador_ph = "Sin Informacion";
							var uso_acueducto = "Sin Informacion";
							var uso_alcantarillado = "Sin Informacion";
							var uso_aseo = "Sin Informacion";
							var emp_acued = "Sin Informacion";
							var emp_alc = "Sin Informacion";
							var emp_aseo = "Sin Informacion";
							var estrato_acued = "Sin Informacion";
							var estrato_alc = "Sin Informacion";
							var estrato_aseo = "Sin Informacion";
                          }
						
			
						
                        if (uso_acueducto=='71' || uso_acueducto=='72' || uso_acueducto=='73' || uso_acueducto=='74' || uso_acueducto=='75' || uso_acueducto=='76')
                        {
                                var uso_acueducto = "Residencial";   
                        }
                        else if (uso_acueducto=='11' || uso_acueducto=='12' || uso_acueducto=='13' || uso_acueducto=='14')
                        {
                                var uso_acueducto = "Comercial";   
                        }
                        else{
                            var uso_acueducto = "Sin Informacion";
                        }
                        if (uso_alcantarillado=='71' || uso_alcantarillado=='72' || uso_alcantarillado=='73' || uso_alcantarillado=='74' || uso_alcantarillado=='75' || uso_alcantarillado=='76')
                        {
                                var uso_alcantarillado = "Residencial";   
                        }
                        else if (uso_alcantarillado=='11' || uso_alcantarillado=='12' || uso_alcantarillado=='13' || uso_alcantarillado=='14')
                        {
                                var uso_alcantarillado = "Comercial";   
                        }
                        else{
                            var uso_alcantarillado = "Sin Informacion";
                        }
                        if (uso_aseo=='71' || uso_aseo=='72' || uso_aseo=='73' || uso_aseo=='74' || uso_aseo=='75' || uso_aseo=='76')
                        {
                                var uso_aseo = "Residencial";   
                        }
                        else if (uso_aseo=='11' || uso_aseo=='12' || uso_aseo=='13' || uso_aseo=='14')
                        {
                                var uso_aseo = "Comercial";   
                        }
                        else{
                            var uso_aseo = "Sin Informacion";
                        }
                            
                    }
                    else{
                         var destino_h = values.destino_hacienda;
                         var estrato_h = values.estrato_hacienda;
                         var avaluo_h = formatNumber(values.avaluo);
                         var emp_acued = values.disp_acued;
                         var emp_alc = values.disp_alc;
                         var emp_aseo = values.disp_aseo;
                         var estrato_acued = values.estrato_acueducto;
                         var estrato_alc = values.estrato_alcantarillado;
                         var estrato_aseo = values.estrato_aseo;
                    }
                    
					try {
                     var avaluo = search("cucuta:avaluohaciendaph", ui.item.direccionoriginal);
						   var avaluo2018 = avaluo["0"]["0"];
						   var avaluo2018 = "$" + formatNumber(avaluo2018);
						   var avaluo2017p = avaluo["0"][1];
						   var avaluo2017p = "$" + formatNumber(avaluo2017p); 
						   var avaluo2017 = avaluo["0"][2];
						   var avaluo2017 = "$" + formatNumber(avaluo2017);			   
						   var avaluo2016 = avaluo["0"][3];
						   var avaluo2016 = "$" + formatNumber(avaluo2016); 
						   var avaluo2015 = avaluo["0"][4];
						   var avaluo2015 = "$" + formatNumber(avaluo2015);  
							var areat = avaluo["0"][6]+ " m2";
							var areac = avaluo["0"][7]+ " m2";					      
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
                            select[0] = "<b>Codigo Manzana</b>";
                            select[1] = "<b>Codigo Catastral Nuevo</b>";
                            select[2] = "<b>Codigo Catastral Anterior</b>";
                            select[3] = "<b>Dirección</b>";
                            select[4] = "<b>Destino Económico Hacienda</b>";
                            select[5] = "<b>Uso Acueducto</b>";
                            select[6] = "<b>Uso Alcantarillado</b>";
                            select[7] = "<b>Uso Aseo</b>";
                            select[8] = "<b>Estrato Hacienda</b>";
                            select[9] = "<b>Estrato Acueducto</b>";
                            select[10] = "<b>Estrato Alcantarillado</b>";
                            select[11] = "<b>Estrato Aseo</b>"; 
                            select[12] = "<b>Empresa de Acueducto</b>";
                            select[13] = "<b>Empresa de Alcantarillado</b>";
                            select[14] = "<b>Empresa de Aseo</b>";
                            select[15] = "<b>Avalúo Catastral 2018</b>";
							       select[16] = "<b>Avalúo Catastral 2017 modificado</b>";
							       select[17] = "<b>Avalúo Catastral 2017</b>";
							       select[18] = "<b>Avalúo Catastral 2016</b>";
							       select[19] = "<b>Avalúo Catastral 2015</b>";
							       select[20] = "<b>Area de Terreno</b>";
							       select[21] = "<b>Area Construida</b>";
							       select[22] = "<b>Barrio</b>";
                            select[23] = "<b>Fotografias</b>";
                            sel[0] = values.manzana_co;
                            sel[1] = values.codigo;
                            sel[2] = values.codigo_ant;
                            sel[3] = ui.item.direccionoriginal;
                            sel[4] = destino_h;
                            sel[5] = uso_acueducto;
                            sel[6] = uso_alcantarillado;
                            sel[7] = uso_aseo;
                            sel[8] = estrato_h;
                            sel[9] = estrato_acued;
                            sel[10] = estrato_aseo;
                            sel[11] = values.estrato_aseo;
                            sel[12] = emp_acued;
                            sel[13] = emp_alc;
                            sel[14] = emp_aseo;
					             sel[15] = avaluo2018;
							       sel[16] = avaluo2017p;
							       sel[17] = avaluo2017;
							       sel[18] = avaluo2016;
							       sel[19] = avaluo2015; 
							       sel[20] = areat; 
							       sel[21] = areac; 
							       sel[22] = values.cod_barrio;                        
                            sel[23] = document.createElement("a");
                            sel[23].id = "img1";
                            sel[23].style = "width: 30px; height: 50px;";
                            sel[23].target = "marco2";
                            sel[23].setAttribute("onclick", "open_streetview()");
                            sel[23].href = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                            imag[23] = document.createElement("img");
                            imag[23].id = "im1";
                            imag[23].className = "pequeña";
                            imag[23].src = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                            stv[23] = document.createElement("a");
                            stv[23].id = "imgstreet1";
                            stv[23].target = "marco";
                            stv[23].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                            stv[23].setAttribute("onclick", "open_streetview()");
                            ig[23] = document.createElement("img");
                            ig[23].src = "./imagenes/streetview.png";
                                              
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 23) {
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
                    document.getElementById("contenedorg").style.display = "block";
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("cpestana1").style.display = "block";
                    document.getElementById("cpestana2").style.display = "none";
                    document.getElementById("pestana1").style.backgroundColor = "#EAC102";
                    document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    
    
}

function PlaceSelect(event, ui) {
   // vias.setVisible(true);
   // document.getElementById('menusitiostotem').style.display = 'none';
   // document.getElementById('volver').style.display = 'none';
   // document.getElementById("volvertotem").style.display = "block";
   // document.getElementById("exp1").style.display = "none";
   // document.getElementById("consultas_totem").style.display = "none";
    var view = map.getView();
    var feat = ui.item.feature;
    var values = feat.values_;
    var geom = feat.getGeometry();
    var coord = values.geometry.flatCoordinates;
    //console.log(coord);
    var transf = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
    //console.log(transf);
    var transf1 = (transf[1]);
    var transf2 = (transf[0]);
    var transf = [transf[1], transf[0], 0];
    view.setCenter(geom.getFirstCoordinate());
    view.setZoom(18);
    highlight.setStyle(flagStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    var table = document.getElementById("tblatt");
    table.innerHTML = "";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.colSpan = 2;
    cell1.innerHTML = "<b>INFORMACION SITIO</b>";
    var select = [];
    var sel = [];
    var imag = [];
    var stv = [];
    var ig = [];
    select[0] = "<b>Nombre</b>";
    select[1] = "<b>Tipo</b>";
    select[2] = "<b>Street View</b>";
    sel[0] = values.address1;
    sel[1] = values.tipo;
    stv[2] = document.createElement("a");
    stv[2].id = "imgstreetsitio";
    stv[2].target = "marco";
    stv[2].href = "street_view.html?coordenadas=" + transf;
    //console.log(transf);
    stv[2].setAttribute("onclick", "open_streetview()");
    ig[2] = document.createElement("img");
    ig[2].src = "./imagenes/streetview.png";
    for (i = 0; i < select.length; i++) {
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = select[i];
        if (i === 2) {
            cell2.appendChild(stv[i]);
            stv[i].appendChild(ig[i]);
        } else {
            cell2.innerHTML = sel[i];
        }
    }
    document.getElementById("contenedorg").style.display = "block";
    document.getElementById("panel_atr").style.display = "block";
    document.getElementById("cpestana1").style.display = "block";
    document.getElementById("cpestana2").style.display = "none";
    document.getElementById("pestana1").style.backgroundColor = "#EAC102";
    document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
    document.getElementById("botonminimizar").style.display = "block";
}
function PoligonSelect(event, ui) {
    //document.getElementById("exp1").style.display = "none";
    //document.getElementById("consultas_totem").style.display = "none";
    var view = map.getView();
    var feat = ui.item.feature;
    values = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 200;
    ppExtent[2] = ppExtent[2] + 200;
    ppExtent[1] = ppExtent[1] - 200;
    ppExtent[3] = ppExtent[3] + 200;
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    //view.setZoom(16);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (globalstyle === "sinconsulta") {
        sinconsulta();
    } else {
        rangoarea(globalstyle);
    }
}
function manzanaSelect(event, ui) {
    //document.getElementById("exp1").style.display = "none";
    //document.getElementById("consultas_totem").style.display = "none";
    var view = map.getView();
    var feat = ui.item.feature;
    //console.log(feat);
    values = feat.values_.codigo;
    BarrioStyle.text_.scale_ = 1;
    BarrioStyle.text_.text_ = feat.values_.codigo;
    var geom = feat.getGeometry();
    highlight.setStyle(BarrioStyle);
    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (globalstyle === "sinconsulta") {
        sinconsulta();
    } else {
        rangoarea(globalstyle);
    }
}

function ladomanzanaSelect(event, ui) {
    document.getElementById("direccion").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("propietarios").value = "";
    document.getElementById("cedul").value = "";
    document.getElementById("barrio").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("manzana").value = "";
    document.getElementById("input_ladomanzana").value = "";
    document.getElementById("panel_atributos_predioshasusos").style.display = "none";
    document.getElementById("tablaatributospredioshasusos").style.display = "none";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    //document.getElementById("panel_atributos_alineamiento").style.display = "block";
    //document.getElementById("tablaatributosalineamiento").style.display = "block";
    //document.getElementById("botonminimizar").style.display = "block";  
    //document.getElementById("botonmaximizarhasusos").style.display = "none";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourceAlineamiento = highlightfeatures.getSource();
    markerSourceAlineamiento.clear();
    markerSourceAlineamiento.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var ladoman = feat.values_.lado_manzanas;
    predio.setVisible(true);
    $.ajax({
        success: function (data) {
            var table = document.getElementById("tblatt");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.colSpan = 2;
            cell1.innerHTML = "<b>LADO DE MANZANA</b>";
            var select = [];
            var sel = [];
            select[0] = "<b>Codigo Manzana</b>";
            select[1] = "<b>Lado de Manzana</b>";
            select[2] = "<b>Perfil</b>";
            select[3] = "<b>Nombre de Perfil</b>";
            select[4] = "<b>Lb_Lc</b>";
            sel[0] = feat.values_.codigo;
            sel[1] = feat.values_.lado_manzanas;
            sel[2] = feat.values_.perfil;
            sel[3] = feat.values_.nom_perfil;
            sel[4] = feat.values_.lb_lc;
            for (i = 0; i < select.length; i++) {
                row = table.insertRow(i + 1);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = select[i];
                if (i === 6) {
                    cell2.appendChild(sel[i]);
                    cell2.appendChild(stv[i]);
                    ;
                    stv[i].appendChild(ig[i]);
                } else {
                    cell2.innerHTML = sel[i];
                }
            }
            document.getElementById("panel_atr").style.display = "block";
            document.getElementById("botonminimizar").style.display = "block";
        }
    });

}

function predioshasusosSelect(event, ui) {
    document.getElementById("direccion").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("propietarios").value = "";
    document.getElementById("cedul").value = "";
    document.getElementById("barrio").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("address1").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("manzana").value = "";
    document.getElementById("input_ladomanzana").value = "";
    document.getElementById("panel_atributos").style.display = "none";
    document.getElementById("tablaatributos").style.display = "none";
    document.getElementById("panel_atributos_alineamiento").style.display = "none";
    document.getElementById("tablaatributosalineamiento").style.display = "none";
    document.getElementById("botonmaximizar").style.display = "none";
    document.getElementById('mensaje').style.display = 'none';
    predio.setVisible(true);
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    highlightfeatures.setStyle(PredioStyle);
    var markerSourcehasusos = highlightfeatures.getSource();
    markerSourcehasusos.clear();
    markerSourcehasusos.addFeature(feat);
    ppExtent = geom.getExtent();
    ppExtent[0] = ppExtent[0] - 40;
    ppExtent[2] = ppExtent[2] + 40;
    ppExtent[1] = ppExtent[1] - 40;
    ppExtent[3] = ppExtent[3] + 40;
    var featureExtent = geom.getExtent();
    var featureCenter = ol.extent.getCenter(ppExtent);
    view.setCenter(featureCenter);
    view.fitExtent(ppExtent, map.getSize());
    var viewResolution = map.getView().getResolution();
    var url5 = wmsSource[0].getGetFeatureInfoUrl(featureCenter, viewResolution, map.getView().getProjection(), {
        'INFO_FORMAT': infoFormat
    });
    if (url5) {
        predio.setVisible(true);
        $.ajax({
            url: url5,
            success: function (data) {
                var features = format[0].readFeatures(data);
                if (features && features.length >= 1 && features[0]) {
                    var feature = features[0];
                    var values = feature.getProperties();
                    var referencia = values.referencia;
                    var grupo = search("cucuta:PrediosHasUsosReferencia", referencia);
                    var table = document.getElementById("tblatt");
                    table.innerHTML = "";
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    cell1.colSpan = 2;
                    cell1.innerHTML = "<b>INFORMACION USOS</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var tablahasusos = ("<table max-width=20 border=1>");
                    for (i = 0; i < grupo.length; i++) {
                        tablahasusos += ("<tr>");
                        tablahasusos += ("<td><b>" + grupo[i] + "</b></td>");
                        tablahasusos += ("</tr>");
                    }
                    tablahasusos += ("</table>");
                    select[0] = "<b>Referencia Catastral</b>";
                    select[1] = "<b>Usos Permitidos</b>";
                    select[2] = "<b>Street View</b>";
                    sel[0] = values.referencia;
                    sel[1] = tablahasusos;
                    stv[2] = document.createElement("a");
                    stv[2].id = "imgstreet1";
                    stv[2].target = "marco";
                    stv[2].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[2].setAttribute("onclick", "open_streetview()");
                    ig[2] = document.createElement("img");
                    ig[2].src = "./imagenes/streetview.png";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 2) {
                            cell2.appendChild(stv[i]);
                            stv[i].appendChild(ig[i]);
                        } else {
                            cell2.innerHTML = sel[i];
                        }
                    }
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    }
}

function propietariosSelect(event, ui) {
    dataprop = ui.item.feature.features["0"].properties.propietario;
    var cantprop = search("cucuta:CantidadPropietarios", dataprop);
    if (cantprop.length > 1) {
        alert("mas de uno");
    } else {
        addressSelect();
    }
}
