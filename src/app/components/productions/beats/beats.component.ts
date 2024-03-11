import { Component } from '@angular/core';
import {isAdminGuard} from "../../../utils/guards/isAdminGuard";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-beats',
  templateUrl: './beats.component.html',
  styleUrl: './beats.component.css'
})
export class BeatsComponent {

    isAdmin = this._authService.isAdmin();

    protected readonly isAdminGuard = isAdminGuard;

    constructor(private _authService: AuthService) {

    }


}
