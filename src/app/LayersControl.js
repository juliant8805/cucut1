// Create layers instances
var highlightfeatures = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#00FFFF',
            width: 3
        })
    }),
    source: new ol.source.Vector()
});


var mapabase = new ol.layer.Tile({
    visible: true,
    //preload: Infinity,
    //minResolution:20,
    maxResolution: 2,
    source: new ol.source.XYZ({
        url: "http://35.184.176.7:8081/dashboard/mapa_base/{z}/{x}/{y}.png"
    }), name: 'Mapa Base'
});



var streetmap = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true,
    minResolution: 2,
    //maxResolution:20,
    name: 'Street Map'
});



var bing = new ol.layer.Tile({
    visible: true,
    opacity: 0,
    source: new ol.source.BingMaps({
        key: 'AmTXzzix65q59DqR4_iobPZa9sNRcXtL4gkAsH-uww3RYpVFHGGejnUQTJev9ixC',
        imagerySet: 'Aerial'
    }), name: 'Satelite'
});

/*var bing = new ol.layer.Tile({
 visible: false,
 //opacity: 0,
 source: new ol.source.XYZ({
 url: "http://tile.openstreetmap.org/{z}/{x}/{y}.png"
 }), name: 'Satelite'
 });*/
var ortofoto2012 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.XYZ({
        url: "http://35.184.176.7:8081/dashboard/ortofoto2012/{z}/{x}/{y}.png"
    }), name: 'Ortofoto 2010'
});

var ortofoto2017 = new ol.layer.Tile({
    visible: true,
    opacity: 0,
    source: new ol.source.XYZ({
        url: "http://35.184.176.7:8081/dashboard/ortofoto2017/{z}/{x}/{y}.jpg"
    }), name: 'Ortofoto 2018'
});

var predio = new ol.layer.Tile({
    visible: true,
    //preload: Infinity,
    //minResolution: -0.420066992284,
    //maxResolution: 56.5679014489,
    //extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457],
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:u_terreno', STYLES: ''}
    }), name: 'Predios'
});

var heatmap = new ol.layer.Image({
    visible: false,
    //preload: Infinity,
    //minResolution: -0.420066992284,
    //maxResolution: 56.5679014489,
    //extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457],
    source: new ol.source.ImageWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:u_terreno_point', STYLES: ''}
    }), name: 'heatmap'
});

var u_terreno_obs = new ol.layer.Image({
    visible: true,
    //preload: Infinity,
    //minResolution: -0.420066992284,
    //maxResolution: 56.5679014489,
    //extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457],
    source: new ol.source.ImageWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:u_terreno_point', STYLES: ''}
    }), name: 'Predio Observaciones'
});

var construcciones = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_construccion', 'TILED': true, STYLES: ''}
    }), name: 'Construcciones'
});

var vias = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_nomenclatura_vial', 'TILED': true, STYLES: ''}
    }), name: 'Vias'
});

var n_domiciliaria = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_nomenclatura_domiciliaria', 'TILED': true, STYLES: ''}
    }), name: 'Nomenclatura Domiciliaria'
});

var manzanas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_manzana', 'TILED': true, STYLES: ''}
    }), name: 'Manzanas'
});


var barrios = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:barrios', STYLES: ''}
    }), name: 'Barrios'
});


var sitios = new ol.layer.Tile({
    maxResolution: 2,
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:sitios', STYLES: ''}
    }), name: 'Sitios'
});

var puntos_obras = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:obras_puntos_wgs84', STYLES: ''}
    }), name: 'Obras_Puntos'
});

var obras = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:obras_wgs84', STYLES: ''}
    }), name: 'Obras'
});

var bufferobras = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:buffobras_wgs84', STYLES: ''}
    }), name: 'Buffer Obras'
});

var ejeobras = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:ejeobras_wgs84', STYLES: ''}
    }), name: 'Eje de Obras'
});

var predios_campo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:u_terreno', STYLES: 'predios_campo'}
    }), name: 'Predios Campo'
});


//CAPAS POT 2011


var hidrografia = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_hidrografia', STYLES: ''}
    }), name: 'Hidrografia'
});

var redvialrural = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_red_vial_rural', STYLES: ''}
    }), name: 'Red Vial Rural'
});

var centrospoblados = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_centrospoblados', STYLES: ''}
    }), name: 'Centros Poblados'
});

var nodosregionales = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_nodos_regionales', STYLES: ''}
    }), name: 'Nodos Regionales'
});

var modelonodos = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_modelonodos', STYLES: ''}
    }), name: 'Modelo Nodos'
});

var subsistemavialrural = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_subsistemavialrural', STYLES: ''}
    }), name: 'Subsistema Vial Rural'
});

var ejesintegracionbinacional = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_ejesintegracionbinacional', STYLES: ''}
    }), name: 'Ejes Integracion Binacional'
});

var ejesintegracionnacional = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_ejeintegracionnacional', STYLES: ''}
    }), name: 'Ejes Integracion Nacional'
});

var ejesintegracionregional = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_ejesintegracionregional', STYLES: ''}
    }), name: 'Ejes Integracion Regional'
});

var suelodeproteccion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_suelodeproteccion', STYLES: ''}
    }), name: 'Suelo de Proteccion'
});

var perimetro2015 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_perimetro_2015', STYLES: ''}
    }), name: 'Perimetro_Decreto_028_de_2012'
});

var cabecerasmunicipalesvecinas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_cabeceras_municipales_vecinas', STYLES: ''}
    }), name: 'Cabeceras Municipales Vecinas'
});

var perimetromunicipal = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_perimetromunicipal', STYLES: ''}
    }), name: 'Perimetro Municipal'
});

var perimetrodeexpansion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_perimetrodeexpansion', STYLES: ''}
    }), name: 'Perimetro de Expansion'
});

var cuerposdeagua = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_cuerposdeagua', STYLES: ''}
    }), name: 'Cuerpos de Agua'
});

var cabecerasmunicipalescolombia = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_cabecerasmunicipalescolombia', STYLES: ''}
    }), name: 'Cabeceras Municipales Colombia'
});

var clasesdesuelo = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_clasesdesuelo', STYLES: ''}
    }), name: 'Clases de Suelo'
});

var toponimiabarrios = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_toponimia_barrios', STYLES: ''}
    }), name: 'Toponimia de Barrios'
});

var anillovial = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_anillo_vial', STYLES: ''}
    }), name: 'Anillo Vial Occidental'
});

var lineascomplementarias2015 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_lineas_complementarias_ano_2015', STYLES: ''}
    }), name: 'Lineas Complementarias 2015'
});

var nomenclaturapot2011 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_nomenclatura', STYLES: ''}
    }), name: 'Nomenclatura POT 2011'
});

var mapaconjuntoactualizado2015 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_mapa_conjunto_actualizado_2015', STYLES: ''}
    }), name: 'Mapa Conjunto Actualizado 2015'
});

var categoriasdelsuelourbano = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_categoriasdelsuelourbano', STYLES: ''}
    }), name: 'Categorias del Suelo Urbano'
});

var interseccionesrurales = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_intersecciones_rural', STYLES: ''}
    }), name: 'Intersecciones Rurales'
});

var areamanejoespecial = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_areas_de_manejo_especial', STYLES: ''}
    }), name: 'Area de Manejo Especial'
});

var parquesdeborde = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_parques_de_borde', STYLES: ''}
    }), name: 'Parques de Borde'
});

var prediosadquiridosmunicipio = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_predios_adquiridos_municipio_cucuta', STYLES: 'predios_adquiridos_municipio_plano_05'}
    }), name: 'Predios Adquiridos Municipio'
});

var riospoligono = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_rios_poligonos', STYLES: 'predios_adquiridos_municipio_plano_05'}
    }), name: 'Rios Poligono'
});

var rondasrio = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_rondas', STYLES: 'rondas_rio_plano_05'}
    }), name: 'Rondas Rio'
});

var riesgosurbanos = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_riesgos_urbanos', STYLES: 'riesgosurbanos_plano06'}
    }), name: 'Riesgos Urbanos'
});

var subsistemavialurbano = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_subsistemavialurbano', STYLES: 'subsistema_vial_urbano_plano_06'}
    }), name: 'Subsistema Vial Urbano'
});

var canalbogotaproyectado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_canal_proyectado_bogota', STYLES: 'canal_bogota_proyectado_plano_06'}
    }), name: 'Canal Bogotá Proyectado'
});

var canalchivera = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_canal_chivera', STYLES: 'canal_chivera_plano_06'}
    }), name: 'Canal Chivera'
});

var nucleosurbanosinternacionales = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_nucleos_urbanos_internacionales', STYLES: 'nucleos_urbanos_internacionales_plano_06'}
    }), name: 'Nucleos Urbanos Internacionales'
});

var interseccionesssvurbano = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_intersecciones_ssv_urbano', STYLES: 'Intersecciones_SSV_Urbano_1'}
    }), name: 'Intersecciones SSV Urbano'
});

var espaciopublicoproyectado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_espacio_publico_proyectado', STYLES: 'espacio_publico_proyectado_plano_11'}
    }), name: 'Espacio Público Proyectado'
});

var espaciopublicoverificado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_espacio_publico_verificado', STYLES: 'espacio_publico_verificado_plano_11'}
    }), name: 'Espacio Público Verificado'
});

var espaciopublicosinverificar = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_espacio_publico_sin_verificar', STYLES: ''}
    }), name: 'Espacio Público sin Verificar'
});

var ejesespaciopublico = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_ejes_espacio_publico', STYLES: ''}
    }), name: 'Ejes Espacio Público'
});

var suelodeproteccionurbana = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_suelo_proteccion_urbana', STYLES: ''}
    }), name: 'Suelo de Protección Urbana'
});

var equipamientosmunicipales = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_Equipamientos_municipales', STYLES: ''}
    }), name: 'Equipamientos Municipales'
});

var equipamientosmetropolitanos2001 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_equipamientosmetropolitanos2001', STYLES: ''}
    }), name: 'Equipamientos Metropolitanos 2001'
});

var tanques = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_tanques', STYLES: ''}
    }), name: 'Tanques'
});

var red_acueducto = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_red_acueducto_nogeoreferenciado', STYLES: ''}
    }), name: 'Red de Acueducto'
});

var areas_reserva_PTARS = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_areas_de_resrva_ptars', STYLES: ''}
    }), name: 'Area Reserva PTARS'
});

var red_alcantarillado = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_red_alcantarillado_nogeoreferenciado', STYLES: ''}
    }), name: 'Red Alcantarillado'
});

var usosdelsuelourbano = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_usos_del_suelo_urbano', STYLES: ''}
    }), name: 'Usos del Suelo Urbano'
});

var sitminfraestructurapoint = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_sitm_infraestructura_point', STYLES: ''}
    }), name: 'Sitm Infraestructura Point'
});


var sitminfraestructuraline = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_sitm_corredores', STYLES: ''}
    }), name: 'Sitm Infraestructura Line'
});


var operacionesestrategicas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_urbano_operacionesestrategicas', STYLES: ''}
    }), name: 'Operaciones Estrategicas'
});

var oleoducto1 = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_oleoducto_1', STYLES: ''}
    }), name: 'Oleoducto'
});

var areasestrategicas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:je_pot_2011_rural_areas_estrategicas', STYLES: ''}
    }), name: 'Áreas Estrategicas'
});

var usodelsuelorural = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_uso_del_suelo_rural', STYLES: ''}
    }), name: 'Uso del Suelo Rural'
});













// WFS-T
var usob = document.cookie.split('=');
var usob = usob[0];
var valor = "'" + usob + "'";
var filtro = '"usuario=' + valor + '"';

var poligonosedicion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/prueba/wms',
        params: {LAYERS: 'prueba:wfs_prueba_xml', STYLES: '', CQL_FILTER : eval(filtro)}
    }), name: 'Poligonos Edición'
});


var sourceWFS = new ol.source.Vector({
    loader: function (extent) {
        $.ajax('http://35.184.176.7:8081/geoserver/prueba/ows', {
            type: 'GET',
            data: {
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                typename: 'wfs_prueba_xml',
                srsname: 'EPSG:3857',
                bbox: extent.join(',') + ',EPSG:3857'
            }
        }).done(function (response) {
            sourceWFS.addFeatures(formatWFS.readFeatures(response));
        });
    }, 
    //strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ()),
    strategy: ol.loadingstrategy.bbox,
    projection: 'EPSG:3857'
});

var layerWFS = new ol.layer.Vector({
    
  visible: true,
  source: sourceWFS,
  name: 'Poligonos Edicion vector'
    //style: countryStyle
});

var restitucion_antena = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_antena', STYLES: ''}
    }), name: 'Antena'
});

var restitucion_arbol = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_arbol', STYLES: ''}
    }), name: 'Arbol'
});

var restitucion_bosque = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_bosque_grupo_arboles', STYLES: ''}
    }), name: 'Grupo de Arboles'
});

var restitucion_cerca = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_cerca', STYLES: ''}
    }), name: 'Cerca'
});

var restitucion_construccion_agua_l = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_construccion_agua_l', STYLES: ''}
    }), name: 'Construccion Agua L'
});

var restitucion_construccion_agua_p = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_construccion_agua_p', STYLES: ''}
    }), name: 'Construccion Agua P'
});

var restitucion_construccion_agua_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_construccion_agua_r', STYLES: ''}
    }), name: 'Construccion Agua R'
});

var restitucion_construccion_p = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_construccion_p', STYLES: ''}
    }), name: 'Construccion P'
});

var restitucion_construccion_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_construccion_r', STYLES: ''}
    }), name: 'Construccion R'
});

var restitucion_curva_nivel = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_curva_nivel', STYLES: ''}
    }), name: 'Curva de Nivel'
});

var restitucion_helipuerto_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_helipuerto_r', STYLES: ''}
    }), name: 'Helipuerto'
});

var restitucion_linea_demarcacion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_linea_demarcacion', STYLES: ''}
    }), name: 'Linea de Demarcación'
});

var restitucion_matorral = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_matorral', STYLES: ''}
    }), name: 'Matorral'
});

var restitucion_mina_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_mina_r', STYLES: ''}
    }), name: 'Mina R'
});

var restitucion_muro = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_muro', STYLES: ''}
    }), name: 'Muro'
});

var restitucion_paramento = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_paramento', STYLES: ''}
    }), name: 'Paramento'
});

var restitucion_piscina = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_piscina', STYLES: ''}
    }), name: 'Piscina'
});

var restitucion_pista_aterrizaje_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_pista_aterrizaje_r', STYLES: ''}
    }), name: 'Pista Aterrizaje'
});

var restitucion_poste = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_poste', STYLES: ''}
    }), name: 'Poste'
});

var restitucion_puente_l = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_puente_l', STYLES: ''}
    }), name: 'Puente L'
});

var restitucion_puerte_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_puerto_r', STYLES: ''}
    }), name: 'Puerto R'
});

var restitucion_red_alta_tension = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_red_alta_tension', STYLES: ''}
    }), name: 'Red de Alta Tensión'
});

var restitucion_tapa_camara = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_tapa_camara', STYLES: ''}
    }), name: 'Tapa Camara'
});

var restitucion_terminal_r = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_terminal_r', STYLES: ''}
    }), name: 'Terminal R'
});

var restitucion_terraplen = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_terraplen', STYLES: ''}
    }), name: 'Terraplen'
});

var restitucion_torre = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_torre', STYLES: ''}
    }), name: 'Torre'
});

var restitucion_tuberia = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_tuberia', STYLES: ''}
    }), name: 'Tuberia'
});

var restitucion_tunel = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_tunel', STYLES: ''}
    }), name: 'Tunel'
});

var restitucion_zona_deportiva = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_zona_deportiva', STYLES: ''}
    }), name: 'Zona Deportiva'
});

var restitucion_zona_dura = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_zona_dura', STYLES: ''}
    }), name: 'Zona Dura'
});

var restitucion_zona_verde = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:restitucion_zona_verde', STYLES: ''}
    }), name: 'Zona Verde'
});

var u_terreno_obs = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/prueba/wms',
        params: {LAYERS: 'prueba:u_terreno_obs', STYLES: ''}
    }), name: 'Observaciones'
});


// OTROS

var union_prediales = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:union_prediales_varias_fuentes', STYLES: ''}
    }), name: 'Unión Prediales'
});



//CAPS GROUP

var layerOtros = new ol.layer.Group({
    layers: [union_prediales, union_prediales],
    name: 'Otros'
});


var layerRestitucion = new ol.layer.Group({
    layers: [restitucion_zona_verde, restitucion_zona_dura, restitucion_zona_deportiva, restitucion_tunel, restitucion_tuberia, restitucion_torre, restitucion_terraplen, restitucion_terminal_r, restitucion_tapa_camara, restitucion_red_alta_tension, restitucion_puerte_r, restitucion_puente_l, restitucion_poste, restitucion_pista_aterrizaje_r, restitucion_piscina, restitucion_paramento, restitucion_muro, restitucion_mina_r, restitucion_matorral, restitucion_linea_demarcacion, restitucion_helipuerto_r, restitucion_curva_nivel, restitucion_construccion_r, restitucion_construccion_p, restitucion_construccion_agua_r, restitucion_construccion_agua_p, restitucion_construccion_agua_l, restitucion_cerca, restitucion_bosque, restitucion_arbol, restitucion_antena],
    name: 'Restitucion'
});

var layerCatastro = new ol.layer.Group({
    layers: [poligonosedicion, layerWFS, manzanas, predio, vias, construcciones, n_domiciliaria, heatmap, predios_campo, u_terreno_obs, highlightfeatures],
    name: 'Catastro'
});


var layerPot2011 = new ol.layer.Group({
    layers: [usodelsuelorural, areasestrategicas, oleoducto1, operacionesestrategicas, sitminfraestructuraline, sitminfraestructurapoint, usosdelsuelourbano, red_alcantarillado, areas_reserva_PTARS, red_acueducto, tanques, equipamientosmetropolitanos2001, equipamientosmunicipales, suelodeproteccionurbana, espaciopublicosinverificar, espaciopublicoverificado, ejesespaciopublico, espaciopublicoproyectado, interseccionesssvurbano, nucleosurbanosinternacionales, canalchivera, canalbogotaproyectado, rondasrio, riospoligono, subsistemavialurbano, parquesdeborde, toponimiabarrios, anillovial, lineascomplementarias2015, nomenclaturapot2011, mapaconjuntoactualizado2015, riesgosurbanos, categoriasdelsuelourbano, cabecerasmunicipalesvecinas, perimetromunicipal, perimetrodeexpansion, cuerposdeagua, cabecerasmunicipalescolombia, clasesdesuelo, redvialrural, centrospoblados, nodosregionales, modelonodos, subsistemavialrural, ejesintegracionbinacional, ejesintegracionnacional, ejesintegracionregional, perimetro2015, suelodeproteccion, hidrografia, areamanejoespecial, prediosadquiridosmunicipio, interseccionesrurales, hidrografia],
    name: 'POT_2011'
});

var layerBing = new ol.layer.Group({
    layers: [bing, puntos_obras],
    name: 'Sat'
});

var layerOrtofoto2017 = new ol.layer.Group({
    layers: [ortofoto2017, highlightfeatures],
    name: 'Ortofoto 2018'
});


var layerBase = new ol.layer.Group({
    layers: [streetmap, mapabase, ortofoto2012, puntos_obras],
    name: 'Capas Base'
});

/*var layerValorizacion = new ol.layer.Group({
    layers: [puntos_obras, obras, ejeobras, bufferobras, puntos_obras],
    name: 'Valorizacion'
});*/


function buildLayerTree(layer) {
    var elem;
    var name = layer.get('name') ? layer.get('name') : "Group";
    if (name != 'Group') {
        if (layer.values_.visible == true && layer.get('name') != 'CAPAS') {
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".jpg' alt='Smiley face' height='20' width='20' >" + layer.get('name') + "</span>" + "<i class='glyphicon glyphicon-check'></i> ";
        } else if (layer.get('name') == 'CAPAS') {
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".png' alt='Smiley face' height='30' width='100'>" /*+ layer.get('name') */ + "</span>";
        } else {
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".jpg' alt='Smiley face' height='20' width='20'>" + layer.get('name') + "</span>" + "<i class='glyphicon glyphicon-unchecked'></i> ";
        }
        if (layer.getLayers) {
            var sublayersElem = '';
            var layers = layer.getLayers().getArray(),
                    len = layers.length;
            for (var i = len - 2; i >= 0; i--) {
                sublayersElem += buildLayerTree(layers[i]);
            }
            elem = div + " <ul>" + sublayersElem + "</ul></li>";
        } else {
            elem = div + " </li>";
        }
        return elem;
    }
}
/**
 * Initialize the tree from the map layers
 * @returns {undefined}
 */
function initializeTree() {
    var elem = buildLayerTree(map.getLayerGroup());
    $('#layertree').empty().append(elem);
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    var longitud = $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch').length
    for (var i = 0; i < longitud; i++) {
        var colapse = $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch')[i];
        var colap = $(colapse).parent('li.parent_li').find(' > ul > li');
        colap.hide('fast');
    }
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('glyphicon-plus').removeClass('glyphicon-minus');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus').removeClass('glyphicon-plus');
        }
        e.stopPropagation();
    });
}
/**
 * Finds recursively the layer with the specified key and value.
 * @param {ol.layer.Base} layer
 * @param {String} key
 * @param {any} value
 * @returns {ol.layer.Base}
 */
function findBy(layer, key, value) {
    if (layer.get(key) === value) {
        return layer;
    }
    // Find recursively if it is a group
    if (layer.getLayers) {
        var layers = layer.getLayers().getArray(),
                len = layers.length, result;
        for (var i = 0; i < len; i++) {
            result = findBy(layers[i], key, value);
            if (result) {
                return result;
            }
        }
    }
    return null;
}
$(document).ready(function () {
    initializeTree();
    // Handle opacity slider control
    $('input.opacity').slider().on('slide', function (ev) {
        var layername = $(this).closest('li').data('layerid');
        var layer = findBy(map.getLayerGroup(), 'name', layername);
        layer.setOpacity(ev.value);
    });
    // Handle visibility control
    $('i').on('click', function () {
        var layername = $(this).closest('li').data('layerid');
        var layer = findBy(map.getLayerGroup(), 'name', layername);
        layer.setVisible(!layer.getVisible());
        if (layer.getVisible()) {
            $(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
        } else {
            $(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        }
    });
});



//CAPAS POT 2011

/*var anillovialoccidental = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_anillo_vial_occidental', STYLES: ''}
    }), name: 'Anillo Vial Occidental'
});

var cabecerasvecinas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_cabeceras_vecinas', STYLES: ''}
    }), name: 'Cabeceras Vecinas'
});

var conjuntoareaurbano = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_mapa_en_conjunto_area_urbano', STYLES: ''}
    }), name: 'Conjunto Area Urbano'
});

var nomenclaturavial2011 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_nomenclatura_vial', STYLES: ''}
    }), name: 'Nomenclatura Vial 2011'
});

var perimetroacuerdo20 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_perimetro_acuerdo_020_de_2013', STYLES: ''}
    }), name: 'Perimetro Acuerdo 020 de 2013'
});

var perimetromunicipalpot2011 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_perimetro_municipal', STYLES: ''}
    }), name: 'Perimetro Municipal POT 2011'
});

var prediosincorporados020 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_predios_incorporados_decreto_020_de_2013', STYLES: ''}
    }), name: 'Predios Incorporados Decreto 020 de 2013'
});

var rios2011 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_rios', STYLES: ''}
    }), name: 'Rios POT 2011'
});

var sueloproteccion = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_suelo_de_proteccion', STYLES: ''}
    }), name: 'Suelo Proteccion'
});

var toponimiabarrios = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_toponimia_de_barrios', STYLES: ''}
    }), name: 'Toponimia Barrios'
});

var verticesperimetro202 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_vertices_perimetro_020_de_2013', STYLES: ''}
    }), name: 'Vertices Perimetro 020 de 2013'
});

var barrioslegalizados = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:barrios_legalizados_segun_decreto_564-2006', STYLES: ''}
    }), name: 'Barrios Legalizados Decreto 564 2006'
});

var propuestabarrios = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:propuesta_actualizacion_de_barrios', STYLES: ''}
    }), name: 'Propuesta Actualizacion de Barrios'
});

var clasificacionusosuelo2011 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_clasificacion_uso_del_suelo', STYLES: ''}
    }), name: 'Clasificacion Uso del Suelo'
});

var usoactualdelsuelo2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:cucuta:pot_2011_uso_actual_del_suelo', STYLES: ''}
    }), name: 'Uso Actual del Suelo'
});

var usoactualdelsuelourbano2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:cucuta:pot_2011_uso_actual_del_suelo_urbano', STYLES: ''}
    }), name: 'Uso Actual del Suelo Urbano'
});

var usoactualdelsuelorural2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_uso_del_suelo_rural', STYLES: ''}
    }), name: 'Uso Actual del Suelo Rural'
});

var actividadesdelsuelourbano2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_actividades_del_suelo_urbano', STYLES: ''}
    }), name: 'Actividades del Suelo Urbano'
});

var tratamientodelsuelourbano2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_actividades_del_suelo_urbano', STYLES: ''}
    }), name: 'Tratamiento del Suelo Urbano'
});

var corregimientosrurales =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_centros_poblados_rurales', STYLES: ''}
    }), name: 'Corregimientos Rurales'
});

var unidadesdeplanificacionrural =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_areas_estrategicas', STYLES: ''}
    }), name: 'Unidades de Planificacion Rural'
});

var suceptibilidaddeamenazasrural =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_uso_del_suelo_rural', STYLES: ''}
    }), name: 'Suceptibilidad de Amenazas Rural'
});

var modeloocupacionurbano2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: '	cucuta:pot_2011_modelo_ocupacion_urbano', STYLES: ''}
    }), name: 'Modelo de Ocupacion Urbano'
});

var zonasgeoeconomicas2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_zonas_geoeconomicas', STYLES: ''}
    }), name: 'Zonas Geoeconomicas 2011'
});

var plusvalia2011 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_plusvalia', STYLES: ''}
    }), name: 'Plusvalia'
});

var indiceocup083 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_hg_3_indice_ocup_083', STYLES: ''}
    }), name: 'HG indice ocup 083'
});

var indiceconts083 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_hg_3_indice_conts_083', STYLES: ''}
    }), name: 'HG indice conts 083'
});
	
var indiceocup089 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2011_hg_3_indice_ocup_089', STYLES: ''}
    }), name: 'HG indice ocup 089'
});

var indiceconts089 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'pot_2011_hg_3_indice_conts_089', STYLES: ''}
    }), name: 'HG indice const 089'
});

var indiceocup083vs089 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'pot_2011_modelo_ocupacion_urbano', STYLES: ''}
    }), name: 'HG 3 Indice Ocupacion 083 vs 089 Res'
});

var indiceconst083vs089 =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'pot_2011_modelo_ocupacion_urbano', STYLES: ''}
    }), name: 'HG 3 Indice Construccion 083 vs 089 Res'
});

var indiceocup083vs089nores =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'pot_2011_hg_3_indc_ocup_083vs089_no_residencial', STYLES: ''}
    }), name: 'HG 3 Indice Ocup 083 vs 089 No Res'
});

var indiceconst083vs089nores =  new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'pot_2011_hg_3_indc_ocup_083vs089_no_residencial', STYLES: ''}
    }), name: 'HG 3 Indice Const 083 vs 089 No Res'
});



//CAPAS POT 2001

var amoblamientourbano = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_amoblamiento_urbano', STYLES: ''}
    }), name: 'Amoblamiento Urbano'
});

var anticlinalesysinclinales = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_anticlinales_y_sinclinales', STYLES: ''}
    }), name: 'Anticlinales y Sinclinales'
});


var areaterrenolibre = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_areas_de_terreno_libres', STYLES: ''}
    }), name: 'Areas de Terreno Libres'
});

var areasmorfologicashomogeneas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_areas_morfologicas_homogeneas', STYLES: ''}
    }), name: 'Areas Morfologicas Homogeneas'
});

var asentamientossubnormales = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_asentamientos_subnormales', STYLES: ''}
    }), name: 'Asentamientos Subnormales'
});

var atipicas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_atipicas', STYLES: ''}
    }), name: 'Atipicas'
});

var barrios2001 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_barrio', STYLES: ''}
    }), name: 'Barrios 2001'
});

var canalaguaslluvias = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_canal_aguas_lluvias', STYLES: ''}
    }), name: 'Canal Aguas Lluvias'
});

var canales3y4 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_canales_3_y_4', STYLES: ''}
    }), name: 'Canales 3 y 4'
});

var zonasriesgoimproas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zonas_de_riesgo_improas', STYLES: ''}
    }), name: 'Riesgo Remocion en Masa'
});

var gestionvial = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_gestion_vial', STYLES: ''}
    }), name: 'Gestión Vial'
});

var perimetrodeacueducto = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_perimetro_de_acueducto', STYLES: ''}
    }), name: 'Perimetro de Acueducto'
});

var riesgosreto = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_riesgos_reto', STYLES: ''}
    }), name: 'Riesgo Reto'
});

var pot_2001_puntos = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_puntos', STYLES: ''}
    }), name: 'Pot 2001 Puntos'
});

var canalesycolectores = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_canales_y_colectores', STYLES: ''}
    }), name: 'Canales y Colectores'
});

var centrogeneradordeempleo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_centro_generador_de_empleo', STYLES: ''}
    }), name: 'Centro Generador de Empleo'
});

var centrosecundarioactividadmultiple = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_centro_secundario_barrio_actividad_multiple', STYLES: ''}
    }), name: 'Centro Secundario Actividad Multiple'
});

var sitiodeinteresurbano = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_sitio_de_interes_urbano', STYLES: ''}
    }), name: 'Sitio de Interes Urbano'
});

var usodelsuelozonaindustrial = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_uso_de_suelo_zona_industrial', STYLES: ''}
    }), name: 'Uso del Suelo Zona Industrial'
});

var fallasgeologicas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_fallas_geologicas', STYLES: ''}
    }), name: 'Fallas Geologicas'
});

var limitedebarriotemporal = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_limite_de_barrio_temporal', STYLES: ''}
    }), name: 'Limite de Barrio Temporal'
});

var limitedecomunaperimetro = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_limite_de_comuna_perimetro', STYLES: ''}
    }), name: 'Limite de Comuna Perimetro'
});

var pasoselevados = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_pasos_elevados', STYLES: ''}
    }), name: 'Pasos Elevados'
});

var perimetroalcantarillado = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_perimetro_de_alcantarillado', STYLES: ''}
    }), name: 'Perimetro de Alcantarillado'
});

var sistemapluvial = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_sistema_pluvial', STYLES: ''}
    }), name: 'Sistema Pluvial'
});

var viascongestionadas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_vias_congestionadas', STYLES: ''}
    }), name: 'Vias Congestionadas'
});

var clasificaciondelsuelo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_clasificacion_del_suelo', STYLES: ''}
    }), name: 'Clasificacion del Suelo'
});

var coberturadeaseo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_cobertura_de_aseo', STYLES: ''}
    }), name: 'Cobertura de Aseo'
});

var comuna = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_comuna', STYLES: ''}
    }), name: 'Comuna'
});

var conflictodeusourbano = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_conflictos_de_uso_urbano', STYLES: ''}
    }), name: 'Conflicto de Uso Urbano'
});

var cordondeproteccion = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_cordon_de_proteccion', STYLES: ''}
    }), name: 'Cordon de Proteccion'
});

var equipamentosmetropolitanos = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_equipamentos_metropolitanos', STYLES: ''}
    }), name: 'Equipamentos Metropolitanos'
});

var espaciopublico = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_espacio_publico', STYLES: ''}
    }), name: 'Espacio Publico'
});

var estratificacionsocioeconomica = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_estratificacion_socioeconomica', STYLES: ''}
    }), name: 'Estratificacion Socioeconomica'
});

var geologiaurbana = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_geologia_urbana', STYLES: ''}
    }), name: 'Geologia Urbana'
});

var infraestructuraalcantarillado = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_infraestructura_de_alcantarillado', STYLES: ''}
    }), name: 'Infraestructura de Alcantarillado'
});

var modelodeocupacion = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_modelo_de_ocupacion', STYLES: ''}
    }), name: 'Modelo de Ocupacion'
});

var nucleoseducativos = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_nucleos_educativos', STYLES: ''}
    }), name: 'Nucleos Educativos'
});

var parquerio = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_parque_rio', STYLES: ''}
    }), name: 'Parque Río'
});

var programadegestion = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_programa_de_gestion', STYLES: ''}
    }), name: 'Programa de Gestion'
});

var riesgosestudios = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_riesgos_estudios99', STYLES: ''}
    }), name: 'Riesgos Estudios 99'
});

var tratamientodelsuelo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_tratamiento_del_suelo', STYLES: ''}
    }), name: 'Tratamiento del Suelo'
});

var usoactualdelsuelo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_uso_actual_del_suelo', STYLES: ''}
    }), name: 'Uso Actual del Suelo'
});

var usoactualdelsuelourbano = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_uso_actual_del_suelo_urbano', STYLES: ''}
    }), name: 'Uso Actual del Suelo Urbano'
});

var usodelsuelosegunacuerdo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_uso_del_suelo_segun_acuerdo', STYLES: ''}
    }), name: 'Uso del Suelo Segun Acuerdo'
});

var zonadeactividadresidencial = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zona_de_actividad_residencial', STYLES: ''}
    }), name: 'Zona de Actividad Residencial'
});

var zonacondisponibilidaddeservicios = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zonas_con_disponibilidad_de_servicios', STYLES: ''}
    }), name: 'Zonas con Disponibilidad de Servicios'
});

var zonasderiesgo = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zonas_de_riesgo', STYLES: ''}
    }), name: 'Zonas de Riesgo'
});

var zonasderiesgoimproas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zonas_de_riesgo_improas', STYLES: ''}
    }), name: 'Zonas de Riesgo Improas'
});

var zonashomogeneasgeoeconomicas = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zonas_homogeneas_geoeconomica', STYLES: ''}
    }), name: 'Zonas Homogeneas Geoeconomicas'
});

var usoyactividades083de2001 = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'cucuta:pot_2001_zonas_homogeneas_geoeconomica', STYLES: ''}
    }), name: 'Uso y Actividades 083 de 2001'
});*/

/*var sourceWFS = new ol.layer.Tile({
    //extent: [-8342085.395410, 1222896.318514, -8314873.686686, 1237419.421485],
    //visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/prueba/ows',
        params: {LAYERS: 'prueba:wfs_prueba_xml', STYLES: ''}
    }), name: 'Poligonos Edicion'
});*/


//CAPS GROUP

/*var layerPot2001 = new ol.layer.Group({
    layers: [zonasderiesgoimproas, zonadeactividadresidencial, zonacondisponibilidaddeservicios, zonasderiesgo, zonashomogeneasgeoeconomicas, viascongestionadas, tratamientodelsuelo, pot_2001_puntos, usodelsuelozonaindustrial, usoactualdelsuelourbano, usodelsuelosegunacuerdo, usoactualdelsuelo, sistemapluvial, riesgosreto, riesgosestudios, parquerio, pasoselevados, perimetroalcantarillado, perimetrodeacueducto, programadegestion, sitiodeinteresurbano, nucleoseducativos, modelodeocupacion, limitedecomunaperimetro, limitedebarriotemporal, infraestructuraalcantarillado, geologiaurbana, gestionvial, fallasgeologicas, equipamentosmetropolitanos, estratificacionsocioeconomica, espaciopublico, conflictodeusourbano, comuna, cordondeproteccion, coberturadeaseo, centrogeneradordeempleo, centrosecundarioactividadmultiple, clasificaciondelsuelo, canalesycolectores, canales3y4, canalaguaslluvias, barrios2001, atipicas, asentamientossubnormales, areasmorfologicashomogeneas, areaterrenolibre, anticlinalesysinclinales, amoblamientourbano, barrios],
    name: 'POT_2001'
});

var layerPot2011 = new ol.layer.Group({
    layers: [zonasgeoeconomicas2011, verticesperimetro202, toponimiabarrios, tratamientodelsuelourbano2011, usoactualdelsuelorural2011, usoactualdelsuelourbano2011, usoactualdelsuelo2011, unidadesdeplanificacionrural, sueloproteccion, suceptibilidaddeamenazasrural, rios2011, plusvalia2011, prediosincorporados020, perimetromunicipalpot2011, perimetroacuerdo20, nomenclaturavial2011, modeloocupacionurbano2011, conjuntoareaurbano, cabecerasvecinas, anillovialoccidental, propuestabarrios, indiceconts083, indiceocup083, indiceocup089, indiceconts089, indiceconst083vs089, indiceocup083vs089, indiceocup083vs089nores, indiceconst083vs089nores, barrioslegalizados, barrios, corregimientosrurales, clasificacionusosuelo2011, actividadesdelsuelourbano2011, barrios],
    name: 'POT_2011'
});*/