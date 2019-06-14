import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Vehicle extends Component {
  state = {
    vehicle: null
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`https://swapi.co/api/vehicles/${params.id}/`)
      .then(res => {
        const vehicle = res.data;
        this.setState({ vehicle });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { vehicle } = this.state;
    if (vehicle === null)
      return <p>Loading ...</p>;

    return (
      <div className="container">
        <div className="jumbotron col-12">
          <h4 className="display-5 font-weight-bold offset-md-4">
            Vehicle Information - {vehicle.name}
          </h4>
          <hr className="my-4" />
          <div className="row col-sm-12 col-md-12 col-lg-12">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p className="lead">
                <b>Model: </b>
                {vehicle.model}
              </p>
              <p className="lead">
                <b>Manufacturer: </b>
                {vehicle.manufacturer}
              </p>
              <p className="lead">
                <b>Const in Credits: </b>
                {vehicle.cost_in_credits}
              </p>
              <p className="lead">
                <b>Length: </b>
                {vehicle.length}
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p className="lead">
                <b>Max aatmosphering speed: </b>
                {vehicle.max_atmosphering_speed}
              </p>
              <p className="lead">
                <b>Crew: </b>
                {vehicle.crew}
              </p>
              <p className="lead">
                <b>Passengers: </b>
                {vehicle.passengers}
              </p>
              <p className="lead">
                <b>Cargo capacity: </b>
                {vehicle.cargo_capacity}
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p className="lead">
                <b>Consumables: </b>
                {vehicle.consumables}
              </p>
              <p className="lead">
                <b>Vehicle class: </b>
                {vehicle.vehicle_class}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row col-sm-12 col-md-12 col-lg-12">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="font-weight-bold">
                <b>Pilots:</b>
              </p>
              {vehicle === null && <p>Loading Starship...</p>}
              {vehicle.pilots &&
                vehicle.pilots.map(pilot => (
                  <div key={pilot} className="col-sm-12 col-md-12 col-lg-12">
                    <Link to={`/person/${pilot.split("/")[5]}`}>
                      <p className="card-text">{pilot}</p>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="">
                <b>Films:</b>
              </p>
              {vehicle.films === null && <p>Loading Starship...</p>}
              {vehicle.films &&
                vehicle.films.map(film => (
                  <div key={film} className="col-sm-12 col-md-12 col-lg-12">
                    <Link to={`/film/${film.split("/")[5]}`}>
                      <p className="card-text">{film}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vehicle;
