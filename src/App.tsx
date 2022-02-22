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
import { Route, Routes } from "react-router-dom";
import { setAuthUserData } from "redux/features/authSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Wrapper } from "App.styled";

const App: FC = () => {
  const dispatch = useTypedDispatch();
  const { authUserData } = useTypedSelector(state => state.auth);
  const { lastIntervalID } = useTypedSelector(state => state.sprint);

  useEffect(() => {
    const authUserDataLS = localStorage.getItem('authUserData-zm');
    if (authUserDataLS) dispatch(setAuthUserData(JSON.parse(authUserDataLS)));
  }, []);

  useEffect(() => {
    if (!authUserData && lastIntervalID) {
      clearInterval(lastIntervalID);
    }
  }, [authUserData, lastIntervalID]);

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
