import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map(data =>
        <ChartBar value={data.value} maxValue={totalMaximum} label={data.label} key={data.label}/>)
      }
    </div>
  );
};

export default Chart;
