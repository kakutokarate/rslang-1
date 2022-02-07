import { IAuth } from "model/IAuth";

export interface ISignInState {
  authUserData: null | IAuth;
  isSigningIn: boolean;
  singingInError: null | string;
}