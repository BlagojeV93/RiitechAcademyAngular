import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

import { Course } from './shared/courses.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MyDataService {
  private courses: Course[] = []; 
  
  constructor(private http: Http) { }

  getCourses(): Observable<Course[]> {
    return this.fetchData();
  }

  fetchData() {
    return this.http.get('https://api.myjson.com/bins/1gzowx').map(
      (response) => response.json()
    )
  }
}
