import { Component , OnInit } from '@angular/core';
import {AdService} from "../../shared/components/ad-banner/ad.service";
import {AdItem} from "../../shared/components/ad-banner/ad-item";

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit{
  ads : AdItem[] = [];
  constructor(private  adService : AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds()
  }

}
