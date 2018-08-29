import { HomeComponent } from './components/home/home.component';
// import { UserComponent, UserDialog } from './components/user/user.component';
// import {ProductComponent} from './components/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GpsComponent } from './components/gps/gps.component';
import { EquityComponent } from './components/equity/equity.component';
import { MutualfundComponent } from './components/mutualfund/mutualfund.component';
import { NewIssuesComponent } from "src/app/components/new-issues/new-issues.component";
import { MarketComponent } from "src/app/components/market/market.component";
import { ResearchComponent } from "src/app/components/research/research.component";
import { InsightComponent } from "src/app/components/insight/insight.component";
import { InvestologyComponent } from "src/app/components/investology/investology.component";

export const ROUTES: Routes = [
    // routes from pages
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'page', component: PageComponent, data: {title: 'Page'}},
    {path: 'gps', component: GpsComponent, data: {title: 'gps'}},
    {path: 'equity', component: EquityComponent, data: {title: 'equity'}},
    {path: 'mutualfund', component: MutualfundComponent, data: {title: 'Mutual Fund'}},
    {path: 'new-issues',component:NewIssuesComponent,data: {title:'new-issues'}},
    {path: 'market',component:MarketComponent,data:{title:'market'}},
    {path: 'research',component:ResearchComponent,data:{title:'research'}},
    {path: 'insight',component:InsightComponent,data:{title:'insight'}},
    {path: 'investology',component:InvestologyComponent,data:{title:'investology'}},
    {path: '**', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
