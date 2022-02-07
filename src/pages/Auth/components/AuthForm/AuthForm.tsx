import { FC, useState } from "react";
import { useTypedDispatch } from "redux/hooks";
import { Form } from "./AuthForm.styles";
import { signIn } from 'redux/thunks';
import { useNavigate } from "react-router-dom";

const AuthForm: FC = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(signIn({ email, password }));
    navigate('/');
  };

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
        Пароль:
        <input
          type="password"
          placeholder="укажите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Войти</button>
    </Form>
  );
};

export default AuthForm;
