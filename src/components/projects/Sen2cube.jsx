import React from 'react';

const Sen2Cube = () => {
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold uppercase mb-10 text-center">Sen2Cube.at: Water Area Calculation model</h1>


        <h1 className="text-xl font-bold mb-4 text-center">Model Description</h1>
        <div className="justify-items-center">
            <img src="/images/sen-1.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;In the concepts section, we define three 
            entities: water, cloud, and ice using Color type.
        </p>
        <div className="justify-items-center">
            <img src="/images/sen-2.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;In the application section, we first merge cloud and ice entities.
        </p>
        <div className="justify-items-center">
            <img src="/images/sen-3.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;After that we use the water entity to find how 
            frequently (percentage) the water appeared on 
            a given pixel in a collection of cloud-free and ice-free images.
        </p>
        <div className="justify-items-center">
            <img src="/images/sen-4.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Finally, we count the pixels that were 
            above the threshold of 25% and evaluate the water area in square kilometers.
        </p>


        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Test Cases</h1>
        <div className="justify-items-center">
            <img src="/images/sen-5.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Traunsee. Estimated area: 24.74 km2, ground truth: 24.5 km2.
        </p>
        <div className="justify-items-center">
            <img src="/images/sen-6.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Mondsee. Estimated area: 14.18 km2, ground truth: 14.2 km2.
        </p>
        <div className="justify-items-center">
            <img src="/images/sen-7.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Hallstatter See. Estimated area: 8.37 km2, ground truth: 8.55 km2.
        </p>
        <div className="justify-items-center">
            <img src="/images/sen-8.png" alt="Traffic Emission Simulation" className="container" />
        </div>
        <p className='my-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Lake Zell. Estimated area: 4.67 km2, ground truth: 4.55 km2.
        </p>
    </div>
  );
};

export default Sen2Cube;