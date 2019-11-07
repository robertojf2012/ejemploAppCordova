import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoFavoritoPage } from './nuevo-favorito';

@NgModule({
  declarations: [
    NuevoFavoritoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoFavoritoPage),
  ],
})
export class NuevoFavoritoPageModule {}
