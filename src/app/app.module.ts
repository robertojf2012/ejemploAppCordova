import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FormularioPage } from '../pages/formulario/formulario';
import { GpsPage } from '../pages/gps/gps';
import { ApiPage } from '../pages/api/api';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PruebaPage } from '../pages/prueba/prueba';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { EditarFavoritoPage } from '../pages/editar-favorito/editar-favorito';
import { NuevoFavoritoPage } from '../pages/nuevo-favorito/nuevo-favorito';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { ApiProvider } from '../providers/api/api';
import { BackgroundMode } from '@ionic-native/background-mode';

@NgModule({
  declarations: [
    MyApp,
    GpsPage,
    FormularioPage,
    ApiPage,
    HomePage,
    TabsPage,
    PruebaPage,
    FavoritosPage,
    EditarFavoritoPage,
    NuevoFavoritoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GpsPage,
    FormularioPage,
    ApiPage,
    HomePage,
    TabsPage,
    PruebaPage,
    FavoritosPage,
    EditarFavoritoPage,
    NuevoFavoritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    ApiProvider,
    BackgroundMode
  ]
})
export class AppModule {}
