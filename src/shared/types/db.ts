export interface IUser {
  name: string | null;
  email: string;
  id: string;
  last_name: string | null;
  middle_name: string | null;
  avatar_url: string | null;
  role: "User" | "Admin";
  created_at: Date;
  updated_at: Date;
}

export interface IMessage {
  id: string;
  created_at: Date;
  updated_at: Date;
  content: string;
  chatId: string;
  author: IUser;
}

export interface IChat {
  name: string | null;
  id: string;
  created_at: Date;
  updated_at: Date;
  users: IUser[];
  messages: IMessage[];
}
