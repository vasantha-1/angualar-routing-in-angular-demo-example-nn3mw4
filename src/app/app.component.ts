import { Component, VERSION } from '@angular/core';
import { ProductsService } from './sharing/products.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private prodService: ProductsService) {}

  ngOnInit() {}
}
