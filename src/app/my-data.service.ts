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

  constructor(private http: Http) { }

  getCourses() {
    return this.http.get('http://192.168.0.13:3000/v1/courses').map(
      (response) => response.json()
    )
  }
}
