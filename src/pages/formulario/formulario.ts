import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

	registroForm: FormGroup;
	nombreModel: string;
	correoModel: string;
	usuarioModel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private alertController: AlertController, public toastCtrl: ToastController) {
  	
  	//for validations
  	this.registroForm = this.formBuilder.group({
  		nombre : ["", Validators.compose([Validators.required,Validators.maxLength(15)])],
		  correo : ["", Validators.compose([Validators.required, Validators.email])],
		  usuario : ["", Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])],
		})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  registrar(){
  	//Verificamos si el formulario es valido
  	if(this.registroForm.valid){
  		this.showAlert("Exito","Usuario registrado con exito");
  	}else{
  		this.showToast("Datos no validos");
  	}
  }

  //function to show an alert
  showAlert(title: string, message: string) {
    const alert = this.alertController.create({
      title: title,
      message: message,
      buttons: ['OK']
    });
    alert.present();
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
