import { Component, OnInit } from '@angular/core';


declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  someRange: any = [0, 10000];
  min: number = this.someRange[0];
  max: number = this.someRange[1];

  constructor() { }


  ngOnInit() {
    $('div[title]').tooltip();
  }

  onChange(range) {
    this.min = range[0];
    this.max = range[1];
  }

}
