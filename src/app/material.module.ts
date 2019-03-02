import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import {MatGridListModule} from "@angular/material";


const MODULES = [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule{

}