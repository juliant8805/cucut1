function mostrartotem(consulta) {
    if (consulta === 'direcciontotem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputrefcatotemp').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        //document.getElementById('exp1').style.display = 'block';
        var x = document.getElementById("audiodireccion");
         x.play();
    } else if (consulta === 'referencia') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        //document.getElementById('exp1').style.display = 'none';
        //document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputrefcatotemp').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        /*var x = document.getElementById("audiodireccion");
         x.play();*/
    } else if (consulta === 'sitiototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputrefcatotemp').style.display = 'none';
        //document.getElementById('exp1').style.display = 'none';
        //document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        /*var x = document.getElementById("audiodireccion");
         x.play();*/
    } else if (consulta === 'barrio') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        //document.getElementById('buscar_dir').style.display = 'none';
        //document.getElementById('exp1').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        /*var x = document.getElementById("audiodireccion");
         x.play();*/
    } else if (consulta === 'manzana') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        //document.getElementById('exp1').style.display = 'none';
        //document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('inputmanzanatotem').style.display = 'block';
        document.getElementById('consultas_totem').style.display = 'block';
        /*var x = document.getElementById("audiodireccion");
         x.play();*/
    } else if (consulta === 'barriototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        //document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'none';
        document.getElementById('menubarriototem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        // document.getElementById('inputmanzanatotem').style.display = 'block';
        // document.getElementById('consultas_totem').style.display = 'block';
        //var x = document.getElementById("audiomanzana");
        //x.play();
    } else if (consulta === 'manzanatotem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        //document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        // document.getElementById('inputmanzanatotem').style.display = 'block';
        // document.getElementById('consultas_totem').style.display = 'block';
        //var x = document.getElementById("audiomanzana");
        //x.play();
    } else if (consulta === 'prediototem') {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        document.getElementById('inputmanzanatotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('buscar_ref').style.display = 'none';
        document.getElementById('menu_predio').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
        //document.getElementById('submenuprediototem').style.display = 'block';
        //document.getElementById('inputdirecciontotem').style.display = 'block';
        //document.getElementById('consultas_totem').style.display = 'block';
    } else if (consulta === 'direcciontotemp')
    {
        document.getElementById('menu_predio').style.display = 'none';
        document.getElementById('submenuprediototem').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('consultas_totem').style.display = 'none';
        document.getElementById('consultas_totemp').style.display = 'block';
    } else if (consulta === 'sitiototemp')
    {
        document.getElementById("inputsitiototem").value = "";
        document.getElementById("inputmanzanatotem").value = "";
        document.getElementById("inputbarriototem").value = "";
        document.getElementById("inputdirecciontotem").value = "";
        //document.getElementById('exp1').style.display = 'none';
        document.getElementById('buscar_dir').style.display = 'none';
        document.getElementById('inputdirecciontotem').style.display = 'none';
        document.getElementById('inputsitiototem').style.display = 'none';
        document.getElementById('inputbarriototem').style.display = 'none';
        document.getElementById('menu_totemp').style.display = 'none';
        document.getElementById('menumanzanatotem').style.display = 'none';
        document.getElementById('menubarriototem').style.display = 'none';
        document.getElementById('menusitiostotem').style.display = 'block';
        document.getElementById("volver").style.display = 'block';
    }
}
function factura(id) {
    //console.log(id);
    var aux = document.createElement("input");
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", id);
    // Añade el campo a la página
    document.body.appendChild(aux);
    // Selecciona el contenido del campo
    aux.select();
    // Copia el texto seleccionado
    document.execCommand("copy");
    document.getElementById('marco').src = "http://hacienda-alcaldiadecucuta.gov.co/impuestoscucuta/imppredial/index.php";
    document.getElementById('marco').style.display = 'block';
    document.getElementById('botoncerrarstreetview').style.display = 'block';
    alert("El código catastral ha sido copiado al portapapeles  Ahora puede pegarlo cuando lo requiera.");
    //var frame = document.getElementById('marco');
    //var txt = frame.contentWindow.document.getElementById('txt1').value;
    //console.log(frame.contentWindow.document.getElementByN);
    //frame.contentWindow.document.getElementById('codigocatastral').value = id;

}