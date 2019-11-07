import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient, private toastCtrl: ToastController) {
    console.log('Hello ApiProvider Provider');
  }

  getUsers(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`,{
      headers: {
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    })
  }

	createUser(name:string, movies:string[]){    
    let infoData = {
      "name":name,
      "movies": movies
    };
    return this.http.post(`https://reqres.in/api/users`, infoData, {
      headers:{
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    });
	}


  //////////////////////////////////////////////////////////////////////////////////////////

  getFavoritos(){
    return this.http.get(`https://favoritosapp.herokuapp.com/api/favoritosMobile/`,{
      headers: {
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    })
  }

  getFavorito(id:string){
    return this.http.get(`https://favoritosapp.herokuapp.com/api/favoritoMobile/` + id,{
      headers: {
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    })
  }

  nuevoFavorito(titulo:string, descripcion:string, url:string){
    let infoData = {
      "title": titulo,
      "description": descripcion,
      "url": url,
    };
    return this.http.post(`https://favoritosapp.herokuapp.com/api/favoritoMobile/`, infoData, {
      headers:{
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    });
  }

  editFavorito(id:string, titulo:string, descripcion:string, url:string){
    let infoData = {
      "title": titulo,
      "description": descripcion,
      "url": url,
    };
    return this.http.post(`https://favoritosapp.herokuapp.com/api/favoritoMobile/`+ id, infoData, {
      headers:{
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    });
  }

  eliminarFavorito(id:string){
    return this.http.get(`https://favoritosapp.herokuapp.com/api/deletefavoritoMobile/` + id,{
      headers: {
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    })
  }

  //function to show a toast
  showToast(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
