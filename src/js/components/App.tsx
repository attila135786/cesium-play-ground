import * as React from "react";

import Viewer from "./cesium/Viewer";
import AppDrawer from './app-drawer/AppDrawer';

export interface App {
  compiler: string;
  framework: string;
}

export const App = (props: App) => (
  <div className="app-container">
    <AppDrawer/>
    <Viewer/>
  </div>
);