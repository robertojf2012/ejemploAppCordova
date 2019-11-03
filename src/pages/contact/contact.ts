import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	apiData: Observable<any>;
  usuarios: any[] = [];
  nombre: string;

  constructor(public navCtrl: NavController, private api: ApiProvider) {
  }

  ionViewDidLoad() {
  	this.getUsers();
  }

  getUsers(){
  	this.apiData = this.api.getUsers();
    this.apiData.subscribe(data =>{
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  createUser(){
  	if(this.nombre != '' && this.nombre != null)
  	{
  		this.api.createUser(this.nombre,['pelicula 1 ','pelicula 2']).toPromise().then(resp => {
	  		console.log(resp);
	  		alert("Usuario creado exitosamente!");
	  		alert("ID: " + resp['id']);
	  		alert("CREADO: " + resp['createdAt']);
	    }).catch( err => {
	    	alert(err);
	    });
  	}
  	else
  	{
  		alert("Escribe un nombre");
  	}
  }

}
