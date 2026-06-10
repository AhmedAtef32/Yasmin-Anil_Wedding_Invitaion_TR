import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';
import { AppStateService } from '../../state/app.state';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  templateUrl: './invitation.component.html',
})
export class InvitationComponent {
  constructor(public state: AppStateService) {}

  saveToCalendar() {
    const eventTitle = 'Yasmin & Anıl Düğünü';
    const eventDate = '20260717';
    const eventTime = '190000';
    const eventEndTime = '230000';
    const eventLocation = 'Trabzon, Türkiye';
    const eventDescription =
      "Yasmin Ghattas ve Anıl Serdar'ın düğününe davetlisiniz";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventDate}T${eventTime}/${eventDate}T${eventEndTime}&location=${encodeURIComponent(eventLocation)}&details=${encodeURIComponent(eventDescription)}`;

    window.open(googleCalendarUrl, '_blank');
  }

  hearts = Array(15)
    .fill(0)
    .map((_, i) => ({
      left: Math.random() * 100 + 'vw',
      animationDelay: Math.random() * 15 + 's',
      animationDuration: Math.random() * 5 + 10 + 's',
      scale: Math.random() * 0.5 + 0.5,
    }));
}
