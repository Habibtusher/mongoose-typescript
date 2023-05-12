import { HydratedDocument, Model } from "mongoose";


export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email?: string;
  role: "student";
  password: string;
  dateOfBirth?: string;
  gender: "male" | "female";
  contactNo: string;
  address: string;
  eContact: string;
}
//! static method

export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }