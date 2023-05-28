import { Request, Response } from "express";
import { Election } from "@prisma/client";
import { prisma } from "../database/prisma";

class ElectionsController {
  async store(req: Request, res: Response): Promise<Response> {
    const { title, description, start_date, end_date }: Election = req.body;
    const inicio = new Date(start_date);
    const fim = new Date(end_date);

    // @ts-ignore
    const { user_id } = req;

    if (inicio.getTime() > fim.getTime()) {
      return res.status(400).json({
        message:
          "A data de início não pode ser adiante em relação a data de termino de uma votação",
      });
    }

    try {
      const election = await prisma.election.create({
        data: {
          title,
          description,
          start_date: inicio,
          end_date: fim,
          creator_id: user_id,
        },
      });

      return res.json({ election });
    } catch (error) {
      return res.status(400).json({ message: "Erro ao criar votação", error });
    }
  }
}

export const electionsController = new ElectionsController();
