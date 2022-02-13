import { FC } from 'react';
import { StyledTitle } from './Title.styles';

const Title: FC = ({ children }) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
};

export default Title;
