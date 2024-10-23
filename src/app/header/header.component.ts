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

    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
  
      // Check if the viewport width is less than 992px (mobile view)
      if (window.innerWidth < 992) {
        nav?.classList.add('mobile-scrolled'); // Add a specific class for mobile view
      } else {
        nav?.classList.remove('mobile-scrolled'); // Remove class if not in mobile view
      }
    } else {
      nav?.classList.remove('scrolled');
      nav?.classList.remove('mobile-scrolled'); // Ensure class is removed when scrolling back to the top
    }
}
  // Function to switch the language
  switchLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarResponsive');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}
