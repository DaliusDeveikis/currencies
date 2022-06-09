import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kursas } from '../models/kursas';

@Injectable({
  providedIn: 'root'
})
export class KursasService {

  public eur:number = 0

  constructor(private http: HttpClient) { }

  public get() {
    const host = 'api.frankfurter.app'
    return this.http.get<Kursas>(`https://${host}/latest?amount=${eur}&from=EUR&to=USD`)
  }
}

