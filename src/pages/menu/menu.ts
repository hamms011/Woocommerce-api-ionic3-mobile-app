import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';
// import { HomePage } from '../home/home';
// import { SignupPage } from "../signup/signup";
// import { LoginPage } from "../login/login";
import { CartPage } from "../cart/cart";
import * as WC from 'woocommerce-api';
// import { ProductByCategoryPage } from "../product-by-category/product-by-category";
import { Storage } from "@ionic/storage";
import { IonicPageModule } from 'ionic-angular/module';
import { WoocommerceProvider } from "../../providers/woocommerce/woocommerce";

@IonicPage({})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage: any;
  WooCommerce: any;
  categories: any[];
  @ViewChild('content') childNavCtrl: NavController;
  loggedIn: boolean;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, private WP: WoocommerceProvider) {
    this.homePage = 'HomePage'
    this.categories = [];
    this.user = {};

    this.WooCommerce = WP.init();

    this.WooCommerce.getAsync("products/categories").then( (data) => {
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[] = JSON.parse(data.body).product_categories;

      for(let i = 0; i < temp.length; i ++)
      {
        if (temp[i].parent == 0) {

          if (temp[i].slug == "clothing") {
            temp[i].icon = "shirt"
          }
          if (temp[i].slug == "music") {
            temp[i].icon = "musical-notes"
          }
          if (temp[i].slug == "posters") {
            temp[i].icon = "images"
          }

          this.categories.push(temp[i]);
        }
      }

    }, (err) => {
      console.log(err)
    })

  }

  ionViewDidEnter() {
    this.storage.ready().then( () => {
      this.storage.get("userLoginInfo").then( (userLoginInfo) => {

        if (userLoginInfo != null) {
          console.log("User logged in...");
          this.user = userLoginInfo.user;
          console.log(this.user);
          this.loggedIn = true;
        } else {
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }

      })
    })
  }

  openCategoryPage(category) {
    this.childNavCtrl.setRoot('ProductByCategoryPage', { "category": category } )
  }

  openPage(pageName: string){
    if (pageName == "signup") {
      this.navCtrl.push('SignupPage');
    }
    if (pageName == "login") {
      this.navCtrl.push('LoginPage');
    }
    if (pageName == "logout") {
      this.storage.remove("userLoginInfo").then( ()=>{
        this.user = {};
        this.loggedIn = false;
      }) 
    }
    if (pageName == "cart") {
      let modal = this.modalCtrl.create(CartPage);
      modal.present();
    }
  }

}
