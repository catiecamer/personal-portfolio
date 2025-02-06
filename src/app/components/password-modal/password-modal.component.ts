import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent {
  @Input() for: string;
  @Output() passwordSubmit = new EventEmitter<string>();
  passwordControl = new FormControl('');

  constructor(public passwordService: PasswordService) {}

  emitPassword(event: SubmitEvent) {
    event.preventDefault();
    this.passwordSubmit.emit(this.passwordControl.value);
  }
}
