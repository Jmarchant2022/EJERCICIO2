ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([648573.156006, 5901264.955692, 704787.158695, 5945224.514381]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMUNAS_CCPcopiar_1 = new ol.format.GeoJSON();
var features_COMUNAS_CCPcopiar_1 = format_COMUNAS_CCPcopiar_1.readFeatures(json_COMUNAS_CCPcopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_COMUNAS_CCPcopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNAS_CCPcopiar_1.addFeatures(features_COMUNAS_CCPcopiar_1);
var lyr_COMUNAS_CCPcopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNAS_CCPcopiar_1, 
                style: style_COMUNAS_CCPcopiar_1,
                popuplayertitle: 'COMUNAS_CCP copiar',
                interactive: true,
                title: '<img src="styles/legend/COMUNAS_CCPcopiar_1.png" /> COMUNAS_CCP copiar'
            });
var format_BARRIOS_2 = new ol.format.GeoJSON();
var features_BARRIOS_2 = format_BARRIOS_2.readFeatures(json_BARRIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_BARRIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOS_2.addFeatures(features_BARRIOS_2);
var lyr_BARRIOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARRIOS_2, 
                style: style_BARRIOS_2,
                popuplayertitle: 'BARRIOS',
                interactive: true,
                title: '<img src="styles/legend/BARRIOS_2.png" /> BARRIOS'
            });
var format_Puntostursticos_3 = new ol.format.GeoJSON();
var features_Puntostursticos_3 = format_Puntostursticos_3.readFeatures(json_Puntostursticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Puntostursticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntostursticos_3.addFeatures(features_Puntostursticos_3);
var lyr_Puntostursticos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntostursticos_3, 
                style: style_Puntostursticos_3,
                popuplayertitle: 'Puntos turísticos',
                interactive: true,
    title: 'Puntos turísticos<br />\
    <img src="styles/legend/Puntostursticos_3_0.png" /> Cafetería<br />\
    <img src="styles/legend/Puntostursticos_3_1.png" /> Cancha<br />\
    <img src="styles/legend/Puntostursticos_3_2.png" /> Deportes<br />\
    <img src="styles/legend/Puntostursticos_3_3.png" /> Deportes y entretenimiento<br />\
    <img src="styles/legend/Puntostursticos_3_4.png" /> Educación<br />\
    <img src="styles/legend/Puntostursticos_3_5.png" /> Panadería<br />\
    <img src="styles/legend/Puntostursticos_3_6.png" /> Parque<br />\
    <img src="styles/legend/Puntostursticos_3_7.png" /> Religión<br />\
    <img src="styles/legend/Puntostursticos_3_8.png" /> Restaurant<br />\
    <img src="styles/legend/Puntostursticos_3_9.png" /> Resto-bar<br />\
    <img src="styles/legend/Puntostursticos_3_10.png" /> Transito<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_COMUNAS_CCPcopiar_1.setVisible(true);lyr_BARRIOS_2.setVisible(true);lyr_Puntostursticos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_COMUNAS_CCPcopiar_1,lyr_BARRIOS_2,lyr_Puntostursticos_3];
lyr_COMUNAS_CCPcopiar_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_BARRIOS_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', 'Id_2': 'Id_2', 'Nombre_2': 'Nombre_2', 'Area_2': 'Area_2', 'hab_m2_2': 'hab_m2_2', 'Sum_Poblac_2': 'Sum_Poblac_2', 'av_hab_2': 'av_hab_2', 'Long_tLic_2': 'Long_tLic_2', 'Long_tNLic_2': 'Long_tNLic_2', 'Suma_Trans_2': 'Suma_Trans_2', 'porc_cober_2': 'porc_cober_2', 'Distance_2': 'Distance_2', 'LongcicloK_2': 'LongcicloK_2', 'Long_rvial_2': 'Long_rvial_2', });
lyr_Puntostursticos_3.set('fieldAliases', {'id': 'id', 'Nombres': 'Nombres', 'Rubro': 'Rubro', 'Calles ref': 'Calles ref', 'Coordenada': 'Coordenada', 'Elevación': 'Elevación', 'Video': 'Video', });
lyr_COMUNAS_CCPcopiar_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_BARRIOS_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', 'Id_2': 'Range', 'Nombre_2': 'TextEdit', 'Area_2': 'TextEdit', 'hab_m2_2': 'TextEdit', 'Sum_Poblac_2': 'Range', 'av_hab_2': 'TextEdit', 'Long_tLic_2': 'TextEdit', 'Long_tNLic_2': 'TextEdit', 'Suma_Trans_2': 'TextEdit', 'porc_cober_2': 'TextEdit', 'Distance_2': 'TextEdit', 'LongcicloK_2': 'TextEdit', 'Long_rvial_2': 'TextEdit', });
lyr_Puntostursticos_3.set('fieldImages', {'id': 'TextEdit', 'Nombres': 'TextEdit', 'Rubro': 'TextEdit', 'Calles ref': 'TextEdit', 'Coordenada': 'TextEdit', 'Elevación': 'TextEdit', 'Video': 'TextEdit', });
lyr_COMUNAS_CCPcopiar_1.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_BARRIOS_2.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', 'Id_2': 'no label', 'Nombre_2': 'no label', 'Area_2': 'no label', 'hab_m2_2': 'no label', 'Sum_Poblac_2': 'no label', 'av_hab_2': 'no label', 'Long_tLic_2': 'no label', 'Long_tNLic_2': 'no label', 'Suma_Trans_2': 'no label', 'porc_cober_2': 'no label', 'Distance_2': 'no label', 'LongcicloK_2': 'no label', 'Long_rvial_2': 'no label', });
lyr_Puntostursticos_3.set('fieldLabels', {'id': 'no label', 'Nombres': 'inline label - always visible', 'Rubro': 'inline label - always visible', 'Calles ref': 'inline label - always visible', 'Coordenada': 'inline label - always visible', 'Elevación': 'inline label - always visible', 'Video': 'no label', });
lyr_Puntostursticos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});