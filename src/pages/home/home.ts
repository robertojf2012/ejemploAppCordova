import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PruebaPage } from '../prueba/prueba';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPage(){
  	this.navCtrl.push(PruebaPage);
  	/*
		this.navCtrl.push(DetalleEventoPage, {
	    eventoId: evento.id
	  });
  	*/
  }

}
