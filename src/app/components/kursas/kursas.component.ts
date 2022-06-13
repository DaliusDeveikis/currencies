import { Component, OnInit } from '@angular/core';
import { Kursas } from 'src/app/models/kursas';
import { KursasService } from 'src/app/services/kursas.service';

@Component({
  selector: 'app-kursas',
  templateUrl: './kursas.component.html',
  styleUrls: ['./kursas.component.css']
})
export class KursasComponent implements OnInit {

  public kursas: Kursas|null = null
  public loading = true
  public err = false
  public error:string = ''
  public from:string = 'EUR'
  public to: string = 'USD'
  public amount:number = 0
  public resultt:number = 0
  public currencyList:string[] = []

  constructor(
    private kursasService: KursasService
    ) { }


  public converter(amount:number, from:string, to:string) {
    this.loading = true
    this.kursasService.get(Number(amount), from, to).subscribe({
      next:(result)=> {
      this.resultt = result.rates[this.to]
      this.kursas = result
      this.loading = false
    },
      error: (error) => {
        this.err = true
        this.error = error.name
        console.log(error)
      }
    })
   }

   public getCurrensyList() {
    this.kursasService.getCurrencies(this.from).subscribe({
      next:(result)=> {
        this.currencyList = Object.keys(result.rates)
      }
    })
   }


  ngOnInit(): void {
    this.getCurrensyList()
    console.log(this.kursas?.rates)
  }

}
