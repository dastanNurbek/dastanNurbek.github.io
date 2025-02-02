import React from 'react';


const Segmentation = () => {
  return (
    <div className="max-w-[800px] mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold uppercase mb-10 text-center">Comparison of eCognition multiresolution segmentation and other segmentation methods</h1>


        <h1 className="text-xl font-bold mb-4 text-center">Introduction</h1>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;The aim of this experiment is to study the 
            differences between eCognition multiresolution segmentation (MRS) and 
            three popular segmentation methods, such as Felzenszwalb’s efficient 
            graph-based segmentation, quickshift segmentation, and SLIC - K-Means 
            based image segmentation (Scikit-image documentation).
        </p>


        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Methods</h1>
        <p className='mb-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;To compare the results of different segmentation methods, three 
            scale parameters were chosen. This method shows how each algorithm behaves as the scale 
            of segments increases. First, Sentinel-2A satellite image was segmented in eCognition 
            software with scale parameters 50, 100, and 200, shape parameter set to 0.1, compactness 
            set to 0.5. Second, the same image was segmented using the remaining methods in python with 
            relatively same number of segments (GitHub Repository).
        </p>

        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Results</h1>
        <p className='mb-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;As shown in Appendix A, the resulting segments are all vastly 
            different. eCognition’s MRS produced 609, 127, 42 segments during tests 1, 2, 3, respectively. For 
            comparison, other algorithms’ parameters were set to produce around the same number of segments. MRS 
            tends to produce less structured segments, with high reliance on color. Similarly, Felzenszwalb 
            segmentation seem to rely heavily on color, and if maximum kernel size set to a high number, even 
            in test one can produce segments of bigger size. SLIC segmentation produced grid-like segments, especially 
            on homogeneous areas. Quickshift segmentation performed the worst out of four both in efficiency and results.
        </p>

        <h1 className="text-xl font-bold mb-4 mt-10 text-center">Discussion</h1>
        <p className='mb-4'>
            &nbsp;&nbsp;&nbsp;&nbsp;All segmentation methods discussed in this experiment are unique in terms 
            of ability and versatility. They offer different sets of parameters, which allows for different 
            applications.
        </p>

        <div className="justify-items-center">
            <img src="/images/segmentation-table.png" alt="Traffic Emission Simulation" className="max-w-4xl" />
        </div>

        <h1 className="text-xl font-bold mb-4 mt-10 text-center">References</h1>
        <p className='mb-2'>
            &nbsp;&nbsp;&nbsp;&nbsp;The scikit-team. Scikit-image documentation. <a className='underline decoration-sky-500' href='https://scikit-image.org/docs/dev/auto_examples/segmentation/plot_segmentations.html#sphx-glr-auto-examples-segmentation-plot-segmentations-py'>Link</a>
        </p>
        <p className='mb-2'>
            &nbsp;&nbsp;&nbsp;&nbsp;Dastan Nurbekuly. GitHub Repository. <a className='underline decoration-sky-500' href='https://github.com/dastanNurbek/advanced-rs/tree/main/Segmentation'>Link</a>
        </p>
    </div>
  );
};

export default Segmentation;