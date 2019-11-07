import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-editar-favorito',
  templateUrl: 'editar-favorito.html',
})
export class EditarFavoritoPage {

	idFavorito: string;
  favoritoData: Observable<any>;
  favorito: any;

  titulo: string;
  descripcion: string;
  url: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
  	this.idFavorito = this.navParams.get("idFavorito");
  }

  ionViewDidLoad() {
    this.getFavorito();
  }

  getFavorito(){
    this.favoritoData = this.api.getFavorito(this.idFavorito);
    this.favoritoData.subscribe(data =>{
      console.log(data);
      this.titulo = data.favorito.title;
      this.descripcion = data.favorito.description;
      this.url = data.favorito.url;
    });
  }

  editarFavorito(){

    if(this.titulo!="" && this.descripcion!="" && this.url!=""){
      
      this.api.editFavorito(this.idFavorito, this.titulo, this.descripcion, this.url).toPromise().then(resp => {

        this.api.showToast("Actualizado exitosamente");
        this.navParams.get("FavoritosPage").getFavoritos();
        this.navCtrl.pop();
        
      }).catch( err => {
        console.log(err);
      });

    }

  }

}
