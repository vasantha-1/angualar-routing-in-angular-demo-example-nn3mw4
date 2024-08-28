import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../sharing/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private router: Router) {}

  ngOnInit() {}
}
