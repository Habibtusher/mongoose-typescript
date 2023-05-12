import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dateOfBirth: { type: String },
  email: { type: String },
  gender: { type: String, enum: ["male", "female"], required: true },
  contactNo: { type: String, required: true },
  eContact: { type: String, required: true },
  address: { type: String, required: true },
});
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  return admins;
});
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});
const User = model<IUser, UserModel>("User", userSchema);
export default User;
