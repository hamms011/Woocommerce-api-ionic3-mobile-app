webpackJsonp([3],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductByCategoryPageModule", function() { return ProductByCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_by_category__ = __webpack_require__(605);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductByCategoryPageModule = /** @class */ (function () {
    function ProductByCategoryPageModule() {
    }
    ProductByCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_by_category__["a" /* ProductByCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_by_category__["a" /* ProductByCategoryPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__product_by_category__["a" /* ProductByCategoryPage */]
            ]
        })
    ], ProductByCategoryPageModule);
    return ProductByCategoryPageModule;
}());

//# sourceMappingURL=product-by-category.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductByCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ProductDetailsPage } from "../product-details/product-details";
var ProductByCategoryPage = /** @class */ (function () {
    function ProductByCategoryPage(navCtrl, navParams, toastCtrl, WP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.WP = WP;
        this.page = 1;
        this.category = this.navParams.get("category");
        this.WooCommerce = WP.init();
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then(function (data) {
            console.log(JSON.parse(data.body));
            _this.products = JSON.parse(data.body).products;
        }, function (err) {
            console.log(err);
        });
    }
    ProductByCategoryPage.prototype.LoadMoreProducts = function (event) {
        var _this = this;
        this.page++;
        console.log("Getting page " + this.page);
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then(function (data) {
            var temp = (JSON.parse(data.body).products);
            _this.products = _this.products.concat(JSON.parse(data.body).products);
            console.log(_this.products);
            event.complete();
            if (temp.length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: "No more products to load!",
                    duration: 3000
                }).present();
            }
        });
    };
    ProductByCategoryPage.prototype.openProductPage = function (product) {
        this.navCtrl.push('ProductDetailsPage', { "product": product });
    };
    ProductByCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-by-category',template:/*ion-inline-start:"C:\Users\hamma\Desktop\WooIonic\src\pages\product-by-category\product-by-category.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button color="danger" ion-button icon menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Product By Category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let product of products" text-wrap (click)="openProductPage(product)">\n          <ion-thumbnail item-left>\n            <img [src]="product.featured_src">\n          </ion-thumbnail>\n      \n          <h2>{{ product.title }}</h2>\n      \n          <p>\n            <span [innerHTML]="product.short_description.substr(0, 30) + \'...\'"></span>\n            <span [innerHTML]="product.price_html"></span>      \n          </p>\n      \n          <button ion-button icon clear item-right>\n              <ion-icon name="arrow-round-forward"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list>\n\n      <ion-infinite-scroll (ionInfinite)="LoadMoreProducts($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\hamma\Desktop\WooIonic\src\pages\product-by-category\product-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]])
    ], ProductByCategoryPage);
    return ProductByCategoryPage;
}());

//# sourceMappingURL=product-by-category.js.map

/***/ })

});
//# sourceMappingURL=3.js.map