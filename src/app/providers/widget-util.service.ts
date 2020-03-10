import { Injectable } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WidgetUtilService {

  constructor(private toastController: ToastController, private platform: Platform) { }

  async presentToast(message) {
    const toast = await this.toastController.create({
      // es6 shorthand for key value matching
      message,
      duration: 2500,
      showCloseButton: true,
      position: this.platform.is('desktop') ? 'top' : 'bottom'
    });
    toast.present();
  }
}
