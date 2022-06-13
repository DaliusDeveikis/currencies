export interface Rates {
  [key:string]:number
}

export interface Kursas {
  amount:number;
  base:string;
  date:string;
  rates: Rates;
}