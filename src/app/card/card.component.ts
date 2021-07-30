import { Component, OnInit } from '@angular/core';
import { HttpswitchService } from '../httpswitch.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private http:HttpswitchService
  ) { }

  ngOnInit(): void {
  }
  toggleRed(){
    this.http.receiveToggle('red')
  }
  toggleYellow(){
    this.http.receiveToggle('yellow')
  }
  toggleGreen(){
    this.http.receiveToggle('green')
  }

}
