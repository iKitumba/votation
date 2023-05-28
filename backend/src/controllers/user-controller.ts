import { Request, Response } from "express";
import { User } from "@prisma/client";
import { prisma } from "../database/prisma";
import { hashPassword } from "../utils/hash-password";

class UserController {
  async store(req: Request, res: Response): Promise<Response> {
    let user;
    try {
      const { name, email, phone_number, password }: User = req.body;
      user = await prisma.user.findUnique({
        where: { phone_number },
        select: {
          id: true,
          created_at: true,
          email: true,
          name: true,
          phone_number: true,
        },
      });

      if (user) {
        return res.json({ user });
      }

      const hashedPassword = await hashPassword(password);
      user = await prisma.user.create({
        data: {
          name,
          email,
          phone_number,
          password: hashedPassword,
        },
        select: {
          id: true,
          created_at: true,
          email: true,
          name: true,
          phone_number: true,
        },
      });

      return res.json({ user });
    } catch (error) {
      return res.status(400).json({
        message: "Ocorreu um erro durante a criação do usuário",
        error,
      });
    }
  }
}

export const userController = new UserController();
