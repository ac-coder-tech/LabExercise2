import { Component, signal } from '@angular/core';
import { Products } from './products/products.component';  // ✅ matches new filename

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Products],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('My Angular Ice Cream Shop');
}
