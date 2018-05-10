import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProductByCategoryPage } from './product-by-category';

@NgModule({
    declarations: [
        ProductByCategoryPage,
    ],
    imports: [
        IonicPageModule.forChild(ProductByCategoryPage),
    ],
    exports: [
        ProductByCategoryPage
    ]
})
export class ProductByCategoryPageModule {}