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
    }), name: 'Ortofoto 2012'
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
        params: {LAYERS: 'preproduccion:u_terreno', STYLES: ''}
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
        params: {LAYERS: 'preproduccion:u_terreno_point', STYLES: ''}
    }), name: 'heatmap'
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


// WFS-T

var poligonosedicion = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/prueba/wfs',
        params: {LAYERS: 'prueba:wfs_prueba_xml', STYLES: ''}
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
  name: 'Poligonos Edicion'
    //style: countryStyle
});





//CAPS GROUP


var layerCatastro = new ol.layer.Group({
    layers: [poligonosedicion, layerWFS, manzanas, predio, vias, construcciones, n_domiciliaria, heatmap, predios_campo, highlightfeatures],
    name: 'Catastro'
});


var layerPot2011 = new ol.layer.Group({
    layers: [toponimiabarrios, anillovial, lineascomplementarias2015, nomenclaturapot2011, mapaconjuntoactualizado2015, categoriasdelsuelourbano, cabecerasmunicipalesvecinas, perimetromunicipal, perimetrodeexpansion, cuerposdeagua, cabecerasmunicipalescolombia, clasesdesuelo, redvialrural, centrospoblados, nodosregionales, modelonodos, subsistemavialrural, ejesintegracionbinacional, ejesintegracionnacional, ejesintegracionregional, perimetro2015, suelodeproteccion, hidrografia, hidrografia],
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

var layerValorizacion = new ol.layer.Group({
    layers: [puntos_obras, obras, ejeobras, bufferobras, puntos_obras],
    name: 'Valorizacion'
});


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