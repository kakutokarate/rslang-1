import { FC, useEffect, useState } from 'react'
import { setIsGameOver, setIsSprintRunning } from 'redux/features/sprintSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';

const Timer: FC = () => {
  const [count, setCount] = useState(15);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    let intervalID: NodeJS.Timer;

    if (count > 0) {
      intervalID = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      dispatch(setIsSprintRunning(false));
      dispatch(setIsGameOver(true));
    }

    return () => clearInterval(intervalID);
  }, [count]);

  return (
    <div>
      {count}
    </div>
  );
};

export default Timer;