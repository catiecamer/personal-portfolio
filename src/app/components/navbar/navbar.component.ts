import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin'
// import { faArrowDown } from '@fortawesome/fontawesome-free-solid';
import { DomSanitizer } from '@angular/platform-browser';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMobile = false;
  isTablet = false;
  hover1 = false;
  hover2 = false;
  hover3 = false;
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

  }}