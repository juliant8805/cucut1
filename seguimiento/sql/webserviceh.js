function enviarRef(referencia) {
    var ref = referencia;
    //console.log(ref);
    var urlphp = 'sql/webserviceh.php';
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
    var cadena = temp.responseText;
    separador = "%%", // un espacio en blanco
            arregloDeSubCadenas = cadena.split(separador);
    return arregloDeSubCadenas;
}