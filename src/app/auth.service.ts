import {Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, Http, HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenParams  } from '../Classes/TokenParams';


@Injectable()
    export class AuthService  {
     AccesToken: string= "";
     constructor(private http:Http) {}

     private TokenAPI= "http://192.168.0.28:3000/v1/auth/login";

            login(username: string, password:string) : Observable<TokenParams> {
                var headersForTokenAPI = new Headers ({"Content-Type": "application/x-www-form-urlencoded"});

                var data= "username=" + username + "&password=" + password;      
                console.log(data); 
                return this.http.post(this.TokenAPI, data , {headers: headersForTokenAPI})
                .map(res=>res.json());
            }
    
    }
