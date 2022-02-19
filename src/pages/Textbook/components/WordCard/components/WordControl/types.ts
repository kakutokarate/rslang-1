export interface IWordControlProps {
  mode: string;
  isDifficult: string | undefined;
  onDifficultClick: () => void;
  onDeleteWord: () => void;
  onLearnedClick: () => void;
}