import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideMenu from "./Components/SideMenu/SideMenu"
import "./Components/DropDownMenu/DropDownMenu.scss"
import "./Components/MainMenu/MainMenu.scss"
import "./Components/SideMenu/SideMenu.scss"
import "./Components/SubMenu/SubMenu.scss"
import "./Theme.scss"
import "./App.css";
import data from "./data/data.json";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <SideMenu />
        </div>
        <Route path="/home">
          <p className="page-context">Home</p>
        </Route>
        <div className="content">
          {data.map((dynamicData, i) => (
            <>
                <Route path={dynamicData.url} className="subItem"></Route>
                {dynamicData.sub.map((subItem, j) => (
                  <Route path={subItem.url}></Route>
                ))}
            </>
          ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
