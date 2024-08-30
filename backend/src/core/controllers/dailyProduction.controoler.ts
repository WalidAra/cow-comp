import { Request, Response } from "express";
import { DailyProductionModel } from "@/models/dailyProduction.model";
import {
  UpdateDailyProductionDto,
} from "@/constants/";

export class DailyProductionController {
  static async create(req: Request, res: Response) {
    const data: any = req.body;
    try {
      const dailyProduction = await DailyProductionModel.createDailyProduction(
        data
      );
      res.status(201).json(dailyProduction);
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
      const dailyProduction = await DailyProductionModel.getDailyProductionById(
        id
      );
      if (dailyProduction) {
        res.status(200).json(dailyProduction);
      } else {
        res.status(404).json({ message: "Daily Production not found" });
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
      const dailyProductions =
        await DailyProductionModel.getAllDailyProductions();
      res.status(200).json(dailyProductions);
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
    const data: UpdateDailyProductionDto = req.body;
    try {
      const dailyProduction = await DailyProductionModel.updateDailyProduction(
        id,
        data
      );
      res.status(200).json(dailyProduction);
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
      await DailyProductionModel.deleteDailyProduction(id);
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
