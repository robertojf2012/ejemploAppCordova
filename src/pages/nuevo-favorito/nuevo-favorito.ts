import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-nuevo-favorito',
  templateUrl: 'nuevo-favorito.html',
})
export class NuevoFavoritoPage {

	titulo: string;
	descripcion: string;
	url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoFavoritoPage');
  }

  nuevoFavorito(){
  	if(this.titulo!="" && this.titulo!=null && this.descripcion!="" && this.titulo!=null && this.url!="" && this.url!=null){

  		this.api.nuevoFavorito(this.titulo, this.descripcion, this.url).toPromise().then(resp => {

        this.api.showToast("Registrado exitosamente");
        this.navParams.get("FavoritosPage").getFavoritos();
        this.navCtrl.pop();
        
      }).catch( err => {
        console.log(err);
      });

  	}else{
  		this.api.showToast("Campos vacios");
  	}
  }

}
