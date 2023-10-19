import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private $loading = new BehaviorSubject<boolean>(false);

  constructor() {}

  setLoading(newLoadingState: boolean) {
    this.$loading.next(newLoadingState);
  }

  getLoading() {
    return this.$loading.asObservable();
  }
}

// @Injectable({
//   providedIn: 'root',
// })
// export class LoadingService {
//   readonly PAGE_LOADING_TIME: number = 3000;

//   constructor() {}
// }
