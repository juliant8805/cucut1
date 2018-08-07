globalstyle = "sinconsulta";
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
function rango(style,id) {
    puntos_obras.setVisible(false);
    obras.setVisible(false);
    ejeobras.setVisible(false);
    globalstyle = style;
    document.getElementById("botonminimizar").style.display = "block";
    document.getElementById("div_heatmap").style.display = "block";
    var pgetextent = [-8086065, 874885, -8056192, 890166];  
    //predio.getSource().updateParams({'CQL_FILTER': null});
    var formatNumber = {
                 separador: ".", // separador para los miles
                 sepDecimal: ',', // separador para los decimales
                 formatear:function (num){
                  num +='';
                  var splitStr = num.split('.');
                  var splitLeft = splitStr[0];
                  var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
                  var regx = /(\d+)(\d{3})/;
                  while (regx.test(splitLeft)) {
                  splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
                  }
                  return this.simbol + splitLeft  +splitRight;
                 },
                 new:function(num, simbol){
                  this.simbol = simbol ||'';
                  return this.formatear(num);
                 }
                }
    //propiedad horizontal
     if (style === "Tipo Construccion") { 
        predio.setVisible(true);
        construcciones.setVisible(false);
          if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['NPH'], ['PH']];
            var total1 = search("cucuta:PropiedadHorizontal", 0, 0);
            var total2 = search("cucuta:PropiedadHorizontal", 1, 1);
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': "Tipo Construccion"});
            estdistica(select, style, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize()); 
            queryexport = style + ' G';
     }   
         
     else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['NPH'], ['PH']];
            var total1 = search("cucuta:PropiedadHorizontalFiltro", values, 0, 0);
            var total2 = search("cucuta:PropiedadHorizontalFiltro", values, 1, 1);
            var totales = total1.concat(total2);
            estdistica(select, style, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }         
    }
    // consultas comparacion estrato y destino 
     else if (style === "oficial_vs_AAA") {
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none"; 
            predio.setVisible(true);
            construcciones.setVisible(false);
            if (document.getElementById("oficial_vs_AAA").value === "Acueducto") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Sin Comparacion'],['Sin Informacion']];
            var total1 = search("cucuta:EstratoDistritoPrestadoresAcueducto", 'Igual');
            var total2 = search("cucuta:EstratoDistritoPrestadoresAcueducto", 'prest'); 
            var total3 = search("cucuta:EstratoDistritoPrestadoresAcueducto", 'dist'); 
            var total4 = search("cucuta:EstratoDistritoPrestadoresAcueducto", 'sincomp');
            var total5 = search("cucuta:EstratoDistritoPrestadoresAcueducto", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Acueducto'});
            var titulo = "Est Oficial vs Est Acueducto";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' Acued G';   
           } 
           else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Sin Comparacion'],['Sin Informacion']];
            var total1 = search("cucuta:EstratoDistritoPrestadoresAcueductoFiltro", values, 'Igual');
            var total2 = search("cucuta:EstratoDistritoPrestadoresAcueductoFiltro", values, 'prest');
            var total3 = search("cucuta:EstratoDistritoPrestadoresAcueductoFiltro", values, 'dist');
            var total4 = search("cucuta:EstratoDistritoPrestadoresAcueductoFiltro", values, 'sincomp');
            var total5 = search("cucuta:EstratoDistritoPrestadoresAcueductoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            var titulo = "Est Oficial vs Est Acueducto";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Acueducto', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AcueductoF';              
           }                 
        }
         
         else if (document.getElementById("oficial_vs_AAA").value === "Alcantarillado") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Sin Comparacion'],['Sin Informacion']];
            var total1 = search("cucuta:EstratoDistritoPrestadoresAlcantarillado", 'Igual');
            var total2 = search("cucuta:EstratoDistritoPrestadoresAlcantarillado", 'prest'); 
            var total3 = search("cucuta:EstratoDistritoPrestadoresAlcantarillado", 'dist'); 
            var total4 = search("cucuta:EstratoDistritoPrestadoresAlcantarillado", 'sincomp');
            var total5 = search("cucuta:EstratoDistritoPrestadoresAlcantarillado", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Alcantarillado'});
            var titulo = "Est Oficial vs Est Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize()); 
            queryexport = style + ' Alc G';
            } 
            else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Sin Comparacion'],['Sin Informacion']];
            var total1 = search("cucuta:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'Igual');
            var total2 = search("cucuta:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'prest');
            var total3 = search("cucuta:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'dist');
            var total4 = search("cucuta:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'sincomp');
            var total5 = search("cucuta:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            var titulo = "Oficial vs AAA Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Alcantarillado', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AlcantarilladoF';               
           }                  
         } 
         
         else if (document.getElementById("oficial_vs_AAA").value === "Aseo") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Sin Comparacion'],['Sin Informacion']];
            var total1 = search("cucuta:EstratoDistritoPrestadoresAseo", 'Igual');
            var total2 = search("cucuta:EstratoDistritoPrestadoresAseo", 'prest'); 
            var total3 = search("cucuta:EstratoDistritoPrestadoresAseo", 'dist'); 
            var total4 = search("cucuta:EstratoDistritoPrestadoresAseo", 'sincomp');
            var total5 = search("cucuta:EstratoDistritoPrestadoresAseo", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Aseo'});
            var titulo = "Est Oficial vs Est Aseo";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' Aseo G';
            } 
           else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Sin Comparacion'],['Sin Informacion']];
            var total1 = search("cucuta:EstratoDistritoPrestadoresAseoFiltro", values, 'Igual');
            var total2 = search("cucuta:EstratoDistritoPrestadoresAseoFiltro", values, 'prest');
            var total3 = search("cucuta:EstratoDistritoPrestadoresAseoFiltro", values, 'dist');
            var total4 = search("cucuta:EstratoDistritoPrestadoresAseoFiltro", values, 'sincomp');
            var total5 = search("cucuta:EstratoDistritoPrestadoresAseoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            var titulo = "Est Oficial vs Est Aseo";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Aseo', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AseoF';               
            }                  
         }             
    }   
    
       
    else if (style === "Uso_oficial_vs_AAA") {
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("Uso_oficial_vs_AAA").value === "Acueducto") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:UsoDistritoPrestadoresAcueducto", 'Igual');
            var total2 = search("cucuta:UsoDistritoPrestadoresAcueducto", 'PCDR');  
            var total3 = search("cucuta:UsoDistritoPrestadoresAcueducto", 'PRDC');
            var total4 = search("cucuta:UsoDistritoPrestadoresAcueducto", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Uso Acueducto'});
            var titulo = "Destino Economico vs Uso Acueducto";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' GAcueducto';
           } 
           else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:UsoDistritoPrestadoresAcueductoFiltro", values, 'Igual');
            var total2 = search("cucuta:UsoDistritoPrestadoresAcueductoFiltro", values, 'PCDR');
            var total3 = search("cucuta:UsoDistritoPrestadoresAcueductoFiltro", values, 'PRDC');
            var total4 = search("cucuta:UsoDistritoPrestadoresAcueductoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            var titulo = "Destino Economico vs Uso Acueducto (Cabecera Municipal)";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Acueducto', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AcueductoF';              
           }                  
        }
         
         else if (document.getElementById("Uso_oficial_vs_AAA").value === "Alcantarillado") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:UsoDistritoPrestadoresAlcantarillado", 'Igual');
            var total2 = search("cucuta:UsoDistritoPrestadoresAlcantarillado", 'PCDR');  
            var total3 = search("cucuta:UsoDistritoPrestadoresAlcantarillado", 'PRDC');
            var total4 = search("cucuta:UsoDistritoPrestadoresAlcantarillado", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Uso Alcantarillado'});
            var titulo = "Destino Economico vs Uso Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
           queryexport = style + ' GAlcantarillado';    
           } 
           else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'Igual');
            var total2 = search("cucuta:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'PCDR');
            var total3 = search("cucuta:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'PRDC');
            var total4 = search("cucuta:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            var titulo = "Destino Economico vs Uso Alcantarillado (Cabecera Municipal)";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Alcantarillado', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AlcantarilladoF';               
           }                  
         } 
         
         else if (document.getElementById("Uso_oficial_vs_AAA").value === "Aseo") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:UsoDistritoPrestadoresAseo", 'Igual');
            var total2 = search("cucuta:UsoDistritoPrestadoresAseo", 'PCDR');  
            var total3 = search("cucuta:UsoDistritoPrestadoresAseo", 'PRDC');
            var total4 = search("cucuta:UsoDistritoPrestadoresAseo", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Uso Aseo'});
            var titulo = "Destino Economico vs Uso Aseo";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' GAseo';  
            } 
           else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:UsoDistritoPrestadoresAseoFiltro", values, 'Igual');
            var total2 = search("cucuta:UsoDistritoPrestadoresAseoFiltro", values, 'PCDR');
            var total3 = search("cucuta:UsoDistritoPrestadoresAseoFiltro", values, 'PRDC');
            var total4 = search("cucuta:UsoDistritoPrestadoresAseoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            var titulo = "Destino Economico vs Uso Aseo";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Aseo', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AseoF';              
           }                  
         }    
        
    } 
    
    else if (style === "exentos") {
            predio.setVisible(true);
            construcciones.setVisible(false);
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['Exentos 2016'], ['Exentos 2017'], ['No Exentos']];
            var total1 = search("cucuta:Exentos", 'concepto2016', '2016');
            var total2 = search("cucuta:Exentos", 'concepto2017', '2017');
            var total3 = search("cucuta:Exentos", 'NO', '0000');
            var totales = total1.concat(total2, total3);
            predio.getSource().updateParams({'STYLES': "Exentos"});
            estdistica(select, style, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize()); 
            queryexport = style + ' G'; 
            }
        
        else{
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Exentos 2016'], ['Exentos 2017'], ['No Exentos']];
            var total1 = search("cucuta:ExentosFiltro", values, 'concepto2016', '2016');
            var total2 = search("cucuta:ExentosFiltro", values, 'concepto2017', '2017');
            var total3 = search("cucuta:ExentosFiltro", values, 'NO', '0000');
            var totales = total1.concat(total2, total3);
            var titulo = "Predios Exentos";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': "Exentos", 'CQL_FILTER': eval(filtro)});
            queryexport = style; 
        }                 
    } 
    
    
    else if (style === "Saneamiento") {
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("Saneamiento").value === "Acueducto") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['AGUAS KPITAL'], ['Sin Información de Prestador']];
            var total1 = search("cucuta:DisponibilidadAcueductoCucuta", 'SIN INFORMACION');
            var total2 = search("cucuta:DisponibilidadAcueductoCucuta", 'AK');  
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Acueducto Cucuta'});
            var titulo = "Saneamiento Acueducto";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' GAcueducto';
           } 
           else {   
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['AGUAS KPITAL'], ['Sin Información de Prestador']];
            var total1 = search("cucuta:DisponibilidadAcueductoCucutaFiltro", values, 'SIN INFORMACION');
            var total2 = search("cucuta:DisponibilidadAcueductoCucutaFiltro", values, 'AK');
            var totales = total1.concat(total2);
            var titulo = "Saneamiento Acueducto";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Acueducto Cucuta', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AcueductoF';    
           }                  
        }
         
         else if (document.getElementById("Saneamiento").value === "Alcantarillado") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['AGUAS KPITAL'], ['Sin Información de Prestador']];
            var total1 = search("cucuta:DisponibilidadAlcantarilladoCucuta", 'SIN INFORMACION');
            var total2 = search("cucuta:DisponibilidadAlcantarilladoCucuta", 'AK');  
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Alcantarillado Cucuta'});
            var titulo = "Saneamiento Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' GAlcantarillado';
        }
        else {   
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['AGUAS KPITAL'], ['Sin Información de Prestador']];
            var total1 = search("cucuta:DisponibilidadAlcantarilladoCucutaFiltro", values, 'SIN INFORMACION');
            var total2 = search("cucuta:DisponibilidadAlcantarilladoCucutaFiltro", values, 'AK');
            var totales = total1.concat(total2);
            var titulo = "Saneamiento Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado Cucuta', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AlcantarilladoF';  
           }   
         } 
         
         else if (document.getElementById("Saneamiento").value === "Aseo") {  
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
		    var select = search("cucuta:TotalPredios");
            var param = [['PROACTIVA'], ['ASEO URBANO'], ['Sin Información de Prestador']];
            var total1 = search("cucuta:DisponibilidadAseoCucuta", 'PROACTIVA');
            var total2 = search("cucuta:DisponibilidadAseoCucuta", 'ASEO URBANO');  
		    var total3 = search("cucuta:DisponibilidadAseoCucuta", 'SIN INFORMACION');
            var totales = total1.concat(total2,total3);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Aseo Cucuta'});
            var titulo = "Saneamiento Aseo";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize()); 
            queryexport = style + ' GAseo';   
        }
        else {   
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['PROACTIVA'], ['ASEO URBANO'], ['Sin Información de Prestador']];
            var total1 = search("cucuta:DisponibilidadAseoCucutaFiltro", values, 'PROACTIVA');
            var total2 = search("cucuta:DisponibilidadAseoCucutaFiltro", values, 'ASEO URBANO');
            var total3 = search("cucuta:DisponibilidadAseoCucutaFiltro", values, 'SIN INFORMACION');
            var totales = total1.concat(total2,total3);
            var titulo = "Saneamiento Aseo";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Aseo Cucuta', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AseoF';  
           }  
        }       
    } 
    
            else if (style === "valorizacion") {
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            puntos_obras.setVisible(true);
            obras.setVisible(true);
            ejeobras.setVisible(true);
            //bufferobras.setVisible(true);
            if (document.getElementById("valorizacion").value === "franjapredios") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['FRANJA 1'], ['FRANJA 2'], ['FRANJA 3'], ['FRANJA 4'],['FRANJA 5'], ['FRANJA 6'],['FRANJA 7'], ['FRANJA 8'],['FRANJA 9'], ['FRANJA 10'],['FRANJA 11'], ['FRANJA 12'],['FRANJA 13'], ['FRANJA 14'], ['FRANJA 15']];
            var prediosfranjas = search("cucuta:prediosfranja");
            var total1 = [prediosfranjas[1]];
            var total2 = [prediosfranjas[2]];
            var total3 = [prediosfranjas[3]];
            var total4 = [prediosfranjas[4]];
            var total5 = [prediosfranjas[5]];
            var total6 = [prediosfranjas[6]];
            var total7 = [prediosfranjas[7]];
            var total8 = [prediosfranjas[8]];
            var total9 = [prediosfranjas[9]];
            var total10 = [prediosfranjas[10]];
            var total11 = [prediosfranjas[11]];
            var total12 = [prediosfranjas[12]];
            var total13 = [prediosfranjas[13]];
            var total14 = [prediosfranjas[14]];
            var total15 = [prediosfranjas[15]];     
            var totales = total1.concat(total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12, total13, total14, total15);
            predio.getSource().updateParams({'STYLES':'franjapredios'});
            var titulo = "Numero de predios por Franja de Beneficio";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' GValorizacionP';
           } 
           else {   
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['FRANJA 1'], ['FRANJA 2'], ['FRANJA 3'], ['FRANJA 4'],['FRANJA 5'], ['FRANJA 6'],['FRANJA 7'], ['FRANJA 8'],['FRANJA 9'], ['FRANJA 10'],['FRANJA 11'], ['FRANJA 12'],['FRANJA 13'], ['FRANJA 14'], ['FRANJA 15']];            
            var total1 = search("cucuta:prediosfranjafiltro", values, 1);
            var total2 = search("cucuta:prediosfranjafiltro", values, 2);
            var total3 = search("cucuta:prediosfranjafiltro", values, 3);
            var total4 = search("cucuta:prediosfranjafiltro", values, 4);
            var total5 = search("cucuta:prediosfranjafiltro", values, 5);
            var total6 = search("cucuta:prediosfranjafiltro", values, 6);
            var total7 = search("cucuta:prediosfranjafiltro", values, 7);
            var total8 = search("cucuta:prediosfranjafiltro", values, 8);
            var total9 = search("cucuta:prediosfranjafiltro", values, 9);
            var total10 = search("cucuta:prediosfranjafiltro", values, 10);
            var total11 = search("cucuta:prediosfranjafiltro", values, 11);
            var total12 = search("cucuta:prediosfranjafiltro", values, 12);
            var total13 = search("cucuta:prediosfranjafiltro", values, 13);
            var total14 = search("cucuta:prediosfranjafiltro", values, 14);
            var total15 = search("cucuta:prediosfranjafiltro", values, 15);
            var totales = total1.concat(total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12, total13, total14, total15);
            var titulo = "Numero de predios por Franja de Beneficio";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'franjapredios', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' GValorizacionF';    
           }                  
         }
        }
         
         else if (document.getElementById("Saneamiento").value === "franjaavaluo") {
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPredios");
            var param = [['AGUAS KPITAL'], ['Sin Prestador de Alcantarillado']];
            var total1 = search("cucuta:DisponibilidadAlcantarilladoCucuta", 'SIN INFORMACION');
            var total2 = search("cucuta:DisponibilidadAlcantarilladoCucuta", 'AK');  
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Alcantarillado Cucuta'});
            var titulo = "Saneamiento Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' GAlcantarillado';
        }
        else {   
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['AGUAS KPITAL'], ['Sin Prestador de Alcantarillado']];
            var total1 = search("cucuta:DisponibilidadAlcantarilladoCucutaFiltro", values, 'SIN INFORMACION');
            var total2 = search("cucuta:DisponibilidadAlcantarilladoCucutaFiltro", values, 'AK');
            var totales = total1.concat(total2);
            var titulo = "Saneamiento Alcantarillado";
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado Cucuta', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AlcantarilladoF';  
           }   
         } 
           
         else if (document.getElementById("Avaluo Catastral").value === "avaluoporrangos") {        
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['0-20 millones'], ['20-50 millones'], ['50-100 millones'], ['100-500 millones'], ['mayor a 500 millones']];
            var total1 = search("cucuta:AvaluoCatastral", 0, 20000000);
            var total2 = search("cucuta:AvaluoCatastral", 20000001, 50000000);
            var total3 = search("cucuta:AvaluoCatastral", 50000001, 100000000);
            var total4 = search("cucuta:AvaluoCatastral", 100000001, 500000000);
            var total5 = search("cucuta:AvaluoCatastral", 500000001, 9999999999999);
            var valoravaluo = search("cucuta:AvaluoTotal");  
            var valoravaluo = formatNumber.new(valoravaluo); 
            var titulo = "Total Avaluo Catastral: " + valoravaluo;       
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': 'Avaluo Catastral'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' rangosG';     
        } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['0-20 millones'], ['20-50 millones'], ['50-100 millones'], ['100-500 millones'], ['mayor a 500 millones']];
            var total1 = search("cucuta:AvaluoCatastralFiltro", values, 0, 20000000);
            var total2 = search("cucuta:AvaluoCatastralFiltro", values, 20000001, 50000000);
            var total3 = search("cucuta:AvaluoCatastralFiltro", values, 50000001, 100000000);
            var total4 = search("cucuta:AvaluoCatastralFiltro", values, 100000001, 500000000);
            var total5 = search("cucuta:AvaluoCatastralFiltro", values, 500000001, 9999999999999);
            var totales = total1.concat(total2, total3, total4, total5);
            var valoravaluo = search("cucuta:AvaluoTotalFiltro", values); 
            var valoravaluo = formatNumber.new(valoravaluo); 
            var titulo = "Total Avaluo Catastral: " + valoravaluo;   
            //console.log(titulo);
            estdistica(select, titulo, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' rangosF';
        }
    } 

    else if (document.getElementById("Avaluo Catastral").value === "crecimientobase") { 
            
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['VIG2015'], ['VIG2016'], ['VIG2017'], ['VIG2018'], ['SIN INFORMACION']];
            var total1 = search("cucuta:CrecimientoBase", '2015');
            var total2 = search("cucuta:CrecimientoBase", '2016');
            var total3 = search("cucuta:CrecimientoBase", '2017');
            var total4 = search("cucuta:CrecimientoBase", '2018'); 
            var total5 = search("cucuta:CrecimientoBase", 'SIN INFORMACION');  
            var titulo = "Creciemiento Base Predial";       
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': 'Creciemiento_Base'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' crecimientobaseG';     
          } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['VIG2015'], ['VIG2016'], ['VIG2017'], ['VIG2018'], ['SIN INFORMACION']];
            var total1 = search("cucuta:CrecimientoBaseFiltro", values, '2015');
            var total2 = search("cucuta:CrecimientoBaseFiltro", values, '2016');
            var total3 = search("cucuta:CrecimientoBaseFiltro", values, '2017');
            var total4 = search("cucuta:CrecimientoBaseFiltro", values, '2018');
            var total5 = search("cucuta:CrecimientoBaseFiltro", values, 'SIN INFORMACION');  
            var titulo = "Creciemiento Base Predial";       
            var totales = total1.concat(total2, total3, total4, total5);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Creciemiento_Base', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' crecimientobaseF';
        }
    }   
       else if (document.getElementById("Avaluo Catastral").value === "pagopredial") { 
            
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['PAGO PREDIAL A TIEMPO (2017)'], ['NO PAGO A TIEMPO (2017)']];
            var total1 = search("cucuta:Pago2017", 'SI');
            var total2 = search("cucuta:Pago2017", 'NO');  
            var titulo = "Pago Impuesto Predial (2017)";       
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': 'Pago2017'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' pagopredialG';     
          } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['PAGO PREDIAL A TIEMPO (2017)'], ['NO PAGO A TIEMPO (2017)']];
            var total1 = search("cucuta:Pago2017Filtro", values, 'SI');
            var total2 = search("cucuta:Pago2017Filtro", values, 'NO'); 
            var titulo = "Pago Impuesto Predial (2017)";       
            var totales = total1.concat(total2);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';  
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Pago2017', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' pagopredialF';
        }
    }
    
    else if (document.getElementById("Avaluo Catastral").value === "pagopredial2018") { 
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['REALIZO PAGO PREDIAL (2018)'], ['NO HA REALIZADO PAGO PREDIAL (2018)']];
            var total1 = search("cucuta:Pago2018", 'NO');
            var total2 = search("cucuta:Pago2018", 'SI');  
            var titulo = "Pago Impuesto Predial (2018)";       
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': 'Pago2018'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' pagopredial2018G';     
          } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['REALIZO PAGO PREDIAL (2018)'], ['NO HA REALIZADO PAGO PREDIAL (2018)']];
            var total1 = search("cucuta:Pago2018Filtro", values, 'NO');
            var total2 = search("cucuta:Pago2018Filtro", values, 'SI'); 
            var titulo = "Pago Impuesto Predial (2018)";       
            var totales = total1.concat(total2);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';  
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'Pago2018', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' pagopredial2018F';
        }
    }    
    
    
     
    
   else if (document.getElementById("Avaluo Catastral").value === "cambiosavaluo") {     
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['0-5%'], ['5-10%'], ['>10%']];
            var total1 = search("cucuta:CambioAvaluo", 0, 5);
            var total2 = search("cucuta:CambioAvaluo", 6, 10); 
			   var total3 = search("cucuta:CambioAvaluo", 11, 10000); 
            var titulo = "Cambios Avaluo Catastral (2015-2018)";       
            var totales = total1.concat(total2,total3);
            predio.getSource().updateParams({'STYLES': 'CambioAvaluo'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' cambiosavaluosG';     
          } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['0-5%'], ['5-10%'], ['>10%']];
            var total1 = search("cucuta:CambioAvaluoFiltro", values, 0, 5);
            var total2 = search("cucuta:CambioAvaluoFiltro", values, 6, 10); 
			   var total3 = search("cucuta:CambioAvaluoFiltro", values, 11, 10000); 
            var titulo = "Cambios Avaluo Catastral (2015-2018)";       
            var totales = total1.concat(total2,total3);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';  
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'CambioAvaluo', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' cambiosavaluosF'; 
        }
    }    
    
		else if (document.getElementById("Avaluo Catastral").value === "cambiosavaluo2017") {     
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Decrecimiento'], ['Crecimiento Atipico'], ['Crecimiento Esperado']];
            var total1 = search("cucuta:CambioAvaluo2017", -100, -1);
            var total2 = search("cucuta:CambioAvaluo2017", 1, 1000000); 
			   var total3 = search("cucuta:CambioAvaluo2017", 0, 0); 
            var titulo = "Cambios Atipicos Avaluo Catastral (2011-2017)";       
            var totales = total1.concat(total2,total3);
            predio.getSource().updateParams({'STYLES': 'CambioAvaluo2017'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' cambiosavaluo2017G';     
          } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Decrecimiento'], ['Crecimiento Atipico'], ['Crecimiento Esperado']];
            var total1 = search("cucuta:CambioAvaluo2017Filtro", values, -100, -1);
            var total2 = search("cucuta:CambioAvaluo2017Filtro", values, 1, 1000000); 
			   var total3 = search("cucuta:CambioAvaluo2017Filtro", values, 0, 0); 
            var titulo = "Cambios Atipicos Avaluo Catastral (2011-2017)";        
            var totales = total1.concat(total2,total3);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';  
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'CambioAvaluo2017', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' cambiosavaluo2017F';  
        }
    }  
    
    else if (document.getElementById("Avaluo Catastral").value === "prediosmunicipio") {     
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            //document.getElementById("icono_ver_resumen").style.display = "block";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            //alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de AvalÃºo Catastral.</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Predios Municipio'], ['Otro Propietario'], ['Sin Informacion']];
            var total1 = search("cucuta:PrediosMunicipio", 'Municipio');
            var total2 = search("cucuta:PrediosMunicipio", 'Otro'); 
            var total3 = search("cucuta:PrediosMunicipio", 'Sin Informacion'); 
            var titulo = "Predios del Municipio";       
            var totales = total1.concat(total2,total3);
            predio.getSource().updateParams({'STYLES': 'PrediosMunicipio'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' prediosmunicipioG';     
          } 
        else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Predios Municipio'], ['Otro Propietario'], ['Sin Informacion']];
            var total1 = search("cucuta:PrediosMunicipioFiltro", values, 'Municipio');
            var total2 = search("cucuta:PrediosMunicipioFiltro", values, 'Otro'); 
            var total3 = search("cucuta:PrediosMunicipioFiltro", values, 'Sin Informacion'); 
            var titulo = "Predios del Municipio";        
            var totales = total1.concat(total2,total3);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';  
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'PrediosMunicipio', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' prediosmunicipioF';  
        }
    } 
    
    else if (style === "Estratificacion") { 
            predio.setVisible(true);
            construcciones.setVisible(false);
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['PH o Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:Estratificacion_Oficial", '01');
            var total2 = search("cucuta:Estratificacion_Oficial", '02');
            var total3 = search("cucuta:Estratificacion_Oficial", '03');
            var total4 = search("cucuta:Estratificacion_Oficial", '04');
            var total5 = search("cucuta:Estratificacion_Oficial", '05');
            var total6 = search("cucuta:Estratificacion_Oficial", '06');   
            var total7 = search("cucuta:Estratificacion_Oficial", '99');
            var total8 = search("cucuta:Estratificacion_Oficial", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5, total6, total7, total8);
            predio.getSource().updateParams({'STYLES': "estratificacion_oficial"});
            estdistica(select, style, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize()); 
            queryexport = style + ' G';
     }   
         
     else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['PH o Comercial'], ['Sin Informacion']];
            var total1 = search("cucuta:Estratificacion_Oficial_Filtro", values, '01');
            var total2 = search("cucuta:Estratificacion_Oficial_Filtro", values, '02');
            var total3 = search("cucuta:Estratificacion_Oficial_Filtro", values, '03');
            var total4 = search("cucuta:Estratificacion_Oficial_Filtro", values, '04');
            var total5 = search("cucuta:Estratificacion_Oficial_Filtro", values, '05');
            var total6 = search("cucuta:Estratificacion_Oficial_Filtro", values, '06');
            var total7 = search("cucuta:Estratificacion_Oficial_Filtro", values, '99');
            var total8 = search("cucuta:Estratificacion_Oficial_Filtro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5, total6, total7, total8);
            estdistica(select, style, param, totales, id);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            }  else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': "estratificacion_oficial", 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' F';;
        }         
    } 
    
    else if (document.getElementById("DiferenciaArea").value === "AreaTerreno") {     
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("manzana").value === '') {
            var select = search("cucuta:TotalPrediosHacienda");
            var param = [['Diferencia mayor a 10%'], ['Areas Iguales'], ['PH o Sin Informacion']];
            var total1 = search("cucuta:DiferenciaAreaTerreno", 11, 100000);
            var total2 = search("cucuta:DiferenciaAreaTerreno", 0, 10); 
            var total3 = search("cucuta:DiferenciaAreaTerreno", -10, -1); 
            var titulo = "Comparacion Area Registro vs Area Grafica";       
            var totales = total1.concat(total2,total3);
            predio.getSource().updateParams({'STYLES': 'DifAreaT'});
            estdistica(select, titulo, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize());
            queryexport = style + ' DifAreaTG';     
          } 
      else {
            var select = search("cucuta:TotalPrediosSinConsulta", values);
            var param = [['Diferencia mayor a 10%'], ['Areas Iguales'], ['PH o Sin Informacion']];
            var total1 = search("cucuta:DiferenciaAreaTerrenoFiltro", values, 11, 10000);
            var total2 = search("cucuta:DiferenciaAreaTerrenoFiltro", values, 0, 10); 
            var total3 = search("cucuta:DiferenciaAreaTerrenoFiltro", values, -10, -1); 
            var titulo = "Comparacion Area Registro vs Area Grafica";        
            var totales = total1.concat(total2,total3);
            var valor = "'" + values + "'";
            estdistica(select, titulo, param, totales, id);
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';  
            }  else if (document.getElementById("manzana").value !== '') {
               var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': 'DifAreaT', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' DifAreaTF';  
        }
    } 
                   
}
