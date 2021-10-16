import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from "./ad-item";
import {AdHostDirective} from "../../directives/adHost.directive";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit ,OnDestroy{
  @Input() ads : AdItem[] = []
  @ViewChild(AdHostDirective , {static: true}) adHost !: AdHostDirective;
  currentIndex = -1;
  interval : number | undefined;
  constructor(private  componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  loadComponent(){
    this.currentIndex = (this.currentIndex + 1) % this.ads.length
    const adItem = this.ads[this.currentIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component)
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear()
    const compRef = viewContainerRef.createComponent(componentFactory)
    compRef.instance.data = adItem.data
  }

  getAds(){
  this.interval =  setInterval(()=>{
      this.loadComponent();
    },3000)
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }
}
