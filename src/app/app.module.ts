import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import AppRouterModule from "./app-router.module";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DetailsPageComponent} from "./pages/details-page/details-page.component";
import {CardItemComponent} from "./components/card-item/card-item.component";
import {DetailsComponent} from "./components/details/details.component";
import {FilterBlockComponent} from "./components/filter-block/filter-block.component";
import {HeaderComponent} from "./components/header/header.component";
import {CardListComponent} from "./components/card-list/card-list.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailsPageComponent,
    CardItemComponent,
    CardListComponent,
    DetailsComponent,
    FilterBlockComponent,
    HeaderComponent,
    MainLayoutComponent,
    LoaderComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,

    AppRouterModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [AppRouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
