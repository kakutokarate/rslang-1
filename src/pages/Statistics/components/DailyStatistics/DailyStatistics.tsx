import { FC } from "react";
import AggregatedDailyStatistics from './components/AggregatedDailyStatistics';
import MiniGamesDailyStatistics from './components/MiniGamesDailyStatistics';
import { StyledDailyStatistics } from './DailyStatistics.styles';

const DailyStatistics: FC = () => {
  return (
    <StyledDailyStatistics>
      <h2>Статистика за сегодня</h2>
      <AggregatedDailyStatistics></AggregatedDailyStatistics>
      <MiniGamesDailyStatistics></MiniGamesDailyStatistics>
    </StyledDailyStatistics>
  );
};

export default DailyStatistics;