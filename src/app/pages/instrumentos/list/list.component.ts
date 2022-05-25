import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
formParent: FormGroup = new FormGroup({});
intrumentosData!: any;
  constructor(private service: ) { }

  ngOnInit(): void {
    
  }

}
