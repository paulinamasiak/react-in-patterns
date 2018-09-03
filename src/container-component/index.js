import React from 'react';
import WeatherWidgetContainer from './components/WeatherWidgetContainer';

// In this example a container component does data fetching and then
// renders its corresponding sub-component

const ContainerComponent = () => (
  <div className="container">
    <h1 className="h2 mb-4">Container component</h1>
    <div className="card">
      <div className="card-body mx-auto">
        <WeatherWidgetContainer />
      </div>
    </div>
  </div>
);

export default ContainerComponent;
