import React from "react";
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle
} from "reactstrap";
import { NavLink } from "react-router-dom";
import SubMenu from "./../SubMenu/SubMenu";
import DropDownMenu from "./../DropDownMenu/DropDownMenu";
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.item.id,
      name: this.props.item.name,
      icon: this.props.item.icon,
      alt: this.props.item.alt,
      url: this.props.item.url,
      sub: this.props.item.sub,
      dropdownOpen: false,
      click: this.props.click,
    };    
  this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ click: newProps.click });
  }
  onMouseEnter=()=>{
    this.setState({
      dropdownOpen: true
    });   
  }
  onMouseLeave=()=> {
    this.setState({
      dropdownOpen: false
    });
  }
  render() {
   
    return (
      <div>
        <Dropdown
          direction={"right"}
          className="d-inline-block"
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          isOpen={this.state.dropdownOpen}
        >
          <DropdownToggle className="dropDownButton">
            <NavLink
              to={this.state.url}
              className="d-flex w-100 justify-content-start align-items-center main-menu"
              activeClassName="highlight"
              
            >
              &nbsp;&nbsp;&nbsp;&nbsp;
              <img
                className={this.state.click ? "icons icon-space " : "icons "}
                src={this.state.icon}
                alt={this.state.alt}
              />
              <span
                className={
                  this.state.click
                    ? "sidebar-collapsed collapsed-text"
                    : "d-none"
                }
              >{
                this.state.name
              }</span>
            </NavLink>
            { this.state.click && 
              <div className="sub-menu">
                {this.state.sub.map((s, i) => (
                  <div>
                    <SubMenu items={s} />
                  </div>
                ))}
              </div>
            }</DropdownToggle>          
          { !this.state.click &&
          <DropdownMenu>
            <DropdownItem header className="dropDownHeader">
              {this.state.name}
            </DropdownItem>
            <DropdownItem divider />
            {this.state.sub.map((s, i) => (
              <DropDownMenu items={s} />
            ))}
          </DropdownMenu>
  }
        </Dropdown>
      </div>
    );
  }
}

export default MenuItem;
