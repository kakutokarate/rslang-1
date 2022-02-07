import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "model/IWord";

// const getAnswers = (arr: Array<IWord>, currentQuestionIndex: number): Array<string> => {

// }

interface IChallengeState {
  currentQuestionsSet: Array<IWord>;
  currentQuestionIndex: number;
  answers: Array<string>;
  currentAnswer: string;
  rightAnswers: Array<string>;
  wrongAnswers: Array<string>;
  showResult: boolean;
  isChallengeStarted: boolean;
}

const initialState: IChallengeState = {
  currentQuestionsSet: [
    {
      id: "5e9f5ee35eb9e72bc21b0058",
      group: 5,
      page: 0,
      word: "adverse",
      image: "files/01_3001.jpg",
      audio: "files/01_3001.mp3",
      audioMeaning: "files/01_3001_meaning.mp3",
      audioExample: "files/01_3001_example.mp3",
      textMeaning:
        "Something that has an <i>adverse</i> effect can be harmful, dangerous, or unfavorable.",
      textExample:
        "I worry that the tornado will have an <b>adverse</b> effect on the farm.",
      transcription: "[ædvɜːrs]",
      textExampleTranslate:
        "Я беспокоюсь, что торнадо окажет неблагоприятное влияние на ферму",
      textMeaningTranslate:
        "То, что оказывает неблагоприятное воздействие, может быть вредным, опасным или неблагоприятным",
      wordTranslate: "неблагоприятный",
    },
    {
      id: "5e9f5ee35eb9e72bc21b005d",
      group: 5,
      page: 0,
      word: "discard",
      image: "files/01_3007.jpg",
      audio: "files/01_3007.mp3",
      audioMeaning: "files/01_3007_meaning.mp3",
      audioExample: "files/01_3007_example.mp3",
      textMeaning: "To <i>discard</i> something is to throw it away.",
      textExample:
        "After repairing the window, <b>discard</b> any broken glass.",
      transcription: "[diskάːrd]",
      textExampleTranslate: "После ремонта окна откажитесь от разбитого стекла",
      textMeaningTranslate: "Отбросить что-то - значит выбросить",
      wordTranslate: "отбрасывание",
    },
    {
      id: "5e9f5ee35eb9e72bc21b005c",
      group: 5,
      page: 0,
      word: "choke",
      image: "files/01_3005.jpg",
      audio: "files/01_3005.mp3",
      audioMeaning: "files/01_3005_meaning.mp3",
      audioExample: "files/01_3005_example.mp3",
      textMeaning:
        "If you <i>choke</i> on something, it stops you from breathing.",
      textExample: "The gum Malinda swallowed made her <b>choke</b>.",
      transcription: "[ʧouk]",
      textExampleTranslate:
        "Жвачка, которую Малинда проглотила, заставила ее задохнуться",
      textMeaningTranslate: "Если вы задыхаетесь, это мешает вам дышать",
      wordTranslate: "удушение",
    },
    {
      id: "5e9f5ee35eb9e72bc21b0059",
      group: 5,
      page: 0,
      word: "alternate",
      image: "files/01_3002.jpg",
      audio: "files/01_3002.mp3",
      audioMeaning: "files/01_3002_meaning.mp3",
      audioExample: "files/01_3002_example.mp3",
      textMeaning: "An <i>alternate</i> option is a different option.",
      textExample:
        "Taking the bus and driving to work are <b>alternate</b> ways to travel.",
      transcription: "[ɔ́ːltərnət]",
      textExampleTranslate:
        "Поездка на автобусе и езда на работу - альтернативные способы передвижения",
      textMeaningTranslate: "Альтернативный вариант - это другой вариант",
      wordTranslate: "альтернативный",
    },
    {
      id: "5e9f5ee35eb9e72bc21b005a",
      group: 5,
      page: 0,
      word: "biodegradable",
      image: "files/01_3003.jpg",
      audio: "files/01_3003.mp3",
      audioMeaning: "files/01_3003_meaning.mp3",
      audioExample: "files/01_3003_example.mp3",
      textMeaning:
        "Materials that are <i>biodegradable</i> break down naturally into substances that do not harm the environment.",
      textExample: "I use <b>biodegradable</b> compost to feed my garden.",
      transcription: "[bàioudigréidəbl]",
      textExampleTranslate:
        "Я использую биоразлагаемый компост, чтобы кормить свой сад",
      textMeaningTranslate:
        "Биоразлагаемые материалы естественным образом распадаются на вещества, которые не наносят вреда окружающей среде",
      wordTranslate: "биоразлагаемый",
    },
  ],
  currentQuestionIndex: 0,
  answers: ["осень", "неблагоприятный", "зима", "лес", "значение"],
  currentAnswer: "",
  rightAnswers: [],
  wrongAnswers: [],
  showResult: false,
  isChallengeStarted: true,
};

const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    startChallenge(state) {
      state.isChallengeStarted = true;
    },
    selectAnswer(state, action: PayloadAction<string>) {
      action.payload ===
      state.currentQuestionsSet[state.currentQuestionIndex].wordTranslate
        ? state.rightAnswers.push(
            state.currentQuestionsSet[state.currentQuestionIndex].id
          )
        : state.wrongAnswers.push(
            state.currentQuestionsSet[state.currentQuestionIndex].id
          );
      state.currentAnswer = action.payload;
    },
  },
});

export const { startChallenge, selectAnswer } = challengeSlice.actions;

export default challengeSlice.reducer;
