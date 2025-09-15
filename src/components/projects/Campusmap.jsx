import React from 'react';

const CampusMap = () => {
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold uppercase mb-10 text-center">Developing a 3D Digital Twin of the University Campus with GIS and Unity</h1>


        <h1 className="text-xl font-bold mb-4 text-center">Description of Tasks and Responsibilities</h1>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;My primary responsibility was to develop a 3D replica of the university 
            campus using accurate GIS data. The project was known as PLUS CampusMap and served as research 
            to explore how GIS technologies can be used beyond traditional mapping, such as in digital 
            twins, virtual tours, or educational simulations. To achieve this, I was tasked with integrating 
            GIS data into a game environment using the ArcGIS Maps SDK for Unity. A key part of my role was 
            to create a user-friendly interface for campus exploration. This involved learning and applying 
            C# scripting in Unity to integrate interactive elements using GIS metadata. I also had the 
            responsibility of learning techniques to model and texture buildings and landscapes from the 
            provided data to ensure a high-fidelity digital twin. The data used for the project, provided 
            by Z_GIS and the university.
        </p>


        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Learning Objectives and Key Takeaways</h1>
        <p className='mb-2'>
            &nbsp;&nbsp;&nbsp;&nbsp;My main learning objective was to understand and apply geospatial concepts 
            in 3D environments. This placement provided a hands-on opportunity to achieve this by using the 
            ArcGIS Maps SDK for Unity. I successfully integrated various GIS datasets into a unified, interactive 
            digital environment, which was a significant professional and academic milestone. The experience of 
            working on the PLUS CampusMap project helped me to develop a strong familiarity with C# scripting in 
            Unity, which was important for bringing the user interface and interactive elements to life. The 
            practical application of GIS principles in a game engine context taught me the importance of data 
            integrity and the nuanced process of translating two-dimensional spatial data into a three-dimensional 
            representation. The process of modeling and texturing based on accurate GIS data was particularly 
            insightful, highlighting the attention to detail required to create a realistic and functional digital 
            twin. This internship demonstrated the potential of GIS technologies for innovative applications like 
            virtual simulations, which align perfectly with the goals of my Master of Science program.
        </p>

        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Screenshots</h1>
        <div className="mt-2 justify-items-center">
            <img src="/images/campusmap-1.png" alt="Traffic Emission Simulation" className="container md:max-w-sm" />
        </div>
        <div className="mt-2 justify-items-center">
            <img src="/images/campusmap-2.png" alt="Traffic Emission Simulation" className="container md:max-w-sm" />
        </div>
        <div className="mt-2 justify-items-center">
            <img src="/images/campusmap-3.png" alt="Traffic Emission Simulation" className="container md:max-w-sm" />
        </div>
        <div className="mt-2 justify-items-center">
            <img src="/images/campusmap-4.png" alt="Traffic Emission Simulation" className="container md:max-w-sm" />
        </div>
        <div className="mt-2 justify-items-center">
            <img src="/images/campusmap-5.png" alt="Traffic Emission Simulation" className="container md:max-w-sm" />
        </div>
    </div>
  );
};

export default CampusMap;