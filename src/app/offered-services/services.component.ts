import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';


interface Service {
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
  services: Service[] = []; 
  services$: Observable<Service[]> = of([]); // Observable for services
  servicesTitle: string = '';

  constructor(private translate: TranslateService) {
    this.loadServices();

  }


    loadServices() {
      this.services$ = this.translate.get('services.list');
    }

  getLanguage() {
    return this.translate.currentLang;
  }
}
