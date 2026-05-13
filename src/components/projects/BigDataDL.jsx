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

const BigDataDL = () => {
  return (
    <div className="max-w-[860px] mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-bold uppercase mb-2 text-center">
        BigEarthNet Land Cover Classification
      </h1>
      <p className="text-center text-sm text-gray-500 mb-2">
        Deep Learning &amp; Distributed Computing Framework
      </p>
      <p className="text-center text-sm text-gray-500 mb-10">
        Big Data Course &nbsp;·&nbsp; Copernicus Master's in Digital Earth &nbsp;·&nbsp; Authors: Angelica Moreno &amp; Dastan Nurbekuly
      </p>

      {/* Abstract */}
      <h2 className="text-xl font-bold mb-3">Abstract</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;This project investigates the scalability of U-Net architecture
        training using distributed deep learning on the{' '}
        <strong>BigEarthNet v2</strong> dataset. We developed an end-to-end workflow partitioned
        into two phases: a remote data preprocessing stage on <strong>AWS EMR</strong> using{' '}
        <strong>PySpark</strong>, and a distributed training stage using{' '}
        <strong>TensorFlow MirroredStrategy</strong>. Experiments were performed across 1%, 5%,
        and 10% dataset fractions and 1, 2, and 4 GPU configurations to measure the trade-offs
        between I/O overhead and multi-GPU computational speedups.
      </p>

      {/* Dataset */}
      <h2 className="text-xl font-bold mb-3 mt-8">Dataset</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;BigEarthNet V.2 contains <strong>549,488 patch pairs</strong> from
        Sentinel-2 optical and Sentinel-1 SAR imagery collected over 10 European countries
        (2017–2018). Each patch covers approximately 1.2 × 1.2 km and is annotated with
        pixel-level land-cover labels from the CORINE Land Cover 2018 database (19 classes). The
        full dataset is stored in Amazon S3 as 8.24 million TIF files totalling 144.1 GB, with a
        metadata Parquet file that defines the 50/25/25 train/val/test split.
      </p>
      <p className="mb-4">
        The bands used for training are:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-1">
        <li><strong>Sentinel-2</strong>: B02 (Blue), B03 (Green), B04 (Red) — 120×120 px</li>
        <li><strong>Sentinel-1</strong>: VV and VH polarisation bands — 120×120 px</li>
      </ul>
      <p className="mb-4">
        These five bands were fused into a single 5-channel composite tensor (120×120×5),
        enabling the model to leverage both spectral and textural features. Bands were chosen for
        matching spatial resolution to minimise preprocessing complexity.
      </p>
      <div className="flex flex-wrap gap-3 mb-4">
        <Badge>549,488 image pairs</Badge>
        <Badge color="blue">144.1 GB on S3</Badge>
        <Badge color="orange">19 land-cover classes</Badge>
        <Badge color="purple">5-channel input</Badge>
      </div>

      {/* Tools */}
      <h2 className="text-xl font-bold mb-3 mt-8">Tools &amp; Stack</h2>
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
              ['Apache Spark / PySpark', 'Distributed ETL — ingestion, transformation, and S3 serialization of satellite patches'],
              ['AWS EMR', 'Managed cluster (8 nodes, up to 4 GPUs) for provisioning Spark and TensorFlow across EC2 instances'],
              ['Amazon S3', 'Object storage for raw TIF files and processed Parquet datasets'],
              ['Petastorm', 'Bridges PySpark and TensorFlow — serialises tensors to Parquet via Unischema, streams directly to GPU'],
              ['TensorFlow / Keras', 'U-Net model definition, training loop, and distributed strategy'],
              ['tf.distribute.MirroredStrategy', 'Synchronous multi-GPU data parallelism using NVIDIA NCCL all-reduce'],
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

      <h3 className="text-lg font-bold mb-2">Phase 1 — Distributed Preprocessing</h3>
      <p className="mb-3">
        Raw metadata was parsed to construct S3 file paths for each band. The transformation
        pipeline ran inside PySpark <code>mapPartitions</code>, initialising S3 connections once
        per partition rather than per record to minimise network overhead. Each partition:
      </p>
      <ol className="list-decimal pl-8 mb-4 space-y-1">
        <li>Read Sentinel-1 (VV, VH) and Sentinel-2 (B02, B03, B04) rasters from S3</li>
        <li>Stacked them into a 5-channel array (120×120×5) normalised to <code>float32</code></li>
        <li>Remapped CORINE's 45 3-digit class codes to 19 contiguous categories via a NumPy Lookup Table (O(1) per pixel)</li>
        <li>Repartitioned to ≈100 samples per block to prevent executor OOM</li>
        <li>Serialised to Parquet via Petastorm's <code>materialize_dataset</code> and wrote to S3</li>
      </ol>
      <p className="mb-4">
        The workflow was run independently for 1%, 5%, and 10% dataset fractions using a fixed
        random seed (seed=42) for reproducibility.
      </p>

      <h3 className="text-lg font-bold mb-2 mt-6">Phase 2 — Distributed Model Training</h3>
      <p className="mb-4">
        Training used <code>tf.distribute.MirroredStrategy</code>, which replicates the full model
        on each GPU and synchronises gradients via NCCL all-reduce after every step. The global
        batch size scaled proportionally with GPU count (8 per replica), so the per-GPU workload
        remained constant. Data was streamed directly from S3 via Petastorm's thread-pool reader
        with <code>tf.data.AUTOTUNE</code> prefetching to overlap I/O and compute. All runs used
        the Adam optimiser (lr=0.001), Sparse Categorical Crossentropy loss, and 10 epochs.
      </p>

      {/* Architecture */}
      <h2 className="text-xl font-bold mb-3 mt-8">U-Net Architecture</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;A custom lightweight U-Net (~1.9M parameters) was implemented
        to balance segmentation accuracy with the computational budget. It processes 5-channel
        120×120 px inputs through a symmetric encoder-decoder:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-1">
        <li><strong>Encoder</strong>: four blocks of 3×3 convolutions + max-pooling, doubling feature channels from 32 → 64 → 128</li>
        <li><strong>Bottleneck</strong>: 256 filters capturing high-level semantic features</li>
        <li><strong>Decoder</strong>: nearest-neighbour upsampling + skip connections from encoder to preserve spatial localisation; channels reduce back 128 → 64 → 32</li>
        <li><strong>Output head</strong>: 1×1 convolution + Softmax over 20 classes (19 land-cover + 1 unlabelled)</li>
      </ul>
      <p className="mb-4">
        The small parameter count kept per-step compute low, which — as the results show — made
        the model communication-bound during distributed training.
      </p>

      {/* Results */}
      <h2 className="text-xl font-bold mb-3 mt-8">Results</h2>

      <h3 className="text-lg font-bold mb-2">Preprocessing Throughput</h3>
      <p className="mb-3">
        Spark executor configurations were tuned on 1% of the data. Contrary to intuition, adding
        more executors beyond 2 increased preprocessing time due to S3 coordination and shuffle
        overhead. The sweet spot was <strong>2 executors, 19 GB memory, 3 cores each</strong>
        (130.69 s for 1%). This configuration was then applied to larger fractions:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Data %</th>
              <th className="text-right py-2 pr-6 font-bold">Executors</th>
              <th className="text-right py-2 pr-6 font-bold">Memory (GB)</th>
              <th className="text-right py-2 pr-6 font-bold">Cores</th>
              <th className="text-right py-2 font-bold">Time (s)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1%', 8, 16, 2, 522.55],
              ['1%', 2, 16, 2, 190.25],
              ['1% (best)', 2, 19, 3, 130.69],
              ['5%', 2, 19, 3, 636.86],
              ['10%', 2, 19, 3, 1066.81],
            ].map(([d, e, m, c, t]) => (
              <tr key={`${d}-${e}`} className={`border-b border-gray-100 ${d.includes('best') ? 'font-semibold' : ''}`}>
                <td className="py-2 pr-6">{d}</td>
                <td className="text-right py-2 pr-6">{e}</td>
                <td className="text-right py-2 pr-6">{m}</td>
                <td className="text-right py-2 pr-6">{c}</td>
                <td className="text-right py-2">{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">Model Accuracy vs. Data Volume</h3>
      <p className="mb-3">
        The model showed a clear positive correlation between dataset size and segmentation
        performance. On only 1% of data the U-Net underfitted severely (36.2% test accuracy),
        while scaling to 10% brought a <strong>+17.8 percentage-point</strong> gain to 54.0% on
        the 4-GPU configuration — confirming that sample diversity is as critical as model
        complexity in Earth Observation tasks.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/big-data-2/accuracy.png"
          alt="Train and test accuracy across GPU configurations and data fractions"
          className="w-full max-w-[700px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 1. Model train and test accuracies across 1, 2, and 4 GPU configurations for
          1%, 5%, and 10% data fractions
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-4 font-bold">Data</th>
              <th className="text-right py-2 pr-4 font-bold">GPUs</th>
              <th className="text-right py-2 pr-4 font-bold">Batch</th>
              <th className="text-right py-2 pr-4 font-bold">Avg Epoch (s)</th>
              <th className="text-right py-2 pr-4 font-bold">Best Val Acc</th>
              <th className="text-right py-2 pr-4 font-bold">Test Acc</th>
              <th className="text-right py-2 font-bold">Test Loss</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1%',  1, 8,  13.91, '40.1%', '36.2%', 1.89],
              ['1%',  2, 16, 9.73,  '38.8%', '36.6%', 1.92],
              ['1%',  4, 32, 8.81,  '41.0%', '39.0%', 1.84],
              ['5%',  1, 8,  56.85, '51.2%', '51.0%', 1.44],
              ['5%',  2, 16, 34.67, '48.4%', '48.8%', 1.52],
              ['5%',  4, 32, 25.04, '48.1%', '43.5%', 1.71],
              ['10%', 1, 8,  109.82,'52.9%', '52.2%', 1.40],
              ['10%', 2, 16, 70.08, '54.0%', '52.4%', 1.40],
              ['10%', 4, 32, 44.78, '55.2%', '54.0%', 1.34],
            ].map(([d, g, b, e, bv, ta, tl]) => (
              <tr key={`${d}-${g}`} className={`border-b border-gray-100 ${d === '10%' && g === 4 ? 'font-semibold' : ''}`}>
                <td className="py-2 pr-4">{d}</td>
                <td className="text-right py-2 pr-4">{g}</td>
                <td className="text-right py-2 pr-4">{b}</td>
                <td className="text-right py-2 pr-4">{e}</td>
                <td className="text-right py-2 pr-4">{bv}</td>
                <td className="text-right py-2 pr-4">{ta}</td>
                <td className="text-right py-2">{tl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-bold mb-2 mt-6">GPU Scalability &amp; Speedup</h3>
      <p className="mb-3">
        Multi-GPU training yielded consistent but sub-linear speedups. On the 10% fraction,
        scaling from 1 to 2 GPUs achieved a <strong>1.57× speedup</strong> (78.5% parallel
        efficiency) and scaling to 4 GPUs reached <strong>2.45× speedup</strong> (61.25%
        efficiency). The gap from the ideal 4× linear speedup is explained by Amdahl's Law:
        with an estimated 18% serial fraction (dataset init, gradient aggregation, weight updates),
        the theoretical maximum is 2.63× — closely matching the observed 2.45×.
      </p>
      <p className="mb-3">
        The 1% fraction showed much poorer scaling (1.58× on 4 GPUs) because NCCL
        synchronisation overhead dominated the very short per-epoch compute time. Distributed
        training only becomes economically viable for this model when the per-epoch workload
        exceeds ~10,000 global batches.
      </p>
      <div className="justify-items-center my-4">
        <img
          src="/images/big-data-2/speedup.png"
          alt="GPU speedup curves for 1%, 5%, 10% data fractions vs ideal linear speedup"
          className="w-full max-w-[640px] rounded"
        />
        <p className="text-sm text-gray-500 text-center mt-1">
          Figure 2. GPU speedup curves (per-epoch time) across dataset fractions vs. ideal linear
          scaling
        </p>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Configuration</th>
              <th className="text-right py-2 pr-6 font-bold">Speedup (10% data)</th>
              <th className="text-right py-2 font-bold">Parallel Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['1 GPU (baseline)', '1.00×', '—'],
              ['2 GPUs', '1.57×', '78.5%'],
              ['4 GPUs', '2.45×', '61.25%'],
              ['4 GPUs – ideal', '4.00×', '100%'],
            ].map(([cfg, sp, eff]) => (
              <tr key={cfg} className="border-b border-gray-100">
                <td className="py-2 pr-6">{cfg}</td>
                <td className="text-right py-2 pr-6">{sp}</td>
                <td className="text-right py-2">{eff}</td>
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
            title: 'Petastorm ↔ TensorFlow pipeline starvation',
            body: 'The Petastorm reader exhausted data partition-by-partition, conflicting with MirroredStrategy\'s expectation of a continuous stream. Fixed by setting num_epochs=None on the reader and passing an explicit steps_per_epoch to model.fit(), decoupling data streaming from epoch management.',
          },
          {
            title: 'CUDA / XLA incompatibility on AWS EMR',
            body: 'The cluster lacked the CUDA drivers required by standard TensorFlow builds. Resolved by managing dependencies with uv and explicitly disabling the JIT compiler via tf.config.optimizer.set_jit(False).',
          },
          {
            title: 'Spark OOM from data skew',
            body: 'Certain partitions contained disproportionately many high-resolution patches, overflowing 16 GB executor memory. Fixed by forcing split_df.repartition() to cap each partition at ≈100 samples before writing to S3.',
          },
          {
            title: 'Non-contiguous CORINE class labels',
            body: 'The raw CLC used a 3-digit coding scheme (e.g. 111, 121, 211) across 45 classes, incompatible with SparseCategoricalCrossentropy. Resolved with a dense NumPy Lookup Table (LUT) remapping all 45 codes to 19 contiguous IDs at O(1) complexity per pixel.',
          },
          {
            title: 'Petastorm schema & metadata mismatch',
            body: 'Standard Parquet writers omit the _common_metadata files Petastorm requires. Fixed by using the materialize_dataset context manager, and enforcing np.float32 / np.uint8 dtypes in the Unischema with explicit tf.cast in the tf.data pipeline.',
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
        &nbsp;&nbsp;&nbsp;&nbsp;The project demonstrated a scalable end-to-end pipeline for
        semantic segmentation of satellite imagery in a cloud-native environment, bridging
        PySpark ETL with TensorFlow distributed training via Petastorm. Key findings:
      </p>
      <ul className="list-disc pl-8 mb-4 space-y-2">
        <li>Dataset volume is more impactful than GPU count for model quality — going from 1% to 10% of data improved test accuracy by <strong>+17.8 pp</strong>, while adding GPUs mainly reduced training time.</li>
        <li>Multi-GPU scaling is <strong>communication-bound</strong> for lightweight models: the 1.9M-parameter U-Net achieved only 2.45× speedup on 4 GPUs, well below the ideal 4×. Heavier backbones would better amortise NCCL overhead.</li>
        <li>For preprocessing, a <strong>2-executor configuration</strong> outperformed 8 executors due to S3 coordination overhead — more parallelism is not always better in high-latency cloud storage environments.</li>
        <li>Petastorm's direct S3 streaming eliminated local staging but introduced network variance that became a bottleneck under 4-GPU concurrent reads.</li>
      </ul>

      {/* References */}
      <h2 className="text-xl font-bold mb-3 mt-4">References</h2>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;K. Clasen et al. <em>reBEN: Refined BigEarthNet Dataset for Remote Sensing Image Analysis</em>. IGARSS, 2025.
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

export default BigDataDL;
