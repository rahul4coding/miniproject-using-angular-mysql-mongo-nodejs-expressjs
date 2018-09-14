import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()

export class dashboardService{
    constructor(private _http:HttpClient){}

    // return this._http.post("")

    public aboutData():any{
        var login_details = window.localStorage.getItem("login_details");
        var obj = JSON.parse(login_details);
        return  this._http.post("http://localhost:8082/about", {'token':obj.token});
    }

    public contactData():any{
        var login_details = window.localStorage.getItem("login_details");
        var obj = JSON.parse(login_details);
        return  this._http.post("http://localhost:8082/contact", {'token':obj.token});
    }

    public portfolioData():any{
        var login_details = window.localStorage.getItem("login_details");
        var obj = JSON.parse(login_details);
        return  this._http.post("http://localhost:8082/portfolio", {'token':obj.token});
    }

    public logoutData():any{
        var login_details = window.localStorage.getItem("login_details");
        var obj = JSON.parse(login_details);
        return  this._http.post("http://localhost:8082/logout", {'token':obj.token});
    }
}