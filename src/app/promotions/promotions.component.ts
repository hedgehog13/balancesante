import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

interface Promo {
  title: string;
  description: string;
  alt: string;
  src: string;
}
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
})
export class PromotionsComponent {
  promos$: Observable<Promo[]> = of([]); // Observable for services
  constructor(private translate: TranslateService) {
    this.loadPromos();
  }
  loadPromos() {
    this.promos$ = this.translate.get('promotions.list');
 
  }
}
