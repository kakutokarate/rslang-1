import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUserData } from "redux/features/authSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Item, Wrapper } from "./Header.styles";

const Header: FC = () => {
  const { authUserData } = useTypedSelector(state => state.auth)
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(setAuthUserData(null));
    localStorage.removeItem('authUserData-zm');
    navigate('/auth');
  }

  return (
    <Wrapper>
      <Link to='/'>
        <Item>Главная</Item>
      </Link>
      <Link to='/textbook'>
        <Item>Учебник</Item>
      </Link>
      <Link to='/sprint'>
        <Item>Спринт</Item>
      </Link>
      <Link to='/audiochallenge'>
        <Item>Аудиовызов</Item>
      </Link>
      <Link to='/statistics'>
        <Item>Статистика</Item>
      </Link>
      {authUserData
        ? (
          <div>
            Привет, {authUserData.name}
            <span onClick={logoutHandler}>Выйти</span>
          </div>
        )
        : (
          <Link to='/auth'>
            <Item>Вход</Item>
          </Link>
        )
      }

    </Wrapper>
  );
};

export default Header;

