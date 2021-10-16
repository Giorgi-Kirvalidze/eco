import {Injectable} from "@angular/core";
import { AdItem } from './ad-item';
import {ProductAdComponent} from "../product-ad.components";

@Injectable({providedIn:'root'})

export class AdService {
  getAds(){
    return [
      new AdItem(ProductAdComponent , {name:'Giorgi', desc: 'a very talanted person' }),
      new AdItem(ProductAdComponent , {name:'random', desc: 'random text to fill desc' }),
    ]
  }
}
