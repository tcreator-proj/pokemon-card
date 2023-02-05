import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import AppRouterModule from "./app-router.module";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {DetailsPageComponent} from "./pages/details-page/details-page.component";
import {CardItemComponent} from "./components/card-item/card-item.component";
import {DetailsComponent} from "./components/details/details.component";
import {FilterBlockComponent} from "./components/filter-block/filter-block.component";
import {HeaderComponent} from "./components/header/header.component";
import {CardListComponent} from "./components/card-list/card-list.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {LoaderComponent} from './components/loader/loader.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {InputFilterComponent} from './components/input-filter/input-filter.component';
import {CheckboxFilterComponent} from './components/checkbox-filter/checkbox-filter.component';
import {RadiobattonFilterComponent} from './components/radiobatton-filter/radiobatton-filter.component';
import {ToStrArrayPipe} from './pipes/to-str-array.pipe';

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
    PaginatorComponent,
    InputFilterComponent,
    CheckboxFilterComponent,
    RadiobattonFilterComponent,
    ToStrArrayPipe,
    ToStrArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouterModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [AppRouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
