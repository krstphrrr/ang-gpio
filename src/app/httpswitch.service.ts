import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpswitchService {
  private color = new Subject()
  private url = "https://api.samimaldita.tk"
  dev = "http://localhost:3000"
  private pinStatus = new BehaviorSubject({})

  pinStatus$:Observable<any>= this.pinStatus.asObservable()
  actualPinObj!:{}

  public pubColor = this.color.asObservable()
  constructor(private http: HttpClient) {
    this.pinStatus$.subscribe(pins=>{
      this.actualPinObj = pins
      console.log(pins)
    })
   }


  receiveToggle(col:string){
    if(this.actualPinObj){
      this.http.post<any>(`${this.url}/${col}`,this.actualPinObj).subscribe(data=>{
        console.log(data)
      })
    }
    
  }

  getPinStatus(){
    this.http.get(`${this.url}/pinstatus`).subscribe(res =>{
      this.pinStatus.next(res)
    })
  }

  touchBackend(){
    
  }


}


