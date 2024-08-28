import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {
url="https://dummyjson.com/products"
  constructor(private http:HttpClient) { }

}