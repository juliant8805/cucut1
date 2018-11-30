
function planos(id) {
 // limpiar_consulta();   
   if (document.getElementById("planospot").value != "seleccione") {
   map.on('singleclick', function (evt1) {   
        var resolution = map.getView().getResolution();
        if (document.getElementById("planospot").value === "EOR") {
        var url = redvialrural.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url1 = centrospoblados.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url2 = nodosregionales.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url3 = modelonodos.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url4 = subsistemavialrural.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url5 = ejesintegracionbinacional.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url6 = ejesintegracionnacional.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url7 = ejesintegracionregional.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url8 = suelodeproteccion.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url9 = hidrografia.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            if (url) {
              document.getElementById('divgetinfo').style.display = 'block';
              document.getElementById("marco4").src = url;
              document.getElementById("marco5").src = url1;
              document.getElementById("marco6").src = url2;
              document.getElementById("marco7").src = url3;  
              document.getElementById("marco8").src = url4;
              document.getElementById("marco9").src = url5;  
              document.getElementById("marco10").src = url6;
              document.getElementById("marco11").src = url7;  
              document.getElementById("marco12").src = url8;
              document.getElementById("marco13").src = url9;  
          }
        }
       
       else if (document.getElementById("planospot").value === "CSRCS") {    
        var url = cabecerasmunicipalesvecinas.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url1 = perimetromunicipal.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url2 = perimetrodeexpansion.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url3 = cuerposdeagua.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url4 = cabecerasmunicipalescolombia.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url5 = clasesdesuelo.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url6 = redvialrural.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url7 = centrospoblados.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url8 = perimetro2015.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
        var url9 = hidrografia.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            if (url) {
              document.getElementById('divgetinfo').style.display = 'block';
              document.getElementById("marco4").src = url;
              document.getElementById("marco5").src = url1;
              document.getElementById("marco6").src = url2;
              document.getElementById("marco7").src = url3;  
              document.getElementById("marco8").src = url4;
              document.getElementById("marco9").src = url5;  
              document.getElementById("marco10").src = url6;
              document.getElementById("marco11").src = url7;  
              document.getElementById("marco12").src = url8;
              document.getElementById("marco13").src = url9;  
          }
        }
       
       else if (document.getElementById("planospot").value === "CSUE") {  
            var url = cabecerasmunicipalesvecinas.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url1 = perimetromunicipal.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url2 = perimetrodeexpansion.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url3 = cuerposdeagua.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url4 = clasesdesuelo.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url5 = redvialrural.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url6 = centrospoblados.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url7 = perimetro2015.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url8 = hidrografia.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url9 = anillovial.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url10 = lineascomplementarias2015.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url11 = mapaconjuntoactualizado2015.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
            var url12 = categoriasdelsuelourbano.getSource().getGetFeatureInfoUrl(evt1.coordinate, resolution, 'EPSG:3857', {'INFO_FORMAT': 'text/html'});
       
            if (url) {
              document.getElementById('divgetinfo').style.display = 'block';
              document.getElementById("marco4").src = url;
              document.getElementById("marco5").src = url1;
              document.getElementById("marco6").src = url2;
              document.getElementById("marco7").src = url3;  
              document.getElementById("marco8").src = url4;
              document.getElementById("marco9").src = url5;  
              document.getElementById("marco10").src = url6;
              document.getElementById("marco11").src = url7;  
              document.getElementById("marco12").src = url8;
              document.getElementById("marco13").src = url9;
              document.getElementById("marco14").src = url10;
              document.getElementById("marco15").src = url11;
              document.getElementById("marco16").src = url12;
          }
        }
         
    });
   }
      
          
       
       

    
    if (document.getElementById("planospot").value === "EOR") {
        var pgetextent = [-8718882.408413, 514982.116461, -7353275.043087, 1309878.920178];
        map.getView().fitExtent(pgetextent, map.getSize());
        document.getElementById('plano_01').style.display = 'block';
        predio.setVisible(false);
        redvialrural.setVisible(true); 
        centrospoblados.setVisible(true);
        nodosregionales.setVisible(true);
        modelonodos.setVisible(true);
        subsistemavialrural.setVisible(true);
        ejesintegracionbinacional.setVisible(true);
        ejesintegracionnacional.setVisible(true);
        ejesintegracionregional.setVisible(true);
        suelodeproteccion.setVisible(true);
        hidrografia.setVisible(true);     
    }
    
    else if (document.getElementById("planospot").value === "CSRCS") {
        var pgetextent = [-8144021.249918, 854524.555451, -7990172.829397, 943996.173775];
        map.getView().fitExtent(pgetextent, map.getSize());
        document.getElementById('plano_03').style.display = 'block';
        predio.setVisible(false);
        cabecerasmunicipalesvecinas.setVisible(true);
        perimetromunicipal.setVisible(true);
        perimetrodeexpansion.setVisible(true);
        cuerposdeagua.setVisible(true);
        cabecerasmunicipalescolombia.setVisible(true);
        clasesdesuelo.setVisible(true);
        redvialrural.setVisible(true);
        centrospoblados.setVisible(true);
        perimetro2015.setVisible(true); 
        hidrografia.setVisible(true);  
    }
    
    else if (document.getElementById("planospot").value === "CSUE") {
        var pgetextent = [-8086065, 874885, -8056192, 890166];
        map.getView().fitExtent(pgetextent, map.getSize());
        document.getElementById('plano_04').style.display = 'block';
        predio.setVisible(false);
        cabecerasmunicipalesvecinas.setVisible(true);
        perimetromunicipal.setVisible(true);
        perimetrodeexpansion.setVisible(true);
        cuerposdeagua.setVisible(true);
        clasesdesuelo.setVisible(true);
        clasesdesuelo.getSource().updateParams({'STYLES': 'clases_del_suelo_plano_04'});	
        redvialrural.setVisible(true);
        centrospoblados.setVisible(true);
        perimetro2015.setVisible(true); 
        hidrografia.setVisible(true); 
        toponimiabarrios.setVisible(true);
        anillovial.setVisible(true);
        lineascomplementarias2015.setVisible(true);
        nomenclaturapot2011.setVisible(true);
        mapaconjuntoactualizado2015.setVisible(true);
        categoriasdelsuelourbano.setVisible(true); 
    }
    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    