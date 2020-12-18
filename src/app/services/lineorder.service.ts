import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lineorder } from '../models/lineorder';

@Injectable({
  providedIn: 'root'
})
export class LineorderService {

  formData!: Lineorder;
  readonly rootURL ='http://localhost:8082/bookStore/api/achat';
  list!: Lineorder[];
  lineorder!:Lineorder;
  liste!:[];
  constructor(private http: HttpClient) { }
  
  createorder(formData : Lineorder,id:number){
    return this.http.post(this.rootURL+'/addAchat/'+id, formData)
  }
  getAllOrder()
  {
    return this.http.get(this.rootURL+'/getAllAchats')
    .toPromise()
    .then(res => this.list = res as Lineorder[]);
  }
  deleteAll(){
    return this.http.delete(this.rootURL + '/deleteAll') ;
  }
  getAll()
  {
    return this.http.get(this.rootURL+'/getAlllivresbyAchats')
    .toPromise()
    .then(res => this.liste = res as []);
  }

}
