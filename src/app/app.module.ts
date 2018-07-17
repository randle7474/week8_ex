import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPage } from '../pages/camera/camera';
import { BrightnessPage } from '../pages/brightness/brightness';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Brightness } from '@ionic-native/brightness';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    BrightnessPage,
    GeolocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraPage,
    BrightnessPage,
    GeolocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Geolocation,
    Brightness
  ]
})
export class AppModule {}
