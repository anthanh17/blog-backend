import bcrypt from "bcrypt";
import {prisma} from "../server.js";

export const findUserByEmailOrUsername = async(email, username) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            username: username,
          },
        ]
      },
    });
    if (user) {
      return true;
    }
    return false;
  } catch (error) {
    return true;
  }
};

export const createNewUser = async(req) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role,
        subscribe: req.body.subscribe,
      },
    });

    if (!newUser) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}