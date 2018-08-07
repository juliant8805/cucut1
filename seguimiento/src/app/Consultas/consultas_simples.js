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



var gpsStyle = new ol.style.Style({
    image: new ol.style.Circle({
          radius: 10,
          fill: new ol.style.Fill({
            color: [51, 153, 204, 1],
          }),
          stroke: new ol.style.Stroke({
            color: [255, 255, 255, 0.7],
            width: 6
           
          })
       
        })
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
            }  else if (temp === "referencia_cat") {
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
                    }  else if (tempname == "cucuta:sitios_autocompletar") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el sitio de interés ingresado, por favor verifique que el nombre ingresado sea correcto. Ejemplo:</br></br>Alcaldia de Cucuta</br>Colegio Mongi</br>Clinica San Diego</br>etc.</br>");
                        document.getElementById("address1").value = "";
                    }  else if (tempname == "cucuta:buscar_cod_hac") {
                        alert("GESSTOR INFORMA:</br></br> No se encuentra información geográfica asociada a el código catastral ingresado, por favor verifique que el código ingresado sea correcto. Ejemplo:</br></br>010700840021000</br>");
                        document.getElementById("codigo").value = "";
                    }  /*else {
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
   document.getElementById("direccion").value = "";
   document.getElementById("address1").value = ""; 
    var consultaregistro = new Object();
    consultaregistro.term = ui.item.codigo;
    consultaregistro.val = "direccion";
   
    if (ui.item.direccion) {
        consultaregistro.direccionoriginal = ui.item.direccion;
        dataprop = ui.item.feature.features["0"].properties.propietario;
    } else {
        consultaregistro.direccionoriginal = ui.item.value;
    }
    try {
        if (!ui.item.feature.features["0"].geometry) {
            
            addressSource(consultaregistro);
      
            return;
        }
    } catch (err) {
        //console.log(2);
    }
  
    globalstyle = "sinconsulta";
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
                    cell1.innerHTML = "<b>INFORMACION DEL PREDIO</b>";
                    var select = [];
                    var sel = [];
                    var imag = [];
                    var stv = [];
                    var ig = [];
                    var codfoto = values.codigo_ant.substring(0, 17);
                    var avaluohacienda = formatNumber(values.avaluo);
                     
                        
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
                            cell1.style = "background-color: #3B5998; color:white; text-align:center;";
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
                            sel[1] = ui.item.direccionoriginal;                          
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
                                                       
                           
                    }
                            
                            
                
                                              
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
                    document.getElementById("contenedorg").style.display = "block";
                    document.getElementById("panel_atr").style.display = "block";
                    document.getElementById("botonminimizar").style.display = "block";
                }
            }
        });
    
    
}

function PlaceSelect(event, ui) {
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
    //select[2] = "<b>Street View</b>";
    sel[0] = values.address1;
    sel[1] = values.tipo;
    //stv[2] = document.createElement("a");
    //stv[2].id = "imgstreetsitio";
    //stv[2].target = "marco";
    //stv[2].href = "street_view.html?coordenadas=" + transf;
    //console.log(transf);
    //stv[2].setAttribute("onclick", "open_streetview()");
    //ig[2] = document.createElement("img");
    //ig[2].src = "./imagenes/streetview.png";
    for (i = 0; i < select.length; i++) {
        row = table.insertRow(i + 1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = select[i];
        /*if (i === 2) {
            cell2.appendChild(stv[i]);
            stv[i].appendChild(ig[i]);
        } else {*/
            cell2.innerHTML = sel[i];
        //}
    }
    document.getElementById("contenedorg").style.display = "block";
    document.getElementById("panel_atr").style.display = "block";
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
    var view = map.getView();
    var feat = ui.item.feature;
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



