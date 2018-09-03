import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = ({ city, country, temp }) => (
  <div className="card card-weather">
    <div className="card-body">
      <h5 className="card-title">{city}, {country}</h5>
      <p className="h1">{temp}<sup>&deg;</sup></p>
    </div>
  </div>
);

WeatherWidget.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.number,
};

export default WeatherWidget;
