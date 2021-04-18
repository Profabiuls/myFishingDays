import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  add(form: NgForm): void {
    this.days.push(form.value as Days);
    console.log(this.days);
  }
}
