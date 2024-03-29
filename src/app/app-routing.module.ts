import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"portfolio",component:PortfolioComponent} ,
  {path:"contact",component:ContactComponent} ,
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
