import {AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit, AfterViewInit, OnDestroy{

  constructor(

  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
  }
  ngOnDestroy() {
  }
}
