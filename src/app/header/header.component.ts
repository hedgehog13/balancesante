import { Component, HostListener } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage: string;
  lastScrollTop = 0;
  headerVisible = true;
  constructor(private translate: TranslateService) {
    this.currentLanguage = 'en'; // Default language
    this.translate.setDefaultLang('en');
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const nav = document.querySelector('nav');
  // Add 'scrolled' class when the scroll position is greater than 50 pixels
  if (window.scrollY > 50) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}
  // Function to switch the language
  switchLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
