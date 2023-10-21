import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
// import { faArrowDown } from '@fortawesome/fontawesome-free-solid';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  isHovering = false;
  isHovering2 = false;
  isHovering3 = false;
  isHovering4 = false;
  isMobile = false;
  isTablet = false;
  gmailProjectLink: string;
  canadaComputersProjectLink: string;
  THATTorontoStudioProjectLink: string;
  waterlooProjectLink: string;
  breakpointSub: Subscription;
  dialogBox: boolean = false;
  modalOpenSubject: BehaviorSubject<boolean>;

  constructor(
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    private modalService: ModalService
  ) {}

  openDialog() {
    this.modalService.toggleEmailModal();
  }

  closeDialog() {
    this.modalService.toggleEmailModal();
  }

  ngOnInit() {
    // Get a reference to the item dialog
    var splash = document.querySelector('.intro');

    // When the window is loaded....
    window.addEventListener('load', function () {
      // Check to see if the cookie indicates a first-time visit
      // if(document.cookie.indexOf("visited=true") === -1) {

      // Reveal the item (remember: item is hidden by default by CSS)
      // splash.classList.remove("hidden");

      // .5 seconds later, hide the splash
      setTimeout(function () {
        splash.classList.add('show');

        // >> Set cookie to visited here <<
      }, 300);
      // }
    });

    if (!localStorage.getItem('land')) {
      localStorage.setItem('land', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('land');
    }
    this.modalOpenSubject = this.modalService.emailModalOpen;
    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.isMobile = true;
          this.gmailProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1278-4191&t=Huin31uQ7NF3gdTn-1&scaling=scale-down-width&page-id=1249%3A2349&mode=design';
          this.canadaComputersProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1325-3577&t=4m3tQsO8PbU6qfVh-1&scaling=scale-down-width&page-id=1325%3A3576&mode=design';
          this.THATTorontoStudioProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1577-2800&t=RdHaFvbTuRRn0UB2-1&scaling=scale-down-width&page-id=1577%3A2798&mode=design';
          this.waterlooProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1446-12100&t=bOOaxBgWVLz4dp7n-1&scaling=scale-down-width&page-id=1446%3A12099&mode=design';
          console.log('xsmall');
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.gmailProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1251-2273&t=DZNkMRexxK5Co6fV-1&scaling=scale-down-width&page-id=1251%3A2272&starting-point-node-id=1251%3A2273&mode=design';
          this.canadaComputersProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1376-3947&t=2DuTp7NhsRoY7cfq-1&scaling=scale-down-width&page-id=1376%3A3356&mode=design';
          this.THATTorontoStudioProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1577-3144&t=KIXkTtzpuFAZahJ7-1&scaling=scale-down-width&page-id=1577%3A2799&mode=design';
          this.waterlooProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1446-19012&t=xhPdcKQ3DdLmCBAV-1&scaling=scale-down-width&page-id=1446%3A17267&starting-point-node-id=1538%3A1960&mode=design';
          this.isTablet = true;
        } else {
          this.gmailProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1251-2273&t=DZNkMRexxK5Co6fV-1&scaling=scale-down-width&page-id=1251%3A2272&starting-point-node-id=1251%3A2273&mode=design';
          this.canadaComputersProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1376-3947&t=2DuTp7NhsRoY7cfq-1&scaling=scale-down-width&page-id=1376%3A3356&mode=design';
          this.THATTorontoStudioProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1577-3144&t=KIXkTtzpuFAZahJ7-1&scaling=scale-down-width&page-id=1577%3A2799&mode=design';
          this.waterlooProjectLink =
            'https://www.figma.com/proto/wuQGws1ZZcce32YBp3t2JY/Case-Studies?type=design&node-id=1446-19012&t=xhPdcKQ3DdLmCBAV-1&scaling=scale-down-width&page-id=1446%3A17267&starting-point-node-id=1538%3A1960&mode=design';
          this.isMobile = false;
          this.isTablet = false;
        }
      });
    this.initAnimations();
  }

  initAnimations() {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);

    // ScrollTrigger.refresh();
    // let landingPage = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.animation',
    //     scrub: true,
    //     pin: false,
    //     start: 'top top',
    //     end: '+=80%',
    //     // markers: true,
    //     // pinSpacing: false
    //   },
    // });
    // landingPage.to('h1', {
    //   x: '150%',
    //   opacity: 0,
    //   ease: 'power1.in',
    //   stagger: 0.15,
    // });
    // landingPage.to('h2', {
    //   x: '150%',
    //   opacity: 0,
    //   ease: 'power1.in',
    //   stagger: 0.15,
    // });
    // landingPage.to('.arrow', { y: '100%', opacity: 0, ease: 'power1.in' }, 0);

    ScrollTrigger.refresh();
    let circleBG = gsap.timeline({
      scrollTrigger: {
        trigger: '.halfcircle',
        scrub: true,
        pin: false,
        start: 'top bottom',
        end: '+=300%',
        // markers: true,
        // pinSpacing: false
      },
    });

    //  circleBG.to(".circle", {y: "-50%", ease: "power1.in", duration: 3, overflowX:"hidden", transformOrigin: 'center'}, 0)
    circleBG.to(
      '.halfcircle',
      { y: '-200%', ease: 'power1.in', duration: 3, overflowX: 'hidden' },
      0
    );
    //  circleBG.to(".mainCircle", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
    //  circleBG.to(".mainCircle-xsmall", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
    //  circleBG.to(".animation", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
    //  circleBG.to(".container", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
    //  circleBG.to(".magenta", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)

    ScrollTrigger.refresh();
    let bubbles = gsap.timeline({
      scrollTrigger: {
        trigger: '.circleContainer',
        scrub: true,
        pin: false,
        start: 'top 90% ',
        end: '+=200%',
        // pinSpacing: false
        // markers: true,
      },
    });

    bubbles.to('.circles', {
      x: '+120%',
      ease: 'power1.in',
      stagger: 0.1,
      scale: 0.9,
    });
    bubbles.to('.circles-xsmall', {
      x: '+120%',
      ease: 'power1.in',
      stagger: 0.1,
      scale: 0.9,
    });
    bubbles.to('.circles-xsmall', {
      x: '+120%',
      ease: 'power1.in',
      stagger: 0.1,
      scale: 0.9,
    });

    ScrollTrigger.refresh();
    let projects = gsap.timeline({
      scrollTrigger: {
        trigger: '.line1',
        scrub: true,
        pin: false,
        start: 'top 40%',
        end: '+=80%',
        pinSpacing: false,
        // markers: true,
      },
    });

    ScrollTrigger.refresh();
    projects.to('.circle', {
      backgroundColor: 'rgb(253, 130, 63)',
      ease: 'power1.in',
    });
    projects.to(
      '.halfcircle',
      { backgroundColor: 'rgb(253, 130, 63)', ease: 'power1.in' },
      0
    );
    // projects.to('.project', { opacity: 1 }, 0);
    projects.to('.project', { x: '-15%', ease: 'power1.in' }, 0);
    projects.to('.projecttext-xsmall', { x: '', ease: 'power1.in' }, 0);

    // handle the section pinning "#F79540"

    // ScrollTrigger.refresh();
    // let pin = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.magenta',
    //     scrub: true,
    //     pin: true,
    //     start: 'top top',
    //     end: '+=140%',

    //     // markers: true,
    //   },
    // });

    ScrollTrigger.refresh();
    let aboutcircles = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact',
        scrub: true,
        pin: false,
        start: 'top bottom',
        end: '+=200%',
        // markers: true,
      },
    });

    aboutcircles.to('.circles2', {
      x: '-200%',
      backgroundColor: 'rgb(31, 90, 89)',
      ease: 'power1.in',
    });
    aboutcircles.to('.aboutme', { x: '20%', ease: 'power1.in' }, 0);
    aboutcircles.to('.aboutmeItalics', { x: '-20%', ease: 'power1.in' }, 0);

    // gsap.to('.one', {
    //   yPercent: -10,
    //   scaleY: 1.1,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.one',
    //     // start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // gsap.to('.img1', {
    //   yPercent: 5,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.one',
    //     // start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // });

    if (!this.isMobile) {
      gsap.to('.img2', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.one',
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });

      gsap.to('.img3', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.two',
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });

      gsap.to('.img31', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.two',
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });

      gsap.to('.img4', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.three',
          // start: "top bottom", // the default values
          // end: "bottom top",
          scrub: true,
        },
      });
    }

    // gsap.to('.circle3-xsmall', {
    //   yPercent: -20,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.panel1-xsmall',
    //     // start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // gsap.to('.circle4-xsmall', {
    //   yPercent: -20,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.panel3-xsmall',
    //     // start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // gsap.to('.three', {
    //   yPercent: -100,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.two',
    //     // start: "top bottom", // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // });

    // gsap.to('.four', {
    //   yPercent: -120,
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.two',
    //     start: 'bottom bottom', // the default values
    //     // end: "bottom top",
    //     scrub: true,
    //   },
    // }); 'rgb(31, 90, 89)'

    gsap.to('.container', {
      backgroundColor: 'rgb(74, 114, 179)',
      ease: 'none',
      scrollTrigger: {
        trigger: '.three',
        start: '50% bottom ',
        end: 'top top',
        scrub: true,
      },
    });

    // ScrollTrigger.refresh();
    // let panels = gsap.utils.toArray('.panel');
    // panels.forEach((panel: any, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: 'top top', // if it's shorter than the viewport, we prefer to pin it at the top
    //     pin: i === panels.length - 1 ? false : true,
    //     end: 'bottom 100',
    //     pinSpacing: false,
    //   });
    // });

    // gsap.utils.toArray(".panel").forEach((container:any, i:any) => {
    //   ScrollTrigger.create({
    //     trigger: container,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false,
    //     snap: 1,
    //   });
    //   gsap.from(container.children, {
    //     y: 0,
    //     opacity: 0,
    //     scrollTrigger: {
    //       trigger: container,
    //       start: "top bottom",
    //       end: "top top",
    //       toggleActions: "play none reverse reset",
    //     },
    //   });
    // });
  }

  ngOnDestroy() {
    this.breakpointSub.unsubscribe();
  }
}
