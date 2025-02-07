import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
import { NavbarService } from 'src/app/services/navbar.service';

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
  public url: string = '';
  modalOpenSubject: BehaviorSubject<boolean>;
  breakpointSub: Subscription;
  @Output() scrollEmit = new EventEmitter<boolean>();
  @Input() float = false;

  constructor(
    private sanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private modalService: ModalService,
    public navbarService: NavbarService
  ) {}

  openDialog() {
    this.modalService.openEmailModal();
  }

  closeDialog() {
    this.modalService.closeEmailModal();
  }

  toggleHamburger() {
    // document.body.scrollTo({ top: 0 });
    this.navbarService.hamburgerOpen = !this.navbarService.hamburgerOpen;
    // if (!this.navbarService.hamburgerOpen) {
    //   this.unlockScroll();
    // } else {
    //   this.lockScroll();
    // }
  }

  closeHamburger() {
    this.navbarService.hamburgerOpen = false;
    this.unlockScroll();
  }

  private lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.maxHeight = '100vh';
  }

  private unlockScroll() {
    document.body.style.overflow = 'auto';
    document.body.style.maxHeight = 'none';
  }

  ngOnInit() {
    this.url = this.router.url;
    this.modalOpenSubject = this.modalService.emailModalOpen;
    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        this.closeDialog();
        this.closeHamburger();
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

  navigateHomeToProjects() {
    this.closeHamburger();
    if (this.router.url == '/') {
      this.scrollEmit.emit(true);
    } else {
      this.router.navigate(['/'], { state: { target: true } });
    }
  }

  get _isHomePage() {
    return this.router.url === '/';
  }

  get _isProjectPageWebflow() {
    return [
      '/waterloo',
      '/thattorontostudio',
      '/canadacomputers',
      '/gmail',
      '/funds-dlt',
    ].includes(this.router.url);
  }

  get _isProjectPage() {
    return ['/funds-dlt'].includes(this.router.url);
  }

  get _isInfoPage() {
    return ['/about', '/resume'].includes(this.router.url);
  }

  ngOnDestroy() {
    this.breakpointSub.unsubscribe();
  }
}
