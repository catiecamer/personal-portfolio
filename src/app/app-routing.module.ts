import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WaterlooComponent } from './components/waterloo/waterloo.component';
import { THATtorontostudioComponent } from './components/thattorontostudio/thattorontostudio.component';
import { CanadacomputersComponent } from './components/canadacomputers/canadacomputers.component';
import { GmailComponent } from './components/gmail/gmail.component';
import { FundsDltComponent } from './pages/funds-dlt/funds-dlt.component';
import { fundsDltResolver } from './resolvers/funds-dlt.resolver';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'waterloo',
    component: WaterlooComponent,
  },
  {
    path: 'thattorontostudio',
    component: THATtorontostudioComponent,
  },
  {
    path: 'canadacomputers',
    component: CanadacomputersComponent,
  },
  {
    path: 'gmail',
    component: GmailComponent,
  },
  {
    path: 'funds-dlt',
    component: FundsDltComponent,
    resolve: {
      requirePassword: fundsDltResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
