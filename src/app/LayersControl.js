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
    minResolution:2,
  //maxResolution:20,
    name: 'Street Map'
});



var bing = new ol.layer.Tile({
    visible: false,
    //opacity: 0,
    source: new ol.source.BingMaps({
        key: 'LAx1oGVyN8TZwSTH1RC1~hnxyYFGev93MbI6hBUQOZQ~AjSJCfyU_TmBIhT5SRRpRIOBHVnA0zTKFRKEVuP-XHE3LAMKr-1ZcqtTq4YTRLds',
        imagerySet: 'Aerial'
    }), name: 'Satelite'
});

var ortofoto2012 = new ol.layer.Tile({
visible: false,
source:new ol.source.XYZ({
url:"http://35.184.176.7:8081/dashboard/ortofoto2012/{z}/{x}/{y}.png"
}), name:'Ortofoto 2012'
});

var ortofoto2017 = new ol.layer.Tile({
visible: true,
opacity: 0,
source:new ol.source.XYZ({
url:"http://35.184.176.7:8081/dashboard/ortofoto2017/{z}/{x}/{y}.jpg"
}), name:'Ortofoto 2017'
});

var predio = new ol.layer.Tile({
    visible: true,
    //preload: Infinity,
    minResolution: -0.420066992284,
    maxResolution: 56.5679014489,
    extent: [-8095392.391925, 870144.331783, -8046973.877366, 894653.608457],
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
        params: {LAYERS: 'preproduccion:u_construccion', 'TILED':true, STYLES: ''}
    }), name: 'Construcciones'
});

var vias = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_nomenclatura_vial', 'TILED':true, STYLES: ''}
    }), name: 'Vias'
});

var n_domiciliaria = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_nomenclatura_domiciliaria', 'TILED':true, STYLES: ''}
    }), name: 'Nomenclatura Domiciliaria'
});

var manzanas = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://35.184.176.7:8081/geoserver/cucuta/wms',
        params: {LAYERS: 'preproduccion:u_manzana', 'TILED':true, STYLES: ''}
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

//CAPAS POT 2011

var anillovialoccidental = new ol.layer.Tile({
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
        params: {LAYERS: 'cucuta:pot_2011_vertices_perimetro_202_de_2013', STYLES: ''}
    }), name: 'Vertices Perimetro 202 de 2013'
});

//CAPS GROUP
var layerCatastro = new ol.layer.Group({
    layers: [manzanas, predio, vias, construcciones, n_domiciliaria, heatmap, highlightfeatures],
    name: 'Catastro'
});

var layerPot2011 = new ol.layer.Group({
    layers: [verticesperimetro202, toponimiabarrios, sueloproteccion, rios2011, prediosincorporados020, perimetromunicipalpot2011, perimetroacuerdo20, nomenclaturavial2011, conjuntoareaurbano, cabecerasvecinas, anillovialoccidental, barrios, barrios],
    name: 'POT_2011'
});

var layerBing = new ol.layer.Group({
    layers: [bing, highlightfeatures],
    name: 'Satelite'
});

var layerOrtofoto2017 = new ol.layer.Group({
    layers: [ortofoto2017, highlightfeatures],
    name: 'Ortofoto 2017'
});


var layerBase = new ol.layer.Group({
    layers: [streetmap, mapabase, ortofoto2012 ,highlightfeatures],
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
            var div = "<li data-layerid='" + name + "'>" + "<span><img src='image/" + layer.get('name') + ".png' alt='Smiley face' height='30' width='100'>" /*+ layer.get('name') */+ "</span>";
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
