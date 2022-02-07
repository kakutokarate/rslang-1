import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { createUser } from "redux/thunks";
import { Form } from "./RegistrationForm.styles";

const RegistrationForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { isCreatingUser, createdUsers } = useTypedSelector(state => state.authReducer);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (password.trim().length >= 8) {
      const isExist = createdUsers.some((user) => user.name === username);
      if (!isExist) {
        dispatch(createUser({
          name: username,
          email,
          password,
        }));
        navigate('/auth');
        console.log(`User ${username} has been created!`);
      } else {
        console.log(`User ${username} is already exist`);
      }

    } else {
      console.log('The password must contain at least 8 characters!');
    }
  }

  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label>
        Email:
        <input
          type="email"
          placeholder="введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Имя пользователя:
        <input
          type="text"
          placeholder="укажите имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          placeholder="укажите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </Form>
  );
};

export default RegistrationForm;
