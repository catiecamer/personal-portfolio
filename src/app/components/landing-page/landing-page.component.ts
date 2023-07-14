import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin'
// import { faArrowDown } from '@fortawesome/fontawesome-free-solid';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isMobile = false;
  isTablet = false;
  // faArrowDown = faArrowDown;
  constructor(private sanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver){}
    

  ngOnInit() {

    this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .subscribe((result: BreakpointState) => {

      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
        console.log('xsmall');
      }

      else if (result.breakpoints[Breakpoints.Small]) {
        this.isTablet = true;
        console.log('small');
      }

      else {
        this.isMobile = false;
        this.isTablet = false;
      }

    });
  
      gsap.registerPlugin(ScrollTrigger, CSSPlugin);

      let landingPage = gsap.timeline({
        scrollTrigger: {
          trigger: ".animation",
          scrub: true,
          pin: false,
          start: "top top",
          end: "+=100%",
          markers: true,
          // pinSpacing: false 
        }
      })
      landingPage.to( "h1", {x: "150%", opacity: 0, ease: "power1.in", stagger: 0.15})
      landingPage.to( ".arrow", {y: "100%", opacity: 0, ease: "power1.in"}, 0)

      let circleBG= gsap.timeline({
        scrollTrigger: {
          trigger: ".circle",
          scrub: true,
          pin: false,
          start: "top top",
          end: "+=400%",
          markers: true,
          // pinSpacing: false 
        }
      })

    //  circleBG.to(".circle", {y: "-50%", ease: "power1.in", duration: 3, overflowX:"hidden", transformOrigin: 'center'}, 0)
     circleBG.to(".halfcircle", {y: "-200%", ease: "power1.in", duration: 3, overflowX:"hidden"}, 0)
     circleBG.to(".mainCircle", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
     circleBG.to(".mainCircle-xsmall", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
     circleBG.to(".animation", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
    //  circleBG.to(".magenta", {y: "-50%", ease: "power1.in", duration: 4, overflowX:"hidden"}, 0)
    

     ScrollTrigger.refresh()
      let bubbles = gsap.timeline({
        scrollTrigger: {
          trigger: ".circles",
          scrub: true,
          pin: false,
          start: "bottom 20% ",
          end: "+=100%",
          // pinSpacing: false 
          // markers: true,
        }
      })

    bubbles.to(".circles", {x: "+120%",ease: "power1.in", stagger: 0.10, scale: 0.9})
    bubbles.to(".circles-xsmall", {x: "+120%",ease: "power1.in", stagger: 0.10, scale: 0.9})
   
    ScrollTrigger.refresh()

    let projects = gsap.timeline({
      scrollTrigger: {
        trigger: ".circles",
        scrub: true,
        pin: false,
        start: "top top",
        end: "+=170%",
        pinSpacing: false,
        // markers: true,
      }
    })

    ScrollTrigger.refresh()
    projects.to(".circle", {backgroundColor: "#ff661f",ease: "power1.in"})
    projects.to(".halfcircle", {backgroundColor: "#ff661f",ease: "power1.in"},0)
    projects.to(".projects", {opacity:1},0)
    projects.to(".projects", {x: "-15%", ease: "power1.in"},0)


      // handle the section pinning "#F79540"


let pin = gsap.timeline ({
  scrollTrigger: {
    trigger: ".magenta",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=140%",
    
    // markers: true,
  }
});





let panels = gsap.utils.toArray(".panel");
panels.forEach((panel:any, i:any) => {
  ScrollTrigger.create({
    trigger: panel,
    start:"top top", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    // pinSpacing: false 
  });
});



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
}
