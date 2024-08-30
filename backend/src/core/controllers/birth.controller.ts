import { Request, Response } from "express";
import { BirthModel } from "@/models/birth.model";
import { UpdateBirthDto } from "@/constants";

export class BirthController {
  static async create(req: Request, res: Response) {
    const data: any = req.body;
    try {
      const birth = await BirthModel.createBirth(data);
      res.status(201).json(birth);
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
      const birth = await BirthModel.getBirthById(id);
      if (birth) {
        res.status(200).json(birth);
      } else {
        res.status(404).json({ message: "Birth not found" });
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
      const births = await BirthModel.getAllBirths();
      res.status(200).json(births);
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
    const data: UpdateBirthDto = req.body;
    try {
      const birth = await BirthModel.updateBirth(id, data);
      res.status(200).json(birth);
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
      await BirthModel.deleteBirth(id);
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
