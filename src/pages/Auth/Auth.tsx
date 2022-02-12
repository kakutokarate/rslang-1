import { FC } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Auth.styles";
import Alerts from "./components/Alerts";
import AuthForm from "./components/AuthForm";

const Auth: FC = () => {
  return (
    <Wrapper>
      <Alerts />
      <AuthForm />
      <div>
        Еще не зарегистрировались? <span><Link to='/registration'>Зарегистрироваться сейчас!</Link></span>
      </div>
    </Wrapper>
  );
};

export default Auth;
