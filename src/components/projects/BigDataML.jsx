import React from 'react';

const Badge = ({ children, color = 'gray' }) => {
  const colors = {
    gray: 'bg-gray-100 text-gray-800',
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    orange: 'bg-orange-100 text-orange-700',
    purple: 'bg-purple-100 text-purple-700',
  };
  return <span className={`px-3 py-1 rounded text-sm ${colors[color]}`}>{children}</span>;
};

const BigDataML = () => {
  return (
    <div className="max-w-[860px] mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-bold uppercase mb-2 text-center">
        LiDAR Point Cloud Land Cover Classification
      </h1>
      <p className="text-center text-sm text-gray-500 mb-2">
        Machine Learning &amp; Distributed Spark Framework
      </p>
      <p className="text-center text-sm text-gray-500 mb-10">
        Big Data Course &nbsp;·&nbsp; Copernicus Master's in Digital Earth &nbsp;·&nbsp; Authors: Rabina Twayana, Sahar Mohamed &amp; Dastan Nurbekuly
      </p>

      {/* Abstract */}
      <h2 className="text-xl font-bold mb-3">Abstract</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;This project introduces a reproducible <strong>PySpark</strong> pipeline
        for end-to-end processing and classification of large 3D point-cloud datasets. The
        workflow integrates exploratory data analysis, systematic preprocessing, feature engineering,
        and a distributed <strong>Random Forest</strong> classifier optimised via grid search and
        cross-validation. Scalability was evaluated by measuring runtime across varying Spark
        cluster sizes (8–30 executors) and dataset fractions (1%, 5%, 10%), producing speedup
        curves that reveal the balance between parallelism gains and orchestration overhead.
      </p>

      {/* Dataset */}
      <h2 className="text-xl font-bold mb-3 mt-8">Dataset — FRACTAL</h2>
      <p className="mb-3">
        &nbsp;&nbsp;&nbsp;&nbsp;<strong>FRACTAL</strong> (FRench ALS Clouds from TArgeted
        Landscapes) is a large open 3D point cloud benchmark for semantic segmentation of diverse
        landscapes. High-density Airborne LiDAR Scanning (ALS) was conducted over five spatial
        domains in Southern France, covering 17,280 km² at an average density of 37 pts/m².
        Points are extracted from 50×50 m geometric patches and colourised with near-infrared, red,
        green, and blue channels from ORTHO HR aerial imagery.
      </p>
      <p className="mb-4">
        The dataset contains <strong>100,000 patches</strong> split 80/10/10 into train, validation,
        and test sets. Each point is annotated with one of seven semantic classes, with a notable
        class imbalance — high vegetation and ground together account for ~87% of all points,
        while bridge decks and permanent structures represent less than 0.2%.
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        <Badge>100,000 patches</Badge>
        <Badge color="blue">37 pts/m² average</Badge>
        <Badge color="orange">7 semantic classes</Badge>
        <Badge color="purple">NRGB + Intensity + XYZ</Badge>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-4 font-bold">Class</th>
              <th className="text-right py-2 pr-4 font-bold">Train (%)</th>
              <th className="text-right py-2 pr-4 font-bold">Val (%)</th>
              <th className="text-right py-2 font-bold">Test (%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Unclassified', 0.56, 0.53, 0.67],
              ['Ground', 38.97, 39.10, 40.49],
              ['Low vegetation', 4.36, 4.31, 4.28],
              ['Medium vegetation', 4.31, 4.35, 4.27],
              ['High vegetation', 48.31, 48.27, 45.54],
              ['Building', 2.80, 2.80, 3.34],
              ['Water', 0.52, 0.49, 1.00],
              ['Bridge deck', 0.13, 0.10, 0.16],
              ['Permanent structures', 0.04, 0.04, 0.03],
            ].map(([cls, tr, va, te]) => (
              <tr key={cls} className="border-b border-gray-100">
                <td className="py-2 pr-4">{cls}</td>
                <td className="text-right py-2 pr-4">{tr}</td>
                <td className="text-right py-2 pr-4">{va}</td>
                <td className="text-right py-2">{te}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tools */}
      <h2 className="text-xl font-bold mb-3 mt-8">Tools</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Tool</th>
              <th className="text-left py-2 font-bold">Role</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Apache Spark / PySpark', 'Distributed engine for data processing and MLlib model training across the cluster'],
              ['AWS EMR', 'Managed cluster service provisioning EC2 nodes; 32-node (EMR 1) and 8-node (EMR 2) configs used'],
              ['Amazon S3', 'Object storage for raw Parquet point-cloud files and serialised model artefacts'],
              ['Spark MLlib', 'Random Forest classifier, CrossValidator, VectorAssembler, and MulticlassClassificationEvaluator'],
            ].map(([tool, role]) => (
              <tr key={tool} className="border-b border-gray-100">
                <td className="py-2 pr-6 font-medium whitespace-nowrap">{tool}</td>
                <td className="py-2 text-gray-700">{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Methodology */}
      <h2 className="text-xl font-bold mb-3 mt-8">Methodology</h2>

      <h3 className="text-lg font-bold mb-2">Preprocessing &amp; Feature Engineering</h3>
      <p className="mb-3">
        Data is ingested from S3 via Spark's S3A connector. Instead of loading the full dataset
        and then sampling rows (<code>df.sample</code>), a <strong>file-level sampling</strong>{' '}
        strategy was adopted — a fixed proportion of Parquet files is selected before loading,
        reducing task scheduling overhead and providing predictable I/O costs. The following
        transformations are applied as Spark <code>Transformer</code> classes to maintain
        compatibility with the pipeline abstraction:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-1">
        <li><strong>Coordinate decomposition</strong> — splits the 3D xyz vector into scalar X, Y, Z columns</li>
        <li><strong>Class remapping</strong> — merges child classes of the same parent (11 → 9 classes) for cleaner label boundaries</li>
        <li><strong>NDVI</strong> — computed from near-infrared and red channels to encode vegetation greenness</li>
        <li><strong>Brightness</strong> — computed from RGB spectral channels as an additional spectral index</li>
        <li><strong>VectorAssembler</strong> — assembles X, Y, Z, Red, Green, Blue, Infrared, Intensity, NDVI, Brightness into a single dense feature vector</li>
      </ul>
      <p className="mb-4">
        All steps are chained into a single <code>Pipeline</code> object that can be fitted, saved
        to S3, and reloaded for inference.
      </p>

      <h3 className="text-lg font-bold mb-2 mt-6">Model Training &amp; Evaluation</h3>
      <p className="mb-4">
        A <strong>Random Forest Classifier</strong> from Spark MLlib was chosen for its resilience
        to feature scaling, native parallel training on Spark executors, and interpretability through
        feature importances. Hyperparameters were tuned on the 1% subset using{' '}
        <code>CrossValidator</code> + <code>ParamGridBuilder</code> with a grid of{' '}
        <code>numTrees ∈ {'{10, 20, 30}'}</code> and <code>maxDepth ∈ {'{5, 10}'}</code>.
        The search took ~19 minutes on 24 executors, yielding <strong>numTrees = 30</strong> and{' '}
        <strong>maxDepth = 10</strong>, which were then used for all subsequent experiments.
        Evaluation used <code>MulticlassClassificationEvaluator</code> (accuracy) on both train
        and test splits.
      </p>

      {/* Experiment setup */}
      <h2 className="text-xl font-bold mb-3 mt-8">Experiment Setup</h2>
      <p className="mb-3">
        Two EMR cluster configurations were used. Executors 8, 16, and 24 ran on EMR 1; executor
        count 30 ran on EMR 2. Per-executor resources were held constant across all runs.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Cluster</th>
              <th className="text-right py-2 pr-6 font-bold">Nodes</th>
              <th className="text-right py-2 pr-6 font-bold">RAM / node</th>
              <th className="text-right py-2 font-bold">vCPU / node</th>
            </tr>
          </thead>
          <tbody>
            {[['EMR 1', 32, '64 GB', 8], ['EMR 2', 8, '64 GB', 8]].map(([c, n, r, v]) => (
              <tr key={c} className="border-b border-gray-100">
                <td className="py-2 pr-6">{c}</td>
                <td className="text-right py-2 pr-6">{n}</td>
                <td className="text-right py-2 pr-6">{r}</td>
                <td className="text-right py-2">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-2 text-sm text-gray-600">
        Static per-executor config: <strong>2 cores</strong>, <strong>8 GB executor memory</strong>, <strong>6 GB driver memory</strong>.
        Dataset fractions tested: 1% (800 train files), 5% (4,000), 10% (8,000). Executor counts: 8, 16, 24, 30.
      </p>

      {/* Results */}
      <h2 className="text-xl font-bold mb-3 mt-8">Results</h2>

      <h3 className="text-lg font-bold mb-2">Model Accuracy</h3>
      <p className="mb-3">
        Classification accuracy was stable across all executor counts and dataset fractions —
        adding more parallelism did not affect model quality, confirming reproducibility of the
        distributed training. Training accuracy held at <strong>81–82%</strong> and test accuracy
        at <strong>78–80%</strong> regardless of configuration.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Executors</th>
              <th className="text-right py-2 pr-4 font-bold">1% Train</th>
              <th className="text-right py-2 pr-4 font-bold">1% Test</th>
              <th className="text-right py-2 pr-4 font-bold">5% Train</th>
              <th className="text-right py-2 pr-4 font-bold">5% Test</th>
              <th className="text-right py-2 pr-4 font-bold">10% Train</th>
              <th className="text-right py-2 font-bold">10% Test</th>
            </tr>
          </thead>
          <tbody>
            {[
              [8,  81.90, 78.81, 81.30, 79.00, 81.00, 80.00],
              [16, 81.90, 78.81, 81.34, 79.70, 80.96, 79.81],
              [24, 81.90, 78.81, 81.34, 79.70, 81.00, 80.00],
              [30, 81.98, 79.17, 81.34, 79.70, 80.96, 79.81],
            ].map(([e, t1, te1, t5, te5, t10, te10]) => (
              <tr key={e} className="border-b border-gray-100">
                <td className="py-2 pr-6">{e}</td>
                <td className="text-right py-2 pr-4">{t1}%</td>
                <td className="text-right py-2 pr-4">{te1}%</td>
                <td className="text-right py-2 pr-4">{t5}%</td>
                <td className="text-right py-2 pr-4">{te5}%</td>
                <td className="text-right py-2 pr-4">{t10}%</td>
                <td className="text-right py-2">{te10}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">Total Elapsed Execution Time</h3>
      <p className="mb-3">
        Execution time decreased consistently from 8 → 24 executors across all dataset fractions.
        For the 10% fraction this represented a <strong>69% reduction</strong> (84 → 26 min). At
        30 executors, however, performance degraded across all sizes — the 10% fraction increased
        back to 35 minutes (+34.6%). This "sweet spot" at 24 executors is consistent with
        Amdahl's Law: coordination overhead from YARN scheduling and inter-executor communication
        eventually outweighs the marginal compute gains.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/big-data-1/total-elapsed-time.png"
          alt="Total elapsed wall-clock time as a function of executor count for 1%, 5%, 10% datasets"
          className="w-full max-w-[680px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 1. Total elapsed wall-clock time (minutes) vs executor count for three dataset fractions
        </p>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">Cumulative Task Execution Time</h3>
      <p className="mb-3">
        The cumulative task time — the sum of all parallel task durations — reveals how
        effectively the cluster is being utilised. At 8 executors on the 10% dataset, cumulative
        task time was 1,266 minutes while wall-clock time was only 84 minutes, a{' '}
        <strong>15.1× parallelisation factor</strong> showing ~15 tasks running concurrently.
        The optimal 24-executor config maintained 1,104 cumulative task-minutes with a 26-minute
        wall-clock — the lowest overall. At 30 executors, cumulative task time collapsed to 534
        minutes while wall-clock <em>increased</em> to 35 minutes, indicating task serialisation
        bottlenecks and executor starvation from over-partitioning.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/big-data-1/cumulative-time.png"
          alt="Cumulative task execution time across executor counts and dataset sizes"
          className="w-full max-w-[680px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 2. Cumulative task execution time (minutes) — sum of all parallel task durations
        </p>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">Speedup Analysis</h3>
      <p className="mb-3">
        Speedup is computed relative to the 8-executor baseline (T₁/Tₙ). The 10% fraction
        showed the strongest scaling: <strong>2.05× at 16</strong>, <strong>3.23× at 24</strong>,
        dropping back to 2.40× at 30 executors. Smaller fractions benefited less, reflecting
        Amdahl's Law — the serial fraction of the pipeline (shuffle coordination, model
        serialisation) limits achievable speedup regardless of how many executors are added.
        Notably, larger datasets benefit more from parallelism than smaller ones.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/big-data-1/speedup.png"
          alt="Speedup factor relative to 8-executor baseline for all dataset sizes"
          className="w-full max-w-[680px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 3. Speedup factor (relative to 8-executor baseline) vs number of executors
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Executors</th>
              <th className="text-right py-2 pr-6 font-bold">Speedup — 1%</th>
              <th className="text-right py-2 pr-6 font-bold">Speedup — 5%</th>
              <th className="text-right py-2 font-bold">Speedup — 10%</th>
            </tr>
          </thead>
          <tbody>
            {[
              [8,  '1.00×', '1.00×', '1.00×'],
              [16, '1.51×', '1.60×', '2.05×'],
              [24, '1.78×', '2.28×', '3.23×'],
              [30, '1.26×', '1.60×', '2.40×'],
            ].map(([e, s1, s5, s10]) => (
              <tr key={e} className={`border-b border-gray-100 ${e === 24 ? 'font-semibold' : ''}`}>
                <td className="py-2 pr-6">{e}{e === 24 ? ' ★ optimal' : ''}</td>
                <td className="text-right py-2 pr-6">{s1}</td>
                <td className="text-right py-2 pr-6">{s5}</td>
                <td className="text-right py-2">{s10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Challenges */}
      <h2 className="text-xl font-bold mb-3 mt-8">Key Challenges &amp; Solutions</h2>
      <div className="space-y-4 mb-6">
        {[
          {
            title: 'The small-file problem',
            body: 'Using df.sample loaded the entire dataset into memory before sampling rows, causing driver OOM errors and unpredictable I/O. Solved by file-level sampling — selecting a fixed proportion of Parquet files directly from S3 before loading, reducing task count and providing predictable runtime.',
          },
          {
            title: 'Executor OOM during shuffle phases',
            body: 'Random Forest training generates heavy shuffle traffic. Addressed by enabling the Kryo serialiser, increasing executor memory overhead, setting spark.driver.maxResultSize conservatively, and configuring spark.sql.files.maxPartitionBytes=256 MB. Adaptive Query Execution (AQE) further reduced pressure by coalescing shuffle partitions at runtime.',
          },
          {
            title: 'Straggler tasks and long-tail execution',
            body: 'Uneven input file sizes caused some executors to lag. Speculative execution was enabled to relaunch slow tasks, which worked well at 1% but at 5–10% caused too many reassignments and additional delays — a trade-off that required balancing speculative execution aggressiveness.',
          },
          {
            title: 'Client vs cluster deploy mode',
            body: 'Running in client mode excluded the driver from the cluster, reserving all resources for the client machine and causing out-of-resource errors at 30 executors. Switching to cluster mode (managed by YARN) placed the driver inside the cluster, ensuring stable resource allocation.',
          },
          {
            title: 'Multi-user queue contention',
            body: 'All groups shared the 32-node cluster simultaneously, causing queue delays. Resolved by standardising on horizontal scaling — each executor fixed at 8 GB RAM / 2 vCPUs while varying executor count — ensuring fair resource sharing without exceeding 30 executors per job.',
          },
        ].map(({ title, body }) => (
          <div key={title} className="border-l-2 border-gray-300 pl-4">
            <p className="font-semibold mb-1">{title}</p>
            <p className="text-sm text-gray-700">{body}</p>
          </div>
        ))}
      </div>

      {/* Conclusion */}
      <h2 className="text-xl font-bold mb-3 mt-8">Conclusion</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;The project demonstrated a scalable, reproducible PySpark
        pipeline for LiDAR point cloud land-cover classification on the FRACTAL dataset. Key
        findings:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-2">
        <li><strong>24 executors is the empirical optimum</strong> for this workload — adding more (30) introduces coordination and scheduling overhead that outweighs parallelism gains.</li>
        <li><strong>Model training dominates runtime</strong> at 95–98% of total execution time; preprocessing and inference are comparatively negligible.</li>
        <li>Accuracy was <strong>decoupled from executor count</strong> — train accuracy ~81–82%, test ~78–80% across all configurations, confirming distributed reproducibility.</li>
        <li>Larger fractions benefit more from scaling: the 10% dataset achieved 3.23× speedup vs only 1.78× for 1%, because larger workloads better amortise the fixed communication overhead.</li>
        <li>File-level sampling is preferable to row-level sampling for large Parquet datasets — it reduces task scheduling overhead and delivers predictable I/O costs.</li>
      </ul>

      {/* References */}
      <h2 className="text-xl font-bold mb-3 mt-4">References</h2>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Gaydon, C., Daab, M., &amp; Roche, F. (2024). <em>FRACTAL: An Ultra-Large-Scale Aerial Lidar Dataset for 3D Semantic Segmentation of Diverse Landscapes</em>. arXiv:2405.04634.
      </p>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Polak, A. (2023). <em>Scaling machine learning with Spark</em>. O'Reilly.
      </p>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Apache Spark.{' '}
        <a className="underline decoration-sky-500" href="https://spark.apache.org/docs/latest/ml-guide.html">
          Spark MLlib documentation
        </a>.
      </p>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;Amazon Web Services.{' '}
        <a className="underline decoration-sky-500" href="https://aws.amazon.com/emr/">
          Amazon EMR
        </a>.
      </p>
    </div>
  );
};

export default BigDataML;
