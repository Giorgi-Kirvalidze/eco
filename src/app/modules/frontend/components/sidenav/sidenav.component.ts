import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent   {
  @ViewChild('sidenav') sidenav!:ElementRef;
  isExpanded:boolean =false;

  constructor() {
  }
  expandSidebar(){
    if(this.isExpanded){
      this.sidenav.nativeElement.classList.remove('expand');
      this.isExpanded = false;
    }else{
      this.isExpanded = true;
      this.sidenav.nativeElement.classList.add('expand');
    }
  }
};



