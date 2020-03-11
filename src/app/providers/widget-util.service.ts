import { Injectable } from '@angular/core';
import { ToastController, Platform, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WidgetUtilService {

    loading: any = {};

  constructor(
    private toastController: ToastController, 
    private platform: Platform,
    private loadingController: LoadingController
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

  async dismissLoader() {
    await this.loading.dismiss();
  }

}
