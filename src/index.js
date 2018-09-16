import Cesium from 'cesium/Cesium';
require('cesium/Widgets/widgets.css');
require('./css/main.css');

const viewer = new Cesium.Viewer('cesiumContainer', {
	baseLayerPicker : false,
});
