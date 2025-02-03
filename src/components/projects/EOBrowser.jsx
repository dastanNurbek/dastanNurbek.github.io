import React from 'react';

const script = `
    //VERSION=3
    // Burned area detection
    // Author: Monja B. Šebela
    function setup() {
      return {
        input: ["B02", "B03", "B04", "B08", "B11", "B12", "dataMask"],
        output: { bands: 4 }
      };
    }

    function evaluatePixel(samples) {
      var NDWI = index(samples.B03, samples.B08);
      var NDVI = index(samples.B08, samples.B04);
      var INDEX = ((samples.B11 - samples.B12) / (samples.B11 + samples.B12)) + (samples.B08);

      if ((INDEX > 0.1) || (samples.B02 > 0.1) || (samples.B11 < 0.1) || (NDVI > 0.3) || (NDWI > 0.1)) {
        return [2.5 * samples.B04, 2.5 * samples.B03, 2.5 * samples.B02, samples.dataMask];
      } else {
        return [1, 0, 0, samples.dataMask];
      }
    }
  `;

const EOBrowser = () => {
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold uppercase mb-10 text-center">EO-Browser: Custom Scripts</h1>


        <h1 className="text-xl font-bold mb-4 text-center">Introduction</h1>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The aim of the exercise is to investigate 
            custom script functionality of EO-Browser by implementing a JavaScript 
            code from custom-scripts GitHub repository.
        </p>


        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Methods</h1>
        <p className='mb-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Burned Area Multispectral script, used 
            for wildfire detection, was chosen for this experiment. It uses 
            Sentinel-2 Level-1C data and applies Normalized Difference Vegetation 
            Index (NDVI), Normalized Difference Moisture Index (NDMI), and custom 
            band math using bands 12, 11, and 8. These bands were chosen because 
            they all have low reflectance on recently burned areas (Monja Šebela). The 
            script uses an if statement for different values for each pixel and creates 
            a mask if the value falls in the given range.
        </p>
            
        <pre>
            <code className='text-xs inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-2 pl-2'>{script}</code>
        </pre>

        <p className='mb-2 mt-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;Abai Region in Kazakhstan was chosen as the 
            area of interest to evaluate the area of wildfires that took place in June 2023. (Wikipedia).
        </p>


        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Results</h1>
        <p className='mb-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;As seen in Figure 1, in true color images 
            the burnt areas are visibly darker, linked to the wildfires taken 
            place from June 8, 2024, to June 13, 2024.
        </p>

        <div className="mt-2 grid grid-cols-2 gap-4 justify-items-center">
            <img src="/images/eo-1.jpg" alt="Traffic Emission Simulation" className="container" />
            <img src="/images/eo-2.jpg" alt="Traffic Emission Simulation" className="container" />
        </div>
            
        <div className='justify-items-center'>
            <p className='mb-2'>
                Figure 1. S2 L1C images of eastern Abai Region. Acquisition date: 01-08-2025 (left), 14-08-2025 (right).
            </p >
        </div>

        <p className='mb-4 mt-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;The wildfire evaluation results shown in 
            Figure 2, indicate that this method is generally reliable in detecting 
            wildfires.  It is necessary to validate the results with other methods 
            and sources. However, it is a useful script for only identifying forest 
            fires without evaluating the precise area.
        </p>

        <div className="justify-items-center">
            <img src="/images/eo-3.jpg" alt="Traffic Emission Simulation" className="container" />
            <p className='mb-2'>
            Figure 2. Custom script result.
            </p >
        </div>

        <h1 className="text-xl font-bold mb-4 mt-10 text-center">References</h1>
        <p className='mb-2'>
            &nbsp;&nbsp;&nbsp;&nbsp;Monja Šebela. (2020). GitHub Repository. <a className='underline decoration-sky-500' href='https://github.com/sentinel-hub/custom-scripts/tree/main/sentinel-2/burned_area_ms'>Link</a>
        </p>
        <p className='mb-2'>
            &nbsp;&nbsp;&nbsp;&nbsp;2023 Kazakhstan wildfires. (2024, 07, 01). In Wikipedia. <a className='underline decoration-sky-500' href='https://en.wikipedia.org/wiki/2023_Kazakhstan_wildfires'>Link</a>
        </p>
    </div>
  );
};

export default EOBrowser;