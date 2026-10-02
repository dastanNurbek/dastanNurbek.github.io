import React from 'react';
import ProjectLayout from './ProjectLayout';

const script = `//VERSION=3
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
}`;

const EOBrowser = () => (
  <ProjectLayout
    title="Wildfire assessment with custom scripts in EO Browser"
    subtitle="Burnt-area detection over the Abai region, Kazakhstan, using a multispectral custom script on Sentinel-2 Level-1C data."
    meta={[
      { k: 'Platform', v: 'EO Browser' },
      { k: 'Data', v: 'Sentinel-2 L1C' },
      { k: 'Area', v: 'Abai region, Kazakhstan' },
      { k: 'Event', v: 'Wildfires, June 2023' },
    ]}
  >
    <h2>Introduction</h2>
    <p>
      The aim of the exercise is to investigate the custom script functionality of EO Browser by
      implementing JavaScript from the custom-scripts GitHub repository.
    </p>

    <h2>Methods</h2>
    <p>
      The Burned Area Multispectral script, used for wildfire detection, was chosen for this experiment. It
      uses Sentinel-2 Level-1C data and applies the Normalized Difference Vegetation Index (NDVI), the
      Normalized Difference Moisture Index (NDMI) and custom band math over bands 12, 11 and 8. These bands
      were chosen because they all have low reflectance on recently burned areas (Monja Šebela). The script
      uses an if statement for different values per pixel and creates a mask if the value falls in the given
      range.
    </p>

    <pre>
      <code>{script}</code>
    </pre>

    <p>
      The Abai region in Kazakhstan was chosen as the area of interest, to evaluate the area of wildfires
      that took place in June 2023.
    </p>

    <h2>Results</h2>
    <p>
      As seen in Figure 1, in true colour images the burnt areas are visibly darker, linked to the wildfires
      that took place from 8 to 13 June.
    </p>

    <figure className="my-10">
      <div className="grid grid-cols-2 gap-4">
        <img src="/images/eo-1.jpg" alt="Sentinel-2 L1C scene of eastern Abai region, 1 August" />
        <img src="/images/eo-2.jpg" alt="Sentinel-2 L1C scene of eastern Abai region, 14 August" />
      </div>
      <figcaption>
        Figure 1 — S2 L1C scenes of the eastern Abai region. Acquisition 01-08-2025 (left), 14-08-2025
        (right).
      </figcaption>
    </figure>

    <p>
      The wildfire evaluation results shown in Figure 2 indicate that this method is generally reliable in
      detecting wildfires. It is necessary to validate the results against other methods and sources, but it
      is a useful script for identifying forest fires without evaluating the precise area.
    </p>

    <figure className="my-10">
      <img src="/images/eo-3.jpg" alt="Custom script output highlighting burnt area" />
      <figcaption>Figure 2 — custom script result.</figcaption>
    </figure>

    <h2>References</h2>
    <ul>
      <li>
        Monja Šebela (2020). GitHub repository.{' '}
        <a
          href="https://github.com/sentinel-hub/custom-scripts/tree/main/sentinel-2/burned_area_ms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </li>
      <li>
        2023 Kazakhstan wildfires (2024). In Wikipedia.{' '}
        <a
          href="https://en.wikipedia.org/wiki/2023_Kazakhstan_wildfires"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </li>
    </ul>
  </ProjectLayout>
);

export default EOBrowser;
