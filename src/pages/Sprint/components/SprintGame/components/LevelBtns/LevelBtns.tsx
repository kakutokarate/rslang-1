import { FC } from "react";
import { LevelBtn, Wrapper } from "./LevelBtns.styled";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { setPickedGroup } from "redux/features/sprintSlice";


const LevelBtns: FC = () => {
  const dispatch = useTypedDispatch();
  const { allWords } = useTypedSelector(state => state.words);
  const { pickedGroup } = useTypedSelector(state => state.sprint);
  const names = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const wereWordsReceived = !!allWords.length;

  function clickHandler(group: number) {
    dispatch(setPickedGroup(group));
  };

  return (
    <Wrapper>
      {names.map((name, idx) =>
        <LevelBtn
          key={idx}
          onClick={() => clickHandler(idx)}
          disabled={!wereWordsReceived}
          active={pickedGroup === idx}
        >
          {name}
        </LevelBtn>
      )}
    </Wrapper>
  );
};

export default LevelBtns;