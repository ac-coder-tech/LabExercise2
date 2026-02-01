import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],  // Empty, since RouterOutlet was unused
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My Angular Ice Cream Shop');
}