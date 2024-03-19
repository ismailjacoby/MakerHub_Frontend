import { Component } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {WishlistService} from "../../services/wishlist.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlistItems: any[] = [];

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _wishlistService: WishlistService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadWishlistItems();
  }

  addToCart(itemId: number): void {
    console.log('Adding item to cart:', itemId);
  }

  loadWishlistItems(): void {
    const username = this._authService.getUsername();
    if (username) {
      this._wishlistService.getWishlist(username).subscribe({
        next: (items) => this.wishlistItems = items,
        error: (error) => console.error('Failed to load wishlist items', error)
      });
    } else {
      console.error('No user is currently logged in.');
    }
  }
}
