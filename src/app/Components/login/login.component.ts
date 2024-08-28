import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../sharing/products.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  ngOnInit() {}
}
