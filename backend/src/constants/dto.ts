
export interface CreateCowDto {
  cowNumber: string;
  entryDate: Date;
  breed: "HOLSTEIN" | "MONTBELIARDE";
}
export interface UpdateCowDto {
  cowNumber?: string;
  entryDate?: Date;
  breed?: "HOLSTEIN" | "MONTBELIARDE";
}


export interface CreateMedicalExamDto {
  cowId: number;
  examDate: Date;
  diagnosis: string;
}

export interface UpdateMedicalExamDto {
  cowId?: number;
  examDate?: Date;
  diagnosis?: string;
}

export interface CreateBirthDto {
  motherCowId: number;
  birthDate: Date;
}

export interface UpdateBirthDto {
  motherCowId?: number;
  birthDate?: Date;
}


export interface CreateDailyProductionDto {
  cowId: number;
  productionDate: Date;
  milkQuantity: number;
}

export interface UpdateDailyProductionDto {
  cowId?: number;
  productionDate?: Date;
  milkQuantity?: number;
}