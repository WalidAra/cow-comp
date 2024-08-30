import { Request, Response } from "express";
import { CowModel } from "@/models/cow.model";
import { CreateCowDto, UpdateCowDto } from "@/constants/dto";

export class CowController {
  static async create(req: Request, res: Response) {
    const data: CreateCowDto = req.body;
    try {
      const cow = await CowModel.createCow(data);
      res
        .status(201)
        .json({ status: true, message: "Cow created successfully", data: cow });
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(400)
          .json({ status: false, message: error.message, data: null });
      } else {
        res
          .status(400)
          .json({
            status: false,
            message: "An unknown error occurred",
            data: null,
          });
      }
    }
  }

  static async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const cow = await CowModel.getCowById(id);
      if (cow) {
        res.status(200).json({ status: true, message: "Cow found", data: cow });
      } else {
        res
          .status(404)
          .json({ status: false, message: "Cow not found", data: null });
      }
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(400)
          .json({ status: false, message: error.message, data: null });
      } else {
        res
          .status(400)
          .json({
            status: false,
            message: "An unknown error occurred",
            data: null,
          });
      }
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const cows = await CowModel.getAllCows();
      res
        .status(200)
        .json({
          status: true,
          message: "Cows retrieved successfully",
          data: cows,
        });
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(400)
          .json({ status: false, message: error.message, data: null });
      } else {
        res
          .status(400)
          .json({
            status: false,
            message: "An unknown error occurred",
            data: null,
          });
      }
    }
  }

  static async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const data: UpdateCowDto = req.body;
    try {
      const cow = await CowModel.updateCow(id, data);
      res
        .status(200)
        .json({ status: true, message: "Cow updated successfully", data: cow });
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(400)
          .json({ status: false, message: error.message, data: null });
      } else {
        res
          .status(400)
          .json({
            status: false,
            message: "An unknown error occurred",
            data: null,
          });
      }
    }
  }

  static async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      await CowModel.deleteCow(id);
      res
        .status(204)
        .json({
          status: true,
          message: "Cow deleted successfully",
          data: null,
        });
    } catch (error) {
      if (error instanceof Error) {
        res
          .status(400)
          .json({ status: false, message: error.message, data: null });
      } else {
        res
          .status(400)
          .json({
            status: false,
            message: "An unknown error occurred",
            data: null,
          });
      }
    }
  }
}
