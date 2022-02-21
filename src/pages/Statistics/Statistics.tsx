import { FC } from "react";
import Charts from "./components/Charts";
import DailyStatistics from './components/DailyStatistics';
import { Wrapper } from "./Statistics.styles";
import { Divider } from '@mui/material';

const Statistics: FC = () => {
  return (
    <Wrapper> 
      <DailyStatistics />
      <Divider />
      <Charts />
    </Wrapper>
  );
};

export default Statistics;
