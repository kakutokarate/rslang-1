import { Link } from 'react-router-dom';
import { useTypedDispatch } from 'redux/hooks';
import { StyledWrapper, GameButton } from './GameButtons.styles';
import { setGameFromTextbook } from 'redux/features/challengeSlice';
import audiochallengeImg from '../../../../assets/images/audiochallenge.png';
import sprintImg from '../../../../assets/images/sprint.png';

const GameButtons = () => {
  const dispatch = useTypedDispatch();
  const handleAudiochallengeClick = () => {
    dispatch(setGameFromTextbook());
  }
  return (
    <StyledWrapper>
      <Link to='/sprint'>
        <GameButton img={sprintImg}>Спринт</GameButton>
      </Link>
      <Link to='/audiochallenge'>
        <GameButton img={audiochallengeImg} onClick={() => handleAudiochallengeClick()}>Аудиовызов</GameButton>
      </Link>
    </StyledWrapper>
  );
};

export default GameButtons;