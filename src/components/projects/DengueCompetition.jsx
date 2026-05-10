import React from 'react';

const metrics = [
  { label: 'No Preprocessing', mae: 27.96, rmse: 36.81, image: '/images/dengue/base_model.png', alt: 'Experiment 1 – base model predictions vs actuals' },
  { label: '+ Lag Features', mae: 23.55, rmse: 30.46, image: '/images/dengue/base_model_lag.png', alt: 'Experiment 2 – with 10-week lag' },
  { label: '+ Log Transform', mae: 17.05, rmse: 28.98, image: '/images/dengue/base_model_lag_log.png', alt: 'Experiment 3 – with log-transform' },
  { label: '+ Feature Engineering', mae: 14.83, rmse: 24.89, image: '/images/dengue/base_model_lag_log_feature.png', alt: 'Experiment 4 – with engineered precipitation features' },
  { label: '+ Feature Selection', mae: 14.17, rmse: 21.48, image: '/images/dengue/base_model_lag_log_less_features.png', alt: 'Experiment 5 – top 5 features only' },
];

const DengueCompetition = () => {
  return (
    <div className="max-w-[860px] mx-auto w-full px-6 py-10">
      <h1 className="text-2xl font-bold uppercase mb-2 text-center">
        DengAI: Predicting Dengue Disease Spread
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10">
        DrivenData Competition &nbsp;·&nbsp; Authors: Dastan Nurbekuly &amp; Joshua Mangotang
      </p>

      {/* Introduction */}
      <h2 className="text-xl font-bold mb-3">Introduction</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;This project is part of the{' '}
        <a className="underline decoration-sky-500" href="https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/">
          DengAI competition
        </a>{' '}
        hosted on DrivenData, with the goal of predicting the number of dengue fever cases per
        week in San Juan (Puerto Rico) using climate and environmental data spanning roughly 18 years.
        Dengue transmission is tightly coupled to temperature, humidity, and precipitation because the
        <em> Aedes</em> mosquito depends on these conditions for breeding and survival.
      </p>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;The dataset contains 22 weekly climate features — grouped into NDVI
        (vegetation), precipitation, and temperature categories — plus the integer target{' '}
        <code>total_cases</code>. The label distribution is strongly right-skewed: most weeks have
        low case counts, but rare outbreak weeks can exceed 400 cases.
      </p>

      {/* Model */}
      <h2 className="text-xl font-bold mb-3 mt-8">Model</h2>
      <p className="mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;A <strong>Random Forest Regressor</strong> was selected as the primary
        model because it averages many decision trees to reduce variance, handles non-linear
        interactions naturally, and tolerates noisy inputs well — all important properties for a
        time series with irregular seasonal outbreaks. Data was split chronologically into 60 % train,
        20 % validation, and 20 % test to prevent future leakage.
      </p>

      {/* Feature engineering pipeline */}
      <h2 className="text-xl font-bold mb-3 mt-8">Feature Engineering — Step by Step</h2>
      <p className="mb-6">
        Four successive experiments were run, each adding one preprocessing or feature engineering
        step to isolate its contribution to model performance. Test MAE dropped from 27.96 to 14.07
        across the pipeline.
      </p>

      {/* Step 1 */}
      <h3 className="text-lg font-bold mb-2">Step 1 — Base Model (no preprocessing)</h3>
      <p className="mb-3">
        A vanilla Random Forest was trained on linearly interpolated raw features. No temporal
        structure was added. The model is clearly underfitted: it cannot align its predictions with
        the actual case series because dengue does not respond instantaneously to environmental
        conditions.
      </p>
      <div className="flex flex-wrap gap-4 mb-2 items-center">
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test MAE: 27.96</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test RMSE: 36.81</span>
      </div>
      <div className="justify-items-center my-4">
        <img src="/images/dengue/base_model.png" alt="Base model predictions" className="w-full max-w-[700px] rounded" />
        <p className="text-sm text-gray-500 text-center mt-1">Figure 1. Experiment 1 — Actual vs Predicted (no preprocessing)</p>
      </div>

      {/* Step 2 */}
      <h3 className="text-lg font-bold mb-2 mt-8">Step 2 — Adding a 10-Week Lag</h3>
      <p className="mb-3">
        A lagged feature <code>X_t(lag=k) = X_{'{t-k}'}</code> shifts all environmental inputs
        forward by <em>k</em> weeks, giving the model access to conditions that were in place before
        the current week's cases materialised. A lag of 10 weeks was chosen to reflect the biological
        delay between environmental exposure and recorded infections. Predictions are now well-aligned
        with the actual trend, though extreme spikes are still missed.
      </p>
      <div className="flex flex-wrap gap-4 mb-2 items-center">
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test MAE: 23.55</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test RMSE: 30.46</span>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">MAE ↓ 15.4%</span>
      </div>
      <div className="justify-items-center my-4">
        <img src="/images/dengue/base_model_lag.png" alt="Base model with lag" className="w-full max-w-[700px] rounded" />
        <p className="text-sm text-gray-500 text-center mt-1">Figure 2. Experiment 2 — Actual vs Predicted (10-week lag)</p>
      </div>

      {/* Step 3 */}
      <h3 className="text-lg font-bold mb-2 mt-8">Step 3 — Log-Transforming the Target</h3>
      <p className="mb-3">
        The target variable is positively skewed (mean ≈ 34, max = 461). Applying{' '}
        <code>log(1 + y)</code> compresses large outbreak values and produces a more symmetric
        distribution that the forest can learn from more evenly. After training, predictions are
        converted back via <code>exp(ŷ) − 1</code>. The combination of lag and log-transform
        substantially reduced both MAE and RMSE.
      </p>
      <div className="flex flex-wrap gap-4 mb-2 items-center">
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test MAE: 17.05</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test RMSE: 28.98</span>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">MAE ↓ 27.5% vs Step 2</span>
      </div>
      <div className="justify-items-center my-4">
        <img src="/images/dengue/base_model_lag_log.png" alt="Base model with lag and log" className="w-full max-w-[700px] rounded" />
        <p className="text-sm text-gray-500 text-center mt-1">Figure 3. Experiment 3 — Actual vs Predicted (lag + log transform)</p>
      </div>

      {/* Step 4 */}
      <h3 className="text-lg font-bold mb-2 mt-8">Step 4 — Precipitation Feature Engineering</h3>
      <p className="mb-3">
        An outbreak-detection analysis compared mean feature values in outbreak weeks (above the 93rd
        percentile) versus non-outbreak weeks. The <code>station_precip_mm</code> feature showed the
        largest anomaly during outbreaks, motivating five rolling-window features computed over a
        21-week window:
      </p>
      <ul className="list-disc pl-8 mb-3 space-y-1">
        <li><code>precip_roll_mean_21</code> — smoothed average rainfall level</li>
        <li><code>precip_roll_std_21</code> — rainfall volatility; high variability signals unstable conditions</li>
        <li><code>precip_roll_min_21</code> — identifies dry spells within the window</li>
        <li><code>precip_roll_max_21</code> — captures peak rainfall events linked to breeding-site creation</li>
        <li><code>precip_anomaly_21</code> — deviation from the local rolling mean; flags unusual spikes or drops</li>
      </ul>
      <p className="mb-3">
        These engineered features gave the model a richer description of rainfall dynamics and helped
        it detect irregular precipitation patterns that precede outbreaks.
      </p>
      <div className="flex flex-wrap gap-4 mb-2 items-center">
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test MAE: 14.83</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test RMSE: 24.89</span>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">MAE ↓ 13.0% vs Step 3</span>
      </div>
      <div className="justify-items-center my-4">
        <img src="/images/dengue/base_model_lag_log_feature.png" alt="Model with engineered features" className="w-full max-w-[700px] rounded" />
        <p className="text-sm text-gray-500 text-center mt-1">Figure 4. Experiment 4 — Actual vs Predicted (+ precipitation features)</p>
      </div>

      {/* Step 5 */}
      <h3 className="text-lg font-bold mb-2 mt-8">Step 5 — Feature Selection (Top 5 Features)</h3>
      <p className="mb-3">
        Permutation importance and impurity-based importance were used to rank all features.
        The top five were retained for the final model:
      </p>
      <ul className="list-disc pl-8 mb-3 space-y-1">
        <li><code>precip_roll_max_21</code></li>
        <li><code>reanalysis_specific_humidity_g_per_kg</code></li>
        <li><code>precip_roll_std_21</code></li>
        <li><code>reanalysis_dew_point_temp_k</code></li>
        <li><code>precip_roll_mean_21</code></li>
      </ul>
      <p className="mb-3">
        Removing low-importance features reduced noise in the training signal and further improved
        RMSE while keeping MAE roughly the same, confirming that the engineered precipitation
        features and a pair of humidity/dew-point variables contain the predictive signal.
      </p>
      <div className="flex flex-wrap gap-4 mb-2 items-center">
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test MAE: 14.17</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test RMSE: 21.48</span>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">MAE ↓ 4.4% vs Step 4</span>
      </div>
      <div className="justify-items-center my-4">
        <img src="/images/dengue/base_model_lag_log_less_features.png" alt="Model with top-5 features" className="w-full max-w-[700px] rounded" />
        <p className="text-sm text-gray-500 text-center mt-1">Figure 5. Experiment 5 — Actual vs Predicted (top 5 features)</p>
      </div>

      {/* Final model */}
      <h2 className="text-xl font-bold mb-3 mt-8">Final Model</h2>
      <p className="mb-3">
        After tuning <code>max_features = 1</code> with rolling cross-validation and switching the
        split criterion to <code>absolute_error</code>, the final Random Forest reached:
      </p>
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test MAE: 14.07</span>
        <span className="px-3 py-1 bg-gray-100 rounded text-sm">Test RMSE: 21.36</span>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">Total MAE improvement: ↓ 49.7%</span>
      </div>
      <div className="justify-items-center my-4">
        <img src="/images/dengue/final_model.png" alt="Final model predictions" className="w-full max-w-[700px] rounded" />
        <p className="text-sm text-gray-500 text-center mt-1">Figure 6. Final model — Actual vs Predicted on Test Set</p>
      </div>
      <p className="mb-4">
        The final model captures the overall seasonality and follows outbreak trends closely. The
        remaining error is concentrated around the sharpest spikes — rare high-magnitude outbreak weeks
        that are inherently hard to predict from environmental features alone.
      </p>

      {/* Summary table */}
      <h2 className="text-xl font-bold mb-3 mt-8">Summary</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 pr-6 font-bold">Configuration</th>
              <th className="text-right py-2 pr-6 font-bold">Test MAE</th>
              <th className="text-right py-2 font-bold">Test RMSE</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((m) => (
              <tr key={m.label} className="border-b border-gray-100">
                <td className="py-2 pr-6">{m.label}</td>
                <td className="text-right py-2 pr-6">{m.mae.toFixed(2)}</td>
                <td className="text-right py-2">{m.rmse.toFixed(2)}</td>
              </tr>
            ))}
            <tr className="border-b border-gray-300 font-bold">
              <td className="py-2 pr-6">Final (tuned)</td>
              <td className="text-right py-2 pr-6">14.07</td>
              <td className="text-right py-2">21.36</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* References */}
      <h2 className="text-xl font-bold mb-3 mt-4">References</h2>
      <p className="mb-2">
        &nbsp;&nbsp;&nbsp;&nbsp;DrivenData. DengAI: Predicting Disease Spread.{' '}
        <a className="underline decoration-sky-500" href="https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/">
          Link
        </a>
      </p>
    </div>
  );
};

export default DengueCompetition;
