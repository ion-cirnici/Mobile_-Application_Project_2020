import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.page.html',
  styleUrls: ['./accessory.page.scss'],
})
export class AccessoryPage implements OnInit {
  //variable to save picture path/source
  myPhotos:any;

  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;
  constructor(private flashLight:Flashlight, private camera: Camera, private socialSharing: SocialSharing) { }

  lightMethod(){
    this.flashLight.toggle();
  }
  myCamera(){
    const options: CameraOptions = {
      //quality of the image
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    
      
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL): 
     this.myPhotos = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  share(){
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
    .then(()=>{

    }).catch(()=>{

    });
  }





  ngOnInit() {
  }

  
}
