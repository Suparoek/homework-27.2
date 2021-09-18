import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './backend.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortfolioModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
