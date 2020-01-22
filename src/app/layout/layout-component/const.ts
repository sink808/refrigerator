export interface ObjDate {
  day: number;
  month: number;
  year: number;
}

export interface Food {
  name: string;
  number: number;
  unit: string;
  startDate?: ObjDate;
  endDate?: ObjDate;
}
