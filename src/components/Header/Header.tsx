import { FC } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "redux/hooks";
import { Item, Wrapper } from "./Header.styles";

const Header: FC = () => {
  const { authUserData } = useTypedSelector(state => state.signInReducer)

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
      <Link to='/audiocall'>
        <Item>Аудиовызов</Item>
      </Link>
      <Link to='/statistics'>
        <Item>Статистика</Item>
      </Link>
      {authUserData
        ? <>Привет, {authUserData.name}</>
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

