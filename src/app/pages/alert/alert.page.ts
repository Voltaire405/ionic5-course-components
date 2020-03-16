import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public alertTitle: string;//Será en ingresado en el input, tarea 1.video 44

  constructor(private alertController: AlertController) {     
  }

  ngOnInit() {    
  }

  /* async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta, insólito',
      subHeader: 'Alerta de cancelación, bye',
      message: '<strong>Fuck your eggs!</strong>',
      buttons: [
        {
          text: 'Nanai',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Oki',                    
          handler: (blah) => {
            console.log('Ok!');
          }
        }
      ]
    });

    await alert.present();
  } */

  async presentAlert() {//con prompt
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'input1',
          type: 'text',
          placeholder: 'Nombre de la Alerta'          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.alertTitle = alertData.input1;
            console.log(this.alertTitle);
          }
        }
      ]
    });

    await alert.present();
  }


}
