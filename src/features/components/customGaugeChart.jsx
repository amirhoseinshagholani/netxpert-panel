import React from 'react';
import GaugeChart from 'react-gauge-chart';

const CustomGaugeChart = ({ usedCredit, totalCredit,simcardNumber,packageName,packagePeriod }) => {
  const percentage = usedCredit / totalCredit;

  return (
    <div>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={30}
        percent={percentage}
        colors={['#FF0000', '#159100']}
        arcWidth={0.3}
      />
      <div className='text-lg text-white flex mx-auto justify-center'>
        {simcardNumber}
      </div>
      <div className='text-lg text-white flex mx-auto justify-center'>
        {packageName}
      </div>
      <div className='text-lg text-white flex mx-auto justify-center'>
        {packagePeriod}
      </div>
    </div>
  );
};

export default CustomGaugeChart;
