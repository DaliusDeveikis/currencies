import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kursas } from '../models/kursas';

@Injectable({
  providedIn: 'root'
})
export class KursasService {

  constructor(private http: HttpClient) { }

  public get(eur:number, from:string, to:string) {
    const host = 'api.frankfurter.app'
    return this.http.get<Kursas>(`https://${host}/latest?amount=${eur}&from=${from}&to=${to}`)
  }

  public getCurrencies(from:string) {
    const host = 'api.frankfurter.app'
    return this.http.get<Kursas>(`https://${host}/latest?from=${from}`)
  }


}

