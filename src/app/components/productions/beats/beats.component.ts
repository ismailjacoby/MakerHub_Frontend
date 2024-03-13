import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {isAdminGuard} from "../../../utils/guards/isAdminGuard";
import {AuthService} from "../../../services/auth.service";
import {Production} from "../../../models/Production";
import {ProductionService} from "../../../services/production.service";

@Component({
  selector: 'app-beats',
  templateUrl: './beats.component.html',
  styleUrl: './beats.component.css'
})
export class BeatsComponent implements OnInit{

    isAdmin = this._authService.isAdmin();
    productions: Production[] = [];
    @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

    protected readonly isAdminGuard = isAdminGuard;

    constructor(private _authService: AuthService, private _productionService: ProductionService) {
    }

  ngOnInit() {
    this.fetchProductions();
  }

  fetchProductions() {
    this._productionService.getAllProductions().subscribe({
      next: (productions) => this.productions = productions,
      error: (error) => console.error('Failed to fetch productions', error),
    });
  }

  playSong(production: Production) {
    const player: HTMLAudioElement = this.audioPlayer.nativeElement;
    player.src = production.audioMp3;
    player.load(); // If needed, depending on how your audio resources are served
    player.play().catch(error => console.error('Playback failed', error));
  }

  formatDuration(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;

    const formattedMinutes: string = minutes.toString().padStart(2, '0');
    const formattedSeconds: string = remainingSeconds.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }


}
