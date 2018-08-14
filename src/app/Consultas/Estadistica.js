function estdistica(select, titulo, param, totales, id) {
    if (totales === null) {
        alert("No existen predios dentro de este poligono");
        document.getElementById("statistics").style.display = "none";
    } else {
        document.getElementById("contenedorg").style.display = "block";
        document.getElementById("statistics").style.display = "block";
        document.getElementById("excel").style.display = "block";
        document.getElementById("pie").style.display = "block";
        document.getElementById("pie").value = titulo;
        document.getElementById("barrass").value = titulo;
        document.getElementById("cpestana2").style.display = "block";
        document.getElementById("cpestana1").style.display = "none";
        document.getElementById("pestana2").style.backgroundColor = "#EAC102";
        document.getElementById("pestana1").style.backgroundColor = "#A9A9A9";
        //document.getElementById("botonocultarstatistics").style.display = "block";
        //document.getElementById("panel_atributos").style.display = "none";
        //document.getElementById("tablaatributos").style.display = "none";
        //document.getElementById("botonmostrarpanelatributos").style.display = "none";
        // document.getElementById("botonocultarpanelatributos").style.display = "none";  
        var color = new Array(param.length);
        var dat = new Array(param.length);
        for (i = 0; i < param.length; i++) {
            if (param[i][0] === 'PH') {
                color[i] = '#A3FF73';
            } else if (param[i][0] === 'NPH') {
                color[i] = '#6699CD';
            } else if (param[i][0] === 'Est. Coincidentes') {
                color[i] = '#7CEB98';
            } else if (param[i][0] === 'Est. Prestador Mas Alto') {
                color[i] = '#FF8A8A';
            } else if (param[i][0] === 'Est. Prestador Mas Bajo') {
                color[i] = '#A5A5FF';
            } else if (param[i][0] === 'Especial o Sin Inf.') {
                color[i] = '#a2a0a3';
            } else if (param[i][0] === 'AGUAS KPITAL') {
                color[i] = '#BED2FF';
            }/*else if(param[i][0]==='Sin Prestador de Acueducto'){
             color[i]='#FF8A8A';
             }*/else if (param[i][0] === 'Existe Prestador de Alcantarillado') {
                color[i] = '#9999FF';
            }/*else if(param[i][0]==='Sin Prestador de Alcantarillado'){
             color[i]='#FF8A8A';
             }*/else if (param[i][0] === 'Existe Prestador de Aseo') {
                color[i] = '#9999FF';
            }/*else if(param[i][0]==='Sin Prestador de Aseo'){
             color[i]='#FF8A8A';
             }*/else if (param[i][0] === 'PROACTIVA') {
                color[i] = '#A3FF73';
            } else if (param[i][0] === 'ASEO URBANO') {
                color[i] = '#ffff4c';
            } else if (param[i][0] === 'Sin Información de Prestador') {
                color[i] = '#8C8C8C';
            } else if (param[i][0] === 'Sin Comparacion') {
                color[i] = '#737373';
            } else if (param[i][0] === 'Sin Informacion') {
                color[i] = '#999999';
            } else if (param[i][0] === 'Uso Coincidente') {
                color[i] = '#7CEB98';
            } else if (param[i][0] === 'P.Comercial-D.Residencial') {
                color[i] = '#FF0000';
            } else if (param[i][0] === 'P.Residencial-D.Comercial') {
                color[i] = '#ffff7f';
            } else if (param[i][0] === 'Exentos 2016') {
                color[i] = '#FFFF00';
            } else if (param[i][0] === 'Exentos 2017') {
                color[i] = '#FF0000';
            } else if (param[i][0] === 'No Exentos') {
                color[i] = '#999999';
            } else if (param[i][0] === '0-20 millones') {
                color[i] = '#7CEB98';
            } else if (param[i][0] === '20-50 millones') {
                color[i] = '#EDEF85';
            } else if (param[i][0] === '50-100 millones') {
                color[i] = '#FFBBFF';
            } else if (param[i][0] === '100-500 millones') {
                color[i] = '#FF8A8A';
            } else if (param[i][0] === 'mayor a 500 millones') {
                color[i] = '#9999FF';
            } else if (param[i][0] === 'FRANJA 1') {
                color[i] = '#FF0000';
            } else if (param[i][0] === 'FRANJA 2') {
                color[i] = '#FF7F7F';
            } else if (param[i][0] === 'FRANJA 3') {
                color[i] = '#FFBEBE';
            } else if (param[i][0] === 'FRANJA 4') {
                color[i] = '#F5CA7A';
            } else if (param[i][0] === 'FRANJA 5') {
                color[i] = '#CDF57A';
            } else if (param[i][0] === 'FRANJA 6') {
                color[i] = '#CDCD66';
            } else if (param[i][0] === 'FRANJA 7') {
                color[i] = '#A3FF73';
            } else if (param[i][0] === 'FRANJA 8') {
                color[i] = '#89CD66';
            } else if (param[i][0] === 'FRANJA 9') {
                color[i] = '#66CDAB';
            } else if (param[i][0] === 'FRANJA 10') {
                color[i] = '#6699CD';
            } else if (param[i][0] === 'FRANJA 11') {
                color[i] = '#C29ED7';
            } else if (param[i][0] === 'FRANJA 12') {
                color[i] = '#FFBEE8';
            } else if (param[i][0] === 'FRANJA 13') {
                color[i] = '#BED2FF';
            } else if (param[i][0] === 'FRANJA 14') {
                color[i] = '#D3FFBE';
            } else if (param[i][0] === 'FRANJA 15') {
                color[i] = '#FFEBBE';
            } else if (param[i][0] === 'VIG2015') {
                color[i] = '#DDCDBF';
            } else if (param[i][0] === 'VIG2016') {
                color[i] = '#E54B01';
            } else if (param[i][0] === 'VIG2017') {
                color[i] = '#4CE801';
            } else if (param[i][0] === 'VIG2018') {
                color[i] = '#8401A7';
            } else if (param[i][0] === 'PAGO PREDIAL A TIEMPO (2017)') {
                color[i] = '#A3FF73';
            } else if (param[i][0] === 'NO PAGO A TIEMPO (2017)') {
                color[i] = '#FF6666';
            } else if (param[i][0] === 'REALIZO PAGO PREDIAL (2018)') {
                color[i] = '#A3FF73';
            } else if (param[i][0] === 'NO HA REALIZADO PAGO PREDIAL (2018)') {
                color[i] = '#FF6666';
            } else if (param[i][0] === '0-5%') {
                color[i] = '#7CEB98';
            } else if (param[i][0] === '5-10%') {
                color[i] = '#EDEF85';
            } else if (param[i][0] === '>10%') {
                color[i] = '#FF0000';
            } else if (param[i][0] === 'Decrecimiento') {
                color[i] = '#FF0000';
            } else if (param[i][0] === 'Crecimiento Atipico') {
                color[i] = '#EDEF85';
            } else if (param[i][0] === 'Crecimiento Esperado') {
                color[i] = '#BFBFBF';
            } else if (param[i][0] === 'Predios Municipio') {
                color[i] = '#F05015';
            } else if (param[i][0] === 'Otro Propietario') {
                color[i] = '#7CEB98';
            } else if (param[i][0] === 'Estrato 1') {
                color[i] = '#F9A8A5';
            } else if (param[i][0] === 'Estrato 2') {
                color[i] = '#FFFAA4';
            } else if (param[i][0] === 'Estrato 3') {
                color[i] = '#B2FEE9';
            } else if (param[i][0] === 'Estrato 4') {
                color[i] = '#CDF57A';
            } else if (param[i][0] === 'Estrato 5') {
                color[i] = '#FFB203';
            } else if (param[i][0] === 'Estrato 6') {
                color[i] = '#89CD66';
            } else if (param[i][0] === 'PH o Comercial') {
                color[i] = '#fff7f3';
            } else if (param[i][0] === 'Diferencia mayor a 10%') {
                color[i] = '#FF0000';
            } else if (param[i][0] === 'Areas Iguales') {
                color[i] = '#EDEF85';
            } else if (param[i][0] === 'PH o Sin Informacion') {
                color[i] = '#e5e5e5';
            } else if (param[i][0] === 'Muy Alto Riesgo') {
                color[i] = '#a69bcc';
            } else if (param[i][0] === 'Alto Riesgo') {
                color[i] = '#e5afb1';
            } else if (param[i][0] === 'Medio Riesgo') {
                color[i] = '#FFBE00';
            } else if (param[i][0] === 'Bajo Riesgo') {
                color[i] = '#7ceb98';
            } else if (param[i][0] === 'Sin Riesgo') {
                color[i] = '#d8d8d8';
            }
        
            
            dat[i] = new Array(param.length);
            for (j = 0; j < param.length; j++) {
                if (i === j) {
                    dat[i][j] = totales[i][0];
                } else {
                    dat[i][j] = 0;
                }
            }
        }
    }
    var serie = "[";
    for (i = 0; i < param.length; i++) {
        serie = serie + "{name: '" + param[i][0] + "',color: '" + color[i] + "',data: [" + dat[i] + "]";
        if (i === param.length - 1) {
            serie = serie + "}]";
        } else {
            serie = serie + "},";
        }
    }
    var seriep = "[{name: '" + titulo + "',data:[";
    for (i = 0; i < param.length; i++) {
        seriep = seriep + "{name: '" + param[i][0] + "',color: '" + color[i] + "',y: " + Math.round(dat[i][i] * 100 / select[0]) + "";
        if (i === param.length - 1) {
            seriep = seriep + "}]}]";
        } else {
            seriep = seriep + "},";
        }
    }
    //series: [{name: 'NPH',color: '#7f7fff',data: [12043,0,0]},{name: 'PH',color: '#ffff4c',data: [0,1832,0]},{name: 'No Const',color: '#7fbf7f',data: [0,0,647]}]
    //Highcharts Estadisticas Rango de áreas
    //console.log(id);
    if (id !== "pie") {
        document.getElementById('pie').style.display = 'block';
        document.getElementById('barrass').style.display = 'none';
        $(function () {
            Highcharts.chart('statistics', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: titulo
                },
                subtitle: {
                    text: '<span style="color: red">Total Predios: ' + select[0] + '</span>'
                },
                xAxis: {
                    categories: param
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Número de Predios'
                    }
                },
                legend: {
                    reversed: false
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: ('#000000')
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: eval(serie)
                        //series: [{name: 'NPH',color: '#7f7fff',data: [12043,0,0]},{name: 'PH',color: '#ffff4c',data: [0,1832,0]},{name: 'No Const',color: '#7fbf7f',data: [0,0,647]}]
            });
        });
    } else {
        document.getElementById('pie').style.display = 'none';
        document.getElementById('barrass').style.display = 'block';
        $(function () {
            Highcharts.chart('statistics', {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: titulo
                },
                subtitle: {
                    text: '<span style="color: red">Total Predios: ' + select[0] + '</span>'
                },
                legend: {
                    reversed: false
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b><br>{point.percentage:.1f}%,',
                            color: ('#000000')
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                series: eval(seriep)
                        //series: [{name: 'NPH',color: '#7f7fff',data: [12043,0,0]},{name: 'PH',color: '#ffff4c',data: [0,1832,0]},{name: 'No Const',color: '#7fbf7f',data: [0,0,647]}]
            });
        });
    }
    //Evento para Remover Layer
    /* map.on('singleclick', function (evt) {
     //map.removeLayer(layer);
     predio.getSource().updateParams({'STYLES': ''});
     document.getElementById('statistics').innerHTML = '';
     document.getElementById("statistics").style.display = "none";
     });*/

}



//nueva funcion

function estadistica_espacio_publico(select, param, totales, porcentajes) {
    if (totales === null) {
        alert("No existe espacio público en esta area");
    }
    document.getElementById("statistics").style.display = "block";
    var color = new Array(param.length);
    var dat = new Array(param.length);
    for (i = 0; i < param.length; i++) {
        if (param[i][0] === 'Espacio Publico') {
            color[i] = '#7fbf7f';
        } else if (param[i][0] === 'Espacio Publico Propuesto') {
            color[i] = '#ffff4c';
        } else if (param[i][0] === 'Parque') {
            color[i] = '#7f7fff';
        }
        dat[i] = new Array(param.length);

        for (j = 0; j < param.length; j++) {
            if (i === j) {
                dat[i][j] = totales[i][0];
                //console.log(dat[i][j]);
            } else {
                dat[i][j] = 0;
            }
        }
    }
    //console.log(porcentajes[0][0]);
    //console.log(porcentajes[1][0]);
    var existente = porcentajes[0][0];
    var propuesto = porcentajes[1][0];
    var totalhec = parseInt(existente) + parseInt(propuesto);
    var serie = "[";
    for (i = 0; i < param.length; i++) {
        serie = serie + "{name: '" + param[i][0] + "',color:'" + color[i] + "',data: [['" + param[i][0] + "'," + porcentajes[i] + "],{ y: 12.8,sliced: false, selected: true}]}";
        if (i === param.length - 1) {
            serie = serie + "]]";
        } else {
            serie = serie + "]";
        }
    }
//console.log(serie);

//[{name: 'Espacio Publico Propuesto',color:'#ffff4c',data: [['Espacio Publico Propuesto',0.8108160014234198],{ y: 12.8,sliced: false, selected: true}]}]{name: 'Espacio Publico',color:'#7fbf7f',data: [['Espacio Publico',0.770197994965995],{ y: 12.8,sliced: false, selected: true}]}]{name: 'Parque',color:'#7f7fff',data: [['Parque',0.41898600361058536],{ y: 12.8,sliced: false, selected: true}]}]]


    $(function () {

        $(document).ready(function () {

            // Build the chart
            Highcharts.chart('statistics', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Espacio Público'
                },
                subtitle: {
                    text: '<span style="color: red">Total Hectareas: ' + totalhec + '</span><br><span style="color: red">Total Hectareas Existentes: ' + parseInt(existente) + '</span><br><span style="color: red">Total Hectareas Propuestas: ' + parseInt(propuesto) + '</span>'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                        name: 'Espacio Público',
                        colorByPoint: true,
                        data: [{
                                name: 'Existente',
                                y: parseInt(existente)
                            }, {
                                name: 'Propuesto',
                                y: parseInt(propuesto),
                                sliced: true,
                                selected: true
                            }]
                    }]
            });
        });
    });

}

/*
 function piegoogle(select, titulo, param, totales){
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart); 
 function drawChart() {
 if (totales=== null){
 alert("No existen predios dentro de este poligono");
 }
 document.getElementById("statistics").style.display = "block";
 var color = new Array(param.length);
 var dat = new Array(param.length);     
 for (i = 0; i < param.length; i++) {
 if (param[i][0]==='PH'){
 color[i]='#7fbf7f';
 }else if (param[i][0]==='NPH'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='No Const'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='0-100m2'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='100-1.000m2'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='1.000-10.000m2'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='mayor a 10.000m2'){
 color[i]='#7fbf7f';
 }else if (param[i][0]==='Est 1'){ //
 color[i]='#e31a1c';
 }else if(param[i][0]==='Est 2'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='Est 3'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='Est 4'){
 color[i]='#7fbf7f';
 }else if(param[i][0]==='Est 5'){
 color[i]='#ffae19';
 }else if(param[i][0]==='Est 6'){
 color[i]='#21cc65';
 } else if(param[i][0]==='Sin Est'){
 color[i]='#fed3dd';
 }else if (param[i][0]==='1'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='2'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='3'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='4'){
 color[i]='#7fbf7f';
 }else if(param[i][0]==='5'){
 color[i]='#ffae19';
 }else if(param[i][0]==='6'){
 color[i]='#21cc65';
 }else if (param[i][0]==='REGIMEN COMUN'){
 color[i]='#7fbf7f';
 }else if(param[i][0]==='SIMPLIFICADO'){
 color[i]='#ffae19';
 }else if(param[i][0]==='N/A'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='AGENTE RETENEDOR'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='GRAN CONTRIBUYENTE'){
 color[i]='#ffff4c';
 }else if (param[i][0]==='COMERCIAL'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='EDUCATIVO'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='ENTIDADES ORDEN NACIONAL Y DEPARTAMENTAL'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='HABITACIONAL'){
 color[i]='#7fbf7f';
 }else if(param[i][0]==='CULTURAL'){
 color[i]='#ffae19';
 }else if(param[i][0]==='INSTITUCIONAL'){
 color[i]='#21cc65';
 }else if(param[i][0]==='SIN'){
 color[i]='#fed3dd';
 }else if(param[i][0]==='CONSERVACION'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='ACTUALIZACION'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='No Existe en AAA'){
 color[i]='#329932';
 }else if(param[i][0]==='Igual'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='Diferente'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Tiene Acueducto'){
 color[i]='#9999ff';
 }else if(param[i][0]==='Sin Acueducto'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Tiene Alcantarillado'){
 color[i]='#66b266';
 }else if(param[i][0]==='Pozo Septico'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Con Disponibilidad Aseo'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='Sin Disponibilidad Aseo'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Sin Direccion'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Estandarizada'){
 color[i]='#9999ff';
 }else if(param[i][0]==='No Estandarizada'){
 color[i]='#ffff19';
 }else if(param[i][0]==='0-20'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='21-40'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='41-60'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='61-80'){
 color[i]='#19409e';
 }else if(param[i][0]==='81-100'){
 color[i]='#7fbf7f';
 }else if(param[i][0]==='Sin Informacion'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Natural'){
 color[i]='#9999ff';
 }else if(param[i][0]==='Juridico'){
 color[i]='#ffff19';
 }else if(param[i][0]==='100 M'){
 color[i]='#7fbf7f';
 }else if(param[i][0]==='100 M -1.000 M'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='1.000 M -10.000 M'){
 color[i]='#ffae19';
 }else if(param[i][0]==='10.000 M'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='Sin Proteccion'){
 color[i]='#F7FE2E';
 }else if(param[i][0]==='Area de Proteccion'){
 color[i]='#04B4AE';
 }else if(param[i][0]==='Expansion'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Rural'){
 color[i]='#9999ff';
 }else if(param[i][0]==='Urbano'){
 color[i]='#ffff19';
 }else if(param[i][0]==='Alta'){
 color[i]='#FF0000';
 }else if(param[i][0]==='Media'){
 color[i]='#FFFF00';
 }else if(param[i][0]==='Baja'){
 color[i]='#00FF00';
 }else if(param[i][0]==='ZRA'){
 color[i]='#2EFE9A';
 }else if(param[i][0]==='ZEE'){
 color[i]='#298A08';
 }else if(param[i][0]==='ZUMR'){
 color[i]='#0489B1';
 }else if(param[i][0]==='100'){
 color[i]='#e31a1c';
 }else if(param[i][0]==='100-1.000'){
 color[i]='#ffff4c';
 }else if(param[i][0]==='1.000-10.000'){
 color[i]='#7f7fff';
 }else if(param[i][0]==='10.000'){
 color[i]='#7fbf7f';
 }
 
 dat[i] = new Array(param.length);
 for (j = 0; j < param.length; j++) {
 if (i === j) {
 dat[i][j] = totales[i][0];
 } else {
 dat[i][j] = 0;
 }
 }
 }     
 
 
 
 var serie1="{";   
 for (i = 0; i < param.length; i++) {
 serie1 = serie1+"['"+param[i][0]+"',"+totales[i][0]+"]";
 if (i === param.length - 1) {
 serie1 = serie1 + "}";
 } else {
 serie1 = serie1 + ",";
 }
 
 }
 
 console.log(serie1);
 
 var data = google.visualization.arrayToDataTable([
 ['Task','Número de Predios'],
 eval(serie1)/*
 ['0-100m2',2340],['1.000-10.000m2',692],['mayor a 10.000m2',76],['100-1.000m2',11414]*/
/* ]);
 
 
 var options = {
 title: titulo,
 is3D: true,
 };
 
 var chart = new google.visualization.PieChart(document.getElementById('statistics'));
 chart.draw(data, options);
 }
 }
 */
