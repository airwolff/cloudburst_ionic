import { WidgetUtilService } from '../providers/widget-util.service';
import { FirestoreDbService } from './../providers/firestore-db.service';
import { HelperService } from './../providers/helper.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EDITPRODUCT } from '../constants/formValidationMessage';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

	productId: string = '';
  productDetailAvailable: boolean = false;
  productDetail: any = {};
  // declaring array for ngFor to iterate over on html
  productDetailList: Array<any> = [];
  // initally hide the edit form
  showEditProductForm: boolean = false;
  editProductForm: FormGroup;
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

    validationMessage: any = EDITPRODUCT;
    showEditProductSpinner: boolean = false;

  constructor(
  	private activatedRoute: ActivatedRoute,
  	private firestoreDbService: FirestoreDbService,
  	private widgetUtilService: WidgetUtilService,
    private helperService: HelperService, 
    private router: Router
  	) { 
    // for url using id
  	this.activatedRoute.params.subscribe(result => {
  		console.log('Result== ', result);
  		this.productId = result.id;
  		this.getProductDetail();
  	});
  }

    resetForm() {
    this.editProductForm.reset();
    this.formError = {
      name: '',
      price: '',
      brand: '',
      size: ''
    };
  }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  async getProductDetail() {
  	try {
      this.productDetailAvailable = false;
  		const result = await this.firestoreDbService.getDataById('product', this.productId);
  		console.log('Product Detail ', result);
      this.productDetail = result;
      // clear array each time
      this.productDetailList = [];
      // for iterating over array to put in page
      for (const key in this.productDetail) {
        this.productDetailList.push({
          name: key,
          value: this.productDetail[key]
        });
      }
  	} catch (error) {
  		console.log(error);
  		this.widgetUtilService.presentToast(error.message);
      this.productDetailAvailable = true;
  	}
    this.productDetailAvailable = true;
  }

  openEditProductForm() {
    this.resetForm();
    this.showEditProductForm = true;
    for (const key in this.editProductForm.controls) {
      console.log('!!!: ', key);
      this.editProductForm.controls[key].setValue(this.productDetail[key]);
    }
  }

  cancelEdit() {
    this.showEditProductForm = false;
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
        this.editProductForm = new FormGroup({
            name: this.name,
            price: this.price,
            size: this.size,
            brand: this.brand
        });
        this.editProductForm.valueChanges.subscribe(data => this.onFormValueChanged(data));
    }

    onFormValueChanged(data) {
        this.formError = this.helperService.prepareValidationMessage(this.editProductForm, this.validationMessage, this.formError);
    }

}
