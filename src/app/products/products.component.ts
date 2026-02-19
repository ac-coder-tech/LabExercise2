import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  category: string;
  available: boolean;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class Products {
  products: Product[] = [
    { name: 'Chocolate Cone', price: 50, category: 'Classic', available: true, image: '/Chocolate.jpg.jpg' },
    { name: 'Vanilla Cone', price: 50, category: 'Classic', available: true, image: '/Vanilla.jpg' },
    { name: 'Strawberry Cone', price: 55, category: 'Fruity', available: true, image: '/Strawberry.jpg.jpg' },
    { name: 'Matcha Cone', price: 99, category: 'Specialty', available: true, image: '/matcha.jpg' },
    { name: 'Pistachio Cone', price: 99, category: 'Specialty', available: true, image: '/pistachio.jpg' },
    { name: 'Rocky Road Cone', price: 99, category: 'Specialty', available: true, image: '/Rocky Road.jpg' },
    { name: 'Caramel Cone', price: 99, category: 'Specialty', available: true, image: '/CARAMELSS.jpg' },
    { name: 'Avocado Cone', price: 99, category: 'Fruity', available: true, image: '/avocado.jpg' },
    { name: 'Mango Cone', price: 99, category: 'Fruity', available: true, image: '/MANGO.jpg' },
    { name: 'Toppings', price: 99, category: 'Add-ons', available: true, image: '/TOPPINGS.jpg' },
    { name: 'Ube Cone', price: 99, category: 'Specialty', available: true, image: '/UBE.jpg' },
    { name: '3 Different Flavors', price: 99, category: 'Combo', available: true, image: '/3FLAVORS.jpg' }
  ];

  selectedCategory: string = 'All';
  cart: Product[] = [];

  // Add product to cart
  addToCart(product: Product) {
    if (!product.available) return;
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }

  // Remove product from cart by index
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  // Filtered products by category
  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  // Unique categories
  get categories(): string[] {
    const cats = this.products.map(p => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }

  // Cart total items
  get cartCount(): number {
    return this.cart.length;
  }

  // Cart total price
  get totalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}
