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
function rango(style) {
    globalstyle = style;
    puntos_aaa.setVisible(false);
    document.getElementById('leyenda_transmetro').style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
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
    if (style === "Avaluo Catastral") {
        construcciones.setVisible(false);
        predio.setVisible(true);
        alert("GESSTOR INFORMA:</br></br>Para el caso de esta consulta se suman las mejoras al total de predios debido a que son objeto de avalúo catastral</br>");
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPrediosHacienda");
            var param = [['0-20 millones'], ['20-50 millones'], ['50-100 millones'], ['100-500 millones'], ['mayor a 500 millones']];
            var total1 = search("preproduccion:AvaluoCatastral", 0, 20000000);
            var total2 = search("preproduccion:AvaluoCatastral", 20000001, 50000000);
            var total3 = search("preproduccion:AvaluoCatastral", 50000001, 100000000);
            var total4 = search("preproduccion:AvaluoCatastral", 100000001, 500000000);
            var total5 = search("preproduccion:AvaluoCatastral", 500000001, 9999999999999);
            var valoravaluo = search("preproduccion:AvaluoTotal");  
            var valoravaluo = formatNumber.new(valoravaluo); 
            var titulo = "Total Avalúo Catastral: " + valoravaluo;       
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosEsp", values);
            var param = [['0-20 millones'], ['20-50 millones'], ['50-100 millones'], ['100-500 millones'], ['mayor a 500 millones']];
            var total1 = search("preproduccion:AvaluoCatastralFiltro", values, 0, 20000000);
            var total2 = search("preproduccion:AvaluoCatastralFiltro", values, 20000001, 50000000);
            var total3 = search("preproduccion:AvaluoCatastralFiltro", values, 50000001, 100000000);
            var total4 = search("preproduccion:AvaluoCatastralFiltro", values, 100000001, 500000000);
            var total5 = search("preproduccion:AvaluoCatastralFiltro", values, 500000001, 9999999999999);
            var totales = total1.concat(total2, total3, total4, total5);
            var valoravaluo = search("preproduccion:AvaluoTotalFiltro", values); 
            var valoravaluo = formatNumber.new(valoravaluo); 
            var titulo = "Total Avalúo Catastral: " + valoravaluo;   
            //console.log(titulo);
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }
    }
    
    else if (style === "Tipo de Contribuyente") {
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPrediosContribuyentes");
            var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'], ['Gran Contribuyente'], ['No Aplica']];
            var total1 = search("preproduccion:TipoContribuyente", 'REGIMEN COMUN');
            var total2 = search("preproduccion:TipoContribuyente", 'SIMPLIFICADO');
            var total3 = search("preproduccion:TipoContribuyente", 'AGENTE RETENEDOR');
            var total4 = search("preproduccion:TipoContribuyente", 'GRAN CONTRIBUYENTE');
            var total5 = search("preproduccion:TipoContribuyente", 'NO APLICA');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosContribuyentesFiltro", values);
            var param = [['Regimen Comun'], ['Regimen Simplificado'], ['Agente Retenedor'], ['Gran Contribuyente'], ['No Aplica']];
            var total1 = search("preproduccion:TipoContribuyenteFiltro", values, 'REGIMEN COMUN');
            var total2 = search("preproduccion:TipoContribuyenteFiltro", values, 'SIMPLIFICADO');   
            var total3 = search("preproduccion:TipoContribuyenteFiltro", values, 'AGENTE RETENEDOR');  
            var total4 = search("preproduccion:TipoContribuyenteFiltro", values, 'GRAN CONTRIBUYENTE');
            var total5 = search("preproduccion:TipoContribuyenteFiltro", values, 'NO APLICA');
            
            var totales = total1.concat(total2, total3, total4, total5);
            estdistica(select, style, param, totales);  
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';
               
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
            }
        }
    
        else if (style === "Impuesto Camara") {
        construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para ejecutar esta consulta</br></br>");
                var select = search("preproduccion:TotalPredios");
                var param = [['Sin Deuda'], ['Con Dueda'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Impuesto Industria y Comercio";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        } 
    
        else if (style === "Tipo Propietario") {
        construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información suficiente para ejecutar esta consulta</br></br>");
                var select = search("preproduccion:TotalPredios");
                var param = [['Persona Natural'], ['Persona Juridica'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Tipo de Propietario";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        }
    
        else if (style === "Incremento Avaluo") {
             construcciones.setVisible(false);
             predio.setVisible(true);
             alert("GESSTOR INFORMA:</br></br>No se encuentra información de avalúos para vigencias anteriores a 2017</br></br>");
                var select = search("preproduccion:TotalPredios");
                var param = [['Avalúo 2016'], ['Avalúo 2017'], ['Sin Informacion']];
                var total1 = search("preproduccion:SinInformacion");
                var total2 = search("preproduccion:SinInformacion");
                var total3 = search("preproduccion:TotalPredios");
                var totales = total1.concat(total2, total3);
                var titulo = "Incremento de Avalúo Catastral";
                predio.getSource().updateParams({'STYLES': 'sin_informacion'});
                estdistica(select, titulo, param, totales);
                map.getView().fitExtent(predio.getExtent(), map.getSize());  
                queryexport = style + ' G';   
        }
    
        //propiedad horizontal
     else if (style === "Tipo Construccion") { 
        estacionestransmetro.setVisible(false);
        viastransmasivo.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['NPH'], ['PH']];
            var total1 = search("preproduccion:PropiedadHorizontal", 0, 0);
            var total2 = search("preproduccion:PropiedadHorizontal", 1, 1);
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['NPH'], ['PH']];
            var total1 = search("preproduccion:PropiedadHorizontalFiltro", values, 0, 0);
            var total2 = search("preproduccion:PropiedadHorizontalFiltro", values, 1, 1);
            var totales = total1.concat(total2);
            estdistica(select, style, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
            var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';   
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';    
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }
    }
    else if (style === "oficial_vs_AAA_uso") {
            puntos_aaa.setVisible(false);
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("oficial_vs_AAA_uso").value === "Acueducto") {
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017</br></br>");
            var select = search("preproduccion:TotalPredios");
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoDistritoPrestadoresAcueducto", 'Igual');
            var total2 = search("preproduccion:UsoDistritoPrestadoresAcueducto", 'PCDR');  
            var total3 = search("preproduccion:UsoDistritoPrestadoresAcueducto", 'PRDC');
            var total4 = search("preproduccion:UsoDistritoPrestadoresAcueducto", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Uso Acueducto'});
            var titulo = "Uso Oficial vs Uso Acueducto";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            var difuso = "difuso";
            queryexport = difuso + ' GAcueducto';   
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoDistritoPrestadoresAcueductoFiltro", values, 'Igual');
            var total2 = search("preproduccion:UsoDistritoPrestadoresAcueductoFiltro", values, 'PCDR');
            var total3 = search("preproduccion:UsoDistritoPrestadoresAcueductoFiltro", values, 'PRDC');
            var total4 = search("preproduccion:UsoDistritoPrestadoresAcueductoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            var titulo = "Uso Oficial vs Uso Acueducto";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Acueducto', 'CQL_FILTER': eval(filtro)});
            var difuso = "difuso";
            queryexport = difuso + ' AcueductoF';
            //queryexport = style + ' AcueductoF';              
           }                   
        }
         
         else if (document.getElementById("oficial_vs_AAA_uso").value === "Alcantarillado") {
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            var select = search("preproduccion:TotalPredios");
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoDistritoPrestadoresAlcantarillado", 'Igual');
            var total2 = search("preproduccion:UsoDistritoPrestadoresAlcantarillado", 'PCDR'); 
            var total3 = search("preproduccion:UsoDistritoPrestadoresAlcantarillado", 'PRDC');
            var total4 = search("preproduccion:UsoDistritoPrestadoresAlcantarillado", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Uso Alcantarillado'});
            var titulo = "Uso Oficial vs Uso Alcantarillado";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            var difuso = "difuso";
            queryexport = difuso + ' GAlcantarillado';  
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'Igual');
            var total2 = search("preproduccion:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'PCDR');
            var total3 = search("preproduccion:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'PRDC');
            var total4 = search("preproduccion:UsoDistritoPrestadoresAlcantarilladoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            var titulo = "Uso Oficial vs Uso Alcantarillado";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Alcantarillado', 'CQL_FILTER': eval(filtro)});
            var difuso = "difuso";
            queryexport = difuso + ' AlcantarilladoF';               
           }                   
         } 
         
         else if (document.getElementById("oficial_vs_AAA_uso").value === "Aseo") {
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017</br></br>");
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            var select = search("preproduccion:TotalPredios");
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoDistritoPrestadoresAseo", 'Igual');
            var total2 = search("preproduccion:UsoDistritoPrestadoresAseo", 'PCDR');  
            var total3 = search("preproduccion:UsoDistritoPrestadoresAseo", 'PRDC');
            var total4 = search("preproduccion:UsoDistritoPrestadoresAseo", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Uso Aseo'});
            var titulo = "Uso Oficial vs Uso Aseo";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            var difuso = "difuso";
            queryexport = difuso + ' GAseo'; 
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['P.Comercial-D.Residencial'], ['P.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoDistritoPrestadoresAseoFiltro", values, 'Igual');
            var total2 = search("preproduccion:UsoDistritoPrestadoresAseoFiltro", values, 'PCDR');
            var total3 = search("preproduccion:UsoDistritoPrestadoresAseoFiltro", values, 'PRDC');
            var total4 = search("preproduccion:UsoDistritoPrestadoresAseoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            var titulo = "Uso Oficial vs Uso Aseo";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Uso Aseo', 'CQL_FILTER': eval(filtro)});
            var difuso = "difuso";
            queryexport = difuso + ' AseoF';              
           }                   
         }              
    } 
    
    else if (style === "uso_electricaribe") {
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Uso Coincidente'], ['E.Comercial-D.Residencial'], ['E.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoElectricaribeMunicipio", 'Igual');
            var total2 = search("preproduccion:UsoElectricaribeMunicipio", 'ECDR');
            var total3 = search("preproduccion:UsoElectricaribeMunicipio", 'ERDC');
            var total4 = search("preproduccion:UsoElectricaribeMunicipio", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } 
        else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Uso Coincidente'], ['E.Comercial-D.Residencial'], ['E.Residencial-D.Comercial'], ['Sin Informacion']];
            var total1 = search("preproduccion:UsoElectricaribeMunicipioFiltro", values, 'Igual');
            var total2 = search("preproduccion:UsoElectricaribeMunicipioFiltro", values, 'ECDR'); 
            var total3 = search("preproduccion:UsoElectricaribeMunicipioFiltro", values, 'ERDC');
            var total4 = search("preproduccion:UsoElectricaribeMunicipioFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4);
            estdistica(select, style, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';
               
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';
                
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';   
            }
            predio.getSource().updateParams({'STYLES': style, 'CQL_FILTER': eval(filtro)});
            queryexport = style;
        }
    }    
       
}





