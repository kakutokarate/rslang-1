import { VolumeUp } from '@mui/icons-material';
import styled from 'styled-components';

export const StyledAudioIcon = styled(VolumeUp)`
  margin: auto;
  margin-bottom: 30px;
  font-size: 2rem;
  line-height: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
