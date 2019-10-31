import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataSevices} from '../shared/data.services'

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
 public data=[];
  constructor(private route:ActivatedRoute, private mydata: DataSevices) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
    });
    this.mydata.getData()
    .subscribe(mydata => this.data = mydata );
  }

}
