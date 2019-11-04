import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundMode } from '@ionic-native/background-mode';

declare var google;

@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html'
})
export class GpsPage {

	latitud: number;
	longitud: number;
	map: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private backgroundMode: BackgroundMode) {
  	if(this.backgroundMode.isEnabled())
  	{
  		console.log("BACKGROUND!!!");
  	}
  }

  ionViewDidLoad() {
  	this.getCordenadas();
  }

  getCordenadas(){
  	//opciones
		var options = {
			enableHighAccuracy: true,
		}
		/**/
  	this.geolocation.getCurrentPosition(options).then((resp) => {
			
			this.latitud = resp.coords.latitude; // resp.coords.latitude
			this.longitud = resp.coords.longitude; // resp.coords.longitude
			this.getMap();

		}).catch((error) => {
			alert('Error getting location' + error);
		  console.log('Error getting location', error);
		});
		
		/*
		let watch = this.geolocation.watchPosition(options);
		watch.subscribe((data) => {
		 // data can be a set of coordinates, or an error (if an error occurred).
		 this.latitud = data.coords.latitude;
		 this.longitud = data.coords.longitude;
		 console.log(data);
		 
		 this.getMap();
		});
		*/
  }

  getMap(){
  	let latLng = new google.maps.LatLng(this.latitud, this.longitud);

  	this.map = new google.maps.Map(document.getElementById('map'), {
			center: latLng,
			zoom: 15
		});
  }

}
