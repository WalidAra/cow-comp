import { Request, Response } from "express";
import { MedicalExamModel } from "@/models/medical.model";
import { UpdateMedicalExamDto } from "@/constants";

export class MedicalExamController {
  static async create(req: Request, res: Response) {
    const data: any = req.body;
    try {
      const medicalExam = await MedicalExamModel.createMedicalExam(data);
      res.status(201).json(medicalExam);
    } catch (error) {}
  }

  static async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const medicalExam = await MedicalExamModel.getMedicalExamById(id);
      if (medicalExam) {
        res.status(200).json(medicalExam);
      } else {
        res.status(404).json({ message: "Medical Exam not found" });
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
      const medicalExams = await MedicalExamModel.getAllMedicalExams();
      res.status(200).json(medicalExams);
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
    const data: UpdateMedicalExamDto = req.body;
    try {
      const medicalExam = await MedicalExamModel.updateMedicalExam(id, data);
      res.status(200).json(medicalExam);
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
      await MedicalExamModel.deleteMedicalExam(id);
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
