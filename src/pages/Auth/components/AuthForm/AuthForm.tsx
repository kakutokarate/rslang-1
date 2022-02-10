import { FC, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { Form } from "./AuthForm.styles";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { setEnteringFlag, setSigningInError } from "redux/features/authSlice";
import { useFormikCustom } from "./hooks/useFormikCustom";

const AuthForm: FC = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { isSigningIn, signingInError, enteringFlag } = useTypedSelector(state => state.auth);
  const formik = useFormikCustom();

  useEffect(() => {
    if (!signingInError && enteringFlag) {
      navigate('/');
      dispatch(setEnteringFlag(false));
    } else {
      dispatch(setSigningInError(null));
      dispatch(setEnteringFlag(false));
    }
  }, [signingInError, enteringFlag]);

  return (
    <Form onSubmit={formik.handleSubmit}>
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
      <LoadingButton
        color="primary"
        variant="contained"
        fullWidth type="submit"
        loading={isSigningIn}
        disabled={isSigningIn}
      >
        Войти
      </LoadingButton>
    </Form>
  );
};

export default AuthForm;
