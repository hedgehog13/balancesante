import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './offered-services/services.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ContactComponent } from './contact/contact.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { FooterComponent } from './footer/footer.component';
import { RateUsComponent } from './rate-us/rate-us.component';
import { FormsModule } from '@angular/forms';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';
import { ReviewsComponent } from './people-say/people-say.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    PromotionsComponent,
    ContactComponent,

    HeaderComponent,
    ScheduleAppointmentComponent,
    FooterComponent,
    RateUsComponent,
    CookieConsentComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
       defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
