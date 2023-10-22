import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { DomSanitizer } from '@angular/platform-browser';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isMobile = false;
  isTablet = false;
  breakpointPointSub: Subscription;
  dialogBox: boolean = false;
  modalOpenSubject: BehaviorSubject<boolean>;

  constructor(
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    private change: ChangeDetectorRef,
    private modalService: ModalService,
    private router: Router
  ) {}

  openDialog() {
    this.modalService.toggleEmailModal();
  }

  closeDialog() {
    this.modalService.toggleEmailModal();
  }

  ngOnInit() {
    if (!localStorage.getItem('about')) {
      localStorage.setItem('about', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('about');
    }
    this.modalOpenSubject = this.modalService.emailModalOpen;
    this.breakpointPointSub = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        ScrollTrigger.refresh();

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
        this.change.detectChanges();
      });

    gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    ScrollTrigger.refresh();
    let art = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        scrub: true,
        pin: false,
        start: 'top top',
        end: '+=100%',
        // markers: true,
        // pinSpacing: false,
      },
    });
    art.to('.profile', { y: '10%' });
    art.to('.img-xsmall', { y: '0%' }, 0);
    art.to('.gradient-xsmall', { y: '0%' }, 0);

    art.to('.art1', { x: '30%', ease: 'power1.in', stagger: 0.15 });
    art.to(
      '.art2',
      { x: '-20%', y: '-40%', ease: 'power1.in', stagger: 0.1 },
      0
    );
    art.to(
      '.art3',
      { x: '10%', y: '+60%', ease: 'power1.in', stagger: 0.15 },
      0
    );
    art.to(
      '.art4',
      { x: '-30%', y: '+20%', ease: 'power1.in', stagger: 0.2 },
      0
    );
    art.to(
      '.art5',
      { x: '20%', y: '-15%', ease: 'power1.in', stagger: 0.05 },
      0
    );
    art.to(
      '.art6',
      { x: '-10%', y: '-40%', ease: 'power1.in', stagger: 0.1 },
      0
    );
    ScrollTrigger.refresh();

    let message = gsap.timeline({
      scrollTrigger: {
        trigger: '.mainmessage',
        scrub: true,
        pin: false,
        start: 'top 60%',
        end: '+=40%',
      },
    });
    message.to('.mainmessage', { opacity: 1, stagger: 0.4 }, 0);

    ScrollTrigger.refresh();

    let halfpill = gsap.timeline({
      scrollTrigger: {
        trigger: '.halfpill',
        scrub: true,
        pin: false,
        start: 'top 110%',
        end: '+=100%',
        pinSpacing: false,
      },
    });

    halfpill.to('.halfpill', { yPercent: '-10', ease: 'power1.in' }, 0);
    halfpill.to('.halfpill-xsmall', { yPercent: '-5', ease: 'power1.in' }, 0);

    ScrollTrigger.refresh();

    let accounting = gsap.timeline({
      scrollTrigger: {
        trigger: '.accounting',
        scrub: true,
        pin: false,
        start: 'top 60%',
        end: '+=30%',
      },
    });

    ScrollTrigger.refresh();

    accounting.to('.accounting', { opacity: 1 }, 0);

    let painting = gsap.timeline({
      scrollTrigger: {
        trigger: '.painting',
        scrub: true,
        pin: false,
        start: 'top 70%',
        end: '+=30%',
      },
    });

    painting.to('.painting', { opacity: 1 }, 0);

    let uxdesign = gsap.timeline({
      scrollTrigger: {
        trigger: '.uxdesign',
        scrub: true,
        pin: false,
        start: 'top 70%',
        end: '+=30%',
      },
    });

    uxdesign.to('.uxdesign', { opacity: 1 }, 0);

    let workcircles = gsap.timeline({
      scrollTrigger: {
        trigger: '.workContainer',
        scrub: true,
        pin: false,
        start: 'top bottom',
        end: '+=120%',
      },
    });

    workcircles.to('.circles2', {
      x: '-100%',
      backgroundColor: 'rgb(255, 255, 135)',
      ease: 'power1.in',
    });
    workcircles.to('.work', { x: '5%', ease: 'power1.in' }, 0);
    workcircles.to('.workItalics', { x: '-5%', ease: 'power1.in' }, 0);
  }

  navigateHomeToProjects() {
    this.router.navigate(['/'], { state: { target: true } });
  }

  ngOnDestroy() {
    this.breakpointPointSub.unsubscribe();
  }
}
