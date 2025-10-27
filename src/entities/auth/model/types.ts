import { IUser } from "@/shared/types/db";

export interface SignUpFxParams {
  name: string;
  email: string;
  password: string;
}

export type SignUpFxResult = IUser;

export type LoginFxParams = Omit<SignUpFxParams, "name">;

export type LoginFxResult = {
  access: string;
  refresh: string;
};
