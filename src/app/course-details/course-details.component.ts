import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails = {};
  constructor(private coursesService: CoursesService, private http: Http) { }

  ngOnInit() {
    this.getCourseDetails();
  }

  getCourseDetails() {
    this.coursesService.getCourseDetails()
      .subscribe(course => this.courseDetails = course);
  }
}
