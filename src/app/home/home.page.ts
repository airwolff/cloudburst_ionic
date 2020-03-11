import { FirebaseAuthService } from './../providers/firebase-auth.service';
import { WidgetUtilService } from '../providers/widget-util.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private firebaseAuthService: FirebaseAuthService, private widgetUtilService: WidgetUtilService, private router: Router) {}

    ngOnInit() {}

    async logout() {
        try {
            await this.firebaseAuthService.logout();
            this.widgetUtilService.presentToast('You have logged out.')
            this.router.navigate(['/login']);
        } catch (error) {
            console.log('Error: ', error);
            this.widgetUtilService.presentToast(error.message)
        }

    }

}