import { WidgetUtilService } from '../providers/widget-util.service';
import { FirestoreDbService } from './../providers/firestore-db.service';
import { HelperService } from './../providers/helper.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ADDPRODUCT } from '../constants/formValidationMessage';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.page.html',
    styleUrls: ['./add-product.page.scss'],
})

export class AddProductPage implements OnInit {

    addProductForm: FormGroup;
    name: FormControl;
    price: FormControl;
    brand: FormControl;
    size: FormControl;
    formError: any = {
        name: '',
        price: '',
        brand: '',
        size: ''
    };

    validationMessage: any = ADDPRODUCT;
    showAddProductSpinner: boolean = false;

    constructor(
        private helperService: HelperService,
        private firestoreDbService: FirestoreDbService,
        private widgetUtilService: WidgetUtilService
        ) {}

    ngOnInit() {
        this.createFormControl();
        this.createForm();
    }

    resetForm() {
    this.addProductForm.reset();
    this.formError = {
      name: '',
      price: '',
      brand: '',
      size: ''
    };
  }

    async addProduct() {
        try {
            this.showAddProductSpinner = true;
            await this.firestoreDbService.insertData('product', {
            name: this.name.value,
            price: this.price.value,
            size: this.size.value,
            brand: this.brand.value
        });
            this.showAddProductSpinner = false;
            this.widgetUtilService.presentToast('Product added successfully');
            this.resetForm();
        } catch (error) {
            console.log(error);
            this.widgetUtilService.presentToast(error.message);
            this.showAddProductSpinner = false;
        }

    }

    createFormControl() {
        this.name = new FormControl('', [
            Validators.required
        ]);
        this.price = new FormControl('', [
            Validators.required
        ]);
        this.brand = new FormControl('', [
            Validators.required
        ]);
        this.size = new FormControl('', [
            Validators.required
        ]);
    }

    createForm() {
        this.addProductForm = new FormGroup({
            name: this.name,
            price: this.price,
            size: this.size,
            brand: this.brand
        });
        this.addProductForm.valueChanges.subscribe(data => this.onFormValueChanged(data));
    }

    onFormValueChanged(data) {
        this.formError = this.helperService.prepareValidationMessage(this.addProductForm, this.validationMessage, this.formError);
    }

}