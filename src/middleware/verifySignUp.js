// import lib
import {PrismaClient} from '@prisma/client'
import { response } from 'express';

// variable included from lib.
const prisma = new PrismaClient()

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