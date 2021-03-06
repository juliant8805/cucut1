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
    document.getElementById('mensaje').style.display = 'none';
    if (style === "Distrito vs Prestadores AAA") {
        document.getElementById("statistics").style.display = "none";
        document.getElementById("botonocultarstatistics").style.display = "none";
        document.getElementById("botonmostrarstatistics").style.display = "none";
        predio.setVisible(false);
        construcciones.setVisible(false);
        predio.setVisible(true);
        puntos_aaa.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA vigencia 01/03/2017");
            var select = search("preproduccion:TotalPredios");
            var param = [['Predios Coincidentes'], ['Predios En base catastral y no en AAA'], ['Registros AAA sin codigo catastral']];
            var total1 = search("preproduccion:DistritovsPrestadores", 'Si');
            var total2 = search("preproduccion:DistritovsPrestadores", 'No');  
            var total3 = search("preproduccion:PrestadoresAAA", '999'); 
            var totales = total1.concat(total2, total3);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Predios Coincidentes'], ['Predios En base catastral y no en AAA']/*, ['Registros AAA sin codigo catastral']*/];
            var total1 = search("preproduccion:DistritovsPrestadoresFiltro", values, 'Si');
            var total2 = search("preproduccion:DistritovsPrestadoresFiltro", values, 'No');
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
    
       else if (style === "oficial_vs_AAA") {
            puntos_aaa.setVisible(false);
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("oficial_vs_AAA").value === "Acueducto") {
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017");
            var select = search("preproduccion:TotalPredios");
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Otro'],['Sin Informacion']];
            var total1 = search("preproduccion:EstratoDistritoPrestadoresAcueducto", 'Igual');
            var total2 = search("preproduccion:EstratoDistritoPrestadoresAcueducto", 'prest'); 
            var total3 = search("preproduccion:EstratoDistritoPrestadoresAcueducto", 'dist'); 
            var total4 = search("preproduccion:EstratoDistritoPrestadoresAcueducto", 'sincomp');
            var total5 = search("preproduccion:EstratoDistritoPrestadoresAcueducto", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Acueducto'});
            var titulo = "Est Oficial vs Est Acueducto";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';   
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Otro'],['Sin Informacion']];
            var total1 = search("preproduccion:EstratoDistritoPrestadoresAcueductoFiltro", values, 'Igual');
            var total2 = search("preproduccion:EstratoDistritoPrestadoresAcueductoFiltro", values, 'prest');
            var total3 = search("preproduccion:EstratoDistritoPrestadoresAcueductoFiltro", values, 'dist');
            var total4 = search("preproduccion:EstratoDistritoPrestadoresAcueductoFiltro", values, 'sincomp');
            var total5 = search("preproduccion:EstratoDistritoPrestadoresAcueductoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            var titulo = "Est Oficial vs Est Acueducto";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Acueducto', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AcueductoF';              
           }                   
        }
         
         else if (document.getElementById("oficial_vs_AAA").value === "Alcantarillado") {
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017");
            var select = search("preproduccion:TotalPredios");
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Otro'],['Sin Informacion']];
            var total1 = search("preproduccion:EstratoDistritoPrestadoresAlcantarillado", 'Igual');
            var total2 = search("preproduccion:EstratoDistritoPrestadoresAlcantarillado", 'prest');  
            var total3 = search("preproduccion:EstratoDistritoPrestadoresAlcantarillado", 'dist'); 
            var total4 = search("preproduccion:EstratoDistritoPrestadoresAlcantarillado", 'sincomp');
            var total5 = search("preproduccion:EstratoDistritoPrestadoresAlcantarillado", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Alcantarillado'});
            var titulo = "Est Oficial vs Est Alcantarillado";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';  
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Otro'],['Sin Informacion']];
            var total1 = search("preproduccion:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'Igual');
            var total2 = search("preproduccion:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'prest');
            var total3 = search("preproduccion:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'dist');
            var total4 = search("preproduccion:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'sincomp');
            var total5 = search("preproduccion:EstratoDistritoPrestadoresAlcantarilladoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            var titulo = "Oficial vs AAA Alcantarillado";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Alcantarillado', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AlcantarilladoF';               
           }                   
         } 
         
         else if (document.getElementById("oficial_vs_AAA").value === "Aseo") {
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017");
            var select = search("preproduccion:TotalPredios");
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Otro'],['Sin Informacion']];
            var total1 = search("preproduccion:EstratoDistritoPrestadoresAseo", 'Igual');
            var total2 = search("preproduccion:EstratoDistritoPrestadoresAseo", 'prest');  
            var total3 = search("preproduccion:EstratoDistritoPrestadoresAseo", 'dist');
            var total4 = search("preproduccion:EstratoDistritoPrestadoresAseo", 'sincomp');
            var total5 = search("preproduccion:EstratoDistritoPrestadoresAseo", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            predio.getSource().updateParams({'STYLES':'Oficial vs AAA Aseo'});
            var titulo = "Est Oficial vs Est Aseo";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';   
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Est. Coincidentes'],['Est. Prestador Mas Alto'],['Est. Prestador Mas Bajo'],['Otro'],['Sin Informacion']];
            var total1 = search("preproduccion:EstratoDistritoPrestadoresAseoFiltro", values, 'Igual');
            var total2 = search("preproduccion:EstratoDistritoPrestadoresAseoFiltro", values, 'prest');
            var total3 = search("preproduccion:EstratoDistritoPrestadoresAseoFiltro", values, 'dist');
            var total4 = search("preproduccion:EstratoDistritoPrestadoresAseoFiltro", values, 'sincomp');
            var total5 = search("preproduccion:EstratoDistritoPrestadoresAseoFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5);
            var titulo = "Oficial vs AAA Aseo";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Oficial vs AAA Aseo', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AseoF';               
           }                   
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
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017");
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
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017");
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
            alert("GESSTOR INFORMA:</br></br>Información utilizada en esta consulta:</br>1. Base de Datos Catastral vigencia 01/03/2017</br>2. Base de datos prestadores AAA (84% de registros encontrados en la base catastral) vigencia 01/03/2017");
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
        
    else if (style === "disponibilidad_AAA") {
            puntos_aaa.setVisible(false);
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("disponibilidad_AAA").value === "Acueducto") {
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            var select = search("preproduccion:TotalPredios");
            var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Acueducto']];
            var total1 = search("preproduccion:DisponibilidadAcueductoConPrestador", 'Sin Prestador');
            var total2 = search("preproduccion:DisponibilidadAcueductoSinPrestador", 'Sin Prestador');  
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Acueducto'});
            var titulo = "Disponibilidad de Acueducto";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';   
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Existe Prestador de Acueducto'], ['Sin Prestador de Acueducto']];
            var total1 = search("preproduccion:DisponibilidadAcueductoConPrestadorFiltro", values, 'Sin Prestador');
            var total2 = search("preproduccion:DisponibilidadAcueductoSinPrestadorFiltro", values, 'Sin Prestador');
            var totales = total1.concat(total2);
            var titulo = "Disponibilidad de Acueducto";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Acueducto', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AcueductoF';            
           }                   
        }
         
         else if (document.getElementById("disponibilidad_AAA").value === "Alcantarillado") {
            puntos_aaa.setVisible(false);
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            var select = search("preproduccion:TotalPredios");
            var param = [['Existe Prestador de Alcantarillado'], ['Sin Prestador de Alcantarillado']];
            var total1 = search("preproduccion:DisponibilidadAlcantarilladoConPrestador", 'Sin Prestador');
            var total2 = search("preproduccion:DisponibilidadAlcantarilladoSinPrestador", 'Sin Prestador');  
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Alcantarillado'});
            var titulo = "Disponibilidad de Alcantarillado";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';   
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Existe Prestador de Alcantarillado'], ['Sin Prestador de Alcantarillado']];
            var total1 = search("preproduccion:DisponibilidadAlcantarilladoConPrestadorFiltro", values, 'Sin Prestador');
            var total2 = search("preproduccion:DisponibilidadAlcantarilladoSinPrestadorFiltro", values, 'Sin Prestador');
            var totales = total1.concat(total2);
            var titulo = "Disponibilidad de Alcantarillado";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Alcantarillado', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AlcantarilladoF';                   
           }                   
         } 
         
         else if (document.getElementById("disponibilidad_AAA").value === "Aseo") {
            puntos_aaa.setVisible(false);
            document.getElementById("statistics").style.display = "none";
            document.getElementById("botonocultarstatistics").style.display = "none";
            document.getElementById("botonmostrarstatistics").style.display = "none";
            construcciones.setVisible(false); 
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === ''){
            var select = search("preproduccion:TotalPredios");
            var param = [['Existe Prestador de Aseo'], ['Sin Prestador de Aseo']];
            var total1 = search("preproduccion:DisponibilidadAseoConPrestador", 'Sin Prestador');
            var total2 = search("preproduccion:DisponibilidadAseoSinPrestador", 'Sin Prestador');  
            var totales = total1.concat(total2);
            predio.getSource().updateParams({'STYLES':'Disponibilidad Aseo'});
            var titulo = "Disponibilidad de Aseo";
            estdistica(select, titulo, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';   
           } 
           else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Existe Prestador de Aseo'], ['Sin Prestador de Aseo']];
            var total1 = search("preproduccion:DisponibilidadAseoConPrestadorFiltro", values, 'Sin Prestador');
            var total2 = search("preproduccion:DisponibilidadAseoSinPrestadorFiltro", values, 'Sin Prestador');
            var totales = total1.concat(total2);
            var titulo = "Disponibilidad de Aseo";
            estdistica(select, titulo, param, totales);
            var valor = "'" + values + "'";
            if (document.getElementById("barrio").value !== '') {
                var filtro = '"cod_barrio=' + valor + '"';   
            } else if (document.getElementById("localidad").value !== '') {
                var filtro = '"cod_loc=' + valor + '"';  
            } else if (document.getElementById("manzana").value !== '') {
                var filtro = '"manzana_co=' + valor + '"';  
            }
            predio.getSource().updateParams({'STYLES': 'Disponibilidad Aseo', 'CQL_FILTER': eval(filtro)});
            queryexport = style + ' AseoF';                    
           }                   
         }          
    }    
    
    else if (style === "estratificacion_oficial") {
        construcciones.setVisible(false);
        predio.setVisible(true);
        if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
            var total1 = search("preproduccion:EstratificacionOficial", '1');
            var total2 = search("preproduccion:EstratificacionOficial", '2');
            var total3 = search("preproduccion:EstratificacionOficial", '3');
            var total4 = search("preproduccion:EstratificacionOficial", '4');
            var total5 = search("preproduccion:EstratificacionOficial", '5');
            var total6 = search("preproduccion:EstratificacionOficial", '6');
            var total7 = search("preproduccion:EstratificacionOficial", 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5, total6, total7);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } 
        else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Estrato 1'], ['Estrato 2'], ['Estrato 3'], ['Estrato 4'], ['Estrato 5'], ['Estrato 6'], ['Sin Estrato']];
            var total1 = search("preproduccion:EstratificacionOficialFiltro", values, '1');
            var total2 = search("preproduccion:EstratificacionOficialFiltro", values, '2');
            var total3 = search("preproduccion:EstratificacionOficialFiltro", values, '3');
            var total4 = search("preproduccion:EstratificacionOficialFiltro", values, '4');
            var total5 = search("preproduccion:EstratificacionOficialFiltro", values, '5');
            var total6 = search("preproduccion:EstratificacionOficialFiltro", values, '6');
            var total7 = search("preproduccion:EstratificacionOficialFiltro", values, 'Sin Informacion');
            var totales = total1.concat(total2, total3, total4, total5, total6, total7);
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
    
    else if (style === "Nomenclatura Domiciliaria") {
            construcciones.setVisible(false);
            predio.setVisible(true);
            if (document.getElementById("barrio").value === '' && document.getElementById("localidad").value === '' && document.getElementById("manzana").value === '') {
            var select = search("preproduccion:TotalPredios");
            var param = [['Nomenclatura Estandarizada'], ['Nomenclatura No Estandarizada'], ['Sin Direccion']];
            var total1 = search("preproduccion:NomenclaturaEstandarizada", 'SI');
            var total2 = search("preproduccion:NomenclaturaEstandarizada", 'NO');
            var total3 = search("preproduccion:NomenclaturaEstandarizada", 'NN');
            var totales = total1.concat(total2, total3);
            predio.getSource().updateParams({'STYLES': style});
            estdistica(select, style, param, totales);
            map.getView().fitExtent(predio.getExtent(), map.getSize());
            queryexport = style + ' G';
        } 
        else {
            var select = search("preproduccion:TotalPrediosSinConsulta", values);
            var param = [['Nomenclatura Estandarizada'], ['Nomenclatura No Estandarizada'], ['Sin Direccion']];
            var total1 = search("preproduccion:NomenclaturaEstandarizadaFiltro", values, 'SI');
            var total2 = search("preproduccion:NomenclaturaEstandarizadaFiltro", values, 'NO');
            var total3 = search("preproduccion:NomenclaturaEstandarizadaFiltro", values, 'NN');
            var totales = total1.concat(total2, total3);
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




