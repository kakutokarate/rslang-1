import { CircularProgress, Pagination } from '@mui/material';
import { FC, useEffect } from 'react';
import { changePageNumber, makeWordDifficult } from 'redux/features/textbookSlice/textBookSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { createUserWord, deleteUserWord, getUserWords } from 'redux/thunks';
import WordCard from '../WordCard';
import { StyledCardsWrapper } from './CardsWrapper.styles';

const CardsWrapper: FC = () => {
  const { error, status, words, isWordDeleted, mode } = useTypedSelector((state) => state.textbook);
  const dispatch = useTypedDispatch();

  const onPageChange = (page: number) => {
    localStorage.setItem('pageNumber-nsv', String(page));
    dispatch(changePageNumber({ pageNumber: page }));
  }

  const authUser = JSON.parse(localStorage.getItem('authUserData-zm')!);

  const makeDifficult = async (id: string) => {
    dispatch(makeWordDifficult({id}));
    await dispatch(createUserWord({
      userId: authUser.userId,
      wordId: id,
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
