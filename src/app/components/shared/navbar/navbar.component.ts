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
  isClient: boolean = this._authService.isClient();
  isAdmin: boolean = this._authService.isAdmin();


  constructor(private readonly _authService: AuthService, private _router: Router) { }

  /*
   * Logout from website
   */
  logout(){
    this.closeModal();
    return this._authService.logout();
  }

  /*
  * Check if user is logged in
  */
  isLoggedIn(): boolean{
    return this._authService.isLoggedIn();
  }

  /*
  * Toggle Menu
  */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /*
  * Toggle Dropdown
  */
  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /*
  * Open Modal
  */
  openModal() {
    document.getElementById('myModal')!.style.display = "block";
  }

  /*
  * Close Modal
  */
  closeModal() {
    document.getElementById('myModal')!.style.display = "none";
  }
}
