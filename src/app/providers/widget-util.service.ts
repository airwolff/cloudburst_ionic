import { Injectable } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WidgetUtilService {

	loading: any = {};

  constructor(private toastController: ToastController, private platform: Platform) { }

  async presentToast(message) {
    const toast = await this.toastController.create({
      // es6 shorthand for key value matching
      message,
      duration: 2500,
      buttons: [
      {
          text: 'Done',
          role: 'cancel',}
      ],
      position: this.platform.is('desktop') ? 'top' : 'bottom'
    });
    toast.present();
  }
}
