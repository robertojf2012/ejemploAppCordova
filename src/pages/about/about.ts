import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	latitud: number;
	longitud: number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.getCordenadas();
  }

  getCordenadas(){

  	/*
  	this.geolocation.getCurrentPosition().then((resp) => {
			this.latitud = resp.coords.latitude; // resp.coords.latitude
			this.longitud = resp.coords.longitude; // resp.coords.longitude
		}).catch((error) => {
		  console.log('Error getting location', error);
		});
		*/

		let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
		 // data can be a set of coordinates, or an error (if an error occurred).
		 this.latitud = data.coords.latitude;
		 this.longitud = data.coords.longitude;
		 console.log(data);
		});
  }

}
