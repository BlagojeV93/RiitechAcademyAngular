import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class TeacherProfileService {

  constructor(private http: Http, private route: ActivatedRoute) {}

  getTeacher(): Observable<any[]> {
    return this.fetchData(this.getJson());
  }
  
  getJson(): string {
    let paramId = this.route.snapshot.queryParams["id"];
    return 'http://192.168.0.13:3000/v1/users/' + paramId;
  }  

  fetchData(jsonUrl: string) {
    return this.http.get(jsonUrl).map(res => res.json());
  }
}
