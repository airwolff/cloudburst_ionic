import { Router } from '@angular/router';
import { WidgetUtilService } from '../providers/widget-util.service';
import { FirebaseAuthService } from './../providers/firebase-auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreDbService } from './../providers/firestore-db.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    productList: Array < any > = [];
    productAvailable: boolean = false;

    constructor(
        private firebaseAuthService: FirebaseAuthService,
        private widgetUtilService: WidgetUtilService,
        private router: Router,
        private firestoreDbService: FirestoreDbService
    ) {
        this.getProductList();
    }

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

    // define event as parameter and if this is not sent initialize with null
    getProductList(event = null) {
        this.productAvailable = false;
        this.firestoreDbService.getProductList().subscribe(result => {
            console.log('result: ', result);
            this.productList = result;
            this.productAvailable = true;
            this.handleRefresher(event);
        }, (error) => {
            this.widgetUtilService.presentToast(error.message);
            this.productAvailable = true;
            this.handleRefresher(event);
        });
    }

    // receives event object
    handleRefresher(event) {
        if (event) {
            event.target.complete();
        }
    }

    // pass event object to getProductList method
    doRefresh(event) {
        this.getProductList(event)
    }
}