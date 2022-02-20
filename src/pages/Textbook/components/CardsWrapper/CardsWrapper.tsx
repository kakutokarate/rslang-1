import { CircularProgress, Pagination } from '@mui/material';
import { FC, useEffect } from 'react';
import { changePageNumber, makeWordDifficult, makeWordLearned } from 'redux/features/textbookSlice/textBookSlice';
import { createInitOptional, createInitUserWord } from 'redux/features/textbookSlice/utils';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { createUserWord, deleteUserWord, getUserWords, updateWord } from 'redux/thunks';
import WordCard from '../WordCard';
import { StyledCardsWrapper } from './CardsWrapper.styles';

const CardsWrapper: FC = () => {
  const { error, status, words, isWordDeleted, mode, difficultWords } = useTypedSelector((state) => state.textbook);
  const dispatch = useTypedDispatch();

  const onPageChange = (page: number) => {
    localStorage.setItem('pageNumber-nsv', String(page));
    dispatch(changePageNumber({ pageNumber: page }));
  }

  const authUser = JSON.parse(localStorage.getItem('authUserData-zm')!);
  
  const makeDifficult = async (id: string) => {
    dispatch(makeWordDifficult({ id }));

    const {
      difficulty,
      optional: { counter },
    } = createInitUserWord(id, 0, 'difficult');

    await dispatch(createUserWord({
      userId: authUser.userId,
      wordId: id,
      difficulty,
      counter,
      token: authUser.token,
    }));

    // После создания нового слова, сразу обновляем массив сложных слов, чтобы, при переключении на словарь, оно уже было
    await dispatch(getUserWords({
      userId: authUser.userId,
      token: authUser.token,
    }));
  }

  const deleteWord = (id: string) => {
    dispatch(deleteUserWord({
      userId: authUser.userId,
      wordId: id,
      token: authUser.token,
    }));
  }

  const makeLearned = async (id: string) => {
    dispatch(makeWordLearned({ id }));
    console.log(difficultWords)

    const word = difficultWords.find((df) => df._id === id);

    if (!word) {
      const {
        difficulty,
        optional: { counter },
      } = createInitUserWord(id, 3, 'easy');
  
      await dispatch(createUserWord({
        userId: authUser.userId,
        wordId: id,
        difficulty,
        counter,
        token: authUser.token,
      }));
  
      // После создания нового слова, сразу обновляем массив сложных слов, чтобы, при переключении на словарь, оно уже было
      await dispatch(getUserWords({
        userId: authUser.userId,
        token: authUser.token,
      }));
    } else {
      const difficulty = 'easy';
      const { counter } = createInitOptional(id, 3);

      await dispatch(updateWord({
        userId: authUser.userId,
        wordId: id,
        difficulty,
        counter,
        token: authUser.token,
      }));
  
      // После создания нового слова, сразу обновляем массив сложных слов, чтобы, при переключении на словарь, оно уже было
      await dispatch(getUserWords({
        userId: authUser.userId,
        token: authUser.token,
      }));
    }
  }

  useEffect(() => {
    isWordDeleted &&
      dispatch(
        getUserWords({
          userId: authUser.userId,
          token: authUser.token,
        })
      );
  }, [isWordDeleted]);

  const audio = new Audio();

  const wordCards = words.map((w) => (
    <WordCard
      key={w.id || w._id}
      player={audio}
      word={w}
      makeDifficult={makeDifficult}
      deleteWord={deleteWord}
      makeLearned={makeLearned}
    />
  ));

  // When the page is loaded for the first time and Local Storage is empty
  const currentPageNumber = Number(localStorage.getItem('pageNumber-nsv')) || 1;

  const showPagination =
    status === 'resolved' && Boolean(words.length) && mode === 'textbook';

  return (
    <StyledCardsWrapper>
      {status === "pending" && <CircularProgress color="info" />}
      {error && <h2>{error}</h2>}
      {status === "resolved" && wordCards}
      {showPagination && (
        <Pagination
          sx={{ marginLeft: "auto", marginRight: "auto" }}
          color="primary"
          count={30}
          page={currentPageNumber}
          onChange={(_, page) => onPageChange(page)}
        />
      )}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
