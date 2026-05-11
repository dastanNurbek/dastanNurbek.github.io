import React from 'react';

const Badge = ({ children, color = 'gray' }) => {
  const colors = {
    gray: 'bg-gray-100 text-gray-800',
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    orange: 'bg-orange-100 text-orange-700',
  };
  return (
    <span className={`px-3 py-1 rounded text-sm ${colors[color]}`}>{children}</span>
  );
};

const AircraftDetection = () => {
  return (
    <div className="max-w-[860px] mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-bold uppercase mb-2 text-center">
        Aircraft Detection: YOLOv8 vs. Faster R-CNN
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10">
        Computer Vision Assignment &nbsp;·&nbsp; Authors: Joshua Mangotang &amp; Dastan Nurbekuly
      </p>

      {/* Overview */}
      <h2 className="text-xl font-bold mb-3">Overview</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;This project evaluates two fundamentally different object detection
        architectures on the{' '}
        <a className="underline decoration-sky-500" href="https://www.kaggle.com/datasets/airbusgeo/airbus-aircrafts-sample-dataset">
          Airbus Aircraft Detection
        </a>{' '}
        dataset. <strong>YOLOv8 Nano</strong> represents the modern single-stage family: a unified
        network that predicts boxes and class scores in one forward pass, optimised for speed.{' '}
        <strong>Faster R-CNN (ResNet-50 + FPN)</strong> represents the classic two-stage family: a
        Region Proposal Network first proposes candidate regions, then a second head classifies and
        refines them, trading speed for precision. Both models were trained for 10 epochs on the same
        data split and then compared on a held-out test set.
      </p>

      {/* Dataset */}
      <h2 className="text-xl font-bold mb-3 mt-8">Dataset &amp; Preprocessing</h2>
      <p className="mb-3">
        &nbsp;&nbsp;&nbsp;&nbsp;The dataset contains 2560×2560 px satellite images annotated with
        polygon geometries. Each polygon was converted to an axis-aligned bounding box{' '}
        <code>[xmin, ymin, xmax, ymax]</code>. A hierarchical chronological split was applied to
        prevent data leakage:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-1">
        <li><strong>20 images</strong> reserved first as the final test set</li>
        <li><strong>20 images</strong> set aside for validation from the remaining pool</li>
        <li><strong>63 images</strong> used for training</li>
      </ul>
      <div className="flex flex-wrap gap-3 mb-4">
        <Badge>Total: 103 images</Badge>
        <Badge color="blue">Train: 63</Badge>
        <Badge color="orange">Val: 20</Badge>
        <Badge color="green">Test: 20</Badge>
      </div>
      <p className="mb-4">
        For <strong>YOLOv8</strong>, bounding boxes were normalised to the 0–1 range and saved as{' '}
        <code>.txt</code> label files in YOLO format alongside a <code>data.yaml</code> config. Images
        were resized to 1024 px to fit GPU memory. For <strong>Faster R-CNN</strong>, a custom PyTorch{' '}
        <code>Dataset</code> class loaded images and targets on the fly; the pre-trained COCO head was
        replaced with a two-class predictor (Aircraft + Background). Two classes were annotated:{' '}
        <em>Aircraft</em> and <em>Truncated_Aircraft</em>.
      </p>

      {/* Models */}
      <h2 className="text-xl font-bold mb-3 mt-8">Models</h2>

      <h3 className="text-lg font-bold mb-2">YOLOv8 Nano</h3>
      <p className="mb-4">
        YOLOv8n is the smallest variant of the YOLOv8 family, pre-trained on COCO. It uses a single
        convolutional backbone to predict bounding boxes and class probabilities in one pass. It was
        fine-tuned with <code>batch=4</code>, <code>imgsz=1024</code>, for 10 epochs using the
        Ultralytics training API.
      </p>

      <h3 className="text-lg font-bold mb-2">Faster R-CNN (ResNet-50 + FPN)</h3>
      <p className="mb-4">
        The torchvision <code>fasterrcnn_resnet50_fpn</code> was loaded with COCO weights. The final
        classification head (<code>FastRCNNPredictor</code>) was replaced to output scores for 3
        classes (background + 2 aircraft classes). The model was trained with SGD{' '}
        (<code>lr=0.005</code>, <code>momentum=0.9</code>, <code>weight_decay=0.0005</code>) for 10
        epochs with <code>batch=2</code>. Losses tracked per epoch: RPN objectness, RPN box
        regression, classifier, and box regression.
      </p>

      {/* Training */}
      <h2 className="text-xl font-bold mb-3 mt-8">Training Results</h2>

      <h3 className="text-lg font-bold mb-2">Training Time per Epoch</h3>
      <p className="mb-3">
        Faster R-CNN's two-stage pipeline is significantly slower per epoch (~46 s) compared to
        YOLOv8's single-pass design (~15 s). For a 10-epoch run this amounts to roughly 8 minutes vs
        2.5 minutes of total training time.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <Badge color="blue">YOLOv8 avg: ~15 s / epoch</Badge>
        <Badge color="orange">Faster R-CNN avg: ~46 s / epoch</Badge>
      </div>
      <div className="justify-items-center my-4">
        <img
          src="/images/aircraft/avg-train-time.png"
          alt="Average training time per epoch comparison"
          className="w-full max-w-[600px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 1. Average training time per epoch (YOLOv8 vs Faster R-CNN)
        </p>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">Loss Convergence</h3>
      <p className="mb-3">
        Both models converge over 10 epochs, but their loss scales differ due to architectural
        differences. Faster R-CNN reached a final total training loss of <strong>0.34</strong> while
        YOLOv8's combined loss (box + cls + dfl) converged to <strong>3.29</strong> — note these are
        not directly comparable since loss components are defined differently across frameworks.
        Qualitatively, both curves show smooth, monotonically decreasing behaviour with no signs of
        instability.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/aircraft/training-loss.png"
          alt="Training loss convergence for both models"
          className="w-full max-w-[640px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 2. Training loss convergence over 10 epochs
        </p>
      </div>

      <div className="overflow-x-auto mb-6 mt-2">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Model</th>
              <th className="text-right py-2 pr-6 font-bold">Avg Epoch Time (s)</th>
              <th className="text-right py-2 font-bold">Final Training Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6">YOLOv8 Nano</td>
              <td className="text-right py-2 pr-6">~15</td>
              <td className="text-right py-2">3.29</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6">Faster R-CNN</td>
              <td className="text-right py-2 pr-6">~46</td>
              <td className="text-right py-2">0.34</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Evaluation */}
      <h2 className="text-xl font-bold mb-3 mt-8">Test Set Evaluation</h2>
      <p className="mb-4">
        Both models were evaluated on the 20 held-out test images using a confidence threshold of
        0.5. The primary metric is the absolute difference between the number of detected aircraft
        and the ground-truth count — a direct measure of how many aircraft each model misses or
        over-counts.
      </p>

      <h3 className="text-lg font-bold mb-2">Error vs. Object Density</h3>
      <p className="mb-3">
        The scatter plot shows that error grows with scene density for both models. YOLOv8 accumulates
        larger absolute errors on images with many aircraft (dense scenes), while Faster R-CNN stays
        closer to ground truth. The gap is most visible above ~50 ground-truth objects per image.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/aircraft/error-vs-density.png"
          alt="Absolute count error vs ground truth object count"
          className="w-full max-w-[600px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 3. Absolute count error vs. ground-truth object density per test image
        </p>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">Inference Speed</h3>
      <p className="mb-3">
        YOLOv8 is roughly <strong>3.6× faster</strong> at inference than Faster R-CNN. The box plot
        shows YOLOv8's inference time is tightly clustered around 0.19 s, while Faster R-CNN has a
        wider distribution centered near 0.70 s — consistent with its heavier two-stage pipeline.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/aircraft/inference-time.png"
          alt="Inference time distribution per model"
          className="w-full max-w-[500px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 4. Inference time per image (box plot over 20 test images)
        </p>
      </div>

      <div className="overflow-x-auto mb-6 mt-2">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Model</th>
              <th className="text-right py-2 pr-6 font-bold">Mean Abs Error</th>
              <th className="text-right py-2 pr-6 font-bold">Median Abs Error</th>
              <th className="text-right py-2 font-bold">Mean Inference (s)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6">YOLOv8 Nano</td>
              <td className="text-right py-2 pr-6">5.55</td>
              <td className="text-right py-2 pr-6">2.5</td>
              <td className="text-right py-2">0.19</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-6">Faster R-CNN</td>
              <td className="text-right py-2 pr-6">4.30</td>
              <td className="text-right py-2 pr-6">1.0</td>
              <td className="text-right py-2">0.70</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Qualitative Results */}
      <h2 className="text-xl font-bold mb-3 mt-8">Qualitative Results</h2>
      <p className="mb-4">
        The side-by-side visualisations below show predictions from both models on two test images.
        Red bounding boxes with confidence scores are drawn above the detection threshold of 0.5.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/aircraft/result-1.png"
          alt="Side-by-side detection result on test image 1"
          className="w-full rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 5. Test image 1 — YOLOv8 (left) vs Faster R-CNN (right)
        </p>
      </div>
      <div className="justify-items-center my-4">
        <img
          src="/images/aircraft/result-2.png"
          alt="Side-by-side detection result on test image 2"
          className="w-full rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 6. Test image 2 — YOLOv8 (left) vs Faster R-CNN (right)
        </p>
      </div>

      {/* Discussion */}
      <h2 className="text-xl font-bold mb-3 mt-8">Discussion</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;Faster R-CNN achieved lower mean and median absolute error (4.30 and
        1.0 vs 5.55 and 2.5), confirming that its two-stage region-proposal approach is more
        precise at localising small, densely packed aircraft in high-resolution satellite imagery.
        The advantage is most pronounced in dense scenes, where YOLOv8's single-pass grid tends to
        merge or miss nearby objects.
      </p>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;YOLOv8, however, runs at <strong>0.19 s per image</strong> — 3.6×
        faster than Faster R-CNN's 0.70 s — and required only a third of the training time. For
        applications requiring near-real-time monitoring or rapid scanning of large satellite image
        archives, YOLOv8 represents a practical trade-off between speed and accuracy.
      </p>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;Both models were trained for only 10 epochs on 63 images, which is a
        relatively small dataset and training budget for aerial object detection. Further gains could
        be expected from longer training, data augmentation, and a larger dataset.
      </p>

      {/* Comparison table */}
      <h2 className="text-xl font-bold mb-3 mt-8">Architecture Comparison</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Property</th>
              <th className="text-right py-2 pr-6 font-bold">YOLOv8 Nano</th>
              <th className="text-right py-2 font-bold">Faster R-CNN</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Architecture', 'Single-stage', 'Two-stage (RPN + head)'],
              ['Backbone', 'YOLOv8 CSP', 'ResNet-50 + FPN'],
              ['Avg Epoch Time', '~15 s', '~46 s'],
              ['Final Train Loss', '3.29', '0.34'],
              ['Mean Abs Error', '5.55', '4.30'],
              ['Median Abs Error', '2.5', '1.0'],
              ['Mean Inference Time', '0.19 s', '0.70 s'],
              ['Best for', 'Speed, real-time use', 'Accuracy, dense scenes'],
            ].map(([prop, yolo, frcnn]) => (
              <tr key={prop} className="border-b border-gray-100">
                <td className="py-2 pr-6 font-medium">{prop}</td>
                <td className="text-right py-2 pr-6">{yolo}</td>
                <td className="text-right py-2">{frcnn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* References */}
      <h2 className="text-xl font-bold mb-3">References</h2>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Airbus. Airbus Aircraft Detection Dataset.{' '}
        <a className="underline decoration-sky-500" href="https://www.kaggle.com/datasets/airbusgeo/airbus-aircrafts-sample-dataset">
          Link
        </a>
      </p>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Ultralytics. YOLOv8 Documentation.{' '}
        <a className="underline decoration-sky-500" href="https://docs.ultralytics.com">
          Link
        </a>
      </p>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Ren, S. et al. Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks. NeurIPS, 2015.
      </p>
    </div>
  );
};

export default AircraftDetection;
