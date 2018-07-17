import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public base64Image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,

      targetWidth: 1000,
      targetHeight: 1000
    }).then((ImageData) => {
      this.base64Image = "data:image/jpeg;base64," + ImageData;
    }, (err) => {
      console.log(err);
    });
  }

}
