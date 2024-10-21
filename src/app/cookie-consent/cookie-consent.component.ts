import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent {
  isVisible: boolean = true;

  closeModal() {
    this.isVisible = false;
  }

  acceptCookies() {
    this.isVisible = false;
    // Optionally set a cookie to remember user consent
    // Example: document.cookie = "cookieConsent=true; max-age=31536000"; // 1 year
  }
}
