import { Request, Response } from "express";
import { CowModel } from "@/models/cow.model";
import { CreateCowDto, UpdateCowDto } from "@/constants/dto";

export class CowController {
  static async create(req: Request, res: Response) {
    const data: CreateCowDto = req.body;
    try {
      const cow = await CowModel.createCow(data);
      res.status(201).json(cow);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }
  static async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const cow = await CowModel.getCowById(id);
      if (cow) {
        res.status(200).json(cow);
      } else {
        res.status(404).json({ message: "Cow not found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const cows = await CowModel.getAllCows();
      res.status(200).json(cows);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }

  static async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data: UpdateCowDto = req.body;
    try {
      const cow = await CowModel.updateCow(id, data);
      res.status(200).json(cow);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await CowModel.deleteCow(id);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
  }
}
