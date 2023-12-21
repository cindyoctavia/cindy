var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADM_Boja_Kec_1 = new ol.format.GeoJSON();
var features_ADM_Boja_Kec_1 = format_ADM_Boja_Kec_1.readFeatures(json_ADM_Boja_Kec_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_Boja_Kec_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_Boja_Kec_1.addFeatures(features_ADM_Boja_Kec_1);
var lyr_ADM_Boja_Kec_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADM_Boja_Kec_1, 
                style: style_ADM_Boja_Kec_1,
                interactive: true,
                title: '<img src="styles/legend/ADM_Boja_Kec_1.png" /> ADM_Boja_Kec'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADM_Boja_Kec_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADM_Boja_Kec_1];
lyr_ADM_Boja_Kec_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', });
lyr_ADM_Boja_Kec_1.set('fieldImages', {'KECAMATAN': '', });
lyr_ADM_Boja_Kec_1.set('fieldLabels', {'KECAMATAN': 'no label', });
lyr_ADM_Boja_Kec_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});