import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailComponent } from './components/email/email.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CommonModule } from '@angular/common';
import { WaterlooComponent } from './components/waterloo/waterloo.component';
import { THATtorontostudioComponent } from './components/thattorontostudio/thattorontostudio.component';
import { CanadacomputersComponent } from './components/canadacomputers/canadacomputers.component';
import { GmailComponent } from './components/gmail/gmail.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FundsDltComponent } from './pages/funds-dlt/funds-dlt.component';
import { PasswordModalComponent } from './components/password-modal/password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    NavbarComponent,
    EmailComponent,
    ResumeComponent,
    WaterlooComponent,
    THATtorontostudioComponent,
    CanadacomputersComponent,
    GmailComponent,
    LoaderComponent,
    FundsDltComponent,
    PasswordModalComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    LayoutModule,
    NgxGoogleAnalyticsModule.forRoot('MEASUREMENT-ID'),
    NgxGoogleAnalyticsRouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  colorChange1: boolean = true;
}
