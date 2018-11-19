
function planos(style) {
    limpiar_consulta();
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
        var pgetextent = [-8144021.249918, 854524.555451, -7990172.829397, 943996.173775];
        map.getView().fitExtent(pgetextent, map.getSize());
        //document.getElementById('plano_04').style.display = 'block';
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    