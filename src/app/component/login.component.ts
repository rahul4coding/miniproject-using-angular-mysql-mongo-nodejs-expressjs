import { Component } from "@angular/core";
import {loginService} from "../login.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
    templateUrl: "./login.component.html"
})

export class loginComponent{
    private loginSubscribe:any;

    constructor(private _service:loginService, private _router:Router){}

    public login(obj:any):any{
        this.loginSubscribe = this._service.authenticate(obj).subscribe(this._successCallBack, this._errorCallBack);
    };

    public _successCallBack =(res):any=>{
        if(res.login == "success"){
            window.localStorage.setItem("login_details", JSON.stringify(res));
            this._router.navigate(['/dashboard']);
        }else{
            alert("Invalid Details");
        }

    }

    public _errorCallBack =(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("Client side error");
        }else{
            console.log("server side error");
        }
    }
    
    ngOnDestroy(){
        this.loginSubscribe.unsubscribe();
        
    }
};

