
/*ol.interaction.Snap.prototype.writeGeometryCollectionGeometry_ = function(feature, geometry) {
  var i, geometries = geometry.getGeometriesArray();
  for (i = 0; i < geometries.length; ++i) {
    this.SEGMENT_WRITERS_[geometries[i].getType()].call(
        this, feature, geometries[i]);
  }
};*/

var formatWFS = new ol.format.WFS();

var formatGML = new ol.format.GML({
    featureNS: 'http://35.184.176.7:8081/geoserver/prueba',
    featureType: 'wfs_prueba_xml',
    srsName: 'EPSG:3857'
});
        
        
var xs = new XMLSerializer();




var interaction;

var interactionSelectPointerMove = new ol.interaction.Select({
    condition: ol.events.condition.pointerMove
});

var interactionSelect = new ol.interaction.Select({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#FF2828'
        })
    })
});

var interactionSnap = new ol.interaction.Snap({
    source: layerWFS.getSource()
});       
        
        
        
        
        
 var dirty = {};
var transactWFS = function (mode, f) {
    var node;
    switch (mode) {
            
        case 'insert':
            var longitud = f.values_.geometry.flatCoordinates.length;
            var coordinates1 = [f.values_.geometry.flatCoordinates[0], f.values_.geometry.flatCoordinates[1]];
            var coordinates2 = [f.values_.geometry.flatCoordinates[2], f.values_.geometry.flatCoordinates[3]];
            var coordinates3 = [f.values_.geometry.flatCoordinates[4], f.values_.geometry.flatCoordinates[5]];
            var coordinates4 = [f.values_.geometry.flatCoordinates[6], f.values_.geometry.flatCoordinates[7]];
            var coordinates5 = [f.values_.geometry.flatCoordinates[8], f.values_.geometry.flatCoordinates[9]];
            var coordinates6 = [f.values_.geometry.flatCoordinates[10], f.values_.geometry.flatCoordinates[11]];
            var coordinates7 = [f.values_.geometry.flatCoordinates[12], f.values_.geometry.flatCoordinates[13]];
            var coordinates8 = [f.values_.geometry.flatCoordinates[14], f.values_.geometry.flatCoordinates[15]];
            var coordinates9 = [f.values_.geometry.flatCoordinates[16], f.values_.geometry.flatCoordinates[17]];
            var coordinates10 = [f.values_.geometry.flatCoordinates[18], f.values_.geometry.flatCoordinates[19]];
            var coordinates11 = [f.values_.geometry.flatCoordinates[20], f.values_.geometry.flatCoordinates[21]];
            var coordinates12 = [f.values_.geometry.flatCoordinates[22], f.values_.geometry.flatCoordinates[23]];
            var coordinates13 = [f.values_.geometry.flatCoordinates[24], f.values_.geometry.flatCoordinates[25]];
            var coordinates14 = [f.values_.geometry.flatCoordinates[26], f.values_.geometry.flatCoordinates[27]];
            if (longitud == 8){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4;}
            else if (longitud == 10){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5;}
            else if (longitud == 12){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6;}              
            else if (longitud == 14){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7;}
            else if (longitud == 16){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8;}
            else if (longitud == 18){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8 + " " + coordinates9;}
            else if (longitud == 20){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8 + " " + coordinates9 + " " + coordinates10;}
            else if (longitud == 22){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8 + " " + coordinates9 + " " + coordinates10 + " " + coordinates11;}
            else if (longitud == 24){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8 + " " + coordinates9 + " " + coordinates10 + " " + coordinates11 + " " + coordinates12;}
            else if (longitud == 26){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8 + " " + coordinates9 + " " + coordinates10 + " " + coordinates11 + " " + coordinates12 + " " + coordinates13;}
            else if (longitud == 28){var coordinates = coordinates1 + " " + coordinates2 + " " + coordinates3 + " " + coordinates4 + " " + coordinates5 + " " + coordinates6 + " " + coordinates7 + " " + coordinates8 + " " + coordinates9 + " " + coordinates10 + " " + coordinates11 + " " + coordinates12 + " " + coordinates13 + " " + coordinates14;}
            node = formatWFS.writeTransaction([f], null, null, formatGML);
              
           /* document.getElementById("tablawfs2").style.visibility = "visible";
            document.getElementById("tablawfs").style.display = "block";
            document.getElementById("tablawfs").style.display = "initial";
            document.getElementById("tablawfs").style.visibility = "visible";*/
            
            var payload = '<wfs:Transaction service="WFS" version="1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:prueba="http://prueba" xmlns:gml="http://www.opengis.net/gml"><wfs:Insert>                        <prueba:wfs_prueba_xml><prueba:geom><gml:MultiPolygon srsName="http://www.opengis.net/gml/srs/epsg.xml#3857"><gml:polygonMember><gml:Polygon srsName="http://www.opengis.net/gml/srs/epsg.xml#3857">                   <gml:outerBoundaryIs><gml:LinearRing><gml:coordinates decimal="." cs="," ts=" ">' + coordinates + /*" " + coordinates5 +*/ '</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></gml:polygonMember></gml:MultiPolygon></prueba:geom></prueba:wfs_prueba_xml></wfs:Insert></wfs:Transaction>';
            
            //predio.setVisible(false);
            

            break;
        case 'update':
            //f.set('geom', f.getGeometry());
            node = formatWFS.writeTransaction(null, [f], null, formatGML);

            
            break;
        case 'delete':
            node = formatWFS.writeTransaction(null, null, [f], formatGML);
            var payload = xs.serializeToString(node);
            
            break;
    }
   
   //var payload = xs.serializeToString(node);
   
    $.ajax('http://35.184.176.7:8081/geoserver/prueba/ows', {
        type: 'POST',
        dataType: 'xml',
        processData: false,
        contentType: 'text/xml',
        data: payload,
        success: function (xml) {
            },
            error: function (xml) {
                console.log('error');
            }
    }).done(function() {
        sourceWFS.clear();
    });
};       
        
$(document).ready(function(){        
$('button').click(function () {
    $(this).siblings().removeClass('btn-active');
    $(this).addClass('btn-active');
    map.removeInteraction(interaction);
    interactionSelect.getFeatures().clear();
    map.removeInteraction(interactionSelect);

    switch ($(this).attr('id')) {

        case 'btnEdit':
            map.addInteraction(interactionSelect);
            interaction = new ol.interaction.Modify({
                features: interactionSelect.getFeatures()
            });
            map.addInteraction(interaction);
            map.addInteraction(interactionSnap);
            dirty = {};
            interactionSelect.getFeatures().on('add', function (e) {
                e.element.on('change', function (e) {
                    dirty[e.target.getId()] = true;
                });
            });
            interactionSelect.getFeatures().on('remove', function (e) {
                var f = e.element;
                if (dirty[f.getId()]) {
                    delete dirty[f.getId()];
                    var featureProperties = f.getProperties();
                    delete featureProperties.boundedBy;
                    var clone = new ol.Feature(featureProperties);
                    clone.setId(f.getId());
                    transactWFS('update', clone);
                }
            });
            break;

        case 'btnPoint':
            interaction = new ol.interaction.Draw({
                type: 'Point',
                source: layerWFS.getSource()
            });
            map.addInteraction(interaction);
            interaction.on('drawend', function (e) {
                transactWFS('insert', e.feature);
            });
            break;

        case 'btnLine':
            interaction = new ol.interaction.Draw({
                type: 'LineString',
                source: layerWFS.getSource()
            });
            map.addInteraction(interaction);
            interaction.on('drawend', function (e) {
                transactWFS('insert', e.feature);
            });
            break;

        case 'btnArea':
            interaction = new ol.interaction.Draw({
                type: 'Polygon',
                source: layerWFS.getSource()
            });
            interaction.on('drawend', function (e) {
                transactWFS('insert', e.feature);
            });
            map.addInteraction(interaction);
            break;

        case 'btnDelete':
            interaction = new ol.interaction.Select();
            interaction.getFeatures().on('add', function (e) {
                transactWFS('delete', e.target.item(0));
                interactionSelectPointerMove.getFeatures().clear();
                interaction.getFeatures().clear();
            });
            map.addInteraction(interaction);
            break;

        default:
            break;
    }
//}
 });        
        
});