import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import {CartItems} from "../../models/CartItems";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent {
  cartItems: CartItems[] = [];

  constructor(private _shoppingCartService: ShoppingCartService,
              private _authService: AuthService) {}

  ngOnInit() {
    const username = this._authService.getUsername();
    this._shoppingCartService.getCartItems(username!).subscribe({
      next: (items) => {
        this.cartItems = items;
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
          console.log("Shopping updated")
        },
        error: (error) => console.error(error)
      });
  }



}
