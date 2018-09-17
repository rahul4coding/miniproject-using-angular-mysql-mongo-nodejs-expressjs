import { Component } from "@angular/core";
import { dashboardService } from "../dashboard.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  templateUrl: "./contact.component.html"
})
export class contactComponent {
  private result: any;
  private contactSubscribe;
  constructor(private _service: dashboardService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.contactSubscribe = this._service
      .contactData()
      .subscribe(this._successCallBack, this._errorCallBack);
  }

  public _successCallBack = (res): any => {
    this.result = res;
  };

  public _errorCallBack = (err: HttpErrorResponse): any => {
    if (err.error instanceof Error) {
      console.log("client side error");
    } else {
      console.log("server side error");
    }
  };

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.contactSubscribe.unsubscribe();
  }
}
