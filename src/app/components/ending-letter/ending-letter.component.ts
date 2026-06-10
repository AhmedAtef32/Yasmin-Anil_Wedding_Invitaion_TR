import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ending-letter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative w-full py-20 md:py-32 px-6 sm:px-12 bg-gradient-to-b from-white via-gold-50 to-gold-100 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-gold-300 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-96 h-96 bg-gold-300 rounded-full blur-3xl"
        ></div>
      </div>

      <div class="relative z-10 max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-5xl font-arabic font-bold text-gold-700 mb-4"
          >
            Teşekkürler
          </h2>
        </div>

        <div
          class="bg-white/80 backdrop-blur backdrop-filter rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gold-300 space-y-6 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-gold-500 mx-auto mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>

          <div class="font-serif text-gray-700 leading-relaxed space-y-6">
            <p class="text-lg md:text-2xl text-gold-700 font-italic">
              "İki ruh, tek kalp"
            </p>

            <p class="text-base md:text-lg">
              Bu güzel yeni hayatın eşiğinde dururken, yolculuğumuzun bir
              parçası olan herkese en derin minnettarlığımızı sunmak istiyoruz.
              Dualarınız, desteğiniz ve iyi dilekleriniz bizi bu ana taşıdı.
            </p>

            <p class="text-base md:text-lg">
              Bu kutsal bağı kurarken dualarınıza ve desteğinize ihtiyaç
              duyuyoruz. Sevgiyi merkeze alarak, birbirimize karşılıklı saygı,
              şefkat ve sarsılmaz bağlılıkla dolu bir hayat kurmayı vaat
              ediyoruz.
            </p>

            <p class="text-base md:text-lg font-bold">
              Sizinle kutlama yapmayı ve ömür boyu sürecek güzel anılar
              biriktirmeyi dört gözle bekliyoruz.
            </p>

            <div class="pt-8 border-t-2 border-gold-200">
              <p class="text-gold-700 font-italic mb-4 text-lg">
                Tüm kalbimizle,
              </p>
              <div class="flex items-center justify-center gap-8 mb-6">
                <div class="text-center">
                  <p class="text-xl font-arabic font-bold text-gold-700">
                    Anıl Serdar
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gold-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                <div class="text-center">
                  <p class="text-xl font-arabic font-bold text-gold-700">
                    Yasmin Ghattas
                  </p>
                </div>
              </div>
              <p class="text-gray-600 text-sm">17 Temmuz 2026 · Trabzon</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gold-100 z-0"
      ></div>
    </section>
  `,
  styleUrl: './ending-letter.component.css',
})
export class EndingLetterComponent {}
