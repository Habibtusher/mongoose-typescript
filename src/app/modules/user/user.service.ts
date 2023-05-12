import {IUser} from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
 console.log(await user.fullName());
  return user;
};
export const getUserFromDb = async ():Promise<IUser[]>=> {
  const users = await User.find();
  return users;
};
export const getUserByIdFromDb = async (payload:string):Promise<IUser | null> => {
  const user = await User.findOne({id:payload},{name:1});
  return user;
};
export const getAdminUserFromDb = async () => {
    const admins = await User.getAdminUsers();
    return admins
};
