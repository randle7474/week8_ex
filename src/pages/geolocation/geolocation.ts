import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  latitude: any;
  longitude: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    let watch = this.geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

    watch.unsubscribe();
  }

  getLatitude() {
    return "Latitude: " + this.latitude;
  }

  getLongitude() {
    return "Longitude: " + this.longitude;
  }

}
