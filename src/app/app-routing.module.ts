import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ServicesComponent } from './offered-services/services.component';

const routes: Routes = [

];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Enable anchor scrolling
  scrollOffset: [0, 64],

  scrollPositionRestoration: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
