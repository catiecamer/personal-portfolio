import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  isMobile = false;
  isTablet = false;
  dialogBox: boolean = false;
  modalOpenSubject: BehaviorSubject<boolean>;
  breakpointSub: Subscription;

  constructor(
    private modalService: ModalService,
    private breakpointObserver: BreakpointObserver
  ) {}

  openDialog() {
    this.modalService.toggleEmailModal();
  }

  closeDialog() {
    this.modalService.toggleEmailModal();
  }

  ngOnInit() {
    this.modalOpenSubject = this.modalService.emailModalOpen;
    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result: BreakpointState) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.isMobile = true;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.isTablet = true;
        } else {
          this.isMobile = false;
          this.isTablet = false;
        }
      });
    this.initAnimations();
  }

  initAnimations() {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
  }

  ngOnDestroy() {
    this.breakpointSub.unsubscribe();
  }
}
