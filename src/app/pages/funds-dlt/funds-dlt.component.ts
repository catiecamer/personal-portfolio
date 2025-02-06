import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-funds-dlt',
  templateUrl: './funds-dlt.component.html',
  styleUrls: [
    './funds-dlt.component.scss',
    './funds-dlt.component.media-queries.scss',
  ],
})
export class FundsDltComponent {
  requirePassword = false;
  readonly PROJECT_NAMES = ['Vision', 'Distribution Platform'] as const;
  readonly WORKFLOW_CAROUSEL = [
    'funds-dlt_worflow@0.jpg',
    'funds-dlt_worflow@1.jpg',
    'funds-dlt_worflow@2.jpg',
  ];
  readonly WORKFLOW_END_CAROUSEL = [
    'funds-dlt_worflow_end@0.jpg',
    'funds-dlt_worflow_end@1.jpg',
  ];
  readonly ERROR_CAROUSEL = [
    'funds-dlt_error@0.jpg',
    'funds-dlt_error@1.jpg',
    'funds-dlt_error@2.jpg',
  ];
  selectedTab: (typeof this.PROJECT_NAMES)[number] = this.PROJECT_NAMES[0];

  constructor(
    public modalService: ModalService,
    private passwordService: PasswordService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route);
    this.requirePassword = this.route.snapshot.data['requirePassword'];
  }

  checkPassword(password) {
    const correct = this.passwordService.validateFundsDltPass(password);
    if (!correct) {
      this.passwordService.incorrectAnswer = true;
    } else {
      this.requirePassword = false;
      this.passwordService.incorrectAnswer = false;
      this.modalService.closePasswordModal();
    }
  }

  selectProjectTab(tabName: (typeof this.PROJECT_NAMES)[number]) {
    this.selectedTab = tabName;
  }
}
