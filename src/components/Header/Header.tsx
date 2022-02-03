import { FC } from "react";
import { Link } from "react-router-dom";
import { Item, Wrapper } from "./Header.styles";

const Header: FC = () => {
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


    </Wrapper>
  );
};

export default Header;

