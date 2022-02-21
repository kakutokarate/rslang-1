import { Link } from 'react-router-dom';
import { useTypedDispatch } from 'redux/hooks';
import { StyledWrapper, GameButton } from './GameButtons.styles';
import { setGameFromTextbook } from 'redux/features/challengeSlice';

const GameButtons = () => {
  const dispatch = useTypedDispatch();
  const handleAudiochallengeClick = () => {
    dispatch(setGameFromTextbook());
  }
  return (
    <StyledWrapper>
      <Link to='/sprint'>
        <GameButton>Спринт</GameButton>
      </Link>
      <Link to='/audiochallenge'>
        <GameButton onClick={() => handleAudiochallengeClick()}>Аудиовызов</GameButton>
      </Link>
    </StyledWrapper>
  );
};

export default GameButtons;