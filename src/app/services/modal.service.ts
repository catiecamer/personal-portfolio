import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public emailModalOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  toggleEmailModal() {
    this.emailModalOpen.next(!this.emailModalOpen.getValue());
  }
}
