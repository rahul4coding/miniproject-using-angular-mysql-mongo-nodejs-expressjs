import {Routes} from '@angular/router';
import { loginComponent } from '../component/login.component';
import { dashboardComponent } from '../component/dashboard.component';
import {aboutComponent} from '../component/about.component';
import {contactComponent} from '../component/contact.component';
import {portfolioComponent} from '../component/portfolio.component';
import {NotFoundComponent} from '../component/not-found/not-found.component';

export const appRoutes:Routes = [
    {path: "", component:loginComponent},
    {path: "dashboard", component:dashboardComponent,
    
    children:[
    {path: "about", component:aboutComponent},
    {path: "contact", component:contactComponent},
    {path: "portfolio", component:portfolioComponent}
    ]},
    {path: "**", component:NotFoundComponent}
    

]