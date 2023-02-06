import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainPageComponent } from './pages/main-page/main-page.component'
import { DetailsPageComponent } from './pages/details-page/details-page.component'
import { MainLayoutComponent } from './layout/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full' },
      { path: 'cards', component: MainPageComponent },
      { path: 'cards/:id', component: DetailsPageComponent },
    ],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export default class AppRouterModule {}
