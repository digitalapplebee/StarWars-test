import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Specie extends Component {
  state = {
    specie: null
  };

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    axios
      .get(`https://swapi.co/api/species/${params.id}/`)
      .then(res => {
        const specie = res.data;
        this.setState({
          specie
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { specie } = this.state;
    if (specie === null)
      return <p>Loading ...</p>;

    return (
      <div className="container">
        <div className="jumbotron col-12">
          <h4 className="display-5 font-weight-bold offset-md-4">
            Specie Information - {specie.name}
          </h4>
          <hr className="my-4" />
          <div className="row col-sm-12 col-md-12 col-lg-12">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="lead">
                <b>Classification: </b>
                {specie.classification}
              </p>
              <p className="lead">
                <b>Designation: </b>
                {specie.designation}
              </p>
              <p className="lead">
                <b>Average height: </b>
                {specie.average_height}
              </p>
              <p className="lead">
                <b>Skin colors: </b>
                {specie.skin_colors}
              </p>
              <p className="lead">
                <b>Hair colors: </b>
                {specie.hair_color}
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="lead">
                <b>Average lifespan: </b>
                {specie.average_lifespan}
              </p>
              <p className="lead">
                <b>Language: </b>
                {specie.language}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row col-sm-12 col-md-12 col-lg-12">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="font-weight-bold">
                <b>People:</b>
              </p>
              {specie === null && <p>Loading ...</p>}
              {specie.people &&
                specie.people.map(person => (
                  <div key={person} className="col-sm-12 col-md-12 col-lg-12">
                    <Link to={`/person/${person.split("/")[5]}`}>
                      <p className="card-text">{person}</p>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p className="">
                <b>Films:</b>
              </p>
              {specie.films === null && <p>Loading ...</p>}
              {specie.films &&
                specie.films.map(film => (
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

export default Specie;
