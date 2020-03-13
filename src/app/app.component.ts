import { WidgetUtilService } from './providers/widget-util.service';
import { Component } from '@angular/core';
import { FirebaseAuthService } from './providers/firebase-auth.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [{
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Profile',
            url: '/profile',
            icon: 'person'
        },
    ];

    isLoggedIn: boolean = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private firebaseAuthService: FirebaseAuthService,
        private router: Router,
        private widgetUtilService: WidgetUtilService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString('#1643B3');
            this.splashScreen.hide();
        });
        this.getAuthState();
    }

    // continually checks authState form firebase-auth.service.ts
    getAuthState() {
        this.widgetUtilService.presentLoading();
        this.firebaseAuthService.getAuthState().subscribe(user => {
            console.log('user auth state===', user ? user.toJSON() : null);
            if (user) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
            this.handleNavigation();
            this.widgetUtilService.dismissLoader();
        }, (error) => {
            this.widgetUtilService.dismissLoader();
            this.widgetUtilService.presentToast(error.message);
        });
    }

    // this.router.url.split('/')[1] **** split with / is returning without /
    // automagically sending user to signup or login if they get logged out
    handleNavigation() {
        if (this.isLoggedIn) {
            const currentUrl = this.router.url.split('/')[1];
            if (currentUrl === 'login' || currentUrl === 'signup') {
                this.router.navigate(['/home']);
            }
        } else {
            this.router.navigate(['/login']);
        }
    }
}