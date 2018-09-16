import * as React from "react";
import {Drawer, List, ListItem, ListItemText} from "@material-ui/core";

interface State {
  open: boolean;
}

class AppDrawer extends React.Component<{}, State> {

  state = {
    open: true
  };

  render() {
    return (
      <div className="app-drawer-container">
        <Drawer open={true} onClose={this.onClose}>
          <List>
            <ListItem button={true}>
              <ListItemText primary="Close drawer" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }

  private onClose = () => {
    this.setState({open: false});
  }
}

export default AppDrawer;