import { Component, OnInit, Output } from '@angular/core';
import {DataSevices} from '../../shared/data.services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
 public data=[];
  public id;
  public mainData=this.data[this.id];
  constructor(private mydata:DataSevices, private route:ActivatedRoute) { }
  ngOnInit() {
    this.mydata.getData()
    .subscribe(mydata => this.data = mydata);
    let id= parseInt(this.route.snapshot.paramMap.get("id"));
    this.id=id-1;
    
    }
  
  
  }

