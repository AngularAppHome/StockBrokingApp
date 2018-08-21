import { HomeComponent } from './components/home/home.component';
// import { UserComponent, UserDialog } from './components/user/user.component';
// import {ProductComponent} from './components/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GpsComponent } from './components/gps/gps.component';
import { EquityComponent } from './components/equity/equity.component';

export const ROUTES: Routes = [
    // routes from pages
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'page', component: PageComponent, data: {title: 'Page'}},
    {path: 'gps', component: GpsComponent, data: {title: 'gps'}},
    {path: 'equity', component: EquityComponent, data: {title: 'equity'}},
    {path: '**', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
