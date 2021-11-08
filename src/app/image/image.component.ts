import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input()
  imgSrc: string = 'assets/pondicherry_french_hotel.jpg';

  @Input()
  altTxt?: string = 'Pondicherry French Hotel';

  @Input()
  title: string = 'Pondicherry French Hotel';

  @Input()
  figCaptionTxt?: string =
    '';

  @Input()
  imgOpacity?: number = 1;

  constructor() {}

  ngOnInit(): void {}
}