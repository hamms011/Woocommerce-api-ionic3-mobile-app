import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {

  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: "http://localhost:5000/wordpress/",
      consumerKey: "ck_55706aaccfce6cf79cfebab6bca853b5ac9ffb1f",
      consumerSecret: "cs_e052ecd2fca5a243a9eccd16f2ccede0fac501d9"
    });
  }

  init(){
    return this.WooCommerce;
  }

}
