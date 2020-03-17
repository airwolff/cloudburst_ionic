import { HelperService } from './../providers/helper.service';
import { WidgetUtilService } from '../providers/widget-util.service';
import { FirestoreDbService } from './../providers/firestore-db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit() {
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

}
