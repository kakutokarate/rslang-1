import { FC, useEffect } from "react";
import { setCurrentPlayedCollection, setIsSprintRunning } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { getWordsByGroup, shuffleArray } from "shared/utils";
import LevelBtns from "../LevelBtns";
import { Start, Wrapper } from "./Launch.styled";
import { Box, LinearProgress } from "@mui/material";
import { fetchAllWords, fetchUserWords, getStatistic } from "redux/thunks";

const Launch: FC = () => {
  const dispatch = useTypedDispatch();
  const { pickedGroup } = useTypedSelector(state => state.sprint);
  const { allWords } = useTypedSelector(state => state.words);
  const isGroupPicked = pickedGroup !== null;
  const wereWordsReceived = !!allWords.length;

  function clickHandler() {
    if (wereWordsReceived && isGroupPicked) {
      const response = getWordsByGroup(allWords, pickedGroup);
      const shuffled = shuffleArray(response);
      dispatch(setIsSprintRunning(true));
      dispatch(setCurrentPlayedCollection(shuffled));
    }
  };

  useEffect(() => {
    const authData = localStorage.getItem('authUserData-zm');

    if (authData) {
      dispatch(getStatistic(JSON.parse(authData)));
      const updateWords = async () => {
        await dispatch(fetchAllWords());
        dispatch(fetchUserWords(JSON.parse(authData)));
      };
      updateWords();
    };
  }, []);

  return (
    <Wrapper>
      <h3>Выбери уровень:</h3>
      <LevelBtns />
      {!wereWordsReceived && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <Start
        onClick={clickHandler}
        disabled={!isGroupPicked}
        active={isGroupPicked}
      >
        Начать
      </Start>
    </Wrapper>
  );
};

export default Launch;