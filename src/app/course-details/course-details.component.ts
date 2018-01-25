import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails = [];
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourseDetails();
  }

  getCourseDetails(): void {
    this.coursesService.getCourseDetails()
      .subscribe(course => this.courseDetails = course);
  }
}
