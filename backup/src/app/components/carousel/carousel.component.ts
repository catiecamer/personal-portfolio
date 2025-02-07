import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    './carousel.component.media-queries.scss',
  ],
})
export class CarouselComponent {
  @Input() orderedImages: string[];
  currentImg: string;
  currentImgIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.currentImg = this.orderedImages[0];
  }

  get length() {
    return this.orderedImages.length;
  }

  get isOnLast() {
    return this.length === this.currentImgIndex + 1;
  }

  get isOnFirst() {
    return this.currentImgIndex === 0;
  }

  nextImage() {
    if (this.isOnLast) return;
    this.currentImgIndex++;
    this.currentImg = this.orderedImages[this.currentImgIndex];
  }

  previousImage() {
    if (this.isOnFirst) return;
    this.currentImgIndex--;
    this.currentImg = this.orderedImages[this.currentImgIndex];
  }
}
