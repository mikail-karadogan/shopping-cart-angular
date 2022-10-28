import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BasketComponent } from './components/basket/basket.component';
import { NavigationComponent } from './pages/layouts/navigation/navigation.component';
import { FooterComponent } from './pages/layouts/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFiltersComponent } from './components/product/product-filters/product-filters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BasketComponent,
    NavigationComponent,
    FooterComponent,
    ProductComponent,
    ProductFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
