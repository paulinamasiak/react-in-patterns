import React, { Component } from 'react';
import WeatherWidget from './WeatherWidget';

class WeatherWidgetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://demo7840259.mockable.io/weather')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <WeatherWidget {...data} />
    );
  }
}

export default WeatherWidgetContainer;
