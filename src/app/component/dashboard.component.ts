import { Component } from "@angular/core";
import {dashboardService} from  "../dashboard.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
    templateUrl: "./dashboard.component.html"
})

export class dashboardComponent{
    private logoutSubscribe:any;

    constructor(private _service:dashboardService, private _router:Router){}

    ngOnInit(){
        // this.logoutSubscribe = this._service.logoutData().subscribe(this._successCallBack, this._errorCallBack);
        
        
    }


    public logout():any{
        this.logoutSubscribe = this._service.logoutData().subscribe(this._successCallBack, this._errorCallBack);
    };

    public _successCallBack = (res):any=>{
        if(res.token=="deleted successfully"){
            window.localStorage.removeItem("login_details");
            this._router.navigate(["/"]);
        }else{
            alert("Logout terminated unsuccessfully");
        }
    };

    public _errorCallBack=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("Clinet side error");
        }else{
            console.log("server side error");
        }
    };

    ngOnDestroy(){
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.

        this.logoutSubscribe.unsubscribe();
        
    };

};

