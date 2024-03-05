import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isDropdownOpen: boolean = false;

  constructor(private readonly _authService: AuthService, private _router: Router) { }

  logout(){
    return this._authService.logout();
  }

  isLoggedIn(): boolean{
    return this._authService.isLoggedIn();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
