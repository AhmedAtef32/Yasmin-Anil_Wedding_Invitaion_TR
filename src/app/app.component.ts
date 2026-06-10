import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroVideoComponent } from './components/intro-video/intro-video.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { MusicControlComponent } from './components/music-control/music-control.component';
import { HeroComponent } from './components/hero/hero.component';
import { MapComponent } from './components/map/map.component';
import { WeddingLetterComponent } from './components/wedding-letter/wedding-letter.component';
import { EndingLetterComponent } from './components/ending-letter/ending-letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppStateService } from './state/app.state';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    IntroVideoComponent,
    InvitationComponent,
    MusicControlComponent,
    HeroComponent,
    MapComponent,
    WeddingLetterComponent,
    EndingLetterComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Yasmin & Anıl Düğün Davetiyesi';
  constructor(public state: AppStateService) {}
  videoLoaded: Signal<boolean> = computed(() => this.state.videoLoaded());
}
