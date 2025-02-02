import React from 'react';

const TrafficSimulation = () => {
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold uppercase mb-10 text-center">Evaluating Air Quality Impact of Heavy Traffic Areas</h1>


      <h1 className="text-xl font-bold mb-4 text-center">Introduction</h1>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;Heavy traffic congestion in urban areas affects local air quality and affects the health of sensitive
population. The aim of this research is to evaluate the air pollution emissions from vehicles in traffic
areas using Agent-Based-Modeling (ABM). More precisely, we want to understand the relationship
between simulated traffic and air pollution levels to estimate how much does vehicle density on the
streets contribute to air pollution. To do this, traffic in three regions in Paris, 1st Arrondissement, 2nd
Arrondissement, 9th Arrondissement, is modeled on GAMA platform following real world traffic data.
After simulation, the observed results are compared to actual results collected from the in-situ stations.
      </p>


      <h1 className="text-xl font-bold mb-4 mt-10 text-center">Methods</h1>
      <h1 className="text-lg font-bold mb-2 italic">&nbsp;&nbsp;&nbsp;&nbsp;Data</h1>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;To create a realistic traffic model in GAMA hourly traffic count data for Paris was employed
(Paris Open Data). However, the data is mostly only available for primary roads. The missing data was
interpolated with assumptions that similar types of roads have similar amount of traffic.
      </p>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;For validation, hourly emission data for three in-situ air quality monitoring stations was used
which is stored on Airparif data portal (Airparif). The three stations are Place de l’Opera, Boulevard
Haussman, and Paris 1er les Halles.
      </p>
      <p className='mb-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;Additionally, wind data from Weather Underground was used to control the decay rate of
pollution levels in the simulation as part of scenarios (Weather Underground).
      </p >

      <h1 className="text-lg font-bold my-2 italic">&nbsp;&nbsp;&nbsp;&nbsp;GAMA</h1>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;The model is quite simple in comparison to other simulations that aim to model traffic and air
pollution. It does not require driving skills for vehicles thus saving computational costs significantly.
Instead, according to the UML diagram (Fig. 1), vehicles only drive on the road they are created, and do
not respond to the environment. Once they reach the final point on the road geometry, they disappear.
12
      </p >
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;This is done cyclically on every step for each road to match the traffic count from real-world data. Air
pollution is a value stored in cells (300 by 300) which can be accessed through car species to increase
their pollution_level (Traffic, 198). The pollution levels then diffuse to surrounding cells using diffuse
statement (GAMA Documentation, index: Diffuse statement). During each step they decay by decreasing
their value by 0.8 (Traffic, 111-116).
      </p >

      <div className="mt-2 justify-items-center">
        <img src="/images/diagram.png" alt="Traffic Emission Simulation" className="max-w-sm" />
        <p className='mb-2'>
          Figure 1. UML diagram of the traffic model.
        </p >
      </div>

      <p className='mb-2 mt-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;To understand which factors, affect pollution levels, four scenarios are considered:
      </p >
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. No wind, constant vehicle speed.
      </p >
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. No wind, vehicles go slower depending on traffic count.
      </p >
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Wind speed affects pollution decay rate, constant vehicle speed.
      </p >
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Wind speed affects pollution decay rate, vehicles go slower depending on traffic count.
      </p >


      <h1 className="text-xl font-bold mb-4 mt-10 text-center">Results</h1>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;To compare the simulation results with real-world data, 
        correlation analysis was conducted to evaluate the correlation coefficient and p-value 
        which describe the linear relationship between the two (Tables 1,2).
      </p>

      <p className='mb-2 mt-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;Table 1. Pearson correlation coefficients for simulated pollution vs in-situ Nitrogen Oxides (NOx) levels.
      </p>

      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-sm">
                  <tr>
                      <th scope="col" class="px-6 pb-3">
                          Scenario
                      </th>
                      <th scope="col" class="px-6 pb-3">
                          Place de l’Opera
                      </th>
                      <th scope="col" class="px-6 pb-3">
                          Bvd. Haussman
                      </th>
                      <th scope="col" class="px-6 pb-3">
                          Paris 1 les Halles
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 1
                      </th>
                      <td class="px-6 py-2">
                          0,368415
                      </td>
                      <td class="px-6 py-2">
                          0,343521
                      </td>
                      <td class="px-6 py-2">
                          -0,05927
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 2
                      </th>
                      <td class="px-6 py-2">
                          0,333568
                      </td>
                      <td class="px-6 py-2">
                          0,338726
                      </td>
                      <td class="px-6 py-2">
                          -0,12685
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 3
                      </th>
                      <td class="px-6 py-2">
                          0,632371
                      </td>
                      <td class="px-6 py-2">
                          0,59772
                      </td>
                      <td class="px-6 py-2">
                          0,532809
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 4
                      </th>
                      <td class="px-6 py-2">
                          0,661201
                      </td>
                      <td class="px-6 py-2">
                          0,547664
                      </td>
                      <td class="px-6 py-2">
                          0,487084
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

      <p className='mb-2 mt-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;Table 2. P-values for simulated pollution vs in-situ NOx levels.
      </p>

      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right">
              <thead class="text-sm">
                  <tr>
                      <th scope="col" class="px-6 pb-3">
                          Scenario
                      </th>
                      <th scope="col" class="px-6 pb-3">
                          Place de l’Opera
                      </th>
                      <th scope="col" class="px-6 pb-3">
                          Bvd. Haussman
                      </th>
                      <th scope="col" class="px-6 pb-3">
                          Paris 1 les Halles
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 1
                      </th>
                      <td class="px-6 py-2">
                      0,076491
                      </td>
                      <td class="px-6 py-2">
                      0,100275
                      </td>
                      <td class="px-6 py-2">
                      0,783229
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 2
                      </th>
                      <td class="px-6 py-2">
                      0,111179
                      </td>
                      <td class="px-6 py-2">
                      0,105424
                      </td>
                      <td class="px-6 py-2">
                      0,554737
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 3
                      </th>
                      <td class="px-6 py-2">
                      0,000915
                      </td>
                      <td class="px-6 py-2">
                      0,002039
                      </td>
                      <td class="px-6 py-2">
                      0,007349
                      </td>
                  </tr>
                  <tr>
                      <th scope="row" class="px-6 py-2 font-medium">
                          Scenario 4
                      </th>
                      <td class="px-6 py-2">
                      0,000435
                      </td>
                      <td class="px-6 py-2">
                      0,005602
                      </td>
                      <td class="px-6 py-2">
                      0,015779
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

      <p className='mb-2 mt-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;After adding the wind parameter which slightly speeds up the decay 
        rate, the simulated results fit the real-world data significantly better. This 
        is expected since wind plays a key role in movement of chemicals in the air. Even 
        though the correlation coefficients are not ideal, the p-values show that with scenario 3 
        and scenario 4 models, we can predict the real-world values with great confidence. Interestingly, 
        adding slower car speed for higher traffic counts works for some stations and decrease the accuracy 
        for other stations. This can be because the road capacity is not taken into consideration when assigning 
        the traffic count threshold for decreasing the speed.
      </p>

      <div className="mt-2 justify-items-center">
        <img src="/images/result-sim.png" alt="Traffic Emission Simulation" className="max-w-lg" />
      </div>

      <div className="justify-items-center">
        <img src="/images/result-real.png" alt="Traffic Emission Simulation" className="max-w-lg" />
        <p className='mb-2'>
          Figure 2. Simulated (top) vs real-world (NOx) (bottom) air pollution levels.
        </p >
      </div>

      <p className='mb-2 mt-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;Patterns in pollution changes in Fig. 2 are visually quite 
        similar due to the fact NOx is mainly emitted from burning fuel and it is known that 
        cars are the main contributors. Thus, the peaks clearly correspond to the peak-hours. It 
        is also interesting to see that station at Paris 1er les Halles recorded significantly 
        smaller levels of pollutants both in real-world and in simulation.
      </p>

      <div className="justify-items-center">
        <img src="/images/comparison_3.png" alt="Traffic Emission Simulation" className="max-w-lg" />
        <p className='mb-2'>
          Figure 3. Normalized difference between simulated and real-world data.
        </p >
      </div>

      <p className='mb-2 mt-4'>
        &nbsp;&nbsp;&nbsp;&nbsp;Looking at the normalized difference between two results on Fig. 3, the 
        data per station fit well. However, interpolation might have caused the simulated results to 
        look like the convoluted time series of real-world data, as it repeats the patterns of all 
        three stations. Finally, it is most likely that Place de l’Opera station has the best fit 
        since it is located at the intersection with existing traffic counts while other two stations are not.
      </p>

      <h1 className="text-xl font-bold mb-4 mt-10 text-center">Discussion</h1>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;The results clearly indicate that traffic is the main 
        contributor to air pollution, specifically NOx levels. Correlation analysis 
        shows that the simulation in this research proves to be a reliable method to 
        model traffic emissions given the traffic count data. Although to further 
        investigate the validity, this method must be applied to multitude of different 
        time periods and other locations as well. However, even with the limited amount 
        of traffic data, by making the right assumptions and taking wind into consideration 
        this kind of simple simulation in GAMA yielded surprisingly sufficient results. This 
        means that with more traffic count data we can achieve even better accuracy. Finally, the 
        study proves that Agent Based Modelling is a powerful tool that allows us to analyze 
        real-world phenomena such as air pollution and estimate the impact of different 
        factors, such as traffic in this case. This is particularly challenging to do with 
        statistical methods as the input data holds vast amount of noise. Overall, this study 
        achieved its purpose to identify the relationship between traffic and air pollution in Paris.
      </p>

      <h1 className="text-xl font-bold mb-4 mt-10 text-center">References</h1>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;Paris Open Data. <span className='italic'>OpenDataParis.</span> <a className='underline decoration-sky-500' href='https://opendata.paris.fr/explore/dataset/comptages-routiers-permanents/information/'>https://opendata.paris.fr/explore/dataset/comptages-routiers-permanents/information/</a>
      </p>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;Airparif. <span className='italic'>Airparif.</span> <a className='underline decoration-sky-500' href='https://data-airparif-asso.opendata.arcgis.com/'>https://data-airparif-asso.opendata.arcgis.com/</a>
      </p>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;Weather Underground. <span className='italic'>Val-de-Marne, France Weather History.</span> <a className='underline decoration-sky-500' href='https://www.wunderground.com/history/daily/fr/paris/LFPO/date/2024-7-19'>https://www.wunderground.com/history/daily/fr/paris/LFPO/date/2024-7-19</a>
      </p>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;Dastan Nurbekuly. <span className='italic'>Traffic.</span> GitHub Repository. <a className='underline decoration-sky-500' href='https://github.com/dastanNurbek/spatial-simulation/tree/main/Models/Traffic'>https://github.com/dastanNurbek/spatial-simulation/tree/main/Models/Traffic</a>
      </p>
      <p className='mb-2'>
        &nbsp;&nbsp;&nbsp;&nbsp;GAMA Documentation. <span className='italic'>GAMA Platform.</span> <a className='underline decoration-sky-500' href='https://gama-platform.org/wiki/Home'>https://gama-platform.org/wiki/Home</a>
      </p>
    </div>
  );
};

export default TrafficSimulation;