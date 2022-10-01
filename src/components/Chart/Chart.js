import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
  const totalMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
  const chartBars = props.dataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      label={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMaximum}
    />
  ));

  return <div className='chart'>{chartBars}</div>;
};

export default Chart;
