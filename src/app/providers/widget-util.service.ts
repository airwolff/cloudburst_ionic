import { Injectable } from '@angular/core';
import { ToastController, Platform, LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WidgetUtilService {

    loading: any = {};

  constructor(
    private toastController: ToastController, 
    private platform: Platform,
    private loadingController: LoadingController,
    private alertController: AlertController
    ) { }

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

  async presentLoading() {
     this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
      translucent: true
    });
    return await this.loading.present();
  }

  // async dismissLoader() {
  //   await this.loading.dismiss();
  // }

  async presentAlertConfirm(header, message, buttons) {
    const alert = await this.alertController.create({
      // if key and value are the same like 'header: header' you can declare like this
      header,
      message,
      buttons
    });

    await alert.present();
  }

}
