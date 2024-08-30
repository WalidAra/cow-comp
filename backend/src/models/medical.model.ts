import { prisma } from "@/config";
import { MedicalExam } from "@prisma/client";

export class MedicalExamModel {
  static async createMedicalExam(
    data: Omit<MedicalExam, "id">
  ): Promise<MedicalExam> {
    return prisma.medicalExam.create({
      data,
    });
  }

  static async getMedicalExamById(id: number): Promise<MedicalExam | null> {
    return prisma.medicalExam.findUnique({
      where: { id },
    });
  }

  static async getAllMedicalExams(): Promise<MedicalExam[]> {
    return prisma.medicalExam.findMany();
  }

  static async updateMedicalExam(
    id: number,
    data: Partial<MedicalExam>
  ): Promise<MedicalExam> {
    return prisma.medicalExam.update({
      where: { id },
      data,
    });
  }

  static async deleteMedicalExam(id: number): Promise<MedicalExam> {
    return prisma.medicalExam.delete({
      where: { id },
    });
  }
}
