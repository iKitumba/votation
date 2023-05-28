import { Request, Response } from "express";
import { prisma } from "../database/prisma";

class VotesController {
  async store(req: Request, res: Response): Promise<Response> {
    const { candidate_id, election_id } = req.params;

    // @ts-ignore
    const { user_id } = req;
    try {
      const election = await prisma.election.findUnique({
        where: { id: election_id },
        include: {
          candidates: true,
        },
      });

      if (!election) {
        return res.status(404).json({ message: "Votação não encontrada!" });
      }

      if (new Date(election.start_date).getTime() > Date.now()) {
        return res.status(400).json({
          message: `Votação ainda não começou!`,
          start_date: election.start_date,
          end_date: election.end_date,
        });
      }

      if (new Date(election.end_date).getTime() < Date.now()) {
        return res.status(400).json({
          message: "Votação terminada!",
          start_date: election.start_date,
          end_date: election.end_date,
        });
      }

      const candidate = election.candidates.find(
        (candidate) => candidate.id === candidate_id
      );

      if (!candidate) {
        return res
          .status(404)
          .json({ message: "Candidato inexistente não encontrada!" });
      }

      let vote = await prisma.votes.findFirst({
        where: {
          user_id,
          election_id,
        },
      });

      if (vote) {
        return res
          .status(409)
          .json({ message: "Já atribuiste o teu foto a um candidato" });
      }

      vote = await prisma.votes.create({
        data: {
          candidate_id,
          election_id,
          user_id,
        },
      });

      return res.json({ vote });
    } catch (error) {
      return res.status(400).json({
        message:
          "Ocorreu um erro durante a votação, por favor, tente novamente",
        error,
      });
    }
  }
}

export const votesController = new VotesController();
