import { findUserByEmailOrUsername } from "../models/userModel.js";

export const canCreateNewUser = async (req) => {
  try {
    // Check email used exits in database or not.
    const IsUserExisted = await findUserByEmailOrUsername(req.body.email, req.body.username);
    if (IsUserExisted) {
      return false;
    }
    return true;
  } catch (error) {
    console.log("Error when checking user existed or not!!!");
  };
};