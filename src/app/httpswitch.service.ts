import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpswitchService {
  private color = new Subject()
  private url = "http://192.168.1.6"

  public pubColor = this.color.asObservable()
  constructor(private http: HttpClient) { }

  receiveToggle(col:string){
    // console.log(`${this.url}/${col}`)
    this.http.get(`${this.url}/${col}`)
  }

  touchBackend(){
    
  }


}
