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
   // console.log(style);
   // console.log(id);
    puntos_obras.setVisible(false);
    obras.setVisible(false);
    ejeobras.setVisible(false);
    globalstyle = style;
    document.getElementById("botonminimizar").style.display = "block";
    //document.getElementById("div_heatmap").style.display = "block";
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
     if (style === "Avance") { 
        predio.setVisible(true);
       //construcciones.setVisible(false);
             
            var select = search("cucuta:TotalPrediosCampo");
            var param = [['PENDIENTE'], ['CAPTURADO']];
            var total1 = search("cucuta:TrabajoCampo", 'PENDIENTE');
            var total2 = search("cucuta:TrabajoCampo", 'CAPTURADO');
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES': "u_terreno_formulario"});
            estdistica(select, style, param, totales, id);
            map.getView().fitExtent(pgetextent, map.getSize()); 
            queryexport = style;
          
    }
    // consultas comparacion estrato y destino 
     
         
         
       
                   
}
