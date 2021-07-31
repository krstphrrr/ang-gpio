import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


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


  receiveToggle(col:string, event:MatSlideToggleChange){
    console.log(col, event.checked)
    let sw = event.checked===true?"1":"0"
    if(this.actualPinObj){
      this.http.get<any>(`${this.url}/${col}/${sw}`).subscribe(data=>{
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


