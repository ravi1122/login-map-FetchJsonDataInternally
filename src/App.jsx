import React, { Component } from "react";
import ReactDOM from "react-dom";

import GMap from "./GMap";
import citiesList from "./cities";

import "./login.scss";
import './style.scss';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      isLogin: false,
      cities: []
    };
  }

  onSearch = e => {
    e.preventDefault();
    e.stopPropagation();

    const searchTerm = e.currentTarget.searchTerm.value;

    if (searchTerm.length) {
      const reqCity = new RegExp(searchTerm, "i");

      this.setState({
        cities: citiesList.filter(city => reqCity.test(city.city))
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { username, password } = e.currentTarget;
    if (
      username &&
      username.value.length &&
      password &&
      password.value.length
    ) {
      this.setState({
        isLogin: true
      });
    }
  };

  render() {
    const { user, isLogin, cities } = this.state;

    if (isLogin) {
      return (
        <div>
          <form onSubmit={this.onSearch}>
            <div className="city-name">              
                <label><b>City Name :</b></label>
                <input name="searchTerm" type="text" placeholder="Enter City Name"  className="searchTerm" />
                <input type="submit" value="Search City" className="btn-search" />              
            </div>
          
          <div className="city-id">
            <label><b>City ID</b></label>
            <input type="text" placeholder="Enter City ID" size="10" default="456723" />
            <input type="submit" value="Search City" className="btn-search" />              

          </div>

          <div className="city-range">
            <label><b>Date Range</b></label><input type="date"  />
          </div>
          </form>


          <table className="table-data">
                    <tr>
                        <th>SI No</th>
                        <th>City</th>
                        <th>Population</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Delhi</td>
                        <td>18,394,912</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mumbai</td>
                        <td>16,349,831</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bangalore</td>
                        <td>8,520,435</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Hydrabad</td>
                        <td>8,653,521</td>
                    </tr>

                </table>


          <GMap cities={cities} />
        </div>
      );

    }

    if (!user.length) {
      return (
        <div className="login">
          <div className="form">
            <form onSubmit={this.onSubmit}>
              <h2>Please enter the username and password</h2>
              <div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder=" Enter Password"
                  name="password"
                  required
                />
              </div>
              <div>
                <button value="Search">Login</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
