import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Subscription } from 'rxjs';
import { HttpswitchService } from '../httpswitch.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public pinStat!:Subscription
  redStat!:boolean
  yellowStat!:boolean 
  greenStat!:boolean

  constructor(
    private http:HttpswitchService
  ) {
    
   }

  ngOnInit(): void {
    // function to check pin status on backend
    this.http.getPinStatus()
    this.pinStat = this.http.pinStatus$.subscribe(stat=>{
      for(const [key,value] of Object.entries(stat)){
        switch(key){
          case "red":
            this.redStat = stat[key]
            break;
          case "yellow":
            this.yellowStat = stat[key]
            break;
          case "green":
            this.greenStat = stat[key]
        }
      }
    })

  }
  toggleRed(event:MatSlideToggleChange){
    this.http.receiveToggle('red',event)
  }
  toggleYellow(event:MatSlideToggleChange){
    this.http.receiveToggle('yellow', event)
  }
  toggleGreen(event:MatSlideToggleChange){
    this.http.receiveToggle('green', event)
  }

}
