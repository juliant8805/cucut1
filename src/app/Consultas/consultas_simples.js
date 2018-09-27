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
var PredioDebe = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: "rgb(255, 0, 0, 1)",
        lineDash: null,
        lineCap: 'butt',
        lineJoin: 'miter',
        width: 3
    }),
    fill: new ol.style.Fill({
        color: "rgb(255, 0, 0, 0.1)"
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
    if (requestString.term !== null && requestString.term !== undefined) {
        var querystr = requestString.term;
        //}catch (err){
    } else {
        var querystr = document.getElementById(requestString).value;
        var requestString = {val: 123};
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
    } else if ($("#direccion")["0"].value !== "" || $("#inputdirecciontotem")["0"].value !== "" || requestString.val === 123) {
        var tempname = "cucuta:buscar_direccion_registro1";
        var temp = "direccion";
    } else if ($("#barrio")["0"].value !== "" || $("#inputbarriototem")["0"].value !== ""/* || $("#inputbarriototemp")["0"].value !== ""*/) {
        var tempname = "cucuta:buscar_barrio";
        var temp = "nombre";
    } else if ($("#manzana")["0"].value !== "" || $("#inputmanzanatotem")["0"].value !== "") {
        var tempname = "cucuta:buscar_manzana";
        var temp = "codigo";
    } else if ($("#address1")["0"].value !== "" || $("#inputsitiototem")["0"].value !== "") {
        var tempname = "cucuta:sitios_autocompletar";
        var temp = "address1";
    }
    //busqueda cod en reg 
    else if ($("#codigo")["0"].value !== "") {
        var tempname = "cucuta:buscar_cod_hac";
        var temp = "cod";//no significa que este buscando por direccion; busqueda por codigo
    } else if ($("#matricula")["0"].value !== "") {
        var tempname = "cucuta:buscar_matricula_reg";
        var temp = "matricula";
    } else if ($("#propietarios")["0"].value !== "") {
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
    var tamañopantalla = screen.width > 800;
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
            if (tamañopantalla == true) {
                putgif();
            } else {
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
                        cod: data.features[i].properties.cod,
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
                    //console.log(arr["0"].value);
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
                        direccionoriginal: requestString.direccionoriginal,
                        codigooriginal: requestString.codigooriginal
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
                    }
                }
            }
        },
        error: function () {
            console.log("error");
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

function addressSelect(event, ui) {
    document.getElementById("direccion").value = "";
    document.getElementById("address1").value = "";
    var consultaregistro = new Object();
    consultaregistro.term = ui.item.codigo;
    consultaregistro.val = "direccion";
    consultaregistro.codig = ui.item.value;
    //var consultaregistro2 = new Object();
    // consultaregistro2.term = ui.item.codigo;
    //consultaregistro2.val = "codigo";
    if (ui.item.direccion) {
        consultaregistro.direccionoriginal = ui.item.direccion;
        consultaregistro.codigooriginal = ui.item.value;
        dataprop = ui.item.feature.features["0"].properties.propietario;
    } else {
        consultaregistro.codigooriginal = ui.item.cod;
        consultaregistro.direccionoriginal = ui.item.value;
    }
    try {
        if (!ui.item.feature.features["0"].geometry) {
            //console.log(1);
            addressSource(consultaregistro);
            return;
        }
    } catch (err) {
        //console.log(2);
    }

    globalstyle = "sinconsulta";
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

    predio.setVisible(true);
    $.ajax({
        url: url,
        success: function (data) {
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
                cell1.innerHTML = "<H5><b>INFORMACION DEL PREDIO</b></H5>";
                var select = [];
                var sel = [];
                var imag = [];
                var stv = [];
                var ig = [];
                var codfoto = values.codigo_ant.substring(0, 17);
                var avaluohacienda = formatNumber(values.avaluo);

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

                if (values.cod_ph >= '800') {
                    try {
                        var hacienda_ph = search("cucuta:hacienda_ph", ui.item.direccionoriginal);
                        var destino_h = hacienda_ph["0"]["0"];
                        var estrato_h = hacienda_ph["0"][1];
                    } catch (err) {
                        var destino_h = "Sin Informacion";
                        var estrato_h = "Sin Informacion";
                    }

                    try {
                        var avaluo = search("cucuta:avaluo2018ph", ui.item.direccionoriginal);
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
                        var areat = avaluo["0"][6] + " m2";
                        var areac = avaluo["0"][7] + " m2";
                    } catch (err) {
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
                    } catch (err) {
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



                    if (uso_acueducto == '71' || uso_acueducto == '72' || uso_acueducto == '73' || uso_acueducto == '74' || uso_acueducto == '75' || uso_acueducto == '76')
                    {
                        var uso_acueducto = "Residencial";
                    } else if (uso_acueducto == '11' || uso_acueducto == '12' || uso_acueducto == '13' || uso_acueducto == '14')
                    {
                        var uso_acueducto = "Comercial";
                    } else {
                        var uso_acueducto = "Sin Informacion";
                    }
                    if (uso_alcantarillado == '71' || uso_alcantarillado == '72' || uso_alcantarillado == '73' || uso_alcantarillado == '74' || uso_alcantarillado == '75' || uso_alcantarillado == '76')
                    {
                        var uso_alcantarillado = "Residencial";
                    } else if (uso_alcantarillado == '11' || uso_alcantarillado == '12' || uso_alcantarillado == '13' || uso_alcantarillado == '14')
                    {
                        var uso_alcantarillado = "Comercial";
                    } else {
                        var uso_alcantarillado = "Sin Informacion";
                    }
                    if (uso_aseo == '71' || uso_aseo == '72' || uso_aseo == '73' || uso_aseo == '74' || uso_aseo == '75' || uso_aseo == '76')
                    {
                        var uso_aseo = "Residencial";
                    } else if (uso_aseo == '11' || uso_aseo == '12' || uso_aseo == '13' || uso_aseo == '14')
                    {
                        var uso_aseo = "Comercial";
                    } else {
                        var uso_aseo = "Sin Informacion";
                    }

                } else {
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

                var simplestabla = search("cucuta:simplestabla", ui.item.codigooriginal);


                try {
                    var avaluo = search("cucuta:avaluohaciendaph", ui.item.direccionoriginal);
                    var avaluo2018 = simplestabla["0"][3];
                    var avaluo2018 = "$" + formatNumber(avaluo2018);
                    var avaluo2017p = avaluo["0"][1];
                    var avaluo2017p = "$" + formatNumber(avaluo2017p);
                    var avaluo2017 = avaluo["0"][2];
                    var avaluo2017 = "$" + formatNumber(avaluo2017);
                    var avaluo2016 = avaluo["0"][3];
                    var avaluo2016 = "$" + formatNumber(avaluo2016);
                    var avaluo2015 = avaluo["0"][4];
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
                    var matricula = search("cucuta:consultamatricula", ui.item.codigooriginal);

                } catch (err) {
                    var matricula = "Sin Informacion";

                }
                try {
                    var cod_nacion = search("cucuta:cod_nacion", ui.item.direccionoriginal);

                } catch (err) {
                    var cod_nacion = "Sin Informacion";

                }
                if (tipoUsuario === "Catastro") {
                    select[0] = "<b>Codigo Manzana</b>";
                    select[1] = "<b>Codigo Catastral Nuevo</b>";
                    select[2] = "<b>Codigo Catastral Anterior</b>";
                    select[3] = "<b>Matricula Inmobiliaria</b>";
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
                    sel[1] = cod_nacion["0"]["0"];
                    sel[2] = ui.item.codigooriginal;
                    sel[3] = matricula;
                    sel[4] = ui.item.direccionoriginal;
                    sel[5] = simplestabla["0"]["0"];
                    sel[6] = uso_acueducto;
                    sel[7] = uso_alcantarillado;
                    sel[8] = uso_aseo;
                    sel[9] = simplestabla["0"][5];
                    sel[10] = estrato_acued;
                    sel[11] = estrato_aseo;
                    sel[12] = values.estrato_aseo;
                    sel[13] = emp_acued;
                    sel[14] = emp_alc;
                    sel[15] = emp_aseo;
                    sel[16] = avaluo2018;
                    sel[17] = simplestabla["0"][1] + "m2";
                    sel[18] = simplestabla["0"][2] + "m2";
                    sel[19] = values.cod_barrio;
                    sel[20] = document.createElement("a");
                    sel[20].id = "img1";
                    sel[20].style = "width: 30px; height: 50px;";
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

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 20) {
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
                //totem
                else if (tipoUsuario === "Totem") {
                    //select[0] = "<b>Codigo Catastral Nuevo</b>";
                    select[0] = "<b>Codigo Catastral</b>";
                    select[1] = "<b>Matricula Inmobiliaria</b>";
                    select[2] = "<b>Dirección</b>";
                    select[3] = "<b>Deuda</b>";
                    /*select[5] = "<b>Uso Alcantarillado</b>";sel[0] = "<FONT SIZE=2 color='red'><b>POR PAGAR</b></font>";
                     select[6] = "<b>Uso Aseo</b>";
                     select[7] = "<b>Estrato Hacienda</b>";
                     select[8] = "<b>Estrato Acueducto</b>";
                     select[9] = "<b>Estrato Alcantarillado</b>";
                     select[10] = "<b>Estrato Aseo</b>";*/
                    select[4] = "<b>Destino Económico</b>";
                    select[5] = "<b>Avalúo Catastral 2018</b>";
                    select[6] = "<b>Area de Terreno</b>";
                    select[7] = "<b>Area Construida</b>";
                    select[8] = "<b>Barrio</b>";
                    select[8] = "<b>Codigo Postal</b>";
                    select[10] = "<b>Cuadrante CAI</b>";
                    select[11] = "<b>Nombre CAI</b>";
                    select[12] = "<b>Telefono CAI</b>";
                    select[13] = "<b>Fotografias</b>";
                    //sel[0] = cod_nacion["0"]["0"];
                    sel[0] = ui.item.codigooriginal;
                    sel[1] = matricula;
                    sel[2] = ui.item.direccionoriginal;
                    if (values.deuda_2018 > 0) {
                        sel[3] = "<FONT SIZE=2 color='red'><b>POR PAGAR</b></font>";
                    } else {
                        sel[3] = "<FONT SIZE=2 color='green'><b>NO POSEE DEUDA CON EL MUNICIPIO</b></font>";
                    }
                    sel[4] = simplestabla["0"]["0"];
                    /*sel[4] = uso_acueducto;
                     sel[5] = uso_alcantarillado;
                     sel[6] = uso_aseo;
                     sel[7] = simplestabla["0"][5];
                     sel[8] = estrato_acued;
                     sel[9] = estrato_aseo;
                     sel[10] = values.estrato_aseo;*/
                    sel[11] = avaluo2018;
                    sel[12] = simplestabla["0"][1] + "m2";
                    sel[13] = simplestabla["0"][2] + "m2";
                    sel[14] = values.cod_barrio;
                    sel[15] = values.cod_postal;
                    sel[16] = values.cuadrante;
                    sel[17] = values.nombre_cai;
                    sel[18] = values.telefono;
                    sel[19] = document.createElement("a");
                    sel[19].id = "img1";
                    sel[19].style = "width: 30px; height: 50px;";
                    sel[19].target = "marco2";
                    sel[19].setAttribute("onclick", "open_streetview()");
                    sel[19].href = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                    imag[19] = document.createElement("img");
                    imag[19].id = "im1";
                    imag[19].className = "pequeña";
                    imag[19].src = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                    stv[19] = document.createElement("a");
                    stv[19].id = "imgstreet1";
                    stv[19].target = "marco";
                    stv[19].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[19].setAttribute("onclick", "open_streetview()");
                    ig[19] = document.createElement("img");
                    ig[19].src = "./imagenes/streetview.png";
                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 19) {
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
                    try {
                        document.getElementById("tablaP").deleteRow(0);
                    } catch (err) {
                    }
                    var fila = "<tr><td><H5><b>IMPRIMIR FACTURA</b></H5></td><td>";
                    var btn = document.createElement("TR");
                    btn.innerHTML = fila;
                    document.getElementById("tablaP").value = sel[0];
                    document.getElementById("tablaP").setAttribute("onclick", "factura(this.value)");
                    document.getElementById("tablaP").appendChild(btn);
                    document.getElementById("contenedorg").style.display = "block";
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("cpestana1").style.display = "block";
                    document.getElementById("pestana2").style.display = "none";
                    document.getElementById("cpestana2").style.display = "none";
                    document.getElementById("pestana1").style.backgroundColor = "#EAC102";
                    document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
                    document.getElementById("botonminimizar").style.display = "block";
                }

                //planeacion

                else if (tipoUsuario === "Planeacion") {
                    try {
                        var riesgo = search("cucuta:buscar_riesgo", ui.item.codigooriginal);
                        var riesgo = riesgo["0"]["0"];
                    } catch (err) {
                        var riesgo = "Sin Informacion";
                    }
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
                    select[16] = "<b>Area de Terreno</b>";
                    select[17] = "<b>Area Construida</b>";
                    select[18] = "<b>Uso del Suelo Según Acuerdo</b>";
                    select[19] = "<b>Uso Actual del Suelo Urbano</b>";
                    select[20] = "<b>Suelo de Protección</b>";
                    select[21] = "<b>Conflictos de Uso Urbano</b>";
                    select[22] = "<b>Tratamiento del Suelo</b>";
                    select[23] = "<b>Riesgo Remoción</b>";
                    select[24] = "<b>Barrio</b>";
                    select[25] = "<b>Fotografias</b>";
                    sel[0] = values.manzana_co;
                    sel[1] = cod_nacion["0"]["0"];
                    sel[2] = ui.item.codigooriginal;
                    sel[3] = matricula;
                    sel[4] = ui.item.direccionoriginal;
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
                    sel[16] = simplestabla["0"][1] + "m2";
                    sel[17] = simplestabla["0"][2] + "m2";
                    sel[18] = values.uso_del_suelo_segun_acuerdo;
                    sel[19] = values.uso_actual_del_suelo_urbano;
                    sel[20] = values.suelo_de_proteccion;
                    sel[21] = values.conflictos_de_uso_urbano;
                    sel[22] = values.tratamiento_del_suelo;
                    sel[23] = riesgo;
                    sel[24] = values.cod_barrio;
                    sel[25] = document.createElement("a");
                    sel[25].id = "img1";
                    sel[25].target = "marco2";
                    sel[25].setAttribute("onclick", "open_streetview()");
                    sel[25].href = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                    imag[25] = document.createElement("img");
                    imag[25].id = "im1";
                    imag[25].className = "pequeña";
                    imag[25].src = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                    stv[25] = document.createElement("a");
                    stv[25].id = "imgstreet1";
                    stv[25].target = "marco";
                    stv[25].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[25].setAttribute("onclick", "open_streetview()");
                    ig[25] = document.createElement("img");
                    ig[25].src = "./imagenes/streetview.png";

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 25) {
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

                //Hacienda
                else if (tipoUsuario === "Hacienda") {
                    document.getElementById("tblatt").style.visibility = "visible";
                    document.getElementById("panel_atr").style.height = "auto";
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
                        //HistoricoAbonos
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
                    cell1.innerHTML = "<H5><b>INFORMACION DEL PREDIO PH</b></H5>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var arregloDeSubCadenas = enviarRef(eval("'" + ui.item.codigooriginal.toString() + "'"));
                    select[0] = "<b>Codigo Catastral</b>";
                    select[1] = "<b>Nombre del Propietario</b>";
                    select[2] = "<b>Dirección</b>";
                    select[3] = "<b>Destino</b>";
                    select[4] = "<b>Matricula</b>";
                    select[5] = "<b>Area de Terreno</b>";
                    select[6] = "<b>Area de Construcción</b>";
                    select[7] = "<b>Avaluo</b>";
                    select[8] = "<b>Estrato</b>";
                    select[9] = "<b>Clase de Predio</b>";
                    select[10] = "<b>Tipo de Predio</b>";
                    select[11] = "<b>Fotografias</b>";
                    sel[0] = arregloDeSubCadenas[0][5];
                    sel[1] = arregloDeSubCadenas[0][7];
                    sel[2] = arregloDeSubCadenas[0][6];
                    sel[3] = arregloDeSubCadenas[0][4];
                    sel[4] = matricula;
                    sel[5] = Intl.NumberFormat().format(arregloDeSubCadenas[0][1]) + " M2";
                    sel[6] = simplestabla["0"][2] + " M2";
                    sel[7] = "$" + Intl.NumberFormat().format(arregloDeSubCadenas[0][2]);
                    sel[8] = arregloDeSubCadenas[0][9];
                    sel[9] = arregloDeSubCadenas[0][3];
                    sel[10] = arregloDeSubCadenas[0][8];
                    sel[11] = "<b>Fotografias</b>";
                    sel[11] = document.createElement("a");
                    sel[11].id = "img1";
                    sel[11].target = "marco2";
                    sel[11].setAttribute("onclick", "open_streetview()");
                    sel[11].href = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                    imag[11] = document.createElement("img");
                    imag[11].id = "im1";
                    imag[11].className = "pequeña";
                    imag[11].src = "http://www.ideepcucuta.com/fotografias/" + values.codigo_ant + ".jpg";
                    stv[11] = document.createElement("a");
                    stv[11].id = "imgstreet1";
                    stv[11].target = "marco";
                    stv[11].href = "street_view.html?coordenadas=" + values.geom.flatCoordinates;
                    stv[11].setAttribute("onclick", "open_streetview()");
                    ig[11] = document.createElement("img");
                    ig[11].src = "./imagenes/streetview.png";
                    var campos = 11;
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
                    if (arregloDeSubCadenas[1].length > 1) {
                        highlightfeatures.setStyle(PredioDebe);
                    } else {
                        highlightfeatures.setStyle(PredioStyle);
                    }
                } else if (tipoUsuario === "Demo") {
                    try {
                        var riesgo = search("cucuta:buscar_riesgo", ui.item.codigooriginal);
                        var riesgo = riesgo["0"]["0"];
                    } catch (err) {
                        var riesgo = "Sin Informacion";
                    }
                    select[0] = "<b>Codigo Manzana</b>";
                    select[1] = "<b>Codigo Catastral Nuevo</b>";
                    select[2] = "<b>Codigo Catastral Anterior</b>";
                    select[3] = "<b>Dirección</b>";
                    select[4] = "<b>Zonas de Actividad</b>";
                    select[5] = "<b>Áreas de Uso</b>";
                    select[6] = "<b>Tratamiento del Suelo</b>";
                    select[7] = "<b>Nombre Área</b>";
                    select[8] = "<b>Barrio</b>";
                    select[9] = "<b>Fotografias</b>";
                    sel[0] = values.manzana_co;
                    sel[1] = cod_nacion["0"]["0"];
                    sel[2] = ui.item.codigooriginal;
                    sel[3] = ui.item.direccionoriginal;
                    sel[4] = values.zonas_actividad;
                    sel[5] = values.areas_uso;
                    sel[6] = values.tratamiento_del_suelo;
                    sel[7] = values.nombre_area;
                    sel[8] = values.cod_barrio;
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

                    for (i = 0; i < select.length; i++) {
                        row = table.insertRow(i + 1);
                        cell1 = row.insertCell(0);
                        cell2 = row.insertCell(1);
                        cell1.innerHTML = select[i];
                        if (i === 9) {
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
            document.getElementById("contenedorg").style.display = "block";
            document.getElementById("panel_atr").style.display = "block";
            document.getElementById("cpestana1").style.display = "block";
            document.getElementById("cpestana2").style.display = "none";
            document.getElementById("pestana1").style.backgroundColor = "#EAC102";
            document.getElementById("pestana2").style.backgroundColor = "#A9A9A9";
            document.getElementById("botonminimizar").style.display = "block";
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
    document.getElementById("panel_atr2").style.visibility = "hidden";
    document.getElementById("panel_atr2").style.height = "0px";
    document.getElementById("tablaP").style.visibility = "hidden";
    document.getElementById("tablaP").style.height = "0px";
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.colSpan = 2;
    cell1.innerHTML = "<H5><b>INFORMACION DEL SITIO</b></H5>";
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
    if (arregloDeSubCadenas[1].length > 1) {
        highlightfeatures.setStyle(PredioDebe);
    } else {
        highlightfeatures.setStyle(PredioStyle);
    }
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
                    cell1.innerHTML = "<H5><b>INFORMACION USOS</b></H5>";
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
