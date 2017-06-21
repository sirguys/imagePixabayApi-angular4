import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];

  constructor(private _imageService: ImageService) { }

  searchImamge(query: string) {
    return this._imageService.getImage(query).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Success!!')
    )
  }

  ngOnInit() {
  }

}
