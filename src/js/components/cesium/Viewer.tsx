import * as React from "react";
const Cesium = require("cesium/Cesium");

import {CesiumViewerConfiguration} from "./types/CesiumViewerConfiguration";

interface Props {
  test?: string
  configuration?: CesiumViewerConfiguration
}

class Viewer extends React.Component<Props> {

  static defaultProps: Partial<Props> = {
    configuration: {
      baseLayerPicker: false,
      geocoder: false,
      timeline: false,
      homeButton: false
    }
  };

  private viewer: Cesium.Viewer;
  private element: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.viewer = new Cesium.Viewer("cesium-app", this.props.configuration);
    fetch("http://www.ci.austin.tx.us/qact/qact_rss.cfm").then(response => {
      return response.json();
    });
  }

  render() {
    return <div id="cesium-app" ref={this.element}/>
  }
}

export default Viewer;