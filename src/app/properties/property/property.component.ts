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
  opt="facilities";
  constructor(private mydata:DataSevices, private route:ActivatedRoute) { }
  ngOnInit() {
    this.mydata.getData()
    .subscribe(mydata => this.data = mydata);
    let id= parseInt(this.route.snapshot.paramMap.get("id"));
    this.id=id-1;
    
    }
   option(){
    if(this.opt!=="facilities"){
         this.opt="facilities"; 
    }
   }
   option2(){
    if(this.opt!=="description"){
         this.opt="description"; 
    }
   }
   option3(){
    if(this.opt!=="location"){
         this.opt="location"; 
    }
   }
  
  
  }

