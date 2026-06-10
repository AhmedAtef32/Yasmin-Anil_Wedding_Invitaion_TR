import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#FAFAF5] text-center py-8 px-4">
      <div class="max-w-4xl mx-auto">
        <img
          src="/images/footer-ornament (1).png"
          alt="Footer ornament"
          class=" mx-auto mb-4"
        />
        <p class="text-[#d4af98] text-sm">
          Bizimle kutladığınız için teşekkür ederiz
        </p>
        <p class="text-[#a88860] text-xs mt-2">© 2026 Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  `,
  styles: [
    `
      footer {
        border-top: 2px solid #d4af98;
      }
    `,
  ],
})
export class FooterComponent {}
