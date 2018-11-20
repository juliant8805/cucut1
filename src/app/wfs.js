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
/*var interactionSnap = new ol.interaction.Snap({
    source: layerWFS.getSource()
});  */ 
 
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
              
         var payload = '<wfs:Transaction service="WFS" version="1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:prueba="http://prueba" xmlns:gml="http://www.opengis.net/gml"><wfs:Insert>                        <prueba:wfs_prueba_xml><prueba:geom><gml:MultiPolygon srsName="http://www.opengis.net/gml/srs/epsg.xml#3857"><gml:polygonMember><gml:Polygon srsName="http://www.opengis.net/gml/srs/epsg.xml#3857">                   <gml:outerBoundaryIs><gml:LinearRing><gml:coordinates decimal="." cs="," ts=" ">' + coordinates + '</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></gml:polygonMember></gml:MultiPolygon></prueba:geom></prueba:wfs_prueba_xml></wfs:Insert></wfs:Transaction>';
           
            
          //poligonosedicion.getSource().updateParams({'STYLES':'', 'CQL_FILTER': "observaciones<>'er872'"});
           
            if (conteo == 1){
            poligonosedicion.getSource().updateParams({CQL_FILTER:"1=1"});
                conteo = conteo + 1;
                }
            else if (conteo == 2){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"2=2"});
                conteo = conteo + 1;
            }
            else if (conteo == 3){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"3=3"});
                conteo = conteo + 1;
            }
            else if (conteo == 4){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"4=4"});
                conteo = conteo + 1;
            }
            else if (conteo == 5){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"5=5"});
                conteo = conteo + 1;
            }
            else if (conteo == 6){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"6=6"});
                conteo = conteo + 1;
            }
            else if (conteo == 7){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"7=7"});
                conteo = conteo + 1;
            }
            else if (conteo == 8){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"8=8"});
                conteo = conteo + 1;
            }
            else if (conteo == 9){
              poligonosedicion.getSource().updateParams({CQL_FILTER:"9=9"});
                conteo = conteo + 1;
            }
            
            
            
            //update funcionando
         /*   var payload = '<wfs:Transaction service="WFS" version="1.0.0" xmlns:prueba="http://prueba" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wfs="http://www.opengis.net/wfs"><wfs:Update typeName="prueba:wfs_prueba_xml">    <wfs:Property><wfs:Name>observaciones</wfs:Name><wfs:Value>listocodigo</wfs:Value></wfs:Property><ogc:Filter><ogc:Filter><ogc:PropertyIsEqualTo><ogc:PropertyName>observaciones</ogc:PropertyName><ogc:Literal>listo</ogc:Literal></ogc:PropertyIsEqualTo></ogc:Filter></ogc:Filter></wfs:Update></wfs:Transaction>';*/
            
            document.getElementById("tblatt").style.visibility = "visible";
            document.getElementById("tblatt").style.display = "initial";
            document.getElementById("tblatt").style.height = "auto";
            document.getElementById("panel_atr").style.visibility = "visible";
            document.getElementById("panel_atr").style.display = "initial";
            document.getElementById("panel_atr").style.height = "auto";
            document.getElementById("contenedorg").style.display = "initial";
            document.getElementById("contenedorg").style.visibility = "visible";
            document.getElementById("contenedorg").style.height = "auto";
            //document.getElementById("pestanas").style.display = "none";
            
            var table = document.getElementById("tblatt");
            table.innerHTML = "";
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            cell1.colSpan = 2;
            cell1.innerHTML = "<H5><b>INFORMACION DEL PREDIO</b></H5>";
            
            
            var row = table.insertRow(1);
            var cell2 = row.insertCell(0);
            cell2.colSpan = 2;
            cell2.style = "background-color: white; border:0; margin:0;";
            cell2.innerHTML = "<input type='text' id='observaciones' name='observaciones' style='background-color: #white; color:black; font-size: 15px; border-top:0px; border-left:0px; border-right:0px; border-bottom:1px solid #62BAD3; text-align:center; width:100%; height:3em;' placeholder='Escriba cualquier tipo de información adicional'>";
            
            
            
            var select = [];
            var sel = [];
            select[0] = "<b>ID</b>";
            select[1] = "<b>OBSERVACIONES</b>";
            sel[0] = "listo1";
            sel[1] = "listo1";
            
            var campos = 2;
                            for (i = 0; i < select.length; i++) {
                                row = table.insertRow(i + 1);
                                cell1 = row.insertCell(0);
                                cell2 = row.insertCell(1);
                                cell1.innerHTML = select[i];
                                if (i === campos) {
                                    cell2.appendChild(sel[i]);
     
                                } else {
                                    cell2.innerHTML = sel[i];
                                }
                            }
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
            //map.addInteraction(interactionSnap);
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
            predio.setVisible(false);
            construcciones.setVisible(false);
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