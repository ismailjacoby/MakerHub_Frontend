import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {isAdminGuard} from "../../../utils/guards/isAdminGuard";
import {AuthService} from "../../../services/auth.service";
import {Production} from "../../../models/Production";
import {ProductionService} from "../../../services/production.service";
import {Genre} from "../../../models/Genre";


@Component({
  selector: 'app-beats',
  templateUrl: './beats.component.html',
  styleUrl: './beats.component.css'
})
export class BeatsComponent implements OnInit, AfterViewInit{
  isAdmin = this._authService.isAdmin();
  productions: Production[] = [];
  allProductions: Production[] = [];
  genres: string[] = Object.values(Genre);
  currentSongIndex: number = 1;
  isPlaying: boolean = false;
  currentSong: Production | null = null;
  progressValue: number = 0;
  selectedGenre: string = 'all';
  searchText: string = '';




  constructor(private _authService: AuthService,
              private _productionService: ProductionService) {
  }

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngOnInit() {
    this.genres = Object.values(Genre);
    this.fetchProductions();
  }

  ngAfterViewInit(): void {
  }



  fetchProductions() {
    this._productionService.getAllProductions().subscribe({
      next: (productions) => {
        this.allProductions = productions;
        this.productions = productions;
      }, error: (error) =>
        console.error('Failed to fetch productions', error),
    });
  }

  filterProductions(){
    this.productions = this.allProductions.filter(production => {
      const matchesGenre = this.selectedGenre === 'all' || production.genre === this.selectedGenre;
      const matchesTitle = production.title.toLowerCase().includes(this.searchText.toLowerCase());
      return matchesGenre && matchesTitle;
    });

  }

  playSong(production: Production): void {
    const player: HTMLAudioElement = this.audioPlayer.nativeElement;
    this.currentSong = production;
    this.currentSongIndex = this.productions.findIndex(p => p.id === production.id);
    player.src = production.audioMp3;
    player.play().catch(error => console.error('Playback failed', error));
    this.isPlaying = true;
  }

  playPrevious(): void {
    if (this.currentSongIndex <= 0) {
      this.currentSongIndex = 1;
    } else {
      this.currentSongIndex--;
    }
    this.playSong(this.productions[this.currentSongIndex]);
  }

  playNext(): void {
    if (this.currentSongIndex >= this.productions.length - 1) {
      this.currentSongIndex = this.productions.length -1;
    } else {
      this.currentSongIndex++;
    }
    this.playSong(this.productions[this.currentSongIndex]);
  }


  togglePlayPause(): void {
    const player: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      player.pause();
    } else {
      if (player.src) {
        player.play().catch(error => console.error('Playback failed', error));
      } else if (this.productions.length > 0) {
        this.playSong(this.productions[0]);
      }
    }
    this.isPlaying = !this.isPlaying;
  }

  seekTo(event: any): void {
    const player: HTMLAudioElement = this.audioPlayer.nativeElement;
    const seekTime = (event.target.value / 100) * player.duration;
    player.currentTime = seekTime;
  }

  changeVolume(event: any): void {
    this.audioPlayer.nativeElement.volume = event.target.value;
  }

  formatDuration(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    const formattedMinutes: string = minutes.toString().padStart(2, '0');
    const formattedSeconds: string = remainingSeconds.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  protected readonly Genre = Genre;
}
