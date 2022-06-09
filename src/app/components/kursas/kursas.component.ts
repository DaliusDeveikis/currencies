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

  constructor(
    private kursasService: KursasService
    ) { }

  public converter(n:any) {
    this.loading = true
    this.kursasService.get(Number(n)).subscribe({
      next:(result)=> {
      this.kursas = result
      this.loading = false
    },
      error: (error) => {
        this.err = true
        this.error = error.statusText
      }
    })
   }

  ngOnInit(): void {
  }

}
