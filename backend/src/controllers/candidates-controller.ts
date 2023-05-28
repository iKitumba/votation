import { Request, Response } from "express";
import { Candidate } from "@prisma/client";
import { prisma } from "../database/prisma";

class CandidatesController {
  async index(req: Request, res: Response): Promise<Response> {
    const { election_id } = req.params;

    try {
      const elections = await prisma.election.findUnique({
        where: { id: election_id },
        include: {
          creator: {
            select: {
              id: true,
              email: true,
              name: true,
              phone_number: true,
            },
          },
          _count: {
            select: {
              votes: true,
            },
          },
          candidates: {
            include: {
              _count: {
                select: {
                  votes: true,
                },
              },
              votes: {
                select: {
                  id: true,
                  user: {
                    select: {
                      email: true,
                      name: true,
                      phone_number: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return res.json({ elections });
    } catch (error) {
      return res.status(400).json({
        message: "Ocorreu um erro durante a listagem dos candidatos",
        error,
      });
    }
  }

  async store(req: Request, res: Response): Promise<Response> {
    const avatar = req.file;
    const { name, occupation, proposal }: Candidate = req.body;
    const { election_id } = req.params;
    // @ts-ignore
    const { user_id } = req;

    try {
      const election = await prisma.election.findUnique({
        where: { id: election_id },
      });

      if (!election) {
        return res.status(404).json({ message: "Votação não encontrada" });
      }

      if (election.creator_id !== user_id) {
        return res.status(401).json({
          message: "Sem permissão para adicionar candidatos nessa votação",
        });
      }

      const candidate = await prisma.candidate.create({
        data: {
          name,
          occupation,
          proposal,
          avatar_url: avatar ? avatar.filename : "",
          election_id,
        },
      });

      return res.json({ candidate });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Erro ao criar candidato", error });
    }
  }
}

export const candidatesController = new CandidatesController();
