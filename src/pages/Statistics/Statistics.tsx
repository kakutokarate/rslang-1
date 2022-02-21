import { FC } from "react";
import Charts from "./components/Charts";
import { Wrapper } from "./Statistics.styles";
import { Divider } from '@mui/material';

const Statistics: FC = () => {
  return (
    <Wrapper>

      <Divider />
      <Charts />
    </Wrapper>
  );
};

export default Statistics;
