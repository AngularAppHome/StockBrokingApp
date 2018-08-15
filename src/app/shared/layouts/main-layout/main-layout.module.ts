import {NgModule} from '@angular/core';

import {MainLayoutComponent} from './main-layout.component';
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {FootBarComponent} from "./foot-bar/foot-bar.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        MainLayoutComponent,
        NavBarComponent,
        TopBarComponent,
        FootBarComponent
    ],
    declarations: [
        MainLayoutComponent,
        NavBarComponent,
        TopBarComponent,
        FootBarComponent
    ],
    providers: [],
})
export class MainLayoutModule {
}
