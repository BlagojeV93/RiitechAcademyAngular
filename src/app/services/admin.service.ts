import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class AdminService {

  constructor(private http: Http, private route: ActivatedRoute) { }

  getAdminCourses(): Observable<any[]> {
    return this.fetchData('http://192.168.0.13:3000/v1/courses/');
  }

  getAdminUsers(): Observable<any[]> {
    return this.fetchData('http://192.168.0.13:3000/v1/users/');
  }

  editCourse(name, code, image, description) {
    
  }

  fetchData(jsonUrl: string) {
    return this.http.get(jsonUrl).map(res => res.json());
  }
}
