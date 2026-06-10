import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center"
    >
      <div class="absolute inset-0 z-0 ">
        <video
          autoplay
          loop
          muted
          playsinline
          preload="none"
          class="w-full h-full object-cover"
        >
          <source
            src="videos/wedding-background.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src="videos/wedding-background.webm"
            type='video/webm; codecs="vp8, vorbis"'
          />
        </video>
        <div class="absolute inset-0 bg-black/35"></div>
      </div>

      <div
        class="relative z-10 text-center text-white px-6 sm:px-12 max-w-4xl animate-fade-in"
      >
        <div class="mb-6">
          <div
            class="text-xl md:text-2xl font-serif uppercase tracking-[0.5em] text-gold-300 mb-4"
          >
            Düğünümüz
          </div>
          <div
            class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 my-10 font-arabic text-4xl md:text-6xl font-bold text-white animate-float"
          >
            <span>Anıl Serdar</span>
            <span class="text-2xl md:text-4xl text-white font-serif"
              >&amp;</span
            >
            <span>Yasmin Ghattas</span>
          </div>
          <p
            class="text-lg md:text-2xl font-serif tracking-widest text-gold-200 drop-shadow-md"
          >
            Sonsuza Dek Birlikte
          </p>
        </div>

        <div class="flex items-center justify-center gap-6 mt-12">
          <div class="w-16 md:w-24 h-1 bg-gold-400 opacity-75"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 md:h-10 md:w-10 fill-gold-300"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <div class="w-16 md:w-24 h-1 bg-gold-400 opacity-75"></div>
        </div>
        <div class="mt-18">
          <button
            (click)="scrollToSection('invitation')"
            class="px-8 py-4 bg-gold-500 cursor-pointer hover:bg-gold-600 text-white font-serif tracking-wider uppercase text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Davetiyeyi Görüntüle
          </button>
        </div>
      </div>

      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce flex flex-col items-center gap-4"
      >
        <svg
          (click)="scrollToSection('invitation')"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-gold-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  `,
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  jumpToSection(section: string | null) {
    if (section)
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
