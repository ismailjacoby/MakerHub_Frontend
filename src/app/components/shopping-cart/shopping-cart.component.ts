import {Component, Injectable} from '@angular/core';
import {CartItems} from "../../models/CartItems";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {AuthService} from "../../services/auth.service";
import {CheckoutService} from "../../services/checkout.service";



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent {
  cartItems: CartItems[] = [];
  total: number = 0;



  constructor(private _shoppingCartService: ShoppingCartService,
              private _authService: AuthService,
              private _checkoutService: CheckoutService) {}

  ngOnInit() {
    const username = this._authService.getUsername();
    this._shoppingCartService.getCartItems(username!).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.calculateTotal();
      },
      error: (error) => console.error(error),
    });
  }



  removeItem(cartItemId: number): void {
    const username = this._authService.getUsername();
    if (username) {
      this._shoppingCartService.removeItemFromCart(username, cartItemId).subscribe({
        next: () => {
          this.loadCartItems();
        },
        error: (error) => {
          console.error('Error removing cart item:', error);
        }
      });
    }
  }

  loadCartItems() {
    const username = this._authService.getUsername();
      this._shoppingCartService.getCartItems(username!).subscribe({
        next: (items) => {
          this.cartItems = items;
          this.calculateTotal();
        },
        error: (error) => console.error(error)
      });
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  processOrder(): void {
    const username = this._authService.getUsername();
    if (username) {
      this._checkoutService.processCheckout(username).subscribe({
        next: (orderDto) => {
          console.log('Order processed successfully:', orderDto);
        },
        error: (error) => console.error('Error processing order:', error),
      });
    }
  }


}
