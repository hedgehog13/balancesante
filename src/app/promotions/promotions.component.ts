import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';

interface Promo {
  key:string;
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
  
    this.promos$ = this.translate.get('promotions.list').pipe(
      mergeMap((promos: Promo[]) => {
        return forkJoin(
          promos.map(promo => this.translate.get(`promotions.${promo.key}`))
        ).pipe(
          map((translations: any[]) => promos.map((service, index) => ({
            ...service,
            ...translations[index]
          })))
        );
      })
    );
  
  }
}
