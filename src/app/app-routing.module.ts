import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ServicesComponent } from './offered-services/services.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/about' } 
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Enable anchor scrolling
  scrollOffset: [0, 64] // Adjust this to add an offset if needed (e.g., for fixed navbar)
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
