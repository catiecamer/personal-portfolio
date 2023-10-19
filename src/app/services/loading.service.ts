import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  readonly PAGE_LOADING_TIME: number = 3000;

  constructor() {}
}
