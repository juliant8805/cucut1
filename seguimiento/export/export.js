var exportar = async function (x) {
    await putgif();
    await file(x);
    await quitgif();
};
function file() {
    var req = new ajaxRequest(); 
    if (queryexport.substring(0, 6) === "Avance"){
         var titulo = JSON.stringify([["AVANCE"],["CODIGO","ESTADO", "DIRECCION", "BARRIO", "SUPERVISOR", "RECOLECTOR", "TIPO PREDIO", "USO PREDIO", "VIA ACCESO", "LATITUD", "LONGITUD", "FOCOS CONTAMINACION", "FECHA"]]);
 
           // alert("GESSTOR INFORMA:</br></br>El reporte corresponde a los predios que ya cuentan con información de campo</br>");
            var select = search("cucuta:ReportTrabajoCampo");
            //console.log(select);
            quitgif();
        
    }
    
    
    
    
    
    var arr = JSON.stringify(select);
    arr = arr.replace(/\./g, ",");
    //console.log(arr);
    //console.log(titulo);
    var url = "/export/export.php";
    //console.log(url);
    var params = "arreglo=" + arr + "&titulos=" + titulo;
    req.open("POST", url, false);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(params);
    document.location = '/export/Reporte.xls';
}