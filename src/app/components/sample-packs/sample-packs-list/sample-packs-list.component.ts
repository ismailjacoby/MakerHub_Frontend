import {Component, OnInit} from '@angular/core';
import {SamplePack} from "../../../models/SamplePack";
import {SamplePackService} from "../../../services/sample-pack.service";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-sample-packs-list',
  templateUrl: './sample-packs-list.component.html',
  styleUrl: './sample-packs-list.component.css'
})
export class SamplePacksListComponent implements OnInit{
  samplePacks: SamplePack[]  = [];
  isAdmin: boolean = this._authService.isAdmin();

  constructor(private _samplePackService: SamplePackService, private _authService: AuthService) {
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
}
