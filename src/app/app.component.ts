import { Component } from '@angular/core';

import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imgChangeEvent: any = '';
  cropImagePreview: any = '';

  onFileChange(event: any): void {
    this.imgChangeEvent = event;
  }

  cropImage(event: ImageCroppedEvent) {
    this.cropImagePreview = event.base64;
  }

  imageLoad() {

  }

  initCropper() {

  }

  imageFailed() {
    
  }

}
