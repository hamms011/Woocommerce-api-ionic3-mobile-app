import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductDetailsPage } from './product-details';

@NgModule({
    declarations: [
        ProductDetailsPage,
    ],
    imports: [
        IonicPageModule.forChild(ProductDetailsPage),
    ],
    exports: [
        ProductDetailsPage
    ]
})
export class ProductDetailsPageModule {}