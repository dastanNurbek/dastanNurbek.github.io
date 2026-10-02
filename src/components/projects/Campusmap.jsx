import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectLayout from './ProjectLayout';

const screenshots = [
  { src: '/images/campusmap-1.png', alt: 'Campus map interface showing the 3D campus' },
  { src: '/images/campusmap-2.png', alt: 'Building metadata panel' },
  { src: '/images/campusmap-3.png', alt: 'Navigation across the campus model' },
  { src: '/images/campusmap-4.png', alt: 'Terrain and building geometry detail' },
  { src: '/images/campusmap-5.png', alt: 'Interactive data layer in the campus model' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const CampusMap = () => (
  <ProjectLayout
    title="3D digital twin of the university campus"
    subtitle="A real-time replica of the PLUS campus built from GIS data, where buildings carry their own metadata."
    meta={[
      { k: 'Engine', v: 'Unity' },
      { k: 'SDK', v: 'ArcGIS Maps SDK' },
      { k: 'Language', v: 'C#' },
      { k: 'Data', v: 'Z_GIS and university datasets' },
    ]}
  >
    <h2>What I built</h2>
    <p>
      I built a 3D replica of the university campus using real GIS data — the <strong>PLUS CampusMap</strong>.
      The goal was to go beyond traditional 2D maps and create an interactive digital twin in Unity using the
      ArcGIS Maps SDK. I wrote C# scripts to wire up UI interactions and populate buildings with metadata from
      the GIS datasets. The source data was provided by Z_GIS and the university.
    </p>

    <h2>Key takeaways</h2>
    <p>
      This project gave me hands-on experience integrating GIS pipelines into a real-time 3D engine. I got
      comfortable with C# in Unity, learned how to translate 2D spatial data into accurate 3D geometry, and
      picked up a lot about keeping data integrity intact throughout the modelling and texturing workflow. It
      showed me how game engines can be a serious tool for geospatial visualisation — not just for games.
    </p>

    <h2>Screenshots</h2>
    <div className="n-carousel mt-8">
      <Slider {...sliderSettings}>
        {screenshots.map((img) => (
          <div key={img.src}>
            <img src={img.src} alt={img.alt} className="w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  </ProjectLayout>
);

export default CampusMap;
