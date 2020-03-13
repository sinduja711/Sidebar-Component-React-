import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";
import logo from "./../../images/logoicon.png"
import data from "./../../data/data.json"
import MainMenu from "../MainMenu/MainMenu";


class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      collapseContent: ">>",
      message: ""
    };
    this.SidebarCollapse = this.SidebarCollapse.bind(this);
  }
  callBackFunction = childData => {
    this.setState({ message: childData });
  };
  SidebarCollapse() {
    if (this.state.click === true) {
      this.setState({
        click: false,
        collapseContent: ">>"
      });
    } else {
      this.setState({
        click: true,
        collapseContent: "<<"
      });
    }
    return this.click;
  }

  render() {
    return (
      <>
        <div className="row" id="body-row">
          <div
            id="sidebar-container"
            className={
              this.state.click ? "sidebar-expanded" : "sidebar-collapsed"
            }
          >
            <ul className="list-group">
              <div
                href="/"
                data-toggle="collapse"
                aria-expanded="false"
                className=" list-group-item list-group-item-action flex-column align-items-start logo-bar"
              >
                <NavLink
                  to="/home"
                  className="d-flex w-100 justify-content-start align-items-center"
                >
                  <img
                    className={this.state.click ? "icons mr-3" : "icons mr-0"}
                    src={logo}
                    alt=""
                  />
                  <span
                    className={
                      this.state.click
                        ? "sidebar-collapsed sidebar-content title collapsed-text"
                        : "d-none"
                    }
                  >
                    &nbsp;&nbsp;Logo
                  </span>
                </NavLink>
              </div>
              <div>
                <li>
                  {data.map((dynamicData, i) => (
                    <MainMenu
                      item={dynamicData}
                      click={this.state.click}
                      parentCallback={this.callBackFunction}
                    />
                  ))}
                </li>
              </div>
              <div
                href="#"
                data-toggle="sidebar-colapse"
                className="sidebar-collapse cursor list-group-item list-group-item-action d-flex align-items-center"
                onClick={this.SidebarCollapse}
              >
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span
                    id="collapse-icon"
                    className={this.state.click ? "mr-3" : "mr-0"}
                  >
                    {this.state.collapseContent}
                  </span>
                  <span
                    id="collapse-text"
                    className={
                      this.state.click
                        ? "menu-collapsed collapsed-text"
                        : "d-none"
                    }
                  >
                    
                    Collapse
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default LeftSideBar;
