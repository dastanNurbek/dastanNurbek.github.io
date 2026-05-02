import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const screenshots = [
  { src: '/images/campusmap-1.png', alt: 'Campus Map Screenshot 1' },
  { src: '/images/campusmap-2.png', alt: 'Campus Map Screenshot 2' },
  { src: '/images/campusmap-3.png', alt: 'Campus Map Screenshot 3' },
  { src: '/images/campusmap-4.png', alt: 'Campus Map Screenshot 4' },
  { src: '/images/campusmap-5.png', alt: 'Campus Map Screenshot 5' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const CampusMap = () => {
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold uppercase mb-10 text-center">
        3D Digital Twin of the University Campus
      </h1>

      <h2 className="text-xl font-bold mb-4 text-center">What I Built</h2>
      <p className="mb-6">
        I built a 3D replica of the university campus using real GIS data — the <strong>PLUS CampusMap</strong>.
        The goal was to go beyond traditional 2D maps and create an interactive digital twin in Unity
        using the ArcGIS Maps SDK. I wrote C# scripts to wire up UI interactions and populate
        buildings with metadata from the GIS datasets. The source data was provided by Z_GIS and the university.
      </p>

      <h2 className="text-xl font-bold mb-4 text-center">Key Takeaways</h2>
      <p className="mb-10">
        This project gave me hands-on experience integrating GIS pipelines into a real-time 3D engine.
        I got comfortable with C# in Unity, learned how to translate 2D spatial data into accurate 3D geometry,
        and picked up a lot about keeping data integrity intact throughout the modeling and texturing workflow.
        It showed me how game engines can be a serious tool for geospatial visualization — not just for games.
      </p>

      <h2 className="text-xl font-bold mb-6 text-center">Screenshots</h2>
      <Slider {...sliderSettings}>
        {screenshots.map((img, i) => (
          <div key={i} className="px-2">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CampusMap;
