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

  constructor(
    private kursasService: KursasService
    ) { }

  public converter(n:any) {
    this.kursasService.get(Number(n)).subscribe((result)=> {
      this.kursas = result
    })
   }

  ngOnInit(): void {
  }

}
