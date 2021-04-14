import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  day: {
    id: number,
    data: number,
    ora: number,
    luogo: string;
    condizioniMeteo: string;
    orarioSchiusa: number;
    insetti: string;
    catture: number;
    foto: Blob;
  };
  constructor() { }

  ngOnInit(): void {
  }
  addDay(): void {
    console.log(this.day.condizioniMeteo);
  }
}
