import React from 'react';

function Chart() {

  const TOTAL_UNITS_OF_TIME_SPENT = 5;

  const CHART_DATA = [
    {
      id: 1,
      numOfUnitsOfTimeSpent: 1,
      timeUnitText: 'неделя',
      subText: 'Back-end',
      color: '#2BE080',
    },
    {
      id: 2,
      numOfUnitsOfTimeSpent: 4,
      timeUnitText: 'недели',
      subText: 'Front-end',
      color: '#F2F2F2',
    },
  ];

  const getPercentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  const chartItemsMarkup = CHART_DATA.map((item) => {

    if (item.numOfUnitsOfTimeSpent === 0) {
      // eslint-disable-next-line
      return;
    }

    const percentageOfTimeSpent = getPercentage(item.numOfUnitsOfTimeSpent, TOTAL_UNITS_OF_TIME_SPENT);

    const amountOfTimeSpentText = `${item.numOfUnitsOfTimeSpent} ${item.timeUnitText}`;

    const style = {
      background: item.color,
    };

    const itemStyle = {
      width: `${percentageOfTimeSpent}%`,
    };

    return (
      <div
        key={item.id}
        className="chart__item"
        style={itemStyle}
      >
        <div
          className="chart__item-container"
          style={style}
        >
          <p
            className="chart__text"
          >
            {amountOfTimeSpentText}
          </p>
        </div>
        <p
          className="chart__sub-text"
        >
          {item.subText}
        </p>
      </div>
    )
  });

  return (
    <div
      className="chart"
    >
      {chartItemsMarkup}
    </div>
  )
}

export default Chart;
