import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { MainModule } from "./modules/main/main.module";
import { FooterComponent } from './shared/components/footer/footer.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { AuthModule } from "./modules/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  exports: [
    ButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
