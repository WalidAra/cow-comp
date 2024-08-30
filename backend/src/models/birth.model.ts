import { prisma } from "@/config";
import { Birth } from "@prisma/client";

export class BirthModel {
  static async createBirth(data: Omit<Birth, "id">): Promise<Birth> {
    return prisma.birth.create({
      data,
    });
  }

  static async getBirthById(id: number): Promise<Birth | null> {
    return prisma.birth.findUnique({
      where: { id },
    });
  }

  static async getAllBirths(): Promise<Birth[]> {
    return prisma.birth.findMany();
  }

  static async updateBirth(id: number, data: Partial<Birth>): Promise<Birth> {
    return prisma.birth.update({
      where: { id },
      data,
    });
  }

  static async deleteBirth(id: number): Promise<Birth> {
    return prisma.birth.delete({
      where: { id },
    });
  }
}
