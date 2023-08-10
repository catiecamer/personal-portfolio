import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmailComponent } from './components/email/email.component';
import { ResumeComponent } from './components/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    NavbarComponent,
    EmailComponent,
    ResumeComponent,
 
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    LayoutModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
colorChange1: boolean = true;

  // scroll = function(window.scrollY){
  //   if (scrollY>700){
  //     colorChange1 == true;
  //   }
  //   else{
  //       (".black").css("background" , "#333");  	
  //   }
  // }
}