import { ResolveFn } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { inject } from '@angular/core';
import { PasswordService } from '../services/password.service';

export const fundsDltResolver: ResolveFn<boolean> = (route, state) => {
  const modal = inject(ModalService);
  const passwordService = inject(PasswordService);

  const pass = passwordService.getFundsDltPass();

  if (!pass || !passwordService.validateFundsDltPass(pass)) {
    modal.openPasswordModal();
    return true;
  }

  return false;
};
