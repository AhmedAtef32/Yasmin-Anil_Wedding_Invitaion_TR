import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  WritableSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../../state/app.state';

@Component({
  selector: 'app-intro-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 z-40 bg-black flex items-center justify-center transition-opacity duration-1000 ease-out"
      [class.opacity-0]="!state.isVideoPlaying()"
      [class.pointer-events-none]="!state.isVideoPlaying()"
    >
      <video
        #videoElement
        class="w-full h-full object-cover transition-opacity duration-700"
        muted
        playsinline
        preload="auto"
        controlsList="nodownload"
        (ended)="onVideoEnded()"
        poster="images/video-poster.png"
      >
        <source
          src="videos/intro-video-new.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        <source
          src="videos/intro-video-new.webm"
          type='video/webm; codecs="vp8, vorbis"'
        />
      </video>
      <div (click)="playVideo()" class="absolute inset-0 z-50 cursor-pointer">
        <div
          class="absolute top-[75%] left-[50%] -translate-1/2 flex flex-col items-center animate-bounce"
          [class.hidden]="trunOnVideo()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 11l7-7 7 7m-7-7v15"
            />
          </svg>
          <h2 class="text-white">Açmak için dokunun</h2>
        </div>
      </div>
    </div>
  `,
})
export class IntroVideoComponent implements AfterViewInit {
  @ViewChild('videoElement') videoRef!: ElementRef<HTMLVideoElement>;
  showPlayButton = false;
  trunOnVideo: WritableSignal<boolean> = signal(false);

  constructor(public state: AppStateService) {}

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.screenY = 0;
    }
  }

  playVideo() {
    this.showPlayButton = false;
    const video = this.videoRef?.nativeElement;
    if (video && typeof video.play === 'function') {
      video.play();
      this.state.videoLoaded.set(true);
      this.trunOnVideo.set(true);
    }
  }

  onVideoEnded() {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.state.endVideo();
      }, 300);
    } else {
      this.state.endVideo();
    }
  }
}
