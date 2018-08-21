import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
// import { OrdersPage } from '../pages/orders/orders';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Printer } from '@ionic-native/printer';
import { PaintPage } from '../pages/paint/paint';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
// import { Http } from '@angular/http';
// import { HttpModule } from '@angular/http';
// import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LogoutPage,
    PaintPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    // IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LogoutPage,
    PaintPage
  ],
  providers: [
    StatusBar,
    File,
    Printer,
    HTTP,
    // HttpModule,
    // Http,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
