import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoaderComponent {
  constructor(public loading: LoadingService) {}
}
