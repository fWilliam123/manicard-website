import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-fluid',
  templateUrl: './image-fluid.component.html',
  styleUrls: ['./image-fluid.component.scss']
})
export class ImageFluidComponent implements OnInit {

  @Input() imagesLink: string[];

  ngOnInit(): void {
  }

  trackByLink(_: number, link: string): string {
    return link;
  }

}
