import { Component, ElementRef } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-canadacomputers',
  templateUrl: './canadacomputers.component.html',
  styleUrls: ['./canadacomputers.component.scss'],
})
export class CanadacomputersComponent {
  isLoading = true;

  constructor(
    private elementRef: ElementRef,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, this.loadingService.PAGE_LOADING_TIME);
  }

  ngAfterViewInit() {
    var a = document.createElement('script');
    a.type = 'text/javascript';
    a.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    this.elementRef.nativeElement.appendChild(a);
    var b = document.createElement('script');
    b.type = 'text/javascript';
    b.src =
      'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=63d2e77a080759f2c42a230e';
    this.elementRef.nativeElement.appendChild(b);
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.src =
      'https://assets-global.website-files.com/63d2e77a080759f2c42a230e/js/webflow.9470194d8.js';
    this.elementRef.nativeElement.appendChild(c);
  }
}
