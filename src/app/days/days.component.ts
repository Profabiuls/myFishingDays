import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
    day: {
      data: Date,
      ora: number,
      luogo: string;
      orarioSchiusa: number;
      insetti: string;
      catture: number;
      immagini: Blob;
    };
  constructor() { }

  ngOnInit(): void {
  }

}
