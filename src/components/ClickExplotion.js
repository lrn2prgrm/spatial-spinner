import React from "react";
import { connect } from "@cerebral/react"
import { state } from "cerebral/tags"
import Bullet from "./Bullet";

class ClickExplotion extends React.Component {
    render() {
        const {click} = this.props
        if(!click.x) return null;
        return (
            <Bullet x={click.x} y={click.y}/>
        );
    }
}

export default connect(
  {
    click: state`app.mouse.click`
  }, 
  ClickExplotion
);