var exportar = async function (x) {
    await putgif();
    await file(x);
    await quitgif();
};
function file() {
    var req = new ajaxRequest(); 
    if (queryexport.substring(0, 17) === "Tipo Construccion"){
         var titulo = JSON.stringify([["PREDIOS CON CONDICION DE PROPIEDAD HORIZONTAL"],["Codigo Predial Catastral", "Codigo Anterior", "Direccion", "Barrio", "Condicion de Propiedad"]]);
        if (queryexport === 'Tipo Construccion G') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios en regimen de propiedad horizontal</br>");
            var select = search("cucuta:Reportphg");
            quitgif();
        } else {
            alert("GESSTOR INFORMA:</br></br>La condicion de propiedad mayor a 800 corresponde a los predios en regimen de propiedad horizontal</br>");
            var select = search("cucuta:Reportph", values);
        }
    }
    
     else if (queryexport.substring(0, 16) === "Remoción en Masa"){
         var titulo = JSON.stringify([["PREDIOS CON RIESGO DE REMOCION EN MASA"],["Codigo Predial Catastral", "Direccion", "Barrio", "Nivel de Riesgo"]]);
        if (queryexport === 'Remoción en Masa G') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios que tienen riesgo de remoción en masa</br>");
            var select = search("cucuta:ReportRemociong");
            quitgif();
        } else {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los datos de riesgo de remoción en masa de los predios consultados</br>");
            var select = search("cucuta:ReportRemocion", values);
        }
    }
    
    
    
    else if (queryexport.substring(0, 24) === "Disponibilidad Acueducto"){
         var titulo = JSON.stringify([["PREDIOS CON COBERTURA DE ACUEDUCTO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Prestador Acueducto", "# Predios"]]);
        if (queryexport === 'Disponibilidad Acueducto G') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde no se encontro prestador del servicio de acueducto</br>");
            var select = search("cucuta:ReportDisponibilidadAcueductog");
            quitgif();
        } else {
            alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la informacion sobre la cobertura de acueducto por cada predio</br>");
            var select = search("cucuta:ReportDisponibilidadAcueducto", values);
        }
    }
    
    else if (queryexport.substring(0, 29) === "Disponibilidad Alcantarillado"){
         var titulo = JSON.stringify([["PREDIOS CON COBERTURA DE ALCANTARILLADO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Prestador Alcantarillado", "# Predios"]]);
        if (queryexport === 'Disponibilidad Alcantarillado G') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde no se encontro prestador del servicio de alcantarillado</br>");
            var select = search("cucuta:ReportDisponibilidadAlcantarilladog");
            quitgif();
        } else {
            alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la informacion sobre la cobertura de Alcantarillado por cada predio</br>");
            var select = search("cucuta:ReportDisponibilidadAlcantarillado", values);
        }
    }
    
    else if (queryexport.substring(0, 19) === "Disponibilidad Aseo"){
         var titulo = JSON.stringify([["PREDIOS CON COBERTURA DE ASEO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Prestador Aseo", "# Predios"]]);
        if (queryexport === 'Disponibilidad Aseo G') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde no se encontro prestador del servicio de Aseo</br>");
            var select = search("cucuta:ReportDisponibilidadAseog");
            quitgif();
        } else {
            alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la informacion sobre la cobertura de Aseo por cada predio</br>");
            var select = search("cucuta:ReportDisponibilidadAseo", values);
        }
    }
    
    
    
    
    else if (queryexport.substring(0, 14) === "oficial_vs_AAA"){
        var titulo = JSON.stringify([["PREDIOS CON ESTRATO MAS ALTO EN LA BASE DE PRESTADORES"],["Codigo Predial","Direccion","Barrio", "Estrato Hacienda", "Estrato Prestador", "# Predios"]]);
        if (queryexport == "oficial_vs_AAA Acued G"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde el estrato de la base de Hacienda es menor al estrato reportado por el prestador de Acueducto</br></br>");
            var select = search("cucuta:ReportDiferenciaEstratoAcueductoGeneral");
            quitgif(); 
        } 
        else if (queryexport == "oficial_vs_AAA Alc G"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde el estrato de la base de Hacienda es menor al estrato reportado por el prestador de Alcantarillado</br></br>");
            var select = search("cucuta:ReportDiferenciaEstratoAlcantarilladoGeneral");
            quitgif();
        }  
        else if (queryexport == "oficial_vs_AAA Aseo G"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde el estrato de la base de Hacienda es menor al estrato reportado por el prestador de Aseo</br></br>");
            var select = search("cucuta:ReportDiferenciaEstratoAseoGeneral");
            quitgif();
        }
        else if (queryexport == "oficial_vs_AAA AcueductoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la comparacion del estrato de la base de Hacienda y el estrato de la base de prestadores de Acueducto</br></br>");
            var select = search("cucuta:ReportDiferenciaEstratoAcueducto", values);
            quitgif();
        } 
        else if (queryexport == "oficial_vs_AAA AlcantarilladoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la comparacion del estrato de la base de Hacienda y el estrato de la base de prestadores de Alcantarillado</br></br>");
            var select = search("cucuta:ReportDiferenciaEstratoAlcantarillado", values);
        } 
        else if (queryexport == "oficial_vs_AAA AseoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la comparacion del estrato de la base de Hacienda y el estrato de la base de prestadores de Aseo</br></br>");
            var select = search("cucuta:ReportDiferenciaEstratoAseo", values);
        }    
    }
      
    else if (queryexport.substring(0, 18) === "Uso_oficial_vs_AAA") {
      var titulo = JSON.stringify([["DIFERENCIAS DE USO (PRESTADORES) Y DESTINO ECONOMICO (HACIENDA)"],["Codigo Predial","Direccion","Barrio", "Destino Economico Hacienda"]]);
        if (queryexport == "Uso_oficial_vs_AAA GAcueducto"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde el Destino Economico de la base de Hacienda es Residencial y el Destino Economico reportado por el prestador de Acueducto es Comercial</br></br>");
            var select = search("cucuta:ReportDiferenciaUsoAcueductoGeneral");
            quitgif();    
        } 
        else if (queryexport == "Uso_oficial_vs_AAA GAlcantarillado"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde el Destino Economico de la base de Hacienda es Residencial y el Destino Economico reportado por el prestador de Alcantarillado es Comercial</br></br>");
            var select = search("cucuta:ReportDiferenciaUsoAlcantarilladoGeneral");
            quitgif(); 
        } 
        else if (queryexport == "Uso_oficial_vs_AAA GAseo"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde el Destino Economico de la base de Hacienda es Residencial y el Destino Economico reportado por el prestador de Aseo es Comercial</br></br>");
            var select = search("cucuta:ReportDiferenciaUsoAseoGeneral");
            quitgif();
        } 
        else if (queryexport == "Uso_oficial_vs_AAA AcueductoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la comparacion del Destino Economico de la base de Hacienda y el Destino Economico reportado por el prestador de Acueducto</br></br>");
            var select = search("cucuta:ReportDiferenciaUsoAcueducto", values);
            quitgif();
        } 
        else if (queryexport == "Uso_oficial_vs_AAA AlcantarilladoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la comparacion del Destino Economico de la base de Hacienda y el Destino Economico reportado por el prestador de Alcantarillado</br></br>");
            var select = search("cucuta:ReportDiferenciaUsoAlcantarillado", values);
            quitgif();
        } 
        else if (queryexport == "Uso_oficial_vs_AAA AseoF"){
             alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la comparacion del Destino Economico de la base de Hacienda y el Destino Economico reportado por el prestador de Aseo</br></br>");
             var select = search("cucuta:ReportDiferenciaUsoAseo", values);
             quitgif();
        }    
    }
      
    else if (queryexport.substring(0, 7) === "exentos") {
        var titulo = JSON.stringify([["PREDIOS EXENTOS"],["Codigo Predial Catastral", "Direccion", "Barrio", "Exento", "# Predios"]]);
        if (queryexport === 'exentos G') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios Exentos de pago de impuesto predial</br>");
            var select = search("cucuta:Reportexentosg");
            quitgif();
        } 
        else {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a la informacion predial para verificar la condicion de Exento de pago de impuesto predial</br>");
            var select = search("cucuta:Reportexentos", values);
            quitgif();
        }  
    }
    
    else if (queryexport.substring(0, 11) === "Saneamiento"){
        var titulo = JSON.stringify([["PREDIOS DONDE NO SE IDENTIFICA EL PRESTADOR"],["Codigo Predial Catastral", "Direccion", "Barrio", "Prestador Acueducto", "# Predios"]]);
        if (queryexport == "Saneamiento GAcueducto"){
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde no se encontro prestador del servicio de acueducto</br>");
            var select = search("cucuta:ReportDisponibilidadAcueductog");
            quitgif();
        } 
        else if (queryexport === 'Saneamiento GAlcantarillado') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde no se encontro prestador del servicio de alcantarillado</br>");
            var select = search("cucuta:ReportDisponibilidadAlcantarilladog");
            quitgif();
        }
        else if (queryexport === 'Saneamiento GAseo') {
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios donde no se encontro prestador del servicio de Aseo</br>");
            var select = search("cucuta:ReportDisponibilidadAseog");
            quitgif();
        }
        else if (queryexport == "Saneamiento AcueductoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la informacion sobre la cobertura de acueducto por cada predio</br>");
            var select = search("cucuta:ReportDisponibilidadAcueducto", values);
            quitgif();
        } 
        else if (queryexport == "Saneamiento AlcantarilladoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la informacion sobre la cobertura de Alcantarillado por cada predio</br>");
            var select = search("cucuta:ReportDisponibilidadAlcantarillado", values);
            quitgif();
        } 
        else if (queryexport == "Saneamiento AseoF"){
            alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la informacion sobre la cobertura de Aseo por cada predio</br>");
            var select = search("cucuta:ReportDisponibilidadAseo", values);
            quitgif();
        }    
    }
    
        else if (queryexport.substring(0, 16) === "Avaluo Catastral"){
        var titulo = JSON.stringify([["AVALUO CATASTRAL"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "# Predios"]]);
        if (queryexport === 'Avaluo Catastral rangosG') {
             alert("GESSTOR INFORMA:</br></br>La base es demasiado grande para exportarla completa, por favor primero filtre por Localidad, Barrio o Manzana</br>");
             quitgif(); 
        } 
        else if (queryexport === 'Avaluo Catastral rangosF') {
        var titulo = JSON.stringify([["AVALUO CATASTRAL"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "# Predios"]]);
        var select = search("cucuta:ReportAvaluoCatastral", values);
        quitgif();
        } 
        else if (queryexport === 'Avaluo Catastral crecimientobaseG'){
        var titulo = JSON.stringify([["PREDIOS INCORPORADOS ENTRE 2016 Y 2018"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "# Predios", "Vigencia de Incorporacion"]]);
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a los predios incorporados a la base catastral en 2016, 2017 y 2018</br>");
        var select = search("cucuta:ReportCrecimiento");
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral crecimientobaseF'){
        var titulo = JSON.stringify([["PREDIOS INCORPORADOS ENTRE 2016 Y 2018"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "# Predios", "Vigencia de Incorporacion"]]);
		  alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la vigencia de incorporacion a la base catastral de los predios filtrados</br>");
        var select = search("cucuta:ReportCrecimientoFiltro", values);        
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral pagopredialG'){
        var titulo = JSON.stringify([["Codigo Predial Catastral", "Codigo Anterior" , "Direccion", "Barrio", "Avaluo", "Pago Realizado"]]);
        alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande para exportala completa, por favor primero realice un filtro por barrio o manzana</br>");
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral pagopredialF'){
        var titulo = JSON.stringify([["PREDIOS QUE DEBEN PREDIAL DE 2017"],["Codigo Predial Catastral", "Codigo Anterior" , "Direccion", "Barrio", "Avaluo", "Pago Realizado"]]);
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la clasificacion de predios que pagaron o no a tiempo el impuesto predial para la vigencia 2017</br>");
		  var select = search("cucuta:ReportPago2017Filtro", values);        
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral pagopredial2018G'){
        var titulo = JSON.stringify([["PREDIOS QUE PAGARON PREDIAL 2018"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "Tiene Deuda Predial 2018"]]);
        alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios que ya realizaron el pago del impuesto predial para la vigencia de 2018</br>");
        var select = search("cucuta:ReportPago2018"); 
        quitgif();
        }         
        else if (queryexport === 'Avaluo Catastral pagopredial2018F'){
        var titulo = JSON.stringify([["PREDIOS QUE PAGARON PREDIAL 2018"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "Tiene Deuda Predial 2018"]]);
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde al estado de pago del impuesto predial para la vigencia 2018</br>");
        var select = search("cucuta:ReportPago2018Filtro", values);        
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral cambiosavaluosG'){
        var titulo = JSON.stringify([["PREDIOS EN LOS QUE EL AVALUO CATASTRAL TUVO UNA VARIACION MAYOR AL 10%"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo 2018", "# Predios", "% Variacion Avaluo (2015-2018)"]]);
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a los predios que tuvieron una variacion del avaluo catatral mayor al 10% en el periodo de 2015 a 2018</br>");
        var select = search("cucuta:ReportCambioAvaluo");         
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral cambiosavaluosF'){
		  var titulo = JSON.stringify([["VARIACION DEL AVALUO CATASTRAL"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo 2018", "# Predios", "% Variacion Avaluo (2015-2018)"]]);        
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a la variacion del avaluo catastral en terminos de porcentaje en el periodo de 2015 a 2018</br>");
        var select = search("cucuta:ReportCambioAvaluoFiltro", values);        
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral cambiosavaluo2017G'){
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a los predios en los que formalmente se solicito rebaja en el avaluo catastral</br>");
        var titulo = JSON.stringify([["PREDIOS CON RADICACIONES"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "# Predios", "Porcentaje de Variacion"]]);
        var select = search("cucuta:ReportRebajaAvaluo"); 
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral cambiosavaluo2017F'){
		  alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a los predios en los que formalmente se solicito rebaja en el avaluo catastral</br>");		  
		  var titulo = JSON.stringify([["PREDIOS CON RADICACIONES"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "# Predios", "Porcentaje de Variacion"]]);
        var select = search("cucuta:ReportRebajaAvaluoFiltro", values);        
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral prediosmunicipioG'){
        alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a los predios que en la base Igac aparecen como propiedad del Municipio</br>");
        var titulo = JSON.stringify([["PREDIOS DE PROPIEDAD DEL MUNICIPIO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "Propietario"]]);
        var select = search("cucuta:ReportPrediosMunicipio"); 
        quitgif();
        }
        else if (queryexport === 'Avaluo Catastral prediosmunicipioF'){
		  alert("GESSTOR INFORMA:</br></br>El reporte solicitado corresponde a los predios que en la base Igac aparecen como propiedad del Municipio</br>");		  
		  var titulo = JSON.stringify([["PREDIOS DE PROPIEDAD DEL MUNICIPIO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Avaluo", "Propietario"]]);
          var select = search("cucuta:ReportPrediosMunicipio");        
          quitgif();
        }
    }
    
    
    else if (queryexport.substring(0, 12) === "valorizacion"){
        var titulo = JSON.stringify(["PREDIOS POR FRANJA DE MUNICIPIO"],["Codigo Predial Catastral", "Direccion", "Franja", "Zona de Beneficio", "# Predios", "Avaluo"]);
        if (queryexport === 'valorizacion GValorizacionP') {
				 //var select = search("cucuta:ReportFranjasValorizacion");             
             alert("GESSTOR INFORMA:</br></br>El reporte corresponde a las franjas de beneficio a nivel predial</br>");
             window.open('./documentos/ReportFranjasValorizacion.xlsx','_blank');
             quitgif(); 
        } 
        else {
        var titulo = JSON.stringify([["PREDIOS POR FRANJA DE MUNICIPIO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Franja", "Zona de Beneficio", "# Predios", "Avaluo"]]);
        var select = search("cucuta:ReportFranjasValorizacionFiltro", values);
        quitgif();
        } 
    }  
    
    else if (queryexport.substring(0, 15) === "Estratificacion"){    
        if (queryexport === 'Estratificacion G') {
             alert("GESSTOR INFORMA:</br></br>La base de datos es demasiado grande para exportala completa, por favor primero realice un filtro por barrio o manzana</br>");
            quitgif();
        } else {
            var titulo = JSON.stringify([["PREDIOS POR ESTRATO"],["Codigo Predial Catastral", "Direccion", "Barrio", "Estrato"]]);
            alert("GESSTOR INFORMA:</br></br>El reporte corresponde al listado de predios seleccionados en la consulta con su respectivo estrato</br>");
            var select = search("cucuta:ReportEstratificacion", values);
            quitgif();
        }
    } 
    
    else if (queryexport.substring(0, 14) === "DiferenciaArea"){
        if (queryexport === 'DiferenciaArea DifAreaTG') {
             var titulo = JSON.stringify([["PREDIOS CON DIFERENCIA DE AREA OFICIAL VS GRAFICA"],["Codigo Predial Catastral", "Direccion", "Barrio", "Area Registro", "Area Grafica"]]);
             alert("GESSTOR INFORMA:</br></br>El listado corresponde a los predios que tienen una diferencia entre el área de registro y el área gráfica mayor a 10%</br>");
             var select = search("cucuta:ReportDifAreaT", 11, 10000); 
             quitgif();
        } else {
            var titulo = JSON.stringify([["PREDIOS CON DIFERENCIA DE AREA OFICIAL VS GRAFICA"],["Codigo Predial Catastral", "Direccion", "Barrio", "Area Registro", "Area Grafica"]]);
            alert("GESSTOR INFORMA:</br></br>El listado corresponde a los predios que tienen una diferencia entre el área de registro y el área gráfica mayor a 10%</br>");
            var select = search("cucuta:ReportDifAreaTFiltro", values, 11, 10000);
            quitgif();
        }
    } 
    
    
    var arr = JSON.stringify(select);
    arr = arr.replace(/\./g, ",");
    console.log(arr);
    //console.log(titulo);
    var url = "/export/export.php";
    var params = "arreglo=" + arr + "&titulos=" + titulo;
    req.open("POST", url, false);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(params);
    document.location = './export/Reporte.xls';
}