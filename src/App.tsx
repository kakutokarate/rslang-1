import Footer from "components/Footer";
import Header from "components/Header";
import Auth from "pages/Auth";
import Audiochallenge from "pages/Audiochallenge";
import Home from "pages/Home";
import Registration from "pages/Registration";
import Sprint from "pages/Sprint";
import Statistics from "pages/Statistics";
import Textbook from "pages/Textbook";
import { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { setAuthUserData } from "redux/features/authSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Wrapper } from "App.styled";
import { setIsGameOver, setIsSprintRunning } from "redux/features/sprintSlice";
import { fetchAllWords } from "redux/thunks";

const App: FC = () => {
  const dispatch = useTypedDispatch();
  const { authUserData } = useTypedSelector(state => state.auth);
  const { lastIntervalID } = useTypedSelector(state => state.sprint);
  const location = useLocation();

  useEffect(() => {
    const authUserDataLS = localStorage.getItem('authUserData-zm');
    if (authUserDataLS) dispatch(setAuthUserData(JSON.parse(authUserDataLS)));
    const group = localStorage.getItem('groupNumber-nsv');
    const page = localStorage.getItem('pageNumber-nsv');
    if (!group) localStorage.setItem('groupNumber-nsv', String(1));
    if (!page) localStorage.setItem('pageNumber-nsv', String(1));
    dispatch(fetchAllWords());
  }, []);

  useEffect(() => {
    if (!authUserData && lastIntervalID) {
      clearInterval(lastIntervalID);
    }
  }, [authUserData, lastIntervalID]);

  useEffect(() => {
    if (location.pathname !== '/sprint') {
      dispatch(setIsSprintRunning(false));
      dispatch(setIsGameOver(true));
    }
  }, [location]);

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/textbook' element={<Textbook />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/sprint' element={<Sprint />} />
        <Route path='/audiochallenge' element={<Audiochallenge />} />
      </Routes>

    </Wrapper>
  );
};

export default App;
