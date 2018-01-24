import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  username = "";
  password = "";
  email = "";
  
  signup() {
    console.log("radi");
    let url = 'http://192.168.0.13:3000/v1/auth/register';
    this.http.post(url, {username:this.username,password:this.password,email:this.email}).subscribe(res => console.log(res.json()));
}

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
