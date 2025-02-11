import React from 'react';
import { IProps } from './speedChart/speedChart';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function SpeedChartContainer(props: IProps) {
  return (
    <BrowserOnly>
      {() => {
        const { SpeedChart } = require('@site/src/components/chart/speedChart/speedChart/speedChart'); // skipcq: js-0359
        return (<SpeedChart {...props} />);
      }}
    </BrowserOnly>
  );
};
