import Footer from "components/Footer";
import Header from "components/Header";
import Auth from "pages/Auth";
import Audiochallenge from "pages/Audiochallenge";
import Home from "pages/Home";
import Registration from "pages/Registration";
import Statistics from "pages/Statistics";
import Textbook from "pages/Textbook";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { setAuthUserData } from "redux/features/authSlice";
import { useTypedDispatch } from "redux/hooks";

const App: FC = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    const authUserDataLS = localStorage.getItem('authUserData-zm');
    if (authUserDataLS) dispatch(setAuthUserData(JSON.parse(authUserDataLS)));
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/textbook' element={<Textbook />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/audiocall' element={<Audiochallenge />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
