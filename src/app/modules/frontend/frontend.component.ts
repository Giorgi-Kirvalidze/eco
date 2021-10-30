import {Component, OnInit} from '@angular/core';
import {AdService} from "../../shared/components/ad-banner/ad.service";
import {AdItem} from "../../shared/components/ad-banner/ad-item";
import {WebsocketService} from "../../core/services/websocket.service";

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {
  ads: AdItem[] = [];
  testData!: string;
  userId : any;
  clientSocketId: any;
  constructor(private adService: AdService,private webSocketService: WebsocketService) {
  }

  ngOnInit() {
    this.ads = this.adService.getAds()
    this.webSocketService.listen('testEvent').subscribe((data:any) => {
      this.testData = data
    })

    this.webSocketService.listen('userId').subscribe((data:any) =>{
      this.userId = data;
    })

    this.webSocketService.idSubject.subscribe(id=>{
      this.clientSocketId = id;
    })
  }
  onNumberInput(event : KeyboardEvent) {
    // @ts-ignore
    const m = event.target.value.match(/\d+/g);
    // console.log( e.target.value = m )
    if(event.key === '-'){
      console.log('asdsa')
      // @ts-ignore
      event.target.value = -`${m}`;
    }
    // e.target.value = m === null ? '-' : `-${m}`;
  }
}
