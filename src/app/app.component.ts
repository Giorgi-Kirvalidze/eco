import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./core/services/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'e-commerce-client';
}
