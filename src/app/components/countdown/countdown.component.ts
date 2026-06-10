import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-10 sm:mb-12">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-arabic font-bold text-gold-700 mb-1 sm:mb-2"
      >
        En Güzel Gün
      </h2>
      <p
        class="text-xs sm:text-sm md:text-base text-gray-500 font-serif tracking-wide"
      >
        Özel anımıza geri sayım
      </p>
    </div>
    <div
      class="flex flex-row gap-4 justify-center items-center text-gold-600 font-serif"
    >
      <div class="flex flex-col items-center">
        <span class="text-3xl md:text-5xl font-bold">{{
          days() | number: '2.0'
        }}</span>
        <span
          class="text-xs md:text-sm uppercase tracking-widest mt-1 text-gray-600"
          >Gün</span
        >
      </div>
      <span class="text-2xl md:text-4xl mb-4">:</span>

      <div class="flex flex-col items-center">
        <span class="text-3xl md:text-5xl font-bold">{{
          hours() | number: '2.0'
        }}</span>
        <span
          class="text-xs md:text-sm uppercase tracking-widest mt-1 text-gray-600"
          >Saat</span
        >
      </div>
      <span class="text-2xl md:text-4xl mb-4">:</span>

      <div class="flex flex-col items-center">
        <span class="text-3xl md:text-5xl font-bold">{{
          minutes() | number: '2.0'
        }}</span>
        <span
          class="text-xs md:text-sm uppercase tracking-widest mt-1 text-gray-600"
          >Dk</span
        >
      </div>
      <span class="text-2xl md:text-4xl mb-4">:</span>

      <div class="flex flex-col items-center">
        <span class="text-3xl md:text-5xl font-bold">{{
          seconds() | number: '2.0'
        }}</span>
        <span
          class="text-xs md:text-sm uppercase tracking-widest mt-1 text-gray-600"
          >Sn</span
        >
      </div>
    </div>
  `,
})
export class CountdownComponent implements OnInit, OnDestroy {
  private readonly targetDate = new Date('2026-07-17T19:00:00').getTime();

  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private intervalId: ReturnType<typeof setInterval> | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.updateCountdown();
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      return;
    }

    this.days.set(Math.floor(distance / (1000 * 60 * 60 * 24)));
    this.hours.set(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minutes.set(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    this.seconds.set(Math.floor((distance % (1000 * 60)) / 1000));
  }
}
