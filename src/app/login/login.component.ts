import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';
import { TokenParams } from '../../Classes/TokenParams';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
username :string;
password : string;
tokenParam: TokenParams;
constructor(private http: Http, private router:Router, private authService: AuthService) { }

login() {
      console.log("radi");
    //let url = 'http://192.168.0.13:3000/v1/auth/login';
    //this.http.post(url, {username:this.username,password:this.password}).subscribe(res => console.log(res.json()));
    this.authService.login(this.username, this.password)
    .subscribe(
      data => {
        this.tokenParam =  data;
        this.authService.AccesToken=this.tokenParam.token;
        this.router.navigate(['courses']);
        console.log(this.tokenParam);
      }
    );
  }
test() {
 
    let url = 'http://192.168.0.13:3000/getUser';
    this.http.get(url).subscribe(res => console.log(res.json()))
}

  ngOnInit() {
    
  }


}
