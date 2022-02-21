import { Link } from 'react-router-dom';
import { StyledWrapper, GameButton } from './GameButtons.styles';

const GameButtons = () => {
  return (
    <StyledWrapper>
      <Link to='/sprint'>
        <GameButton>Спринт</GameButton>
      </Link>
      <Link to='/audiochallenge'>
        <GameButton>Аудиовызов</GameButton>
      </Link>
    </StyledWrapper>
  );
};

export default GameButtons;