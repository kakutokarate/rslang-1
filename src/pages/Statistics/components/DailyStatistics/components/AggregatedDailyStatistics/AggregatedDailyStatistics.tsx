import { ILocalStatistic } from 'model/ILocalStatistic';
import { FC } from "react";
import { Wrapper } from './AggregatedDailyStatistics.styles';

const AggregatedDailyStatistics: FC = () => {
  const user = localStorage.getItem('authUserData-zm');
  let wordsLearned = 0;
  let rightAnswersPercent = 0;
  if (user) {
    const statKey = `statistic-${(JSON.parse(user)).userId}-zm`;
    const statistics = JSON.parse(localStorage.getItem(statKey)!);
    wordsLearned = statistics.allNewWordsCount;
    rightAnswersPercent = Number(statistics.allGamesRight / (statistics.allGamesRight + statistics.allGamesWrong)) * 100;
  } else if (!user) {
    const statKey = 'statistic-guest-zm';
    const statistics = JSON.parse(localStorage.getItem(statKey)!);
    wordsLearned = statistics.allNewWordsCount;
    rightAnswersPercent = Number(statistics.allGamesRight / (statistics.allGamesRight + statistics.allGamesWrong)) * 100;
  }
  return (
    <Wrapper>
      <div>{wordsLearned} слов изучено</div>
      <div>{rightAnswersPercent}% процент правильных ответов</div>
    </Wrapper>
  );
};

export default AggregatedDailyStatistics;