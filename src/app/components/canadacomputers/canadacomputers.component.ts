import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canadacomputers',
  templateUrl: './canadacomputers.component.html',
  styleUrls: ['./canadacomputers.component.scss'],
})
export class CanadacomputersComponent {
  constructor(private elementRef: ElementRef) {}

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
