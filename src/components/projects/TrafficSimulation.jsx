import React from 'react';

const TrafficSimulation = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold uppercase mb-6">Traffic Emission Simulation</h1>
      <p>
        This research project was conducted as part of the Spatial Simulation course. The aim of this project
        is to simulate and analyze traffic emissions in urban areas. Using various modeling techniques,
        the project visualizes emissions under different traffic patterns and environmental conditions.
      </p>
      <div className="mt-8">
        <img src="/images/traffic-emission.png" alt="Traffic Emission Simulation" className="rounded-lg shadow-lg" />
      </div>
      <p className="mt-4">
        Tools and Technologies: <strong>GAMA</strong>
      </p>
    </div>
  );
};

export default TrafficSimulation;