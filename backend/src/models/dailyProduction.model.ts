import { prisma } from "@/config";
import { DailyProduction } from "@prisma/client";

export class DailyProductionModel {
  static async createDailyProduction(
    data: Omit<DailyProduction, "id">
  ): Promise<DailyProduction> {
    return prisma.dailyProduction.create({
      data,
    });
  }

  static async getDailyProductionById(
    id: number
  ): Promise<DailyProduction | null> {
    return prisma.dailyProduction.findUnique({
      where: { id },
    });
  }

  static async getAllDailyProductions(): Promise<DailyProduction[]> {
    return prisma.dailyProduction.findMany();
  }

  static async updateDailyProduction(
    id: number,
    data: Partial<DailyProduction>
  ): Promise<DailyProduction> {
    return prisma.dailyProduction.update({
      where: { id },
      data,
    });
  }

  static async deleteDailyProduction(id: number): Promise<DailyProduction> {
    return prisma.dailyProduction.delete({
      where: { id },
    });
  }
}
