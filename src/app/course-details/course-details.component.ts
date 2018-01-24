import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails = {};
  jsonUrl = '';
  students = [];
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getJson();
    this.getCourseDetails();
  }

  getJson() {
    let paramId = this.route.snapshot.queryParams["id"];
    this.jsonUrl = 'http://192.168.0.13:3000/v1/courses/' + paramId;
    console.log('Ovo je url: '+ this.jsonUrl);
  }

    getCourseDetails() {
      return this.http.get(this.jsonUrl).map(
        (response) => response.json()
      ).subscribe(
        (data) => { this.courseDetails = data; console.log(this.courseDetails); this.students = this.courseDetails.students; console.log(this.students) }
      )
    } 
}
