import { IWord } from 'model/IWord';
import { TGetWordsByGroup } from './types';

export const shuffleArray = <T>(arr: Array<T>): Array<T> => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const getRandomValueFromArray = <T>(arr: Array<T>): T => {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
};

export const getWordsByGroup: TGetWordsByGroup = (words, group) => {
  return words.filter((word) => word.group === group);
};

// export const getWordsForGame = (
//   allWords: Array<IWord>,
//   group: number,
//   page: number,
//   quantity: number
// ) => {
//   const currentWords = allWords.filter(
//     (el) =>
//       el.group === group &&
//       el.page === page &&
//       !el.userWord?.optional?.isLearned
//   );
//   if (currentWords.length >= quantity) {
//     return currentWords;
//   } else {
//   }
// };

export const updateLocalStatistic = (
  rightAnswers: Array<string>,
  wrongAnswers: Array<string>,
  game: string,
  currentStreak: number,
  userId?: string
) => {
  const userStatistic = localStorage.getItem(`statistic-${userId}-zm`);
  const guestStatistic = localStorage.getItem(`statistic-guest-zm`);
  let prevStatistic = userStatistic
    ? userStatistic
    : guestStatistic
    ? guestStatistic
    : null;
  const now = new Date();
  const currentDate = now.toISOString().slice(0, 10);
  if (prevStatistic) {
    console.log('IF-PREVSTAT');
    const prevData = JSON.parse(prevStatistic);
    if (currentDate === prevData.date) {
      console.log('IF-ДАТЫ СОВПАЛИ');
      let dailyNewWords: string[] = [];
      [...rightAnswers, ...wrongAnswers].forEach((el) => {
        if (game === 'sprint') {
          if (!prevData.games.sprint.wordList.includes(el))
            dailyNewWords.push(el);
        }
        if (game === 'audiochallenge') {
          if (!prevData.games.audiochallenge.wordList.includes(el))
            dailyNewWords.push(el);
        }
      });

      let audiochallengeStat =
        game === 'audiochallenge'
          ? {
              bestStreak:
                currentStreak > prevData.games.audiochallenge.bestStreak
                  ? currentStreak
                  : prevData.games.audiochallenge.bestStreak,
              gameNewWordsCount: dailyNewWords.length,
              rightAnswers:
                prevData.games.audiochallenge.rightAnswers +
                rightAnswers.length,
              wrongAnswers:
                prevData.games.audiochallenge.wrongAnswers +
                wrongAnswers.length,
              wordList: [
                ...prevData.games.audiochallenge.wordList,
                ...dailyNewWords,
              ],
            }
          : { ...prevData.games.audiochallenge };

      let sprintStat =
        game === 'sprint'
          ? {
              bestStreak:
                currentStreak > prevData.games.sprint.bestStreak
                  ? currentStreak
                  : prevData.games.sprint.bestStreak,
              gameNewWordsCount: dailyNewWords.length,
              rightAnswers:
                prevData.games.sprint.rightAnswers + rightAnswers.length,
              wrongAnswers:
                prevData.games.sprint.wrongAnswers + wrongAnswers.length,
              wordList: [...prevData.games.sprint.wordList, ...dailyNewWords],
            }
          : { ...prevData.games.sprint };
      let newData = {
        games: {
          audiochallenge: audiochallengeStat,
          sprint: sprintStat,
        },
        date: currentDate,
        allNewWordsCount: prevData.allNewWordsCount + dailyNewWords.length,
        allGamesRight:
          audiochallengeStat.rightAnswers + sprintStat.rightAnswers,
        allGamesWrong:
          audiochallengeStat.wrongAnswers + sprintStat.wrongAnswers,
        wordList: [...prevData.wordList, ...dailyNewWords],
      };
      console.log(prevData, 'PREVDATA');
      console.log(newData, 'NEWDATA');
      userId
        ? localStorage.setItem(`statistic${userId}-zm`, JSON.stringify(newData))
        : localStorage.setItem(`statisticGuest-zm`, JSON.stringify(newData));
    }
  } else {
    const allWordsList = [...rightAnswers, ...wrongAnswers];
    const audiochallengeStat =
      game === 'audiochallenge'
        ? {
            bestStreak: currentStreak,
            gameNewWordsCount: allWordsList.length,
            rightAnswers: rightAnswers.length,
            wrongAnswers: wrongAnswers.length,
            wordList: allWordsList,
          }
        : {
            bestStreak: 0,
            gameNewWordsCount: 0,
            rightAnswers: 0,
            wrongAnswers: 0,
            wordList: [],
          };
    const sprintStat =
      game === 'sprint'
        ? {
            bestStreak: currentStreak,
            gameNewWordsCount: allWordsList.length,
            rightAnswers: rightAnswers.length,
            wrongAnswers: wrongAnswers.length,
            wordList: allWordsList,
          }
        : {
            bestStreak: 0,
            gameNewWordsCount: 0,
            rightAnswers: 0,
            wrongAnswers: 0,
            wordList: [],
          };
    const newData = {
      date: currentDate,
      allNewWordsCount: rightAnswers.length + wrongAnswers.length,
      allGamesRight: rightAnswers.length,
      allGamesWrong: wrongAnswers.length,
      wordList: allWordsList,
      games: {
        audiochallenge: audiochallengeStat,
        sprint: sprintStat,
      },
    };
    userId
      ? localStorage.setItem(`statistic${userId}-zm`, JSON.stringify(newData))
      : localStorage.setItem(`statisticGuest-zm`, JSON.stringify(newData));
  }
};

// gameNewWordsCount: 10 переделать!!!
