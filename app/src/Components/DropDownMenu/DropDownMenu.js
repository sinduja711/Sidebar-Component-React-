import React from "react";
import { NavLink} from "react-router-dom";
class DropDownItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: this.props.items
    };
  }
  render() {
    return (
      <NavLink
        to={this.state.sub.url}
        className="dropDownItem"
        activeClassName="select"
      >
        <div className="dropDownHighlight">{this.state.sub.name}</div>
      </NavLink>
    );
  }
}

export default DropDownItem;
