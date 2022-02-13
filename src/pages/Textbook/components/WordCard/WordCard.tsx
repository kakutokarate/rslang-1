import { IWordCardProps } from './types';
import { FC } from 'react';
import WordContent from './components/WordContent';
import WordImage from './components/WordImage';
import WordMeaning from './components/WordMeaning';
import WordName from './components/WordName/WordName';
import WordTranslation from './components/WordTranslation/WordTranslation';
import { StyledWordCard } from './WordCard.styles';
import WordControl from './components/WordControl';
import { useTypedSelector } from 'redux/hooks';

const WordCard: FC<IWordCardProps> = (props) => {
  const {
    audio,
    audioExample,
    audioMeaning,
    id,
    image,
    textExample,
    textExampleTranslate,
    textMeaning,
    textMeaningTranslate,
    transcription,
    userField,
    wordTranslate,
    word,
  } = props.word;

  const { player, makeDifficult } = props;

  const { authUserData } = useTypedSelector((state) => state.auth);

  const onDifficultClick = () => {
    makeDifficult(id);
  }

  return (
    <StyledWordCard background={userField?.difficulty}>
      <WordImage image={image} />
      <WordContent>
        <WordName word={word} />
        <WordTranslation
          audio={audio}
          audioExample={audioExample}
          audioMeaning={audioMeaning}
          player={player}
          transcription={transcription}
          translation={wordTranslate}
        />
        <WordMeaning
          textExample={textExample}
          textExampleTranslate={textExampleTranslate}
          textMeaning={textMeaning}
          textMeaningTranslate={textMeaningTranslate}
        />
        {authUserData && <WordControl onDifficultClick={onDifficultClick} />}
      </WordContent>
    </StyledWordCard>
  );
};

export default WordCard;