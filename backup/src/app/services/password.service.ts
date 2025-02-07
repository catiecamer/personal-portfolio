import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';
import { FDLT_KEY } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  readonly FDLT = 'Camer543';
  incorrectAnswer = false;

  constructor(private encryptionService: EncryptionService) {}

  validateFundsDltPass(pass) {
    const correct = pass === this.FDLT;

    if (correct) {
      const encryptPass = this.encryptionService.encrypt(this.FDLT);
      localStorage.setItem(FDLT_KEY, encryptPass);
    }
    return correct;
  }

  getFundsDltPass() {
    const encryptPass = localStorage.getItem(FDLT_KEY);
    if (!encryptPass) return false;
    return this.encryptionService.decrypt(localStorage.getItem(FDLT_KEY));
  }
}
