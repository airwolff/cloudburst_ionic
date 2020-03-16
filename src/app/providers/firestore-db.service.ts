import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FirestoreDbService {

    constructor(
        private db: AngularFirestore
    ) {}

    // returns observable, valueChanges() only returns object, not unique ID use argument to get collection dynamically
    getAllData(collectionId) {
        /* return this.db.collection('product').valueChanges(); */
        return this.db.collection(collectionId).snapshotChanges().pipe(
            map(docArray => {
                return docArray.map(doc => {
                    console.log('id ==', doc.payload.doc.id);
                    console.log('data ==', doc.payload.doc.data());
                    console.log('spread ==', {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data() 
                    });
                    return {
                        id: doc.payload.doc.id,
                        ...doc.payload.doc.data()
                        // ^ this is a spread operator
                    }
                })
            })
        )
    }

// will be expecting collectionId as an argument and use second argument to represent the information you want to insert
    async insertData(collectionId, data) {
        try {
            const result = await this.db.collection(collectionId).add(data);
            return result;
        } catch (error) {
            throw new Error(error);
        }
        
    }
}