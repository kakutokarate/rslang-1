export interface ICreatedUser {
  id: string;
  name: string;
  email: string;
}

export interface IAuthState {
  isCreatingUser: boolean;
  userCreationError: string | null;
  createdUsers: ICreatedUser[];
}