import {
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  effect,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppStateService } from '../../state/app.state';

@Component({
  selector: 'app-music-control',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-3 cursor-pointer transition-transform hover:scale-110 active:scale-95 text-gold-600 border border-gold-300 pointer-events-auto"
      (click)="state.toggleMute()"
      [class.opacity-0]="state.isVideoPlaying()"
      [class.opacity-100]="!state.isVideoPlaying()"
      [class.pointer-events-none]="state.isVideoPlaying()"
      style="transition: opacity 1s ease-in-out;"
    >
      <svg
        *ngIf="!state.isMuted()"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 19v-6m0 0V5l-5 4H2v6h2l5 4z"
        />
      </svg>
      <svg
        *ngIf="state.isMuted()"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
        />
      </svg>
    </div>
    <audio
      #audioElement
      src="/music/wedding_invitation.mp3"
      (play)="this.state.isMusicPlaying()"
      loop
      preload="auto"
    ></audio>
  `,
})
export class MusicControlComponent {
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);
  @ViewChild('audioElement') audioRef!: ElementRef<HTMLAudioElement>;

  constructor(public state: AppStateService) {
    if (isPlatformBrowser(this._pLATFORM_ID)) {
      effect(() => {
        const audio = this.audioRef?.nativeElement;
        if (this.state.isMusicPlaying()) {
          if (typeof audio.play === 'function') {
            audio.play();
          }
          audio.muted = this.state.isMuted();
        }

      });
    }
  }
}
