import React from "react";
 
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);//getting max value from props.value

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <Chart 
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label} />
            ))}
        </div>
    );
}

export default Chart;