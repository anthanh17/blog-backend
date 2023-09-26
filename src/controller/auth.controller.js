import { canCreateNewUser } from "../middleware/verifySignUp.js";
import { createNewUser } from "../models/userModel.js";


export const signup = async (req, res) => {
  // Save User to Database
  try {
    if (await canCreateNewUser(req) === true) {
      return await createNewUser(req) ? res.status(200).json("Register successfully")
        : res.status(409).json({ message: "Register failed" });
    } else {
      return res.status(409).json({ message: "Register failed. Email or username was used!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
