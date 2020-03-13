import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
    providedIn: 'root'
})
export class FirebaseAuthService {

    constructor(
        private angularFireAuth: AngularFireAuth,
        private googlePlus: GooglePlus
    ) {}

    async registerWithEmailPassword(email, password) {
        try {
            const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
            await this.angularFireAuth.auth.currentUser.sendEmailVerification();
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async loginWithEmailPassword(email, password) {
        try {
            const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async logout() {
        try {
            await this.angularFireAuth.auth.signOut();
        } catch (error) {
            throw new Error(error);
        }
    }


    getAuthState() {
        return this.angularFireAuth.authState;
    }

    async googleLoginWeb() {
        try {
            return await this.angularFireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
        } catch (error) {
            throw new Error(error);
        }
    }

    async nativeGoogleLogin() {
        try {
            const result = await this.googlePlus.login({
                webClientId: '249070109461-hiuiig5duvktsvo31pcli0i60k882b0e.apps.googleusercontent.com',
                offline: true,
                scope: 'profile email'
            });
            await this.angularFireAuth.auth.signInAndRetrieveDataWithCredential(auth.GoogleAuthProvider.credential(result.idToken));
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}