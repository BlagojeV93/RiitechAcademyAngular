import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http  } from '@angular/http';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService){}
    displaytoken:string;
  ngOnInit() {
    this.displaytoken=this.authService.AccesToken;
  }
}
