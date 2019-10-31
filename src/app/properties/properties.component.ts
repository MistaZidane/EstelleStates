import { Component, OnInit } from '@angular/core';
import { DataSevices} from '../shared/data.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
 public data=[];
  constructor( private mydata: DataSevices, private route:Router) { }

  ngOnInit() {
    this.mydata.getData()
    .subscribe(mydata => this.data = mydata );
    
  }
  nav(id){
    this.route.navigate(['property', id])
  }

}
