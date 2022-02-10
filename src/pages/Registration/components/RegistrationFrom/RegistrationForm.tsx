import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Form } from "./RegistrationForm.styles";
import { TextField } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useFormikCustom } from "./hooks/useFormikCustom";
import { useNavigate } from "react-router-dom";
import { setRegisteringFlag, setUserCreationError } from "redux/features/registrationSlice";

const RegistrationForm: FC = () => {
  const {
    isCreatingUser,
    userCreationError,
    registeringFlag,
  } = useTypedSelector(state => state.registration);
  const formik = useFormikCustom();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (!userCreationError && registeringFlag) {
      navigate('/auth');
      dispatch(setRegisteringFlag(false));
    } else {
      dispatch(setUserCreationError(null));
      dispatch(setRegisteringFlag(false));
    }
  }, [userCreationError, registeringFlag]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Имя пользователя"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Электронная почта"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Пароль"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        fullWidth
        id="changepassword"
        name="changepassword"
        label="Подтвердите пароль"
        type="password"
        value={formik.values.changepassword}
        onChange={formik.handleChange}
        error={formik.touched.changepassword && Boolean(formik.errors.changepassword)}
        helperText={formik.touched.changepassword && formik.errors.changepassword}
      />
      <LoadingButton
        color="primary"
        variant="contained"
        fullWidth type="submit"
        loading={isCreatingUser}
        disabled={isCreatingUser}
      >
        Зарегистрироваться
      </LoadingButton>
    </Form>
  );
};

export default RegistrationForm;
