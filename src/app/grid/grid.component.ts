import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  cells: Array<string>;

  constructor() {
    this.cells = ['1', '2', '3', '4'];
  }

  ngOnInit() {
  }

}
