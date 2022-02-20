import axios from "axios";
import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUserData } from "redux/features/authSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { BASE_URL, signIn } from "redux/thunks";
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

  useEffect(() => {
    const authData = localStorage.getItem('authUserData-zm');
    let intervalID: NodeJS.Timer;

    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      const userID = parsedAuthData.userId;
      const refreshToken = parsedAuthData.refreshToken;

      intervalID = setInterval(() => {
        (async () => {
          try {
            const response = await axios.get(
              BASE_URL + `/users/${userID}/tokens`,
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
              }
            );
            // console.log(response);
            const newAuthData = {
              ...parsedAuthData,
              token: response.data.token,
              refreshToken: response.data.refreshToken,
            };
            localStorage.removeItem('authUserData-zm');
            localStorage.setItem('authUserData-zm', JSON.stringify(newAuthData));
            dispatch(setAuthUserData(newAuthData));

          } catch (e) {
            if (e instanceof Error) {
              console.log(e);
              logoutHandler();
            }
          }
        })();

      }, 5000);

    }

    return () => clearInterval(intervalID);
  }, [authUserData]);

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

