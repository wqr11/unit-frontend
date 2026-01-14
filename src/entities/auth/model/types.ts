export interface SignUpFxParams {
  name: string;
  is_teacher: boolean;
  email: string;
  password: string;
}

export type LoginFxParams = Omit<SignUpFxParams, "name" | "is_teacher">;

export type LoginFxResult = {
  access_token: string;
  refresh_token: string;
};

export interface IUser {
  id: string;
  email: string;
  is_teacher: boolean;
}
