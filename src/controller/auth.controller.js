import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';

import { checkDuplicateUsernameOrEmail } from "../middleware/verifySignUp.js";

const prisma = new PrismaClient();

export const signup = async (req, res) => {
  // Save User to Database
  try {
    if (await checkDuplicateUsernameOrEmail(req) === true) {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      console.log(hashedPassword);

      const newUser = await prisma.user.create({
        data: {
          email: req.body.email,
          username: req.body.username,
          password: hashedPassword,
          role: req.body.role,
          subscribe: req.body.subscribe,
        },
      });
      console.log(newUser);
      return newUser ? res.status(200).json("Register successfully")
        : res.status(409).json({ message: "Register failed" });
    } else {
      return res.status(409).json({ message: "Register failed. Email or username was used!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
