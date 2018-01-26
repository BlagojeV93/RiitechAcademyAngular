import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
username = "";
password = "";

login() {
    console.log("radi");
    let url = 'http://192.168.0.13:3000/v1/auth/login';
    this.http.post(url, {username:this.username,password:this.password}).subscribe(res => console.log(res.json()));
}
test() {
 
    let url = 'http://192.168.0.13:3000/getUser';
    this.http.get(url).subscribe(res => console.log(res.json()))
}
  constructor(private http: Http) { }

  ngOnInit() {
    
  }

}
