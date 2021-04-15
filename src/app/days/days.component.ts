import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Days } from './../classes/Dayclass';


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
day: Days [];
  constructor() { }

  ngOnInit(): void {
  }
  addDay(): void {
    console.log(this.day);
  }
}
