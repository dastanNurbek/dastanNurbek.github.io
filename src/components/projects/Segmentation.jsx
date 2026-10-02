import React from 'react';
import ProjectLayout from './ProjectLayout';

const Segmentation = () => (
  <ProjectLayout
    title="eCognition multiresolution segmentation versus open-source methods"
    subtitle="A controlled comparison of four segmentation algorithms on the same Sentinel-2A scene, run at three scale parameters."
    meta={[
      { k: 'Course', v: 'Advanced Remote Sensing' },
      { k: 'Data', v: 'Sentinel-2A' },
      { k: 'Methods', v: 'MRS · Felzenszwalb · Quickshift · SLIC' },
      { k: 'Stack', v: 'eCognition · Python' },
    ]}
    links={[{ label: 'Repository', href: 'https://github.com/dastanNurbek/advanced-rs/tree/main/Segmentation' }]}
  >
    <h2>Introduction</h2>
    <p>
      The aim of this experiment is to study the differences between eCognition multiresolution
      segmentation (MRS) and three popular segmentation methods: Felzenszwalb's efficient graph-based
      segmentation, quickshift segmentation, and SLIC — K-Means based image segmentation (Scikit-image
      documentation).
    </p>

    <h2>Methods</h2>
    <p>
      To compare the results of different segmentation methods, three scale parameters were chosen. This
      shows how each algorithm behaves as the scale of segments increases. First, a Sentinel-2A satellite
      image was segmented in eCognition with scale parameters 50, 100 and 200, shape parameter set to 0.1
      and compactness set to 0.5. Second, the same image was segmented using the remaining methods in
      Python with a relatively similar number of segments.
    </p>

    <h2>Results</h2>
    <p>
      As shown in Appendix A, the resulting segments are all vastly different. eCognition's MRS produced
      609, 127 and 42 segments during tests 1, 2 and 3 respectively. For comparison, the other algorithms'
      parameters were set to produce around the same number of segments. MRS tends to produce less
      structured segments, with high reliance on colour. Similarly, Felzenszwalb segmentation seems to rely
      heavily on colour, and if the maximum kernel size is set to a high number, even test one can produce
      segments of a larger size. SLIC segmentation produced grid-like segments, especially on homogeneous
      areas. Quickshift segmentation performed the worst of the four, in both efficiency and results.
    </p>

    <h2>Discussion</h2>
    <p>
      All segmentation methods discussed in this experiment are unique in terms of ability and versatility.
      They offer different sets of parameters, which allows for different applications.
    </p>

    <figure className="my-10">
      <img src="/images/segmentation-table.png" alt="Comparison table of segmentation results" />
      <figcaption>Appendix A — segmentation output across methods and scales.</figcaption>
    </figure>

    <h2>References</h2>
    <ul>
      <li>
        The scikit-image team. Scikit-image documentation.{' '}
        <a
          href="https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_segmentations.html#sphx-glr-auto-examples-segmentation-plot-segmentations-py"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </li>
      <li>
        Dastan Nurbekuly. GitHub repository.{' '}
        <a
          href="https://github.com/dastanNurbek/advanced-rs/tree/main/Segmentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </li>
    </ul>
  </ProjectLayout>
);

export default Segmentation;
