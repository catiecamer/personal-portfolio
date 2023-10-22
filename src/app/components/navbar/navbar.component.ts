import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { DomSanitizer } from '@angular/platform-browser';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMobile = false;
  public isTablet = false;
  public hover1: boolean = false;
  public hover2: boolean = false;
  public hover3: boolean = false;
  public hover4: boolean = false;
  public hover5: boolean = false;
  public hover6: boolean = false;
  public url1: string = '';
  dialogBox: boolean = false;
  modalOpenSubject: BehaviorSubject<boolean>;
  breakpointSub: Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private modalService: ModalService
  ) {}

  openDialog() {
    this.modalService.toggleEmailModal();
  }

  closeDialog() {
    this.modalService.toggleEmailModal();
  }

  ngOnInit() {
    this.url1 = this.router.url;
    this.modalOpenSubject = this.modalService.emailModalOpen;
    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.isMobile = true;
          console.log('xsmall');
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.isTablet = true;
          console.log('small');
        } else {
          this.isMobile = false;
          this.isTablet = false;
        }
      });

    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
  }

  ngOnDestroy() {
    this.breakpointSub.unsubscribe();
  }
}
