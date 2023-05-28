import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { comparePassword } from "../utils/compare-password";
import { generateToken } from "../utils/generate-token";

type StoreSession = {
  phone_number: string;
  password: string;
};

class SessionsController {
  async store(req: Request, res: Response): Promise<Response> {
    const { phone_number, password }: StoreSession = req.body;

    if (!phone_number) {
      return res
        .status(401)
        .json({ message: "O número de telefone e obrigatório" });
    }

    try {
      const user = await prisma.user.findUnique({ where: { phone_number } });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      const passwordIsValid = await comparePassword(password, user.password);

      if (!passwordIsValid) {
        return res.status(401).json({ message: "Senha errada" });
      }
      const { id, email, created_at, name } = user;
      const access_token = generateToken({ id });

      return res.json({
        user: {
          id,
          email,
          created_at,
          name,
          phone_number: user.phone_number,
        },
        access_token,
      });
    } catch (error) {
      return res.json({ message: "Error ao iniciar a sessão", error });
    }
  }
}

export const sessionsController = new SessionsController();
