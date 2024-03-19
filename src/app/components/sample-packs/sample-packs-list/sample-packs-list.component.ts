import {Component, OnInit} from '@angular/core';
import {SamplePack} from "../../../models/SamplePack";
import {SamplePackService} from "../../../services/sample-pack.service";
import {AuthService} from "../../../services/auth.service";
import {ShoppingCartService} from "../../../services/shopping-cart.service";
import {LicenseType} from "../../../models/LicenseType";


@Component({
  selector: 'app-sample-packs-list',
  templateUrl: './sample-packs-list.component.html',
  styleUrl: './sample-packs-list.component.css'
})
export class SamplePacksListComponent implements OnInit{
  samplePacks: SamplePack[]  = [];
  isAdmin: boolean = this._authService.isAdmin();

  constructor(private _samplePackService: SamplePackService,
              private _authService: AuthService,
              private _shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.getSamplePacks();
  }

  getSamplePacks() {
    this._samplePackService.getSamplePacks().subscribe(
      data => {
        this.samplePacks = data;
      },
      error => console.error(error)
    );
  }

  addToCart(itemId: number): void {
    const username = this._authService.getUsername();
    if (username) {
      this._shoppingCartService.addItemToCart(username, itemId, false,this.LicenseType.BASIC).subscribe({
        next: () => console.log('Item added to cart successfully'),
        error: (error) => console.error('Failed to add item to cart', error)
      });
    } else {
      console.error('User is not logged in');
    }
  }

  protected readonly LicenseType = LicenseType;
}
