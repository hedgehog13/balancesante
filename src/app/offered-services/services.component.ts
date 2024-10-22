import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';


interface Service {
  key:string
  name: string;
  description: string;
  image?:string
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

  services$: Observable<Service[]> = of([]); // Observable for services
  servicesTitle: string = '';

  constructor(private translate: TranslateService) {
    this.loadServices();

  }


    loadServices() {
      this.services$ = this.translate.get('services.list').pipe(
        mergeMap((services: Service[]) => {
          return forkJoin(
            services.map(service => this.translate.get(`services.${service.key}`))
          ).pipe(
            map(translations => services.map((service, index) => ({
              ...service,
              ...translations[index]
            })))
          );
        })
      );
    
    }

  getLanguage() {
    return this.translate.currentLang;
  }
}
