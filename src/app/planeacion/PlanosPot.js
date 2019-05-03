
function planos(id) {
 // limpiar_consulta();
   layerPot2011.setVisible(true);   
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
    
    else if (document.getElementById("planospot").value === "EEPSR") {
        var pgetextent = [-8144021.249918, 854524.555451, -7990172.829397, 943996.173775];
        map.getView().fitExtent(pgetextent, map.getSize());
        document.getElementById('plano_05').style.display = 'block';
        predio.setVisible(false);
        areamanejoespecial.setVisible(true);
        areamanejoespecial.getSource().updateParams({'STYLES': 'areamanejoespecial_plano_05'});
        clasesdesuelo.setVisible(true);
        clasesdesuelo.getSource().updateParams({'STYLES': 'clasesdesuelo_plano_05'});
        cabecerasmunicipalesvecinas.setVisible(true);
        cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
        centrospoblados.setVisible(true);
        centrospoblados.getSource().updateParams({'STYLES': 'centros_poblado_pot_2011'});
        parquesdeborde.setVisible(true);
        parquesdeborde.getSource().updateParams({'STYLES': 'parques_de_borde'});
        perimetro2015.setVisible(true);
        perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012'});
        perimetromunicipal.setVisible(true);
        perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_05'});
        perimetrodeexpansion.setVisible(true);
        perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_05'});
        prediosadquiridosmunicipio.setVisible(true);
        prediosadquiridosmunicipio.getSource().updateParams({'STYLES': 'predios_adquiridos_municipio_plano_05'});
        redvialrural.setVisible(true);
        redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
        hidrografia.setVisible(true);
        riospoligono.setVisible(true);
        riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
        rondasrio.setVisible(true);
        rondasrio.getSource().updateParams({'STYLES': 'rondas_rio_plano_05'});
       
    }  
    
    else if (document.getElementById("planospot").value === "RE") {
        var pgetextent = [-8086065, 874885, -8056192, 890166];
        map.getView().fitExtent(pgetextent, map.getSize());
        document.getElementById('plano_06').style.display = 'block';
        predio.setVisible(false);
        riesgosurbanos.setVisible(true);
        riesgosurbanos.getSource().updateParams({'STYLES': 'riesgosurbanos_plano06'});
        mapaconjuntoactualizado2015.setVisible(true);
        mapaconjuntoactualizado2015.getSource().updateParams({'STYLES': 'mapaconjuntoactualizado2015_plano_06'});
        subsistemavialurbano.setVisible(true);
        subsistemavialurbano.getSource().updateParams({'STYLES': 'subsistema_vial_urbano_plano_06'});
        perimetro2015.setVisible(true);
        perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012'});
        perimetromunicipal.setVisible(true);
        perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_05'});
        perimetrodeexpansion.setVisible(true);
        perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_05'});
        hidrografia.setVisible(true); 
        cabecerasmunicipalesvecinas.setVisible(true);
        cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
        redvialrural.setVisible(true);
        redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
        anillovial.setVisible(true);
    }  
    
    else if (document.getElementById("planospot").value === "SSVR") {
    	  var pgetextent = [-8086065, 874885, -8056192, 890166];
        map.getView().fitExtent(pgetextent, map.getSize());
    	  document.getElementById('plano_07').style.display = 'block';
        predio.setVisible(false);
        perimetro2015.setVisible(true);
        perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012'});
        interseccionesrurales.setVisible(true);
        interseccionesrurales.getSource().updateParams({'STYLES': 'interseccionesrural_plano_07'});
        subsistemavialrural.setVisible(true);
        subsistemavialrural.getSource().updateParams({'STYLES': 'subsistema_vial_rural_plano_07'});
        perimetrodeexpansion.setVisible(true);
        perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_05'});
        redvialrural.setVisible(true);
        redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
        hidrografia.setVisible(true); 
        perimetromunicipal.setVisible(true);
        perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_05'});
        cabecerasmunicipalesvecinas.setVisible(true);
        cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
        riospoligono.setVisible(true);
        riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
        cabecerasmunicipalesvecinas.setVisible(true);
        cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
        clasesdesuelo.setVisible(true);
        clasesdesuelo.getSource().updateParams({'STYLES': 'clasesdesuelo_plano_05'});
    }
    else if (document.getElementById("planospot").value === "SSVU") {
    	 var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
    	 document.getElementById('plano_08').style.display = 'block';
       predio.setVisible(false);  
       subsistemavialurbano.setVisible(true);   
       subsistemavialurbano.getSource().updateParams({'STYLES': 'subsistema_vial_urbano_plano_06'});
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_06'});
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       /*mapaconjuntoactualizado2015.setVisible(true);
       mapaconjuntoactualizado2015.getSource().updateParams({'STYLES': 'mapaconjuntoactualizado2015_plano_06'});*/

    }   
    else if (document.getElementById("planospot").value === "SST") {
    	 var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);     
       document.getElementById('plano_09').style.display = 'block';
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});
       interseccionesssvurbano.setVisible(true);
       toponimiabarrios.setVisible(true);
       subsistemavialurbano.setVisible(true);   
       subsistemavialurbano.getSource().updateParams({'STYLES': 'subsistema_vial_urbano_plano_06'});
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
     /* mapaconjuntoactualizado2015.setVisible(true);
       mapaconjuntoactualizado2015.getSource().updateParams({'STYLES': 'mapaconjuntoactualizado2015_plano_06'});*/
       }
    else if (document.getElementById("planospot").value === "SSVSV") {
    	 var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       document.getElementById('plano_10').style.display = 'block';
       predio.setVisible(false);     
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});
       toponimiabarrios.setVisible(true);
       subsistemavialurbano.setVisible(true);   
       subsistemavialurbano.getSource().updateParams({'STYLES': 'subsistema_vial_urbano_plano_09'});
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});

    } 
    else if (document.getElementById("planospot").value === "SEP") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       document.getElementById('plano_11').style.display = 'block';
       predio.setVisible(false);     
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       espaciopublicoproyectado.setVisible(true);
       espaciopublicoproyectado.getSource().updateParams({'STYLES': 'espacio_publico_proyectado_plano_11'});
       espaciopublicoverificado.setVisible(true);
       espaciopublicoverificado.getSource().updateParams({'STYLES': 'espacio_publico_verificado_plano_11'});
       espaciopublicosinverificar.setVisible(true);
       espaciopublicosinverificar.getSource().updateParams({'STYLES': 'espacio_publico_sin_verificar_plano_11'});
       ejesespaciopublico.setVisible(true);
       suelodeproteccionurbana.setVisible(true);
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});     
    } 
    else if (document.getElementById("planospot").value === "SER") {
    	 var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       document.getElementById('plano_12').style.display = 'block';
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       equipamientosmunicipales.setVisible(true);
       subsistemavialrural.setVisible(true);
       subsistemavialrural.getSource().updateParams({'STYLES': 'subsistema_vial_rural_plano_12'});
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       cuerposdeagua.setVisible(true);
       clasesdesuelo.setVisible(true);
    } 
    else if (document.getElementById("planospot").value === "SEU") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       document.getElementById('plano_13').style.display = 'block';
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       hidrografia.setVisible(true); 
       anillovial.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       cuerposdeagua.setVisible(true);
       equipamientosmetropolitanos2001.setVisible(true);     
    } 
    else if (document.getElementById("planospot").value === "SAU") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       document.getElementById('plano_14').style.display = 'block';
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       tanques.setVisible(true);
       red_acueducto.setVisible(true);
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       areas_reserva_PTARS.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
    } 
    else if (document.getElementById("planospot").value === "SATU") {
    	 var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       tanques.setVisible(true);
       red_alcantarillado.setVisible(true);
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       areas_reserva_PTARS.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       predio.setVisible(false);  
       document.getElementById('plano_15').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "USU") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       predio.setVisible(false); 
       suelodeproteccionurbana.setVisible(true);
       espaciopublicoverificado.setVisible(true);
       espaciopublicoverificado.getSource().updateParams({'STYLES': 'espacio_publico_verificado_plano_11'});
       espaciopublicosinverificar.setVisible(true);
       espaciopublicosinverificar.getSource().updateParams({'STYLES': 'espacio_publico_sin_verificar_plano_11'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       usosdelsuelourbano.setVisible(true);
       document.getElementById('plano_16').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "ZASU") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       predio.setVisible(false); 
       suelodeproteccionurbana.setVisible(true);
       espaciopublicoverificado.setVisible(true);
       espaciopublicoverificado.getSource().updateParams({'STYLES': 'espacio_publico_verificado_plano_11'});
       espaciopublicosinverificar.setVisible(true);
       espaciopublicosinverificar.getSource().updateParams({'STYLES': 'espacio_publico_sin_verificar_plano_11'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       usosdelsuelourbano.setVisible(true); 
       usosdelsuelourbano.getSource().updateParams({'STYLES': 'usos_del_suelo_urbano_plano_17'});
       
       document.getElementById('plano_17').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "TSUE") { 
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       predio.setVisible(false); 
       suelodeproteccionurbana.setVisible(true);
       espaciopublicoverificado.setVisible(true);
       espaciopublicoverificado.getSource().updateParams({'STYLES': 'espacio_publico_verificado_plano_11'});
       espaciopublicosinverificar.setVisible(true);
       espaciopublicosinverificar.getSource().updateParams({'STYLES': 'espacio_publico_sin_verificar_plano_11'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});
       usosdelsuelourbano.setVisible(true); 
       usosdelsuelourbano.getSource().updateParams({'STYLES': 'usos_del_suelo_urbano_plano_18'}); 
       document.getElementById('plano_18').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "PECPOE") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'}); 
       sitminfraestructurapoint.setVisible(true);
       interseccionesssvurbano.setVisible(true);
       sitminfraestructuraline.setVisible(true);
       subsistemavialurbano.setVisible(true);   
       subsistemavialurbano.getSource().updateParams({'STYLES': 'subsistema_vial_urbano_plano_19'});
       operacionesestrategicas.setVisible(true); 
       document.getElementById('plano_19').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "USR") {
    	 var pgetextent = [-8144021.249918, 854524.555451, -7990172.829397, 943996.173775];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       oleoducto1.setVisible(true);
       areasestrategicas.setVisible(true);
       prediosadquiridosmunicipio.setVisible(true);
       prediosadquiridosmunicipio.getSource().updateParams({'STYLES': 'predios_adquiridos_municipio_plano_05'});
       usodelsuelorural.setVisible(true);
       document.getElementById('plano_20').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "MEM") {
    	 var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});  
       document.getElementById('plano_21').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "UPR") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});  
       document.getElementById('plano_22').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "DTM1") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});   
       document.getElementById('plano_23').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "SAG1") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'}); 
       document.getElementById('plano_24').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "CUS1") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'}); 
       document.getElementById('plano_25').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "CH1") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'});   
       document.getElementById('plano_26').style.display = 'block';
    } 
    else if (document.getElementById("planospot").value === "DPAU1") {
       var pgetextent = [-8086065, 874885, -8056192, 890166];
       map.getView().fitExtent(pgetextent, map.getSize());
       predio.setVisible(false);  
       perimetro2015.setVisible(true);
       perimetro2015.getSource().updateParams({'STYLES': 'Perimetro_Decreto_028_de_2012_plano_09'});     
       toponimiabarrios.setVisible(true);
       cabecerasmunicipalesvecinas.setVisible(true);
       cabecerasmunicipalesvecinas.getSource().updateParams({'STYLES': 'cabeceras_municipales_vecinas'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       lineascomplementarias2015.setVisible(true);
       nomenclaturapot2011.setVisible(true);
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       perimetrodeexpansion.setVisible(true);
       perimetrodeexpansion.getSource().updateParams({'STYLES': 'perimetro_de_expansion_plano_06'});
       perimetromunicipal.setVisible(true);
       perimetromunicipal.getSource().updateParams({'STYLES': 'perimetro_municipal_plano_06'});
       hidrografia.setVisible(true); 
       cuerposdeagua.setVisible(true);
       redvialrural.setVisible(true);
       redvialrural.getSource().updateParams({'STYLES': 'red_vial_rural_plano_05'});
       canalbogotaproyectado.setVisible(true);
       canalbogotaproyectado.getSource().updateParams({'STYLES': 'canal_bogota_proyectado_plano_06'});
       canalchivera.setVisible(true);
       canalchivera.getSource().updateParams({'STYLES': 'canal_chivera_plano_06'});
       nucleosurbanosinternacionales.setVisible(true);
       nucleosurbanosinternacionales.getSource().updateParams({'STYLES': 'nucleos_urbanos_internacionales_plano_06'});
       riospoligono.setVisible(true);
       riospoligono.getSource().updateParams({'STYLES': 'rios_poligono_plano_05'}); 
       document.getElementById('plano_27').style.display = 'block';
    } 
    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    