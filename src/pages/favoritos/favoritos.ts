import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { EditarFavoritoPage } from '../editar-favorito/editar-favorito';
import { NuevoFavoritoPage } from '../nuevo-favorito/nuevo-favorito';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

	favoritosData: Observable<any>;
  favoritos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.getFavoritos();
  }

  getFavoritos(){
  	this.favoritosData = this.api.getFavoritos();
    this.favoritosData.subscribe(data =>{
      this.favoritos = data.favoritos;
      console.log(this.favoritos);
    });
  }

  editFavoritoPage(id:string){
    this.navCtrl.push(EditarFavoritoPage, {
      idFavorito: id,
      "FavoritosPage": this,
    });
  }

  nuevoFavoritoPage(){
    this.navCtrl.push(NuevoFavoritoPage, {
      "FavoritosPage": this,
    });
  }

  eliminarAlert(id: string){
    const confirm = this.alertCtrl.create({
      title: 'Eliminar registro?',
      message: 'Estas seguro que deseas eliminar?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            this.eliminar(id);
          }
        }
      ]
    });
    confirm.present();
  }

  eliminar(id: string){
    this.api.eliminarFavorito(id).toPromise().then(resp => {

      this.api.showToast("Eliminado exitosamente");
      this.getFavoritos();

    }).catch( err => {
      console.log(err);
    });
  }

}