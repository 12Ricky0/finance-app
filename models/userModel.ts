import mongoose from "mongoose";
import { UserProps } from "@/libs/definitions";

const userSchema = new mongoose.Schema<UserProps>({
  name: String,
  email: String,
  password: String,
});

const User =
  mongoose.models.User || mongoose.model<UserProps>("User", userSchema);

export default User;
