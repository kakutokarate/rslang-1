import { FC } from "react";
import DailyStatistics from './components/DailyStatistics';
import { Wrapper } from "./Statistics.styles";

const Statistics: FC = () => {
  return (
    <Wrapper>
      Statistics
      <DailyStatistics />
    </Wrapper>
  );
};

export default Statistics;
