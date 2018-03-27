import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rf-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() selected: boolean;
  @Input() selector: string;

  constructor() {
  }

  ngOnInit() {
  }

}
