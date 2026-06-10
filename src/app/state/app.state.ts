import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  isVideoPlaying = signal<boolean>(true);
  isMusicPlaying = signal<boolean>(false);
  isMuted = signal<boolean>(false);
  videoLoaded = signal<boolean>(false);
  
  endVideo() {
    this.isVideoPlaying.set(false);
    this.isMusicPlaying.set(true);
  }

  toggleMute() {
    this.isMuted.update(v => !v);
  }
}
