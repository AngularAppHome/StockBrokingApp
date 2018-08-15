import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MainLayoutModule} from "./layouts/main-layout/main-layout.module";
@NgModule({
    imports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MainLayoutModule
    ],
    exports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MainLayoutModule
    ],
    declarations: [],
    providers: [
    ],
    entryComponents: []
})
export class SharedModule {
}
