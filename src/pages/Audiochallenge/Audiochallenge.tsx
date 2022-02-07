import { FC } from 'react';
import { useTypedSelector } from '../../redux/hooks';
import { Wrapper } from './Audiochallenge.styles';
import ChallengeCard from './components/ChallengeCard';

const Audiochallenge: FC = () => {
  const { isChallengeStarted, showResult } = useTypedSelector(state => state.challenge);
  return (
    <Wrapper>
      {!isChallengeStarted && !showResult && <div>Выберите сложность</div>}
      {isChallengeStarted && !showResult && <ChallengeCard />}
      {showResult && <div>РЕЗУЛЬТАТЫ</div>}
    </Wrapper>
  );
};

export default Audiochallenge;
