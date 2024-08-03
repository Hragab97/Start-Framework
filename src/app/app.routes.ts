import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactComponent } from './Components/contact/contact.component';
import { Notfound404Component } from './Components/notfound404/notfound404.component';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'home',title:'Home Page',component:HomeComponent},
    {path:'about',title:'About Page',component:AboutComponent},
    {path:'portfolio',title:'Portfolio Page',component:PortfolioComponent},
    {path:'contact',title:'Contact Page',component:ContactComponent},
    {path:'**',title:'404',component:Notfound404Component},
];
