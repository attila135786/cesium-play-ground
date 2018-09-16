
// import Cesium from 'cesium/Cesium';
//
require('cesium/Widgets/widgets.css');
require('./css/main.css');
//
// const viewer = new Cesium.Viewer('cesiumContainer', {
//     baseLayerPicker: false,
//     geocoder: false
// });
import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./js/components/App";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);