import { FC } from "react";
import Charts from "./components/Charts";
import { Wrapper } from "./Statistics.styles";

const Statistics: FC = () => {
  return (
    <Wrapper>

      <Charts />
    </Wrapper>
  );
};

export default Statistics;
