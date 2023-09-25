// import lib
import {prisma} from "../server.js";

export const checkDuplicateUsernameOrEmail = async(req) => {
  try {
    // Check email used exits in database or not.
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: req.body.email
          },
          {
            username: req.body.username,
          },
        ]
      },
    });

    if (user) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  };
};