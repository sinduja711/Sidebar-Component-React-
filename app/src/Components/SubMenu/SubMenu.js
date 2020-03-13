import React from "react";
import { NavLink } from "react-router-dom";
class DropDownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.items.id,
      sub: this.props.items
    };
  }
  render() {   
    return (
      <NavLink to={this.state.sub.url} className="" activeClassName="select">
        <div className="subItemNav subItemHighlight">{this.state.sub.name}</div>
      </NavLink>
    );
  }
}

export default DropDownItem;
