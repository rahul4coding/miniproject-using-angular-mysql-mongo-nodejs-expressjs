import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";


import { loginService } from "./login.service";
import { dashboardService } from "./dashboard.service";

import { dashboardComponent } from "./component/dashboard.component";
import { IndexComponent } from "./component/index.component";
import { loginComponent } from "./component/login.component";
import { aboutComponent } from "./component/about.component";
import { contactComponent } from "./component/contact.component";
import { portfolioComponent } from "./component/portfolio.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    dashboardComponent,
    loginComponent,
    aboutComponent,
    contactComponent,
    portfolioComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [loginService, dashboardService],
  bootstrap: [IndexComponent]
})
export class AppModule {}
