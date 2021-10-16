import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div class="randomBanner">
      <h3>Random Ad Banner</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.desc}}</p>

      <strong>This AD is made by a very talanted WebDev Giorgi Kirvalidze!</strong>
    </div>
  `
})
export class ProductAdComponent {
  @Input() data: any;
}
