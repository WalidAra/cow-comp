import { prisma } from "@/config";
import { Cow } from "@prisma/client";

export class CowModel {
  static async createCow(data: Omit<Cow, "id">): Promise<Cow> {
    return prisma.cow.create({
      data,
    });
  }

  static async getCowById(id: number): Promise<Cow | null> {
    return prisma.cow.findUnique({
      where: { id },
    });
  }

  static async getAllCows(): Promise<Cow[]> {
    return prisma.cow.findMany();
  }

  static async updateCow(id: number, data: Partial<Cow>): Promise<Cow> {
    return prisma.cow.update({
      where: { id },
      data,
    });
  }

  static async deleteCow(id: number): Promise<Cow> {
    return prisma.cow.delete({
      where: { id },
    });
  }
}