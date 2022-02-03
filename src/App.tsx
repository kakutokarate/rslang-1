import Footer from "components/Footer";
import Header from "components/Header";
import Home from "pages/Home";
import Statistics from "pages/Statistics";
import Textbook from "pages/Textbook";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/textbook' element={<Textbook />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
