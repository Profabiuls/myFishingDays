import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Days } from './../classes/Dayclass';
import { DatiService } from './../service/service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
days: Days[] = [];
  constructor(private service: DatiService) { }

  ngOnInit(): void {
  }
  addDay(): void {
    console.log(this.days);
  }
}
