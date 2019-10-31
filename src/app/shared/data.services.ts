import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataInterface} from './data.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class DataSevices{
constructor(private http: HttpClient){

}
public url= "assets/data.json";
   getData():Observable<DataInterface[]>{
       return this.http.get<DataInterface[]> (this.url);
   }
    


}