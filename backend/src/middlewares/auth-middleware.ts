import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Nenhum token providenciado" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.json(401).json({ message: "Erro no token" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: "Token malformatado" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET_KEY ?? "", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token invalido", error: err });
    }

    // @ts-ignore
    req.user_id = decoded.id;

    next();
  });
};
