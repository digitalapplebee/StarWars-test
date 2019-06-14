import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Person from "./Person";
import People from "./People";
import Starship from "./Starship";
import Film from "./Film";
import Specie from "./Specie";
import Vehicle from "./Vehicle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={People} />
        <Route exact path="/person/:id" component={Person} />
        <Route exact path="/starship/:id" component={Starship} />
        <Route exact path="/film/:id" component={Film} />
        <Route exact path="/specie/:id" component={Specie} />
        <Route exact path="/vehicle/:id" component={Vehicle} />
        <Route exact path="/planets/:id" component={Film} />
      </div>
    );
  }
}

export default App;
