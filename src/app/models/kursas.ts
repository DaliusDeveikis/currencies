export interface Converter {
  USD: number
}

export interface Kursas {
  amount:number;
  base:string;
  date:string;
  rates: Converter
}