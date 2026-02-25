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
    { name: 'Chocolate Cone', price: 50, category: 'Classic', available: false, image: '/Chocolate.jpg.jpg' },
    { name: 'Vanilla Cone', price: 50, category: 'Classic', available: true, image: '/Vanilla.jpg' },
    { name: 'Strawberry Cone', price: 55, category: 'Fruity', available: true, image: '/Strawberry.jpg.jpg' },
    { name: 'Matcha Cone', price: 99, category: 'Specialty', available: true, image: '/matcha.jpg' },
    { name: 'Pistachio Cone', price: 99, category: 'Specialty', available: true, image: '/pistachio.jpg' },
    { name: 'Rocky Road Cone', price: 99, category: 'Specialty', available: true, image: '/Rocky Road.jpg' },
    { name: 'Caramel Cone', price: 99, category: 'Specialty', available: true, image: '/CARAMELSS.jpg' },
    { name: 'Avocado Cone', price: 99, category: 'Fruity', available: true, image: '/avocado.jpg' },
    { name: 'Mango Cone', price: 99, category: 'Fruity', available: true, image: '/MANGO.jpg' },
    { name: 'Toppings', price: 10, category: 'Add-ons', available: true, image: '/TOPPINGS.jpg' },
    { name: 'Ube Cone', price: 99, category: 'Specialty', available: true, image: '/UBE.jpg' },
    { name: '3 Different Flavors', price: 130, category: 'Combo', available: true, image: '/3FLAVORS.jpg' }
  ];

  selectedCategory: string = 'All';
  cart: Product[] = [];
  cartOpen: boolean = false;

  addToCart(product: Product) {
    if (!product.available) {
      alert(`Sorry, ${product.name} is out of stock!`);
      return;
    }
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }

  removeFromCart(index: number) {
    const removedItem = this.cart[index];
    this.cart.splice(index, 1);
    alert(`${removedItem.name} removed from cart!`);
  }

  clearCart() {
    this.cart = [];
    alert('Cart cleared!');
  }

  checkout() {
    if (this.cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    const total = this.cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for your order!\nTotal: ₱${total}\nYour ice cream will be ready soon!`);
    this.cart = [];
    this.cartOpen = false;
  }

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  get categories(): string[] {
    const cats = this.products.map(p => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }

  get cartCount(): number {
    return this.cart.length;
  }

  get totalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}