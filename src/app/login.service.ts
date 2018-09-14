import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class loginService{
    constructor(private _http:HttpClient){}

    public authenticate(obj:any):any{
        return this._http.post("http://localhost:8082/login",obj);

    };
};
