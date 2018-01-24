import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class CoursesService {

  constructor(private http: Http, private route: ActivatedRoute) { }

  /*** All Courses ***/

  getAllCourses(): Observable<any[]> {
    return this.fetchData('http://192.168.0.13:3000/v1/courses/');
  }

  getCourseDetails(): Observable<any[]> {
    return this.fetchData(this.getJson());
  }
  
  getJson(): string {
    let paramId = this.route.snapshot.queryParams["id"];
    return 'http://192.168.0.13:3000/v1/courses/' + paramId;
  }  

  fetchData(jsonUrl: string) {
    return this.http.get(jsonUrl).map(
      (response) => response.json()
    )
  }

}
