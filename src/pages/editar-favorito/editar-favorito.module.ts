import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarFavoritoPage } from './editar-favorito';

@NgModule({
  declarations: [
    EditarFavoritoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarFavoritoPage),
  ],
})
export class EditarFavoritoPageModule {}
