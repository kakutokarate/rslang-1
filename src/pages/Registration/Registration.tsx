import { FC } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationFrom";
import { Wrapper } from "./Registration.styles";

const Registration: FC = () => {
  return (
    <Wrapper>
      Registration
      <RegistrationForm />
      <div>
        Уже зарегистрировались? <span><Link to='/auth'>Войти в приложение</Link></span>
      </div>
    </Wrapper>
  );
};

export default Registration;
