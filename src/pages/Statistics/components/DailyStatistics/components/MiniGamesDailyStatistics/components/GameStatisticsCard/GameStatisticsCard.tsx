import { FC } from "react";
import { AUDIOCHALLENGE } from 'shared/utils/constants';
import { StyledGameStatisticsCard } from './GameStatisticsCard.styles';
import { IGameStatisticsCardProps } from './types';

const GameStatisticsCard: FC<IGameStatisticsCardProps> = ({ game, newWordsCount, rightAnswersCount, wrongAnswersCount, bestStreak }) => {
  const gameName = game === AUDIOCHALLENGE ? 'Аудиовызов' : 'Спринт';
  return (
    <StyledGameStatisticsCard>
      <h3>{gameName}</h3>
      <p>{`Изучено ${newWordsCount} слов`}</p>
      <p>{`Правильных ответов: ${Math.round((rightAnswersCount /
        (rightAnswersCount + wrongAnswersCount)) * 100)}%`}</p>
      <p>{`Самая длинная серия правильных ответов: ${bestStreak}`}</p>
    </StyledGameStatisticsCard>
  );
};

export default GameStatisticsCard;