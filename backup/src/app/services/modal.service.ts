import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  emailModalOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  passwordModalOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  toggleEmailModal() {
    this.emailModalOpen.next(!this.emailModalOpen.getValue());
  }

  closeEmailModal() {
    this.emailModalOpen.next(false);
  }

  openEmailModal() {
    this.emailModalOpen.next(true);
  }

  openPasswordModal() {
    this.passwordModalOpen.next(true);
  }

  closePasswordModal() {
    this.passwordModalOpen.next(false);
  }
}
